import { createServer } from 'node:http';
import { readFile, realpath, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = await realpath(resolve(fileURLToPath(new URL('..', import.meta.url))));
const port = Number(process.env.PORT || 4174);
const base = process.argv.includes('--project-path') ? '/riemann' : '';
const pages = new Set(['index.html', 'technical.html', 'sources.html']);
const folders = ['assets', 'references'];
const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.pdf': 'application/pdf', '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8', '.lean': 'text/plain; charset=utf-8',
};
const server = createServer(async (req, res) => {
  if (!['GET', 'HEAD'].includes(req.method)) {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end();
    return;
  }
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (base && pathname === base) {
      res.writeHead(302, { Location: `${base}/` });
      res.end();
      return;
    }
    if (base && !pathname.startsWith(`${base}/`)) throw new Error('Not found');
    pathname = pathname.slice(base.length).replace(/^\/+/, '') || 'index.html';
    if (pathname.includes('\\') || pathname.includes('\0')
      || pathname.split('/').some(segment => segment.startsWith('.')))
      throw new Error('Not found');
    const folder = folders.find(name => pathname.startsWith(`${name}/`));
    if (!pages.has(pathname) && !folder) throw new Error('Not found');
    const path = await realpath(resolve(root, pathname));
    const allowedRoot = folder ? resolve(root, folder) : root;
    if (!path.startsWith(allowedRoot + sep) || !(await stat(path)).isFile())
      throw new Error('Not found');
    res.writeHead(200, {
      'Content-Type': mime[extname(path).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff',
    });
    res.end(req.method === 'HEAD' ? undefined : await readFile(path));
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(req.method === 'HEAD' ? undefined : 'Not found');
  }
});
server.on('error', error => {
  console.error(`Could not start local preview: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => console.log(`Riemann field guide: http://127.0.0.1:${port}${base}/`));
