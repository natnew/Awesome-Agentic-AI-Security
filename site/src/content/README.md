# site/src/content/docs

This directory is **generated**. Do not edit files here directly.

Source markdown lives at the repository root (`docs/`, `patterns/`, `resources/`, `rubrics/`).
A pre-build step copies those files into this collection so Starlight can render them.

```bash
cd site
npm run sync     # copies + rewrites links
npm run build    # runs sync, then astro build
```

The mapping is defined in [`scripts/sync-content.mjs`](../../../scripts/sync-content.mjs).
