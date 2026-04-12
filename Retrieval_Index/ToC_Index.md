# FMT Explorer — Table of Contents Index

**Repo:** ftm-explorer
**Prefix:** FMT
**Note:** Config files (package.json, tsconfig.json, etc.) omitted from ToC — their content is self-explanatory.

---

### FI-FMT-0001 — D2R_Stage00_Research_Summary_2026-04-11_v01_I.md

- Svelte 5 runes patterns ($state/$derived/$effect, $state class pattern)
- Tailwind 4 @theme config, token strategy, design system tokens
- SVG chart approach decision (hand-rolled recommended)
- Filter UI patterns (sidebar, accessible checkboxes, chips, debounce)
- SvelteKit routing structure and Svelte 5 page/layout conventions
- Data source shape: 104 FMs, categories, severity per-incident not per-FM
- Scaffold configuration (tsconfig, eslint, vitest, svelte.config)
- Retrieval Index prefix FMT proposed
- Statistics strip values with sources traced to raw data
- Key architectural decisions summary table

---

### FI-FMT-0002 — CLAUDE.md

- Stack overview (SvelteKit 2, Svelte 5, Tailwind 4, Vitest, adapter-vercel)
- Source data file locations
- Directory structure
- Critical constraints (runes-only, WCAG AA, static data, no per-FM severity)
- Portfolio cross-links
- Retrieval Index prefix

---

### FI-FMT-0011 — app.html

- HTML shell with Inter font, SvelteKit preload attribute
- Full meta tags (description, canonical)
- Open Graph tags (title, description, type, URL, image)
- Twitter Card tags
- Favicon links (SVG, ICO, apple-touch-icon)

---

### FI-FMT-0012 — app.css

- Tailwind 4 @import
- @theme block: primary, accent, severity (critical/high/medium/low), direction (A/B), bg, border, text, semantic, focus tokens
- Light mode overrides via html.light class
- prefers-reduced-motion global reset
- Scrollbar styling (dark + light)
- Selection color

---

### FI-FMT-0017 — +layout.svelte

- Skip-to-content link (sr-only, visible on focus)
- Sticky header with navigation (desktop + mobile scrollable)
- Theme toggle (dark/light, localStorage persistence, prefers-color-scheme detection)
- Active nav state via page.url.pathname $derived
- aria-current="page" on active links
- Persistent footer: governance tool link, About, Privacy, Terms
- flex-col min-h-screen structure for footer push

---

### FI-FMT-0018 — +page.svelte (landing)

- "Original Research" badge
- Hero headline: "104 Failure Modes. 247 Incidents. 19 Project Spaces."
- Subheadline: bidirectional taxonomy description
- CTA: "Explore the Taxonomy" → /explorer
- Stats strip: 104 FMs, 247+ incidents, 103 Dir A, 1 Dir B, 13 CRITICAL
- Key Finding callout: Fabrication 13.1% → 46% of CRITICALs
- Navigation cards: Explorer, Categories, Patterns, Statistics

---

### FI-FMT-0032 — types.ts

- Severity, Direction, CategoryId type aliases
- FailureMode interface (id, number, shortName, title, definition, category, direction, highestSeverity, instanceCount, instanceCountWeighted, sources, relatedPatternIds)
- CategoryMeta interface
- CrossProjectPattern interface (id, name, description, projects, highestSeverity, involvedFMNumbers, rulesProduced)
- TaxonomyStats interface

---

### FI-FMT-0033 — failure-modes.ts

- All 104 FailureMode objects (FM-001 through FM-104)
- Organized by category: Fabrication, Epistemological, Quality, Process, Communication, Scope, Bias, Identity, Judgment
- FM-104 as sole Direction B failure mode
- FM-018 as highest-evidence FM (12 instances)
- relatedPatternIds linking FMs to P1–P9 cross-project patterns

---

### FI-FMT-0034 — categories.ts

- categoryMeta record: 9 category definitions (label, description, direction)
- categories array with computed fmCount per category
- getCategoryLabel() helper function

---

### FI-FMT-0035 — patterns.ts

- 9 CrossProjectPattern objects (P1–P9)
- P1: Western Epistemic Bias as Fabrication
- P2: Confirmatory Bias Substituted for Exploratory Analysis
- P3: False Confidence in Verification/Enumeration
- P4: Fabrication Concentrated in High-Stakes Domains
- P5: Solution-Before-Context
- P6: Scope Creep / Over-Generation
- P7: "Lazy Questions" — Asking Instead of Doing
- P8: Thread Contamination / Context Loss
- P9: Human Planning Gaps (Direction B)

---

### FI-FMT-0036 — statistics.ts

- computeStats() function: derives TaxonomyStats from failureModes array
- severityRank() and bySeverityDesc() sort helpers
- Pre-computed stats singleton export

---

### FI-FMT-0037 — index.ts (data barrel)

- Re-exports: failureModes, categories, categoryMeta, getCategoryLabel, patterns, stats, computeStats, severityRank, bySeverityDesc

---

### FI-FMT-0019 — +page.svelte (explorer)

- FilterStore instantiation; sidebar with search, sort select, direction/severity/category checkboxes, reset button
- Active filter chips with per-chip remove buttons; clear-all control
- Result count display; empty state with reset CTA
- FM card list: expand/collapse accordion; ID badge, shortName, direction/severity badges, instance count, chevron
- Expanded detail: full title, definition, meta row (category/direction/severity/instances), source breakdown, related patterns as links

---

### FI-FMT-0020 — +page.svelte (categories)

- Summary strip: total FMs, Dir A, Dir B, category count
- Horizontal bar chart: FM count by category (sorted descending)
- Category cards: expand/collapse accordion; label, FM count, direction indicator, description
- Expanded: FM list (ID, shortName, direction color) + link to Explorer

---

### FI-FMT-0021 — +page.svelte (patterns)

- 9 pattern cards: P1–P9 with severity badge, full name, description
- Projects affected chips; involved FM number links (with shortName tooltip)
- Rules/remediations produced section per pattern
- Cross-link to About page

---

### FI-FMT-0022 — +page.svelte (statistics)

- Top-level stats strip: 104 FMs, 247+ incidents, 129 structured, 13 CRITICAL
- Direction split: horizontal proportional bar (Dir A teal / Dir B purple)
- Severity distribution bar chart (CRITICAL/HIGH/MEDIUM/LOW with color coding)
- Evidence density chart: singletons / 2 instances / 3+ instances
- Category distribution bar chart
- Top 10 most evidenced FMs ranked bar chart
- Key findings cards: fabrication/CRITICAL correlation, Dir B prevalence, singleton abundance

---

### FI-FMT-0023 — +page.svelte (about)

- What This Is: taxonomy description, incident scope, version history
- Research attribution: Stahl Systems, Krystal Martinez
- Methodology: incident collection, taxonomy construction, instance counting, severity assignment, cross-project pattern analysis
- Source documents list
- Portfolio cross-links: governance.krystalmartinez.com

---

### FI-FMT-0024 — +page.svelte (privacy)

- Overview: static site, no data collection
- Data collection: no cookies, no analytics, no forms, no third-party services
- Hosting: Vercel infrastructure note with link to Vercel privacy policy
- Contact

---

### FI-FMT-0025 — +page.svelte (terms)

- Acceptance clause
- Content & IP: attribution requirements, reproduction restrictions
- Research use disclaimer
- No warranty
- Limitation of liability
- Changes notice
- Contact

---

### FI-FMT-0039 — FilterStore.svelte.ts

- FilterStore class using Svelte 5 $state/$derived
- Filter state: categories (Set), directions (Set), severities (Set), searchQuery, sortKey
- Derived: filtered (applies all active filters + sort), resultCount, hasActiveFilters, activeFilterCount
- Mutators: toggleCategory, toggleDirection, toggleSeverity, setSearch, setSort, reset
- Sort keys: number (default), instances (desc), severity (desc), alpha

---

### FI-FMT-0040 — FilterStore.test.ts

- Pure filter logic tests (no Svelte runtime needed)
- No-filter baseline: 104 FMs returned, default sort by number
- Category filter: single, multi, empty set
- Direction filter: A-only (103), B-only (1 = FM-104), both (104)
- Severity filter: CRITICAL-only, LOW-only, all combined
- Search filter: partial match, FM ID match, case-insensitive, empty/whitespace, no-match
- Sort keys: instances (FM-018 first), severity (CRITICAL first), alpha, number
- Combined filters: fabrication+CRITICAL, Direction B+search

---

### FI-FMT-0038 — failure-modes.test.ts

- Data integrity tests: 104 FMs, unique IDs, sequential numbers, ID format
- Category/direction/severity validity checks
- FM-018 instance count (12), FM-104 Direction B assertion
- Pattern ID validity, involvedFMNumbers cross-reference
- Category count: 9 categories, fmCount sums to 104
- Pattern integrity: 9 patterns P1–P9
- Statistics integrity: totalFMs=104, criticalIncidents=13, mostEvidencedFM=FM-018

---
