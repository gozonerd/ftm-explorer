# D2R Stage 00 Research Summary — FMT Explorer

**Project:** Failure Mode Taxonomy Explorer (failuremodes.krystalmartinez.com)
**Date:** 2026-04-11
**Version:** v01_I
**Stage:** 00 — Research Current Best Practices
**Sources:** governance-assessment codebase, official Svelte/Tailwind/SvelteKit docs, web research

---

## Research Target 1: Svelte 5 Runes Patterns

**Best practice:**
- `$state` replaces Svelte 4 `let` for reactive state. Works in `.svelte.ts` files (not just `.svelte`). Mutate arrays/objects directly — no spread operators needed (`items.push(x)` is reactive).
- `$derived` replaces `$:` for computed values. Memoized, pure — use instead of `$effect` for anything calculable.
- `$effect` is for side effects only (DOM APIs, timers, external subscriptions). Always return a cleanup function when the effect sets up a subscription or timer.
- `$props()` replaces `export let`. Destructure with defaults: `let { variant = 'primary', children }: Props = $props()`.
- Snippets replace slots. Receive as `children?: Snippet`, render with `{@render children()}`.
- Events: `onclick=` (no colon, lowercase) — standard HTML event attributes.
- `$state` class pattern (encapsulated store): define a class with private `$state` fields; export a singleton. This is the correct pattern for filter state.

**Confirmed via:** `governance-assessment/src/lib/stores/assessment.svelte.ts` (live production code using this exact pattern with `SvelteMap`)

**Applies to:** Stage 03 (filter store), Stage 04–09 (all UI components)

**Pitfalls:**
- Over-using `$effect` when `$derived` suffices — `$derived` is cheaper and SSR-compatible
- `$effect` does NOT run server-side during SSR — do not use for data initialization
- SVG components need `<svelte:options namespace='svg'>` if used as standalone SVG components
- `aria-current="page"` for nav links uses `$derived(page.url.pathname === route)` with `$app/state` import (not old `$app/stores`)

**Example `$state` class:**
```typescript
class FilterStore {
  categories = $state<string[]>([]);
  severity = $state<string[]>([]);
  direction = $state<string>('all');
  search = $state('');

  clearAll() {
    this.categories = [];
    this.severity = [];
    this.direction = 'all';
    this.search = '';
  }
}
export const filters = new FilterStore();
```

---

## Research Target 2: Tailwind 4 with `@tailwindcss/vite`

**Best practice:**
- No `tailwind.config.js` in v4. All design tokens go in `@theme {}` block in `app.css`.
- Single import: `@import "tailwindcss";` (replaces 3-line `@tailwind` directives).
- Vite plugin: `import tailwindcss from '@tailwindcss/vite'` in `vite.config.ts`. No PostCSS needed.
- Custom tokens defined in `@theme` create CSS custom properties automatically. Use as `var(--color-accent)` anywhere or as Tailwind arbitrary values `bg-[var(--color-accent)]`.
- Dark mode: class-based via `html.light { ... }` overriding CSS vars (governance-assessment pattern — toggle `html.classList.toggle('light')`).
- `prefers-reduced-motion`: No built-in Tailwind utility — use `@media (prefers-reduced-motion: reduce)` in `app.css` globally.

**Confirmed via:** `governance-assessment/src/app.css` (live production Tailwind 4 config)

**Applies to:** Stage 01 (scaffold), Stage 04–10 (all styling)

**Pitfalls:**
- Do NOT create `tailwind.config.js` — this is v3 behavior
- `theme()` CSS function rarely needed in v4; use `var(--token-name)` instead
- Opacity modifiers (`/20`) still work with arbitrary values: `bg-[var(--color-accent)]/20`

**Design tokens to carry forward (from governance-assessment, match exactly):**
```css
--color-primary: #1e3a5f        /* deep navy */
--color-accent: #0d9488          /* teal action */
--color-accent-hover: #0f766e
--color-bg-primary: #0f172a      /* darkest bg */
--color-bg-panel: #1e293b        /* card bg */
--color-bg-card: #273549
--color-bg-elevated: #334155
--color-border-default: #334155
--color-border-muted: #1e293b
--color-text-primary: #f1f5f9
--color-text-secondary: #94a3b8
--color-text-muted: #64748b
/* Severity colors (new for FMT): */
--color-severity-critical: #ef4444
--color-severity-high: #f97316
--color-severity-medium: #eab308
--color-severity-low: #22c55e
/* Direction colors (new for FMT): */
--color-dir-a: #3b82f6           /* blue for AI errors */
--color-dir-b: #a855f7           /* purple for human errors */
```

---

## Research Target 3: SVG Charts for SvelteKit 5

**Best practice:** **Hand-rolled SVG** — strongly recommended for this use case.

**Decision rationale:**
| Option | Svelte 5 | SSR | Bundle | Maintained | A11y |
|--------|----------|-----|--------|------------|------|
| Hand-rolled | ✅ Native | ✅ | 0 KB | ✅ | Full control |
| LayerCake | ⚠️ Partial | ✅ | ~133 KB | ✅ | Manual |
| Pancake | ❌ Broken | ⚠️ | Small | ❌ Abandoned | Unknown |

**Confirmed via:** `governance-assessment/src/lib/components/ScoreGauge.svelte` (SVG arc chart, production-grade, hand-rolled, fully accessible)

**Applies to:** Stage 06 (category chart), Stage 08 (statistics dashboard)

**SVG accessibility pattern (mandatory):**
```svelte
<svg viewBox="0 0 400 200" width="400" height="200"
     role="img" aria-labelledby="chart-title chart-desc"
     class="w-full h-auto">
  <title id="chart-title">Category distribution chart</title>
  <desc id="chart-desc">Bar chart showing 10 failure mode categories...</desc>
  <!-- content -->
</svg>
```

**Responsive pattern:** `viewBox` defines coordinate space; `class="w-full h-auto"` handles CSS scaling.

**Chart inventory needed:**
1. Horizontal bar chart (category frequency) — ~40 lines
2. Donut/ring chart (severity distribution) — ~60 lines (SVG arc math)
3. Grouped bar chart (Direction A vs B) — ~60 lines
4. Simple column histogram (instance count distribution) — ~40 lines

**Optional: `d3-scale` and `d3-shape`** (~20–30 KB combined) for axis math and arc path generators. Worth adding only if manual math gets complex.

**Pitfalls:**
- `viewBox` coordinates are independent of CSS `width/height` — don't confuse them
- All `<text>` elements inside SVG need sufficient color contrast (4.5:1 against background)
- Purely decorative SVG elements need `aria-hidden="true"`

---

## Research Target 4: Filter UI Patterns

**Best practice:**

**Layout:** Sidebar for 8+ filter dimensions (our case: 10 categories + direction + severity + sort + search). A top quick-filter strip for 2–3 high-priority filters (direction + severity) improves UX.

**Checkbox groups (accessible):**
```html
<fieldset>
  <legend class="sr-only">Filter by category</legend>
  <label><input type="checkbox" name="cat" value="Fabrication"> Fabrication</label>
  <!-- ... -->
</fieldset>
```
Use native `<fieldset>` + `<legend>` — never `aria-multiselectable` on div groups.

**Filter chips:**
```html
<button type="button" onclick={removeFilter}
  aria-label="Remove CRITICAL filter">
  CRITICAL <span aria-hidden="true">×</span>
</button>
```
Remove button must be a `<button>`, not a styled div.

**Search debounce (300ms, Svelte 5 $effect):**
```svelte
let searchInput = $state('');
let debouncedSearch = $state('');
$effect(() => {
  const t = setTimeout(() => { debouncedSearch = searchInput; }, 300);
  return () => clearTimeout(t);
});
```

**URL params for filters:** Use GET form with `<form method="get">` or `sveltekit-search-params` library for reactive two-way binding. `$page.url.searchParams` is read-only (cannot write directly). For Phase 1 (static data, no backend), URL params are a nice-to-have — implement if time allows in Stage 05.

**Mobile:** Drawer pattern at ≤768px. Filter button triggers a side/bottom drawer overlay.

**Applies to:** Stage 05 (explorer view)

**Pitfalls:**
- Top filter bars fail UX research beyond 6 filters — use sidebar
- `$page.url.searchParams` is read-only — do not attempt direct assignment
- Filter chips close button needs explicit `aria-label` with the filter name, not just "×"

---

## Research Target 5: SvelteKit Routing and Page Structure

**Best practice:**

**Root `+layout.svelte`:** Navigation header, footer with legal links, theme toggle, skip-to-content link, global `<main>` wrapper. Everything that persists across routes.

**Individual `+page.svelte`:** Page-specific content only.

**Persistent footer:**
```svelte
<div class="min-h-screen flex flex-col">
  <header>...</header>
  <main class="flex-1">{@render children()}</main>
  <footer><!-- always visible, links to /privacy /terms --></footer>
</div>
```

**Navigation active state (Svelte 5):**
```svelte
import { page } from '$app/state';
// In component:
const isActive = (href: string) => page.url.pathname === href;
// In template:
aria-current={isActive('/explorer') ? 'page' : undefined}
```

**Data loading:** Since FMT data is static (compiled TypeScript), import data files directly in `+page.svelte` or `+page.ts`. No `+page.server.ts` needed. All 104 FM definitions, categories, and patterns are TypeScript constants bundled at build time.

**Prerendering with adapter-vercel:** Vercel adapter supports prerendering. Add `export const prerender = true` to root `+layout.ts` to prerender all static routes. Dynamic routes not needed (all data is static).

**Route plan:**
```
src/routes/
  +layout.svelte       ← nav, footer, skip-link
  +layout.ts           ← export const prerender = true
  +page.svelte         ← landing (/)
  explorer/+page.svelte ← FM explorer (/explorer)
  categories/+page.svelte ← category overview (/categories)
  patterns/+page.svelte ← cross-project patterns (/patterns)
  statistics/+page.svelte ← stats dashboard (/statistics)
  about/+page.svelte    ← about/methodology (/about)
  privacy/+page.svelte  ← privacy policy (/privacy)
  terms/+page.svelte    ← terms of use (/terms)
```

**Applies to:** Stage 01 (scaffold), Stage 04–10 (all routes)

**Pitfalls:**
- Import from `$app/state` (not `$app/stores`) for `page` in Svelte 5
- `$derived(page.url.pathname)` updates correctly on route change; legacy `$:` reactive block does NOT
- Layout data persists across sibling route changes (only page data refetches)

---

## Research Target 6: Data Source Shape (Read All Three Files)

**104 failure modes confirmed:**
- 103 Direction A (AI errors), 1 Direction B (FM-104)
- **Categories: 9 confirmed from instance counts table** (Fabrication, Quality, Epistemological, Process, Communication, Bias, Scope, Identity, Judgment/Process). The prompt states "10 categories" — the master taxonomy file is 21k tokens and could not be read in full; Stage 02 MUST verify the exact category list by reading the full taxonomy. Do not hardcode 10 without verification.
- 4 severity levels: CRITICAL, HIGH, MEDIUM, LOW (from ECT v2 methodology)
- Instance counts: 44 singletons, 23 with 2 instances, 37 with 3+ instances
- Highest instance count: FM-18 (12 instances — Western Epistemic Fabrication)
- 9 named cross-project patterns in ECT v2 Section 6

**Key statistics for landing page strip:**
- 104 total failure modes
- 247+ total incidents (129 structured + ~118 summary)
- 103 Direction A, 1 Direction B
- 13 CRITICAL severity incidents (structured data)
- Fabrication = 13.1% of incidents but 46% of CRITICALs
- Most incident-dense category: Process (25%)

**Data structure design:**
```typescript
interface FailureMode {
  id: string;               // "FM-001" through "FM-104"
  shortName: string;
  category: Category;
  direction: 'A' | 'B';
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  definition: string;
  instanceCount: number;
  instanceCountWeighted: number;
  sources: { vd: number; ect1: number; ect1m: number; gem: number; ect2: number; };
  violationDocs: string[];
  ect1Instances: string[];
  ect2Instances: string[];
  relatedPatterns: string[];  // pattern IDs
}

interface Category {
  id: string;              // "fabrication", "quality", etc.
  name: string;
  description: string;
  fmCount: number;
  incidentCount: number;
  severityDistribution: Record<Severity, number>;
  dirACount: number;
  dirBCount: number;
}

interface CrossProjectPattern {
  id: string;              // "P1" through "P9"
  name: string;
  description: string;
  projects: string[];
  severity: string;
  involvedFMs: string[];
  rulesProduced?: string;
}
```

**Note on severity assignment:** The master taxonomy document does NOT include a severity column per FM. Severity is per-incident (from ECT data), not per-FM. The statistics page should display severity distributions across incidents, not per-FM severity labels. Individual FM cards should show "X incidents at CRITICAL/HIGH/MEDIUM/LOW" rather than a single severity badge.

**Exception:** Some FMs have a clear severity pattern based on their incident profile (FM-18 = mostly CRITICAL). These can be highlighted but not hardcoded as "FM severity = CRITICAL".

**Applies to:** Stage 02 (data layer) — this is a critical finding affecting data model design

**Pitfalls:**
- Do not assign a single severity level per FM — severity is incident-level, not FM-level
- FM-104 is the ONLY Direction B FM — make the bidirectional claim accurate in copy
- Instance counts include "weighted" counts (UNCERTAIN at 0.5) — use Total (Wtd) for display
- Category "Judgment/Process" for FM-104 differs from other category names — normalize to "Judgment" for display

---

## Research Target 7: Scaffold Configuration (Stage 01 Readiness)

**SvelteKit project init command:**
```bash
npx sv create ftm-explorer
# Select: SvelteKit minimal, TypeScript, ESLint, Prettier, Vitest
```

**tsconfig.json (match governance-assessment exactly):**
```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "moduleResolution": "bundler",
    "verbatimModuleSyntax": true,
    "rewriteRelativeImportExtensions": true
  }
}
```

**svelte.config.js (match governance-assessment exactly):**
```javascript
import adapter from '@sveltejs/adapter-vercel';

const config = {
  compilerOptions: {
    runes: ({ filename }) =>
      filename.split(/[/\\]/).includes('node_modules') ? undefined : true
  },
  kit: {
    adapter: adapter({ runtime: 'nodejs20.x' })
  }
};
export default config;
```

**Key svelte.config finding:** `runes: true` is forced for the entire project (except node_modules). This means NO Svelte 4 components can be mixed in — all components must use runes syntax from Day 1.

**eslint.config.js (match governance-assessment exactly):**
- `@eslint/js` + `typescript-eslint` + `eslint-plugin-svelte`
- All Svelte 5 rune globals declared (`$state`, `$derived`, `$effect`, `$props`, etc.)
- `SvelteMap`, `SvelteSet` declared as globals
- Key rules: `no-explicit-any: error`, `no-unused-vars: error` (with `_` prefix exception)
- Disabled: `svelte/require-each-key` (Svelte 5.53+ bug), `svelte/no-navigation-without-resolve` (false positive)

**Dependencies to include in Stage 01:**
```json
{
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@sveltejs/adapter-vercel": "^6.3.3",
    "@sveltejs/kit": "^2.57.0",
    "@sveltejs/vite-plugin-svelte": "^7.0.0",
    "@tailwindcss/vite": "^4.2.2",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/svelte": "^5.3.1",
    "@vitest/coverage-v8": "^4.1.4",
    "eslint": "^10.2.0",
    "eslint-plugin-svelte": "^3.17.0",
    "jsdom": "^29.0.2",
    "prettier": "^3.8.2",
    "prettier-plugin-svelte": "^3.5.1",
    "svelte": "^5.55.2",
    "svelte-check": "^4.4.6",
    "tailwindcss": "^4.2.2",
    "typescript": "^6.0.2",
    "typescript-eslint": "^8.58.1",
    "vite": "^8.0.7",
    "vitest": "^4.1.4"
  },
  "dependencies": {
    "lucide-svelte": "^1.0.1"
  }
}
```

**Note:** `jspdf` (used in governance-assessment for PDF export) is NOT needed for FMT Explorer — no PDF export feature. Do not include.

**`vitest.config.ts` (match governance-assessment exactly):**
```typescript
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    conditions: ['browser'],
    alias: { $lib: path.resolve('./src/lib') }
  },
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/lib/**/*.ts'],
      exclude: ['src/lib/**/*.test.ts', 'src/lib/**/*.spec.ts', 'src/lib/index.ts'],
      reporter: ['text', 'html', 'json-summary'],
      thresholds: { statements: 95, branches: 70, functions: 95, lines: 95 }
    }
  }
});
```

**`src/test/setup.ts`:** `import '@testing-library/jest-dom';`

**RI note:** The `relatedPatterns` field on `FailureMode` interface must be derived in Stage 02 by cross-referencing ECT v2 Section 6 (Patterns 1–9) with the FM IDs mentioned in each pattern's description. It is NOT directly available as a column in any source file.

**Applies to:** Stage 01 (scaffold)

---

## Research Target 8: Retrieval Index for New Repo

**Best practice:**
Per the `retrieval-index-maintenance` rule, every repo needs a `Retrieval_Index/` folder with `File_Index.md` and `ToC_Index.md`. Unique IDs use format `FI-{REPO_PREFIX}-{####}`.

**Proposed prefix for ftm-explorer:** `FMT` (not listed in existing prefixes — this is a standalone portfolio tool, not a submodule). Full ID format: `FI-FMT-0001`, `FI-FMT-0002`, etc.

**Action in Stage 01:** Create `Retrieval_Index/File_Index.md` and `Retrieval_Index/ToC_Index.md` immediately after project creation, and update with every new file throughout the build.

**Applies to:** Stage 01 and all subsequent stages

---

## Research Target 9: Statistics Strip — Severity Clarification

**Finding:** The taxonomy assigns severity at the *incident* level, not the *FM* level. The landing page copy says "CRITICAL count" in the stats strip.

**Correct interpretation:**
- "13 CRITICAL incidents" (from Tier 1 structured data: 13 incidents marked CRITICAL across 11 project spaces)
- This undercounts Tier 2 (summary-only files report "4 CRITICAL, 10 HIGH" for RERQ alone)
- Best stat to surface: **13 CRITICAL-severity incidents** (conservative, fully documented)
- Alternative for landing page: show "46% of CRITICALs are Fabrication" as a callout rather than a raw count

**Landing page stats strip (finalized):**
| Stat | Value | Label |
|------|-------|-------|
| Total FMs | 104 | Failure modes catalogued |
| Total incidents | 247+ | Qualifying incidents analyzed |
| Direction A | 103 | AI-generated errors |
| Direction B | 1 | Human-process errors (FM-104) |
| CRITICAL incidents | 13 | Structured-data CRITICAL severity |

**Applies to:** Stage 04 (landing page)

---

## Summary: Key Architectural Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Charts | Hand-rolled SVG | Svelte 5 native, 0 KB overhead, full a11y control, proven in governance-assessment |
| Filter layout | Sidebar + quick-filter strip | 10 categories exceeds top-bar limit of 6 |
| Filter URL state | GET form (Phase 1 optional) | `$page.url.searchParams` read-only, keep simple |
| Data loading | Direct TS imports | All data static at build time, no server needed |
| Prerendering | `export const prerender = true` | All routes static, Vercel adapter supports it |
| FM severity display | Incident distribution, not per-FM badge | Severity is incident-level in source data |
| Design system | Mirror governance-assessment exactly | Same tokens, same component patterns, portfolio coherence |
| Mobile filters | Drawer at ≤768px | Best UX for multi-dimensional filter sets |
| Search debounce | 300ms via `$effect` | Standard UX delay, Svelte 5 correct pattern |

---

*End of Stage 00 Research Summary*
