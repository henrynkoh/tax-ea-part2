## SEE Part 2 (Businesses) Blueprint App

This is a Next.js application that organizes a 2026-focused knowledge base for IRS Enrolled Agent SEE Part 2 (Businesses).

It includes:
- Source map with primary IRS/Prometric references and secondary blueprint interpreters
- Official domain structure and weighting overview
- Topic-level domain breakdown
- 50-page report outline (sections I-VI)
- Question-set design matrix for Set A / Set B / Set C

## Status Check

- App build: complete
- Main report UI: complete
- Source map and blueprint content: complete
- Extended documentation (`manual`, `tutorial`, `quickstarter`): now included
- Marketing copy pack (social/blog/newsletter/email): now included

## Documentation Index

- `docs/QUICKSTARTER.md` - fastest path to run and customize
- `docs/MANUAL.md` - full operating and maintenance guide
- `docs/TUTORIAL.md` - step-by-step learning walkthrough
- `docs/MARKETING_ADS.md` - ad copy by platform
- `docs/NEWSLETTER_EMAIL_TEMPLATES.md` - newsletter + direct email templates

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Main files:
- `src/app/page.tsx` - UI and section rendering
- `src/lib/seePart2Data.ts` - structured source/outline/matrix data
- `tasks/todo.md` - project checklist and review notes

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Notes
The content is structured to mirror the official Part 2 blueprint while remaining readable as a practical study/report foundation.
