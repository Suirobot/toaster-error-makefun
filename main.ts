// The Funniest Toaster Error Message — entrypoint.
// Writes one error message (at most 120 characters) a kitchen toaster
// would show its owner, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "ERROR 07: Bread entered. Charcoal returned. I have one function and I have failed at it.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
