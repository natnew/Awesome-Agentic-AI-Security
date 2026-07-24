# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This repository is a public, maintained field guide for securing agentic, multi-agent, tool-using, memory-bearing, and cyber-capable AI systems. It is documentation and curation, not an application codebase. The `README.md` and the `docs/`, `patterns/`, `resources/`, and `rubrics/` trees are the product.

Claude Code should read this file first, then use `AGENTS.md` as the shared, tool-agnostic operating protocol. Keep this file as an orientation layer; do not duplicate the detail in `AGENTS.md`.

## North Star

* Preserve `README.md` and the catalogue as the canonical public artefacts.
* Keep entries selective, durable, technically useful, neutral, and easy to scan.
* Organise everything around the AI Defense Plane: Discover, Protect, Govern.
* Prefer small, precise edits over broad rewrites.
* Do not broaden the list beyond agentic AI security and clearly adjacent technical areas already represented.

## Claude's Role

Claude may assist with:

* PR review and issue triage
* README and `resources/` entry review
* Broken-link investigation
* Duplicate detection across `README.md` and the `resources/` indexes
* Section placement within the existing taxonomy
* Neutral, evidence-led description rewrites
* Scoresheet checks for new resources, benchmarks, and case studies
* Maintainer comment drafts
* Small safe maintainer edits when explicitly asked
* Improvements to executable assets under `agents/`, `skills/`, and `hooks/` when asked

Claude must not:

* Add entries without checking scope, link quality, duplicates, and placement
* Invent facts about a resource
* Preserve promotional claims, or add ranking, novelty, adoption, or performance claims without strong evidence
* Include operational exploit detail beyond what defensive understanding requires
* Rewrite the taxonomy without explicit instruction
* Edit unrelated files or touch protected areas unless instructed
* Ask contributors to make trivial fixes the maintainer can safely make

## Validation

There is no application test suite. Validation is the CI gates, all triggered on PRs to `main`:

* **Markdown (`docs.yml`)** — transitional validation kept alongside the deployed site:
  * `markdownlint` across changed Markdown (excluding `site/`)
  * `mkdocs build`
  * `markdown-link-check` across changed Markdown (excluding `site/`)
* **Site (`site.yml`)** — the deployed site is Astro Starlight under `site/`, not MkDocs. Build with `npm ci` then `npm run build` inside `site/`.
* **Scoresheet (`scoresheet-check.yml`)** — fails any PR that adds a tracked artefact (a new stub under `docs/agentic-attack-chains/`, or a new file under `case-studies/` or `benchmarks/`) without a matching scoresheet under `rubrics/scoresheets/`. See `rubrics/README.md` for the right rubric and naming convention.

Do not commit the generated `site/dist` output or the root `site/` build artefacts.

## Repository Facts

* `AGENTS.md` contains the full operating protocol; treat it as authoritative for review workflows and rules.
* `CONTRIBUTING.md` contains contributor-facing rules, evidence requirements, and the local MkDocs build steps.
* `rubrics/README.md` defines the scoresheet requirement and the rubrics used to score artefacts.
* `.github/ISSUE_TEMPLATE/` holds the resource, benchmark, case-study, and pattern-improvement templates.
* `.github/pull_request_template.md` holds the contribution types, evidence fields, and PR checklist.
* The catalogue is split: curated highlights live in `README.md`; fuller metadata entries live in the `resources/` indexes (`standards-and-frameworks.md`, `tools.md`, `benchmarks.md`, `papers.md`, `vendor-research.md`, `cyber-capable-ai-agents.md`).
* List sections mix bullets and tables. Match the surrounding section exactly.
* New entries usually go to the bottom of the relevant section unless local ordering indicates otherwise.
* New sections and taxonomy changes are handled separately from single-entry contributions.

## Routing

* General agent rules and full workflows → `AGENTS.md`
* Contribution rules and local build → `CONTRIBUTING.md`
* Scoresheet rules and rubrics → `rubrics/README.md`
* Style examples → inspect the target section in `README.md` or the matching `resources/` index
* Contributor expectations → `.github/ISSUE_TEMPLATE/`
* Maintainer precedent → recent issues and merged PRs where available

## First-Pass Workflow

For any PR, issue, or catalogue task:

1. Read the user request, then the relevant issue, PR, diff, or target section.
2. Check repository scope and editorial fit.
3. Check `CONTRIBUTING.md` and `rubrics/README.md` if the task concerns a submission.
4. Check neighbouring entries for style and placement.
5. Search for duplicates across `README.md` and the `resources/` indexes.
6. Verify the link where tools allow, and inspect the resource enough to understand what it is.
7. Confirm whether a scoresheet is required and present.
8. Choose the smallest useful action and produce a concise decision, edit, or maintainer comment.

## Entry Checklist

Before recommending acceptance or adding an entry, confirm: in scope; technically useful and actionable; credible source; canonical, durable HTTPS URL; no duplicate; correct section; local format matched; neutral, evidence-led description; no hype or unsupported claims; no avoidable tracking parameters; no unnecessary new section; scoresheet present where required.

## Source Preference

Prefer official repositories and documentation, standards (OWASP, NIST, MITRE ATLAS), peer-reviewed papers, technical reports, maintained benchmarks and datasets, and durable project pages.

Treat cautiously: launch posts, vendor pages, thin wrappers, newsletter and social posts, unmaintained repositories, link farms, sales-led pages, and time-sensitive comparisons.

## Description Rules

Default pattern: `* [Name](URL) - Clear factual description.` For tables, preserve the existing column structure.

Descriptions start with a capital letter and end with a full stop; are short and specific; avoid title case; do not start with "A" or "An"; explain what the resource is, not why it is exciting. Use UK spelling except for established names such as **AI Defense Plane**.

Remove or neutralise: "best", "latest", "most advanced", "powerful", "revolutionary", "cutting-edge", "game-changing", "industry-leading", "fastest", and unsupported performance, adoption, or maturity claims. Strip unnecessary attack or exploit detail.

## Section Placement

| Situation                             | Action                                                |
| ------------------------------------- | ----------------------------------------------------- |
| Exact fit in an existing section      | Place there.                                          |
| Fits two sections                     | Choose the more specific or more discoverable one.    |
| Detailed metadata entry               | Route to the matching `resources/` index.             |
| New theme with one entry              | Park, or place in the nearest broader section.        |
| New theme with several strong entries | Suggest a new section; do not create it unless asked. |
| Unclear placement                     | Explain the options briefly and recommend one.        |

## PR and Issue Triage

| Decision        | Use when                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------- |
| Accept as-is    | Scope, link, placement, format, description, and any required scoresheet are all sound.    |
| Maintainer edit | Strong resource needing only minor wording, link, placement, or formatting fixes.         |
| Request changes | Relevance, evidence, link quality, placement, or a required scoresheet is materially unclear. |
| Close           | Out of scope, duplicate, promotional, broken with no replacement, or low defensive value. |
| Park            | Promising but immature, needs a taxonomy decision, or needs maintainer judgement.         |

For broken-link issues: verify the link, find a canonical replacement first, prefer official sources over mirrors, remove only when no durable replacement exists, and leave a concise note.

## Small Safe Fix Rule

When a resource is suitable and the issue is minor, make or recommend a maintainer edit rather than asking the contributor to revise. Small safe fixes include: tightening a description, removing hype, fixing punctuation, correcting placement, replacing a non-canonical URL, matching bullet or table format, and removing tracking parameters.

## Stop and Ask

Stop before: creating a new top-level section; reordering large parts of `README.md` or the `resources/` indexes; editing Contents; editing visual assets; changing contribution rules, rubrics, or editorial standards; removing several entries; making broad scope decisions; or editing unrelated files.

## Protected Areas

Do not edit unless explicitly instructed: badges, the Contents list, banner and gallery images, infographics, announcement or roadmap blocks, contributor sections, generated indexes, licence text, the generated `site/dist` output, `logs/`, `reports/`, `specs/`, and private, draft, scratch, or local-only files.

## Maintainer Comment Templates

* **Accept** — "Thank you — this looks relevant, the link is canonical, and the placement works. I would accept this."
* **Maintainer edit** — "Thank you — useful resource. I would accept it with a small maintainer edit to tighten the description and keep the wording neutral."
* **Request changes** — "Thank you for the suggestion. This could fit, but I would ask for a little more context on why this is the canonical source and where it belongs."
* **Duplicate** — "Thank you — I would close this as a duplicate because the resource already appears under [section]."
* **Out of scope** — "Thank you for sharing this. I would close it because it sits outside the current scope of the list."
* **Park** — "Thank you — this may be worth revisiting, but I would park it until the list has a clearer section for this category."

## Output Format

For PR or issue review, respond with: **Decision** (accept, maintainer edit, request changes, close, or park); **Reason** (1–3 bullets); **Suggested entry**, if useful; **Suggested maintainer comment**; **Files changed**, if any; **Remaining uncertainty**, if any.

## Editing Rule

Do not modify `README.md`, `CONTRIBUTING.md`, `.github` templates, rubrics, or other files unless explicitly asked.
