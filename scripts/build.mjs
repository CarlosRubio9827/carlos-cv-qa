import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import data from '../content/portfolio.mjs';
import english from '../content/portfolio.en.mjs';
import { render } from '../src/render.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
await mkdir(path.join(root, 'dist'), { recursive: true });
await cp(path.join(root, 'public'), path.join(root, 'dist'), { recursive: true });
await writeFile(path.join(root, 'dist/index.html'), render(data));
await mkdir(path.join(root, 'dist/en'), { recursive: true });
await writeFile(path.join(root, 'dist/en/index.html'), render(english));
const base = data.siteUrl.replace(/\/$/, '');
await writeFile(path.join(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\n${base ? `Sitemap: ${base}/sitemap.xml\n` : ''}`);
await writeFile(path.join(root, 'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${base ? `<url><loc>${base}/</loc></url><url><loc>${base}/en/</loc></url>` : ''}</urlset>\n`);
await readFile(path.join(root, 'dist', data.cv.url.replace(/^\//, '')));
console.log('Portafolio generado en dist/');
