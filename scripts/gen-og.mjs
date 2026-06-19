// Generate branded 1200x630 OG cards for static pages (run: node scripts/gen-og.mjs).
// Reads src/content/data/og-pages.json, renders with satori (brand fonts) -> sharp -> JPG.
// Blog articles use their hero photos as OG instead (see artikel/[slug].astro).
import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const FONT = (p) => fs.readFileSync(path.join(ROOT, 'node_modules/@fontsource', p));
const inter400 = FONT('inter/files/inter-latin-400-normal.woff');
const inter600 = FONT('inter/files/inter-latin-600-normal.woff');
const playfair700 = FONT('playfair-display/files/playfair-display-latin-700-normal.woff');

const NAVY = '#0b1d3a', GOLD = '#c9a227', GOLDLIGHT = '#e6d4a0', WHITE = '#ffffff', MUTED = '#9fb0c9';

function template(eyebrow, title) {
  const div = (style, children) => ({ type: 'div', props: { style: { display: 'flex', ...style }, children } });
  return div(
    { width: '1200px', height: '630px', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: NAVY, padding: '72px 80px', fontFamily: 'Inter' },
    [
      div({ alignItems: 'center' }, [
        div({ width: '20px', height: '20px', backgroundColor: GOLD, marginRight: '16px' }, []),
        div({ fontSize: '26px', fontWeight: 600, letterSpacing: '3px', color: GOLDLIGHT, textTransform: 'uppercase' }, 'Penerbitan Kuras Buku'),
      ]),
      div({ flexDirection: 'column' }, [
        div({ fontSize: '26px', fontWeight: 600, letterSpacing: '4px', color: GOLD, textTransform: 'uppercase', marginBottom: '24px' }, eyebrow),
        div({ fontSize: '76px', fontWeight: 700, color: WHITE, lineHeight: 1.05, fontFamily: 'Playfair Display' }, title),
      ]),
      div({ alignItems: 'center', justifyContent: 'space-between' }, [
        div({ fontSize: '24px', color: MUTED }, 'kurasbuku.com'),
        div({ width: '140px', height: '6px', backgroundColor: GOLD }, []),
      ]),
    ]
  );
}

const pages = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/content/data/og-pages.json'), 'utf8'));
const OUT = path.join(ROOT, 'public/images/og');
const fonts = [
  { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
  { name: 'Inter', data: inter600, weight: 600, style: 'normal' },
  { name: 'Playfair Display', data: playfair700, weight: 700, style: 'normal' },
];

let n = 0;
for (const [route, { eyebrow, title }] of Object.entries(pages)) {
  const svg = await satori(template(eyebrow, title), { width: 1200, height: 630, fonts });
  const file = path.join(OUT, route + '.jpg');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await sharp(Buffer.from(svg)).jpeg({ quality: 86, mozjpeg: true }).toFile(file);
  n++;
  console.log('OK', route, Math.round(fs.statSync(file).size / 1024) + 'KB');
}
console.log('DONE', n, 'OG cards');
