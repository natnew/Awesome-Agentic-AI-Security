---
rubric: resource-quality-rubric.md
artefact: Sunglasses
artefact_url_or_path: https://github.com/sunglasses-dev/sunglasses
artefact_version: v0.6.0 (2026-09-26)
last_checked: 2026-09-26
scored_by: azrollin (maintainer of Sunglasses)
scored_on: 2026-09-26
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 3 | Covers the inbound input an agent reads (text and files), the tool call itself (Claude Code PreToolUse hook with credential paths and a user policy) and MCP tool descriptors (`sunglasses pin` records a SHA-256 of each and reports changes). | Scoped to detection and tool-call blocking on one machine, not multi-agent or memory flows. |
| Evidence-based claims | 2 | The pattern and category counts are what the published 0.6.0 package reports, and the README documents its exit codes and what "incomplete" means. Public test suite and changelog. | No independent measured detection rate against other scanners. The maintainer is the rater. |
| Clarity and editorial quality | 2 | README explains each surface (CLI, MCP server, hook) with commands and exit codes, and defines not inspected and incomplete before using them. | Long README with several product surfaces in one page. |
| Recency and ongoing relevance | 3 | Latest release v0.6.0 published 2026-09-26 (the day of this review), 30 releases since 2026-03-30. | Actively maintained. |
| Transparency of limitations | 3 | README states a clean result is "a confidence floor and not a guarantee", reports unreadable content as not inspected, and corrects an earlier language claim to English-first with a measured per-language breakdown. The changelog keeps a known issues section. | Limitations are specific and versioned. |

## Aggregate

- Raw total: 13 / 15
- Floor rule triggered: no
- Verdict: Include in awesome list / cite from field guide.

## Reviewer commentary

Self-assessment by the maintainer, so the maintainers of this list should weigh it accordingly. Strongest on recency and on stating its own limits, including a public correction of an earlier language coverage claim. Weakest on evidence-based claims, since there is no independent measured comparison of detection rates; the counts are reproducible from the package itself.
