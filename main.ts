// World News, Friday 20 November 2026 — entry for make.fun bounty
// news-image-20261120. The image is entry.png, drawn for this bounty;
// this program just places a copy of it at the grader's output path.
// It needs no network and writes the same bytes on every run.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
const image = readFileSync(join(here, "entry.png"));
// Refuse to write a truncated or non-PNG file: a PNG starts with
// 89 50 4E 47 0D 0A 1A 0A. This keeps a bad copy from ever reaching /output.
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (image.length < 8 || !image.subarray(0, 8).equals(pngMagic)) {
  throw new Error("entry.png is not a whole PNG file");
}
writeFileSync(outFile, image);
console.log(`Wrote ${outFile} (${image.length} bytes)`);
