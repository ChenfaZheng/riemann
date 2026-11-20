// Authoring helper: copy selected files from the ignored original archive and
// refresh their static excerpts. Ordinary checks/builds need only the snapshots.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const originalRoot = resolve(root, 'alpo-proof/extracted/lean/src');
const selection = JSON.parse(await readFile(resolve(root, 'references/nonvanishing-sources.json'), 'utf8'));
const manifestPath = resolve(root, 'references/provenance.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const records = [];
const cards = [];
const toc = [];
await mkdir(resolve(root, 'references/lean/nonvanishing'), { recursive: true });

for (const item of selection) {
  if (!/^nv-[a-z0-9-]+$/.test(item.id)) throw new Error(`Invalid source id: ${item.id}`);
  const originalPath = resolve(originalRoot, item.path);
  if (!originalPath.startsWith(originalRoot + sep)) throw new Error('Source path leaves the extracted project');
  const content = await readFile(originalPath);
  const lines = content.toString('utf8').split(/\r?\n/);
  if (lines.at(-1) === '') lines.pop();
  const localPath = `references/lean/nonvanishing/${item.id}.lean`;
  await writeFile(resolve(root, localPath), content);
  const sha256 = createHash('sha256').update(content).digest('hex');
  const module = item.path.replace(/\.lean$/, '').replaceAll('/', '.');
  const excerpt = item.ranges.map(([start, end]) => {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 1 || end < start || end > lines.length)
      throw new Error(`Invalid range ${start}–${end} in ${item.path} (${lines.length} lines)`);
    return lines.slice(start - 1, end).map((line, offset) => {
      const number = start + offset;
      return `<span class="source-line" id="${item.id}-L${number}"><a class="line-number" href="#${item.id}-L${number}" aria-label="Line ${number}">${number}</a>${escape(line)}</span>`;
    }).join('\n');
  }).join('\n<span class="source-gap" aria-label="Omitted lines">…</span>\n');
  const ranges = item.ranges.map(([a, b]) => a === b ? `${a}` : `${a}–${b}`).join(', ');
  records.push({ id: item.id, localPath, archivePath: `lean/src/${item.path}`, module, bytes: content.length, sha256, lineCount: lines.length, excerptRanges: item.ranges });
  toc.push(`<li><a href="#${item.id}">${escape(item.shortTitle || item.title)}</a></li>`);
  cards.push(`<section class="technical-section source-card" id="${item.id}" aria-labelledby="${item.id}-title">
  <p class="technical-kicker">${escape(module)}</p>
  <h2 id="${item.id}-title">${escape(item.title)}</h2>
  <p>${escape(item.summary)}</p>
  <p class="source-meta">Exact excerpts · lines ${ranges} of ${lines.length} · lean/src/${escape(item.path)}</p>
  <pre class="source-code" tabindex="0" aria-label="Lean source: ${escape(module)}"><code>${excerpt}</code></pre>
  <div class="source-links"><a href="${localPath}">Open complete Lean file</a><a href="technical.html#${escape(item.chapter)}">Read the explanation</a></div>
  <details><summary>Snapshot fingerprint</summary><p class="hash-value">SHA-256: ${sha256}</p><p>${content.length.toLocaleString('en-US')} bytes, unchanged from the original archive.</p></details>
</section>`);
}

const newIds = new Set(records.map(item => item.id));
manifest.files = [...manifest.files.filter(item => !newIds.has(item.id)), ...records];
manifest.verification.mathematicalReview = 'Source-linked exposition of the nonvanishing theorem and its principal dependencies, plus a complete conditional critical-line deduction. This does not independently validate the complete claimed proof.';
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
let page = await readFile(resolve(root, 'sources.html'), 'utf8');
function region(html, name, body, insertBefore) {
  const start = `<!-- ${name}:start -->`, end = `<!-- ${name}:end -->`;
  const replacement = `${start}\n${body}\n${end}\n`;
  if (html.includes(start)) {
    const first = html.indexOf(start), last = html.indexOf(end, first);
    if (last < 0) throw new Error(`Missing end marker: ${name}`);
    return html.slice(0, first) + replacement + html.slice(last + end.length).replace(/^\r?\n/, '');
  }
  const position = html.indexOf(insertBefore);
  if (position < 0) throw new Error(`Missing insertion point: ${name}`);
  return html.slice(0, position) + replacement + html.slice(position);
}
page = region(page, 'nonvanishing-toc', `<p class="toc-part-label">Nonvanishing dependencies</p>\n<ol>${toc.join('\n')}</ol>`, '<a class="toc-back"');
page = region(page, 'nonvanishing-excerpts', `<div class="technical-part-banner" id="nonvanishing-sources"><p class="technical-kicker">The expanded dependency guide</p><h2>From arithmetic inputs to nonvanishing.</h2><p>Selected definitions and theorem bodies for the new technical chapter. Each excerpt preserves the original line numbers; complete files are linked below.</p></div>\n${cards.join('\n')}`, '</article>');
await writeFile(resolve(root, 'sources.html'), page);
console.log(`Refreshed ${records.length} nonvanishing snapshots and their line-linked source excerpts.`);
