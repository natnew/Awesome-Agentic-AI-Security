# AGENTS.md

Operating protocol for AI coding agents working in this repository.

Claude Code should read `CLAUDE.md` first, then use this file as the shared repository contract. Other agents should start here. Follow repository-local guidance over generic awesome-list assumptions.

## Repository North Star

This is a public, maintained field guide for securing agentic, multi-agent, tool-using, memory-bearing, and cyber-capable AI systems. The `README.md` is the entry point, but the repository is more than a link index: it pairs a curated catalogue with conceptual maps (`docs/`), secure engineering patterns (`patterns/`), evaluation rubrics (`rubrics/`), reference visuals (`visuals/`), and first-party executable assets (`agents/`, `skills/`, `hooks/`).

Everything is organised around the AI Defense Plane: **Discover** where agents, tools, prompts, data flows, credentials, memory, and autonomous workflows exist; **Protect** tool use, memory writes, credentials, and actions; and **Govern** evidence, audit trails, delegated authority, and risk acceptance.

The list is curated, not accumulated. Each entry should help a reader understand an agentic security risk, find a credible control or test case, or compare related resources. Selectivity, durability, clear placement, and neutral, evidence-led description quality matter more than volume.

## Agent Role

Agents may help with:

* README and catalogue maintenance when explicitly asked
* New entry review against the quality bar
* Pull request review
* Issue triage using the repository templates
* Broken-link checks
* Duplicate detection
* Section placement within the existing taxonomy
* Description tightening and de-hyping
* Scoresheet checks for new resources, benchmarks, and case studies
* Maintainer comment drafts
* Small, safe cleanup edits when explicitly requested

Agents must not:

* Add speculative, promotional, or low-signal entries
* Inflate claims or preserve marketing wording
* Include operational exploit detail beyond what defensive understanding requires
* Reorganise the taxonomy without explicit instruction
* Run broad formatting or link-rewriting sweeps
* Edit unrelated files
* Rewrite the maintainer's style unnecessarily
* Turn one contribution into a broad structural change
* Commit generated, local, or protected material (see Protected Areas)
* Touch protected areas unless explicitly instructed

## Read Order

Before reviewing or editing, read in this order:

1. `README.md` — scope, taxonomy, section formatting, protected blocks, and existing examples
2. `CONTRIBUTING.md` — useful contributions, evidence requirements, and editorial standards
3. `rubrics/README.md` — the scoresheet requirement for new resources, benchmarks, and case studies
4. `.github/ISSUE_TEMPLATE/` — contributor expectations for resources, benchmarks, case studies, and pattern improvements
5. `.github/pull_request_template.md` — contribution types, evidence fields, and the PR checklist
6. `CLAUDE.md` — coding standards and the Claude-specific review format
7. Recent issues and merged PRs, where available, for maintainer precedent

Do not assume the generic awesome-list pattern overrides this repository's structure.

## Repository Facts

* `README.md` contains introductory sections, a Contents list with anchors, the AI Defense Plane framing, and themed list sections such as Standards and Frameworks, Prompt Injection, Tool Use / MCP / Runtime, Memory and State, Credentials and Authority, Benchmarks, Cyber-Capable AI Agents, Observability, Governance, and Engineering Patterns.
* List sections use a mixture of bullets and tables. Match the local section style exactly.
* Many sections include explanatory text before entries. Preserve it.
* The catalogue is split between `README.md` (curated highlights) and the fuller indexes in `resources/` (`standards-and-frameworks.md`, `tools.md`, `benchmarks.md`, `papers.md`, `vendor-research.md`, `cyber-capable-ai-agents.md`). Add detailed metadata entries to the relevant `resources/` file; add only high-signal highlights to `README.md`.
* `CONTRIBUTING.md` asks for narrow, reviewable changes and one suggestion per pull request.
* New resources, case studies, and benchmarks require a corresponding scoresheet under `rubrics/scoresheets/`, using the rubrics in `rubrics/`.
* New entries should be added to the bottom of the relevant section unless local ordering clearly indicates otherwise.
* New sections or taxonomy changes should be handled separately from single-entry contributions.
* For tools and frameworks, prefer the official GitHub repository over a package registry or marketing page.
* For papers, prefer the official publisher page, arXiv, or DOI.
* Descriptions are short, neutral, present-tense where possible, and evidence-led.


## Scope Rules

Belongs:

* Standards, frameworks, and public specifications (for example OWASP, NIST, MITRE ATLAS)
* Vendor research and independent research with clear relevance to agentic AI security
* Papers, technical reports, and durable explainers
* Datasets and benchmarks that test agentic behaviour, tool use, memory, credentials, autonomy, or multi-agent workflows
* Evaluation, red-teaming, observability, tracing, audit, and forensics tooling
* Secure engineering patterns for agent runtimes, tool calling, MCP, memory, credentials, approval gates, sandboxing, and policy enforcement
* Case studies that teach defensive lessons about agentic attack surfaces or breach chains
* Governance, assurance, and frontier-capability risk resources relevant to agentic systems

Does not belong:

* Thin wrapper pages or pure marketing pages
* Generic AI news without durable security relevance
* Broken or inaccessible links
* Duplicate or near-duplicate resources
* Speculative entries or low-signal link farms
* Operational exploit instructions or unnecessary attack detail
* Unsupported ranking, performance, adoption, or maturity claims
* Time-sensitive claims such as "latest", "best", "leading", "fastest", or "most advanced"
* Content outside agentic AI security or adjacent areas already represented in the README

## Quality Bar

An entry qualifies when all are true:

* It is clearly relevant to agentic execution security or an adjacent area already represented in the list.
* It is **actionable**: it provides a concrete control, a reproducible test case, or durable defensive understanding.
* It addresses the agentic execution loop (planning, acting, observing) or its supporting surfaces.
* The source is credible — preference for established standards, peer-reviewed research, and maintained projects.
* The link is canonical, durable, and reachable.
* The resource adds something distinct from existing entries.
* The entry fits an existing section without forcing a taxonomy change.
* The description is neutral, concise, specific, and evidence-led.
* The formatting matches the surrounding section.
* A scoresheet exists under `rubrics/scoresheets/` where required.

## Formatting Rules

Infer format from the surrounding section before editing.

* Preserve the existing heading structure, Contents anchors, and any back-to-top links.
* Preserve badges, banners, infographics, the Contents list, executable-asset sections, and contributor blocks.
* Match the section's existing format: bullet list, table, heading, or grouped subsection.
* Use HTTPS links and canonical names.
* Keep descriptions short, starting with a capital letter and ending with a full stop.
* Do not use title case for descriptions.
* Do not start descriptions with "A" or "An".
* Do not perform broad formatting changes unless explicitly asked.

## Link Quality Rules

Verify that:

* The link resolves and points to the canonical source.
* Repository links point to the main project, not an arbitrary fork.
* Paper links prefer the official publisher page, arXiv, or DOI.
* Documentation and standard links prefer official sources.
* Dataset and benchmark links prefer official pages or maintained repositories.
* URLs do not include avoidable tracking parameters.
* Shortened and login-gated links are avoided unless the section already accepts them.

## Description Style

Descriptions should be neutral, factual, specific, short, present tense where possible, and free of hype or unsupported claims.

Prefer:

* "Benchmark and evaluation environment for indirect prompt injection in tool-using agents."
* "Pattern for scoped tokens, credential brokers, and least-privilege impersonation."
* "Research framing long-term memory as persistent, untrusted input."
* "Framework for structured evaluation tasks, solvers, scorers, and logs."

Avoid:

* "Powerful", "revolutionary", "cutting-edge", "best", "latest", "industry-leading", "game-changing", "fastest"
* Unsupported claims about performance, adoption, or maturity
* Fear-based or sensational framing of attacks

## Section Placement Rules

1. Identify the closest existing section in the README taxonomy.
2. Compare the candidate with neighbouring entries.
3. Prefer the narrowest accurate section.
4. If two sections fit, choose the one where readers would most naturally look first.
5. Avoid creating a new section for a single item.
6. Do not move existing entries in bulk unless explicitly asked.
7. If placement is uncertain, state the trade-off and recommend one option.
8. Route detailed metadata entries to the matching `resources/` index; keep `README.md` to curated highlights.

## Duplicate Checking Rules

Before adding or approving, check for:

* Same URL, or the same project under a different URL
* Same paper title, or the same organisation and product name
* Renamed or mirrored repositories
* An existing entry in a nearby README section or a `resources/` index
* An existing issue or PR suggesting the same resource
* A stronger canonical source already listed

If a duplicate exists, recommend closing, editing, or redirecting rather than adding another entry.

## Decision Matrix

| Decision           | Use when                                                                                                       |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| Accept as-is       | In scope, canonical link, correct placement, matching format, neutral description, scoresheet present, no duplicate. |
| Edit as maintainer | Strong resource needing small fixes: wording, punctuation, canonical URL, placement, or local formatting.       |
| Request changes    | May fit, but evidence, link quality, relevance, placement, or a required scoresheet is materially unclear.      |
| Close              | Out of scope, duplicate, promotional, broken with no replacement, or no durable defensive substance.           |
| Park               | Promising but immature, not yet supported by the taxonomy, or requires maintainer judgement.                   |

## Issue-to-Entry Workflow

For suggestion issues:

1. Check scope and editorial fit.
2. Check source quality and evidence.
3. Check link quality.
4. Check duplicates across README and `resources/`.
5. Identify the best section.
6. Confirm whether a scoresheet is required and present.
7. Draft a neutral entry only if the resource qualifies.
8. Recommend accept, maintainer edit, request changes, close, or park, with a concise comment.

For broken-link issues:

1. Verify the reported link.
2. Search for a canonical replacement, preferring official sources over mirrors.
3. Preserve the entry if a durable replacement exists.
4. Recommend removal only when no credible replacement exists.
5. State the action clearly.

## Pull Request Review Workflow

1. Read the PR title, description, diff, and the completed PR checklist.
2. Confirm it changes only relevant files and includes no generated or local artefacts.
3. Check each added or changed link.
4. Check scope, source quality, and evidence.
5. Check duplicates.
6. Check section placement and that detailed entries land in the right `resources/` index.
7. Check local formatting and editorial standards.
8. Confirm a scoresheet is included where required.
9. Neutralise description language and remove unnecessary attack detail where needed.
10. Decide: accept, maintainer edit, request changes, close, or park, and draft a concise comment.

Minimise contributor friction. If the resource is clearly suitable and the issue is minor, recommend a maintainer edit rather than asking the contributor to revise.

## Executable Assets

The repository keeps first-party `agents/`, `skills/`, and `hooks/` that operationalise its patterns, rubrics, and chain models. When working on these:

* Keep instructions tool-aware but not unnecessarily tied to one vendor.
* Follow the frontmatter requirements for agents, instructions, and skills.
* Keep agent-facing instructions short enough to load frequently without wasting context.
* Treat the worked scoresheets under `rubrics/scoresheets/` as honest self-assessment, not endorsements; do not soften their findings.

## Stop and Ask

Stop and ask the maintainer before:

* Creating a new top-level section or changing the Contents structure
* Reordering large parts of the README or the `resources/` indexes
* Editing infographics, banners, badges, or visual assets
* Changing contribution rules, rubrics, or editorial standards
* Removing multiple entries
* Making judgement-heavy scope changes
* Editing files unrelated to the stated task

## Protected Areas

Do not edit, stage, or commit unless explicitly instructed:

* Badges, banner and gallery images, infographics, and visual assets
* The Contents list and any generated indexes
* Contributor lists and announcement or roadmap blocks
* Licence text
* The generated `site/` build output and `logs/`, `reports/`, and analysis exports
* `specs/`, `private/`, `scratch/`, `.local/`, and local-only or draft files
* Credentials, secrets, tokens, keys, and `.env*` files

If unsure whether a file belongs in the public repository, leave it untouched and explain the concern.

## Build and Validation

The documentation platform uses MkDocs. When asked to validate documentation changes:

* `pip install -r requirements.txt`
* `mkdocs build` to validate the transitional MkDocs configuration
* `markdownlint` across changed Markdown files to lint Markdown
* `markdown-link-check` across changed Markdown files to check links

Do not commit the generated `site/` directory. All documentation must remain readable in GitHub without the site.

## Maintainer Comment Style

Comments should be warm, concise, respectful, and decision-oriented.

Prefer:

* "Thank you for the suggestion. This is relevant, the link is canonical, and I would place it under Benchmarks with a shorter neutral description."
* "Thank you — useful resource. I would accept this with a small maintainer edit to remove the ranking claim."
* "Thank you for raising this. I would close it as a duplicate because the resource already appears under Tool Use, MCP, and Runtime Security."
* "Thank you — I would park this until the list has a clearer section for this category."

Avoid long explanations, harsh or defensive wording, and asking contributors for trivial edits the maintainer can safely make.

## Final Response Pattern

When finishing a task, summarise:

* What was reviewed
* Decision or recommended decision
* What changed, if anything
* Any risks or uncertainties
* Suggested maintainer comment, if relevant
* Follow-up needed, if any

Do not modify `README.md` or other files unless explicitly asked.
