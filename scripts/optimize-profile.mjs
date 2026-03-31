/**
 * Resize & export profile photo to src/assets/profile.png (400×400, web-optimized).
 *
 * Usage:
 *   npm run optimize-profile -- path/to/your-photo.jpg
 *   npm run optimize-profile   (uses input/profile.jpg if present)
 */
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outPath = join(root, 'src/assets/profile.png')
const defaultInput = join(root, 'input/profile.jpg')
const fallbackAssetJpg = join(root, 'src/assets/photo.jpg')

const inputPath =
  process.argv[2] ||
  (existsSync(defaultInput) ? defaultInput : existsSync(fallbackAssetJpg) ? fallbackAssetJpg : defaultInput)

const SIZE = 400

async function main() {
  if (!existsSync(inputPath)) {
    console.warn(`[optimize-profile] No file at: ${inputPath}`)
    console.warn('  Drop your JPG as input/profile.jpg or pass a path: npm run optimize-profile -- ./photo.jpg')
    console.warn('  Writing a neutral placeholder PNG so the app builds.')
    await sharp({
      create: {
        width: SIZE,
        height: SIZE,
        channels: 3,
        background: { r: 39, g: 39, b: 42 },
      },
    })
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(outPath)
    console.log(`[optimize-profile] Wrote placeholder → ${outPath}`)
    return
  }

  // Anchor crop to TOP so forehead / full face stay in frame (portrait photos;
  // "attention" often centers on eyes and crops the top of the head).
  const pipeline = sharp(inputPath).rotate().resize(SIZE, SIZE, {
    fit: 'cover',
    position: 'north',
  })

  await pipeline
    .png({
      compressionLevel: 9,
      effort: 10,
      adaptiveFiltering: true,
    })
    .toFile(outPath)

  const meta = await sharp(outPath).metadata()
  const stats = await import('node:fs/promises').then((fs) => fs.stat(outPath))
  console.log(`[optimize-profile] Wrote ${outPath}`)
  console.log(`  Size: ${meta.width}×${meta.height}, file: ${(stats.size / 1024).toFixed(1)} KB`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
