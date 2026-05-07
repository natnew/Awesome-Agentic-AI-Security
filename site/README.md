# Awesome Agentic AI Security — Astro Starlight site

This is the source for the public site at:

> https://natnew.github.io/Awesome-Agentic-AI-Security/

## Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- Dark theme, single blue accent, monospaced section eyebrows
- Animated inline-SVG diagrams (no JS framework dependencies)
- Content is **single-sourced from the repository root**: `docs/`, `patterns/`, `resources/`, `rubrics/`

## Layout

```
site/
├─ astro.config.mjs              # Starlight config + sidebar
├─ scripts/sync-content.mjs      # Copies repo markdown into Starlight's collection
└─ src/
   ├─ pages/
   │  ├─ index.astro             # Custom landing (9 sections)
   │  ├─ guide/index.astro       # Section landing pages
   │  ├─ chains/index.astro
   │  ├─ defense/index.astro
   │  ├─ evaluation/index.astro
   │  ├─ resources/index.astro
   │  └─ operate/index.astro
   ├─ components/                # Hero/Defense/BreachChain SVGs, cards, bands
   ├─ content/docs/              # GENERATED — do not edit by hand
   ├─ styles/                    # tokens.css + global.css
   └─ assets/logo-mark.svg
```

## Develop

```bash
cd site
npm install
npm run dev          # syncs content, then starts Astro dev server
```

## Build

```bash
cd site
npm run build        # runs sync via prebuild, then astro build
npm run preview
```

## Edit content

- Edit the markdown at the **repo root** (`docs/`, `patterns/`, `resources/`, `rubrics/`).
- The sync script copies and lightly link-rewrites those files into `src/content/docs/`.
- To change which files are included or where they appear in the sidebar, edit:
  - [`scripts/sync-content.mjs`](scripts/sync-content.mjs) — file mapping
  - [`astro.config.mjs`](astro.config.mjs) — sidebar

## Deploy

Pushes to `main` build the site and publish to GitHub Pages via
[`.github/workflows/site.yml`](../.github/workflows/site.yml).
The legacy MkDocs workflow (`docs.yml`) is kept during transition and can be removed once the
Astro deploy is verified.
