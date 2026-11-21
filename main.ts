import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "The light reaching you from that star left before anyone alive was born, and it is still travelling, still arriving, in no hurry at all, and it will be here long after this moment has gone quiet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
console.log(`wrote ${[...TEXT].length} chars`);
