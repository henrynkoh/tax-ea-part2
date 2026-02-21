# Tutorial

## Goal

Learn how to update this app with new SEE Part 2 content in under 15 minutes.

## Prerequisites

- Node.js installed
- Project dependencies installed (`npm install`)

## Step 1: Run the app

```bash
npm run dev
```

Open `http://localhost:3000`.

## Step 2: Locate the content source

Open `src/lib/seePart2Data.ts`.

This file is the single source of truth for:
- sources
- domain summary
- domain topics
- report outline
- set matrix

## Step 3: Add a new source entry

Inside `sourceEntries`, add an object with:
- `title`
- `publisher`
- `date`
- `group`
- `contribution` (array of bullets)

Save and refresh browser.

## Step 4: Adjust exam weighting

Edit `domainSummary` values (question counts or share ranges) if blueprint updates occur.

## Step 5: Update question-set matrix

Edit `setDesignRows`:
- `mix` (E/M/H)
- `setA`, `setB`, `setC`
- `rationale`

Tip: keep totals and rationale aligned with your strategy.

## Step 6: Change wording or section order

Edit JSX blocks in `src/app/page.tsx`.

You can:
- rename section headers
- reorder sections
- add disclaimers or instructor notes

## Step 7: Validate

```bash
npm run lint
npm run build
```

## Step 8: Final review checklist

- Facts match source dates and labels
- Domain labels are official IRS naming
- Matrix logic and totals look reasonable
- UI remains readable on desktop and mobile

## Common mistakes

- Updating only UI text but not data arrays
- Mixing primary and secondary source groups
- Changing one matrix cell without updating rationale

## Next tutorial ideas

- Add a printable report view
- Add a dark/light mode toggle
- Add a CSV export for matrix rows
