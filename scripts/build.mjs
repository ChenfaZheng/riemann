import { cp, lstat, mkdir, realpath, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(resolve(fileURLToPath(new URL('..', import.meta.url))));
const output = resolve(root, 'dist');
// Only the dedicated, resolved output directory may be cleaned. Never follow a
// pre-existing link, and never include the ignored downloaded proof archive.
if (dirname(output) !== root || output === root) throw new Error('Unsafe output directory');
let previous;
try { previous = await lstat(output); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
if (previous?.isSymbolicLink()) throw new Error('Refusing to replace a linked dist directory');
if (previous) await rm(output, { recursive: true });
await mkdir(output);
for (const name of ['index.html', 'technical.html', 'sources.html', 'assets', 'references']) {
  await cp(resolve(root, name), resolve(output, name), { recursive: true });
}
console.log('Local static output prepared in dist/. Nothing was published.');
