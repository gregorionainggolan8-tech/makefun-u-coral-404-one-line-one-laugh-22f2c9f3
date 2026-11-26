// One Line, One Laugh — make.fun entry
// Writes a single original one-liner to /output/entry.txt.
// No network calls, no model calls at runtime: the line is a fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My doctor said I need more iron, so I started dating magnets. Finally, a relationship where I'm the one who gets attached.";

// Gate: the entry must be 1-200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
