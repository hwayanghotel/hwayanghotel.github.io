import sharp from 'sharp';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sources = JSON.parse(await readFile(path.join(root, 'src/data/asset-sources.json'), 'utf8'));
await mkdir('public/images', { recursive: true });
const images = {};
for (const [name, source] of Object.entries(sources)) {
  const input = path.join(root, source.path);
  const metadata = await sharp(input).metadata();
  const width = metadata.width;
  const height = metadata.height;
  const maxWidth = ['valley-landscape', 'creek-canopy', 'forest-path', 'dining-table'].includes(
    name,
  )
    ? 2400
    : 1600;
  const widths = [
    ...new Set(
      [400, 740, 1100, 1600, 2000, 2400, width].filter((w) => w <= Math.min(width, maxWidth)),
    ),
  ].sort((a, b) => a - b);
  for (const w of widths) {
    const output = `public/images/${name}-${w}.webp`;
    const exists = await stat(output).catch(() => null);
    const original = await stat(input);
    if (!exists || exists.mtimeMs < original.mtimeMs) {
      await sharp(input)
        .rotate()
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 83, effort: 5 })
        .toFile(output);
    }
  }
  images[name] = { width, height, widths, alt: source.alt };
}
await writeFile('src/data/images.generated.json', JSON.stringify(images, null, 2) + '\n');
// The OG image is a size derivative of the real creek photograph, with no fabricated scene.
await sharp(sources['valley-landscape'].path)
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .jpeg({ quality: 85 })
  .toFile('public/og.jpg');
console.log(
  `Prepared ${Object.keys(images).length} photographs (WebP, original dimensions respected).`,
);
