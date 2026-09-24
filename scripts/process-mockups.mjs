// Turns Figma "Device Mockups" exports (2x PNG, 1076x1960, flat grey
// background with drop shadow) into transparent WebP phone frames.
//
//   node scripts/process-mockups.mjs <input-dir> [output-dir]
//
// Geometry comes from the Figma frames: each mockup frame is 428x876 with the
// bezel at (4,4) 420x868. The 2x export pads the frame by 110px horizontally
// and 104px vertically for the shadow.
import { readdirSync, mkdirSync } from 'node:fs';
import { join, basename, extname } from 'node:path';
import sharp from 'sharp';

const [, , inputDir, outputDir = 'public/images/mockups'] = process.argv;
if (!inputDir) {
  console.error(
    'usage: node scripts/process-mockups.mjs <input-dir> [output-dir]',
  );
  process.exit(1);
}
mkdirSync(outputDir, { recursive: true });

const SCALE = 2;
const PAD_X = 110;
const PAD_Y = 104;
const BEZEL = { x: 4, y: 4, w: 420, h: 868, radius: 58 };
const region = {
  left: PAD_X + BEZEL.x * SCALE,
  top: PAD_Y + BEZEL.y * SCALE,
  width: BEZEL.w * SCALE,
  height: BEZEL.h * SCALE,
};
const mask = Buffer.from(
  `<svg width="${region.width}" height="${region.height}" xmlns="http://www.w3.org/2000/svg"><rect width="${region.width}" height="${region.height}" rx="${BEZEL.radius * SCALE}" ry="${BEZEL.radius * SCALE}" fill="#fff"/></svg>`,
);

const files = readdirSync(inputDir).filter(
  (f) => extname(f).toLowerCase() === '.png',
);
for (const file of files) {
  const name = basename(file, '.png');
  const out = join(outputDir, `${name}.webp`);
  const image = sharp(join(inputDir, file));
  const meta = await image.metadata();
  if (meta.width !== 1076 || meta.height !== 1960) {
    console.warn(`skip ${file}: unexpected size ${meta.width}x${meta.height}`);
    continue;
  }
  await image
    .extract(region)
    .composite([{ input: mask, blend: 'dest-in' }])
    .webp({ quality: 84, alphaQuality: 90, effort: 5 })
    .toFile(out);
  console.log(`${name}.webp`);
}
console.log(`done: ${files.length} files -> ${outputDir}`);
