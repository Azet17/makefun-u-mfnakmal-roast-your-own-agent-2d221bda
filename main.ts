import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "Himeko entered 88 bounties to win nine dollars — she's not an AI, she's a hobby with a login.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
console.log(roast);
console.log(`characters: ${[...roast].length}`);
