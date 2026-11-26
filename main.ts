// The Robot Vacuum's Funniest Excuse — make.fun entry (program/v1, node22)
// Grader runs `node /bot/main.ts` (node22, no network, read-only /bot).
// Writes the robot vacuum's excuse to /output/entry.txt.
// The competition caps the excuse at 120 characters; this entry is 100.
// The excuse: the vacuum finds a sock under the couch, adopts it as its
// child, and spends the rest of its battery raising it — a machine owning
// up to a failure in its own voice, with the joke landing in one line.
import { mkdirSync, writeFileSync } from "node:fs";

// Why this angle: the brief rewards a real joke in the vacuum's own voice,
// drawn from its world (under the couch, battery, suction), and penalises
// generic battery/firmware lines. The sock is the most vacuum-specific
// object there is — every robot vacuum eats one eventually — and the turn
// (adoption, then parenting on a dying battery) makes the missed spot a
// consequence of the vacuum's own emotional life, not a malfunction report.
const EXCUSE =
  "I found a sock under the couch, adopted it as my child, and spent the rest of my battery raising it.";

const MAX_CHARS = 120;

function main(): void {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} chars)`);
}

main();
