# User Manual

## Purpose

This app is a structured knowledge/report interface for IRS Enrolled Agent SEE Part 2 (Businesses), aligned to 2026-focused planning and study design.

## Audience

- EA candidates studying Part 2
- Instructors building a curriculum
- Content teams preparing tax exam materials
- Product owners maintaining exam-prep tools

## Architecture Overview

- `src/app/page.tsx`: presentation layer (sections, tables, cards)
- `src/lib/seePart2Data.ts`: data layer (sources, domains, outline, matrix)
- `src/app/layout.tsx`: metadata and root layout
- `docs/*`: operational and marketing documentation

## Data Model Overview

### `sourceEntries`
Holds source title, publisher, date, grouped type, and contribution bullets.

### `domainSummary`
Holds official Part 2 domains, question counts, and weight ranges.

### `domainTopics`
Holds topic bullets for Domain 1, Domain 2, and Domain 3.

### `reportOutline`
Holds section-level structure for the 50-page report plan.

### `setDesignRows`
Holds matrix rows for topic allocation across Set A / Set B / Set C.

### `setDesignTakeaways`
Holds high-level interpretation points for set design strategy.

## Operations

### Start local development

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build production bundle

```bash
npm run build
```

## Content Maintenance Workflow

1. Update facts in `src/lib/seePart2Data.ts`.
2. Verify labels and grouping are correct.
3. Run `npm run lint`.
4. Run `npm run build`.
5. Review in browser.

## Quality Guidelines

- Keep official exam facts anchored to primary IRS/Prometric materials.
- Keep secondary sources as interpretation, not authority replacement.
- Use clear date labels for each source entry.
- Keep difficulty matrix transparent and internally consistent.

## Extending the App

### Add filtering by domain
- Add UI controls in `src/app/page.tsx`
- Filter mapped arrays before rendering

### Add exports (PDF/CSV/JSON)
- Add an API route or client-side export utility
- Reuse data from `src/lib/seePart2Data.ts`

### Add route split by section
- Move each major section into its own route under `src/app`

## Compliance and Scope Note

This app is an educational planning and content organization tool. It is not legal advice, tax advice, or an official IRS exam product.
