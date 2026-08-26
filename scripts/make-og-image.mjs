/**
 * Erzeugt das Vorschaubild fuer soziale Netzwerke (Open Graph) aus einer SVG-Vorlage.
 *
 * Ausfuehren mit:  node scripts/make-og-image.mjs
 * Ergebnis:        public/media/og-standard.png (1200 x 630)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const svgPath = path.join(root, 'scripts', 'og-vorlage.svg');
const outPath = path.join(root, 'public', 'media', 'og-standard.png');

const svg = readFileSync(svgPath);
const png = await sharp(svg, { density: 144 }).resize(1200, 630).png({ quality: 90 }).toBuffer();
writeFileSync(outPath, png);

console.log(`Vorschaubild geschrieben: ${outPath} (${(png.length / 1024).toFixed(0)} kB)`);
