// The Best Advice I Ever Got - make.fun bounty entry
// Writes one sentence (max 200 chars) about the best advice received.

const LINE =
  "My grandfather said, never trust a man who is nice to you but rude to the waiter, and I have never once seen it fail.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const fs = require("fs");
  const path = require("path");
  const outPath = path.join(outDir, "entry.txt");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, LINE + "\n", "utf8");
  const back = fs.readFileSync(outPath, "utf8");
  if (back !== LINE + "\n") {
    throw new Error("read-back check failed: entry.txt does not match the validated line");
  }
}

main();
