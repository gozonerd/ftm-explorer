# FMT Explorer

**Owner:** Krystal Martinez / Stahl Systems
**Type:** SvelteKit web app — standalone portfolio tool
**Purpose:** Interactive browser for the Bidirectional AI Failure Mode Taxonomy (104 FMs, 247+ incidents)
**URL:** failuremodes.krystalmartinez.com
**Retrieval Index Prefix:** FMT

## Stack

| Layer | Tech |
|-------|------|
| Framework | SvelteKit 2 + Svelte 5 (runes mode forced) |
| Styling | Tailwind 4 via `@tailwindcss/vite` (no `tailwind.config.js`) |
| Charts | Hand-rolled SVG components |
| State | Svelte 5 `$state` class (filter store) |
| Data | Static TypeScript — compiled at build time, no backend |
| Icons | lucide-svelte |
| Tests | Vitest + @testing-library/svelte |
| Deploy | Vercel + adapter-vercel (nodejs20.x) |

## Source Data

All taxonomy data is compiled from:
- `stahl-systems-docs/12_AI_Operations_AIO/Master_AI_Failure_Mode_Taxonomy_2026-04-11_v02_I.md`
- `stahl-systems-docs/12_AI_Operations_AIO/FMT_v02_Instance_Counts_2026-04-11_v01_I.md`
- `stahl-systems-docs/12_AI_Operations_AIO/ECT_Comprehensive_v2/ECT_v2_Failure_Mode_Taxonomy_2026-04-06_v02_I.md`

## Directory Structure

```
src/
  app.html          ← HTML shell with meta/OG tags
  app.css           ← Tailwind 4 @theme tokens + global styles
  app.d.ts          ← SvelteKit type augmentation
  lib/
    data/           ← TypeScript data files (Stage 02)
    stores/         ← Svelte 5 $state filter store (Stage 03)
    components/     ← Shared UI components
      charts/       ← Hand-rolled SVG chart components
  routes/
    +layout.svelte  ← Nav, footer, theme toggle
    +layout.ts      ← prerender = true
    +page.svelte    ← Landing page
    explorer/       ← FM browser with filters (Stage 05)
    categories/     ← Category overview (Stage 06)
    patterns/       ← Cross-project patterns (Stage 07)
    statistics/     ← Dashboard (Stage 08)
    about/          ← Methodology (Stage 09)
    privacy/        ← Privacy policy (Stage 10)
    terms/          ← Terms of use (Stage 10)
Retrieval_Index/    ← FI-FMT-#### index files
static/             ← Favicon, OG image
```

## Critical Constraints

- Svelte 5 runes only — no Svelte 4 syntax anywhere
- WCAG 2.1 AA on every UI component at build time (not retrofit)
- No backend — all 104 FM definitions are TypeScript constants
- Severity is per-incident, NOT per-FM — do not assign a single severity badge to an FM
- FM-104 is the ONLY Direction B failure mode — bidirectional claim must be accurate
- Design system mirrors governance-assessment exactly (same colors, same component patterns)

## Portfolio Cross-Links

- governance.krystalmartinez.com — AI Governance Readiness Assessment
- shadowai.krystalmartinez.com — Shadow AI Risk Assessment (footer + about)
- Preprint link: TBD when published (placeholder in About page)

## Retrieval Index

Prefix: `FMT` — IDs: `FI-FMT-0001`, `FI-FMT-0002`, etc.
Index files: `Retrieval_Index/File_Index.md` and `Retrieval_Index/ToC_Index.md`
