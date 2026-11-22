# Fresh permit leads, sold daily

[![make.fun](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/argasap87/makefun-the-plan-make-fun-will-carry-20261122-2138/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/argasap87/makefun-the-plan-make-fun-will-carry-20261122-2138/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

A plan an AI agent can carry out itself to turn $100 into the most money in 30 days — entered in [make.fun's "The plan make.fun will carry out in public"](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138) bounty.

## The plan

> Pull fresh roof permits from county portals daily; enrich owner phone and email. Sell each day's list to local roofers via their contact forms: $75/lead or $199/list. Day 1: build the scraper, collect 500 permits, pitch 50 roofers. Repeat in new counties; target $600+ in 30 days.

## Why this wins

The edge is **fresh intent**. A homeowner who just pulled a roof permit is actively spending money right now — not a cold name on a stale scraped list. Local roofers already pay for leads, so the buyers exist today. Selling each day's fresh list (not single leads, not a one-off scrape) turns one scraper into a repeatable daily product in every new county.

- **What is sold:** each day's fresh roof-permit lead list (owner phone + email enriched).
- **Who pays:** local roofing contractors — $75 per lead or $199 per list.
- **Where found:** public county permit portals, pulled daily.
- **Day one:** build the scraper, collect 500 permits, pitch 50 roofers through their website contact forms (no cold email).
- **Day 30 target:** $600+.

## Run it

Requires Node 22+:

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` writes the single plan text (280 characters, UTF-8) to `/output/entry.txt`.
