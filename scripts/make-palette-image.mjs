/**
 * Erzeugt ein Bild der Farbpalette.
 *
 * Ausfuehren mit:  node scripts/make-palette-image.mjs
 * Ergebnis:        public/media/farbpalette.png (1600 x 1120)
 *
 * Das Bild eignet sich als Referenz fuer Bildgeneratoren und als
 * Anlage fuer Druckereien oder Fahrzeugbeschriftung.
 */
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const gruppen = [
  {
    titel: 'Waldgrün · Leitfarbe',
    hinweis: 'Flächen, Aussagen, Schaltflächen',
    farben: [
      ['#040f09', 'forest 950'],
      ['#082015', 'forest 900'],
      ['#0d2e20', 'forest 800'],
      ['#12452f', 'forest 700'],
      ['#1a6142', 'forest 600'],
      ['#248257', 'forest 500'],
      ['#3a9e6c', 'forest 400'],
      ['#74c396', 'forest 300'],
      ['#b2e0c6', 'forest 200'],
      ['#dcf0e4', 'forest 100'],
    ],
  },
  {
    titel: 'Sandstein · Grundfläche',
    hinweis: 'Hintergrund, Karten, Trennlinien',
    farben: [
      ['#fcfbf8', 'stone 50'],
      ['#f5f2ea', 'stone 100'],
      ['#ebe6da', 'stone 200'],
      ['#ddd6c6', 'stone 300'],
      ['#c4bba7', 'stone 400'],
    ],
  },
  {
    titel: 'Ton · Akzent',
    hinweis: 'Naturstein, Wärme, sparsam einsetzen',
    farben: [
      ['#9c5f34', 'clay 600'],
      ['#c07b45', 'clay 500'],
      ['#e3b78f', 'clay 300'],
      ['#f6e8dc', 'clay 100'],
    ],
  },
  {
    titel: 'Schrift',
    hinweis: 'Von Überschrift bis Hilfstext',
    farben: [
      ['#121c17', 'ink 900'],
      ['#202d26', 'ink 800'],
      ['#33423a', 'ink 700'],
      ['#4b5a51', 'ink 600'],
      ['#67756c', 'ink 500'],
    ],
  },
];

/** Helligkeit einer Farbe, entscheidet über die Textfarbe im Feld */
function istHell(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 140;
}

const B = 1600;
const rand = 72;
const spaltenBreite = B - rand * 2;
const feldHoehe = 150;
const kopfHoehe = 190;
const gruppenAbstand = 96;

let y = kopfHoehe;
const teile = [];

for (const gruppe of gruppen) {
  teile.push(`
    <text x="${rand}" y="${y - 26}" font-family="Segoe UI, Arial, sans-serif" font-size="26" font-weight="700" fill="#121c17" letter-spacing="-0.4">${gruppe.titel}</text>
    <text x="${B - rand}" y="${y - 26}" text-anchor="end" font-family="Segoe UI, Arial, sans-serif" font-size="19" fill="#67756c">${gruppe.hinweis}</text>
  `);

  const n = gruppe.farben.length;
  const luecke = 10;
  const w = (spaltenBreite - luecke * (n - 1)) / n;

  gruppe.farben.forEach(([hex, name], i) => {
    const x = rand + i * (w + luecke);
    const fg = istHell(hex) ? '#121c17' : '#ffffff';
    const strich = istHell(hex) ? ' stroke="#ddd6c6" stroke-width="1"' : '';
    teile.push(`
      <rect x="${x}" y="${y}" width="${w}" height="${feldHoehe}" rx="18" fill="${hex}"${strich}/>
      <text x="${x + 18}" y="${y + feldHoehe - 46}" font-family="Segoe UI, Arial, sans-serif" font-size="20" font-weight="700" fill="${fg}">${hex.toUpperCase()}</text>
      <text x="${x + 18}" y="${y + feldHoehe - 22}" font-family="Segoe UI, Arial, sans-serif" font-size="16" fill="${fg}" opacity="0.72">${name}</text>
    `);
  });

  y += feldHoehe + gruppenAbstand;
}

const H = y - gruppenAbstand + rand;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${B} ${H}" width="${B}" height="${H}">
  <rect width="${B}" height="${H}" fill="#fcfbf8"/>
  <g transform="translate(${rand} 62)">
    <rect width="44" height="44" rx="14" fill="#12452f"/>
    <path d="M34 10c0 11.2-7.6 19-17.6 20.1V35a2.4 2.4 0 1 1-4.8 0v-5.1C12.6 18.9 20.2 11.1 30.2 10c1.4-.1 2.7-.4 3.8-1Z" transform="translate(1 -1) scale(0.62) translate(6 6)" fill="#74c396"/>
  </g>
  <text x="${rand + 62}" y="${88}" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="700" fill="#121c17" letter-spacing="-0.8">K &amp; S Landschaftsbau</text>
  <text x="${rand + 62}" y="${116}" font-family="Segoe UI, Arial, sans-serif" font-size="17" font-weight="600" fill="#4b5a51" letter-spacing="2.6">FARBPALETTE · GARTEN- UND LANDSCHAFTSBAU</text>
  <line x1="${rand}" y1="${kopfHoehe - 44}" x2="${B - rand}" y2="${kopfHoehe - 44}" stroke="#ebe6da" stroke-width="1"/>
  ${teile.join('\n')}
</svg>`;

const out = path.join(process.cwd(), 'public', 'media', 'farbpalette.png');
const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, png);
console.log(`Farbpalette geschrieben: ${out} (${B} x ${H}, ${Math.round(png.length / 1024)} kB)`);
