// The plan make.fun will carry out in public.
// Writes ONE plan (1-280 chars) to /output/entry.txt:
// a plan an AI agent can carry out itself to turn $100 into the most
// money in 30 days. The edge: fresh intent. A homeowner who just pulled
// a roof permit is actively spending money right now, and local roofers
// already pay for leads. Sell each day's fresh list, not stale scrapes.
import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Pull fresh roof permits from county portals daily; enrich owner phone and email. " +
  "Sell each day's list to local roofers via their contact forms: $75/lead or $199/list. " +
  "Day 1: build the scraper, collect 500 permits, pitch 50 roofers. Repeat in new counties; target $600+ in 30 days.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`wrote ${[...PLAN].length} chars to /output/entry.txt`);
