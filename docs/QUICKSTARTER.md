# Quickstarter

## 1) Install and Run in 2 Minutes

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## 2) What You Will See

- SEE Part 2 exam snapshot
- Official domain structure table
- Topic breakdown cards (Domain 1-3)
- Source map (primary + secondary)
- 50-page report outline blocks
- A/B/C question-set design matrix

## 3) Most Common Edits

### Edit content
Update `src/lib/seePart2Data.ts`.

### Edit layout and styles
Update `src/app/page.tsx`.

### Edit metadata (browser title/description)
Update `src/app/layout.tsx`.

## 4) Verify Everything Works

```bash
npm run lint
npm run build
```

## 5) Fast Customization Checklist

- Change app heading and subheading in `src/app/page.tsx`
- Add/remove sources in `sourceEntries`
- Tune domain weights in `domainSummary`
- Update question allocations in `setDesignRows`
- Add your own notes section to the page

## 6) Troubleshooting

- If port 3000 is busy: `npm run dev -- -p 3001`
- If dependencies are stale: delete `node_modules` and run `npm install`
- If build warns about multiple lockfiles: keep project lockfile in this folder and consider setting Next `turbopack.root`
