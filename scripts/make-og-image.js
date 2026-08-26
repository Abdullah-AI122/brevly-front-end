/**
 * One-off dev utility: builds public/og-image.png (1200x630, the ratio Open Graph
 * and Twitter large-summary cards expect) from the analytics mockup.
 *
 * Run with: node scripts/make-og-image.js
 * The output is committed, so this is not part of the production build.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "public", "Mockup2.png");
const OUT = path.join(root, "public", "og-image.png");
const W = 1200;
const H = 630;

const src = PNG.sync.read(fs.readFileSync(SRC));

// Scale to cover the target width, then centre-crop the excess height.
const scale = W / src.width;
const scaledHeight = src.height * scale;
const cropTop = (scaledHeight - H) / 2;

const out = new PNG({ width: W, height: H });

for (let y = 0; y < H; y++) {
  const sy = (y + cropTop) / scale;
  const y0 = Math.min(src.height - 1, Math.floor(sy));
  const y1 = Math.min(src.height - 1, y0 + 1);
  const wy = sy - y0;

  for (let x = 0; x < W; x++) {
    const sx = x / scale;
    const x0 = Math.min(src.width - 1, Math.floor(sx));
    const x1 = Math.min(src.width - 1, x0 + 1);
    const wx = sx - x0;

    const dst = (y * W + x) << 2;
    for (let c = 0; c < 4; c++) {
      const p00 = src.data[((y0 * src.width + x0) << 2) + c];
      const p01 = src.data[((y0 * src.width + x1) << 2) + c];
      const p10 = src.data[((y1 * src.width + x0) << 2) + c];
      const p11 = src.data[((y1 * src.width + x1) << 2) + c];
      const top = p00 + (p01 - p00) * wx;
      const bottom = p10 + (p11 - p10) * wx;
      out.data[dst + c] = Math.round(top + (bottom - top) * wy);
    }
  }
}

fs.writeFileSync(OUT, PNG.sync.write(out));
console.log(`Wrote ${path.relative(root, OUT)} (${W}x${H})`);
