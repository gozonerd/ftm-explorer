# FTM Explorer — AI Failure Mode Taxonomy Explorer

**Live:** https://ftm-explorer-rho.vercel.app

An interactive browser for a taxonomy of **104 named AI failure modes** — filter, search, and read across categories rather than scrolling a static document.

## What this is

The taxonomy catalogues distinct, named ways AI systems fail, grounded in an incident corpus. This repository is the **explorer interface** for the published derived layer. The underlying evidence corpus — per-incident instances, source-document provenance, and classification logs — is private and is not published here.

For the taxonomy data itself, see [`bobotax-failure-mode-taxonomy`](https://github.com/gozonerd/bobotax-failure-mode-taxonomy) (CC BY 4.0).

## Stack

SvelteKit · TypeScript · Vite · Vitest. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm test         # unit tests
```

## Licence

MIT © 2026 Krystal Martinez. See [`LICENSE`](LICENSE).
