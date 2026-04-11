# FTM Explorer — Table of Contents Index

**Repo:** ftm-explorer
**Prefix:** FTM
**Note:** Config files (package.json, tsconfig.json, etc.) omitted from ToC — their content is self-explanatory.

---

### FI-FTM-0001 — D2R_Stage00_Research_Summary_2026-04-11_v01_I.md

- Svelte 5 runes patterns ($state/$derived/$effect, $state class pattern)
- Tailwind 4 @theme config, token strategy, design system tokens
- SVG chart approach decision (hand-rolled recommended)
- Filter UI patterns (sidebar, accessible checkboxes, chips, debounce)
- SvelteKit routing structure and Svelte 5 page/layout conventions
- Data source shape: 104 FMs, categories, severity per-incident not per-FM
- Scaffold configuration (tsconfig, eslint, vitest, svelte.config)
- Retrieval Index prefix FTM proposed
- Statistics strip values with sources traced to raw data
- Key architectural decisions summary table

---

### FI-FTM-0002 — CLAUDE.md

- Stack overview (SvelteKit 2, Svelte 5, Tailwind 4, Vitest, adapter-vercel)
- Source data file locations
- Directory structure
- Critical constraints (runes-only, WCAG AA, static data, no per-FM severity)
- Portfolio cross-links
- Retrieval Index prefix

---

### FI-FTM-0011 — app.html

- HTML shell with Inter font, SvelteKit preload attribute
- Full meta tags (description, canonical)
- Open Graph tags (title, description, type, URL, image)
- Twitter Card tags
- Favicon links (SVG, ICO, apple-touch-icon)

---

### FI-FTM-0012 — app.css

- Tailwind 4 @import
- @theme block: primary, accent, severity (critical/high/medium/low), direction (A/B), bg, border, text, semantic, focus tokens
- Light mode overrides via html.light class
- prefers-reduced-motion global reset
- Scrollbar styling (dark + light)
- Selection color

---

### FI-FTM-0017 — +layout.svelte

- Skip-to-content link (sr-only, visible on focus)
- Sticky header with navigation (desktop + mobile scrollable)
- Theme toggle (dark/light, localStorage persistence, prefers-color-scheme detection)
- Active nav state via page.url.pathname $derived
- aria-current="page" on active links
- Persistent footer: governance tool link, About, Privacy, Terms
- flex-col min-h-screen structure for footer push

---

### FI-FTM-0018 — +page.svelte (landing)

- "Original Research" badge
- Hero headline: "104 Failure Modes. 247 Incidents. 19 Project Spaces."
- Subheadline: bidirectional taxonomy description
- CTA: "Explore the Taxonomy" → /explorer
- Stats strip: 104 FMs, 247+ incidents, 103 Dir A, 1 Dir B, 13 CRITICAL
- Key Finding callout: Fabrication 13.1% → 46% of CRITICALs
- Navigation cards: Explorer, Categories, Patterns, Statistics

---
