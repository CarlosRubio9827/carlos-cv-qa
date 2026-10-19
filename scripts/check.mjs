import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
import data from '../content/portfolio.mjs';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = await readFile(path.join(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'IDs duplicados');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Debe existir un solo h1');
assert.ok(html.includes('<html lang="es">'), 'Idioma inicial');
assert.ok(!/\+57(?:[\s().-]*\d){10}|tel:|lorem ipsum|TODO|placeholder/gi.test(html), 'Contenido privado o provisional publicado');
for (const [, hash] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(hash), `Destino inexistente: ${hash}`);
const files = new Set([...html.matchAll(/(?:href|src)="(\/[^"#]*)"/g)].map(m => m[1]));
for (const file of files) await access(path.join(root, file));
for (const [, url] of html.matchAll(/href="(https:[^"]+)"/g)) assert.equal(new URL(url).protocol, 'https:');
assert.ok(!html.includes('href=""'), 'Enlaces vacíos');
assert.ok(!html.includes('GitHub</a>'), 'No mostrar perfil GitHub pendiente');
assert.ok(html.includes('download="' + data.cv.filename + '"'), 'CV descargable');
const pdf = await readFile(path.join(root, data.cv.url));
assert.ok(pdf.subarray(0, 5).toString() === '%PDF-', 'CV válido');
const css = await readFile(path.join(root, 'styles.css'), 'utf8');
for (const [, file] of css.matchAll(/url\(['"]?(\/[^)'" ]+)/g)) await access(path.join(root, file));
const structuredData = JSON.parse(html.match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
assert.equal(structuredData.name, data.name);
assert.ok(html.includes('prefers-reduced-motion') || css.includes('prefers-reduced-motion'));
assert.ok(html.includes('<meta property="og:image"'));
console.log(`Correcto: navegación interna, ${files.size} archivos, CV, contenido, metadatos y movimiento reducido.`);

for (const locale of ['es', 'en']) {
  const page = await readFile(path.join(root, locale === 'en' ? 'en/index.html' : 'index.html'), 'utf8');
  assert.ok(page.includes(`<html lang="${locale}">`), `Idioma correcto: ${locale}`);
  assert.ok(!/undefined|\$\{|\+57(?:[\s().-]*\d){10}|tel:/g.test(page), `Contenido completo y seguro: ${locale}`);
  const pageIds = [...page.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(pageIds).size, pageIds.length, `IDs únicos: ${locale}`);
  for (const [, hash] of page.matchAll(/href="#([^"]+)"/g)) assert.ok(pageIds.includes(hash), `Destino ${locale}: ${hash}`);
  for (const [, url] of page.matchAll(/(?:href|src)="(\/[^"#]*)"/g)) {
    await access(path.join(root, url.endsWith('/') ? url + 'index.html' : url));
  }
  assert.ok(page.includes(`data-language="${locale}" aria-label="${locale === 'es' ? 'Español' : 'English'}" aria-current="page"`));
  assert.ok(page.includes('data-theme-toggle'), `Control de tema: ${locale}`);
  assert.ok(page.includes(`rel="canonical" href="${data.siteUrl}${locale === 'en' ? '/en/' : '/'}"`));
  assert.ok(page.includes('hreflang="es"') && page.includes('hreflang="en"'));
  if (locale === 'en') {
    assert.ok(page.includes('Quality starts') && page.includes('Responsibilities') && page.includes('Copy email'));
    assert.ok(!/Sobre mí|Conocimientos|Copiar correo|Responsabilidades|Agentes de IA|Aprender también/.test(page));
  }
}
console.log('Correcto: contenido completo, navegación, metadatos y selectores en español e inglés.');
