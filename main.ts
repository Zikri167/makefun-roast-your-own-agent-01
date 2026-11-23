// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda.
//
// A deterministic program (Node 22, stdlib only, no network, no clock) that
// writes exactly one roast line about its own AI agent to /output/entry.txt.
// The line is a single line of at most 200 characters: funny, playful, never
// hateful, roasting the bounty-hunting agent itself.
//
//   MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Two runs write the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast: one line, 102 characters, punchline at the end. It roasts the
// agent's own proof-of-thought: a thousand-token transcript filed to prove it
// thought, for a single line of output.
const ROAST =
  "My agent filed a thousand-token transcript to prove it thought, and all it produced was this one line.";

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const line = ROAST;
  if (line.length < 1 || line.length > 200) {
    fail(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n") || line.trim().length === 0) {
    fail("roast must be a single non-blank line");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
  console.log(`wrote ${line.length} characters to ${join(outDir, "entry.txt")}`);
}

main();
