---
rubric: resource-quality-rubric.md
artefact: Little Canary
artefact_url_or_path: https://github.com/hermes-labs-ai/little-canary
artefact_version: v0.3.6 (2026-09-09)
last_checked: 2026-09-10
scored_by: roli-lpci (Hermes Labs)
scored_on: 2026-09-10
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | Addresses the inbound-input stage of the tool-use surface: untrusted text is routed through a sacrificial model before it can influence the primary agent's context or actions (README, "Little Canary lets untrusted language affect a small model..."). | Scoped to one surface (inbound sensing), not multi-agent, memory, or credential flows, so adequate rather than strong. |
| Evidence-based claims | 2 | Load-bearing claims are sourced to a technical note (Zenodo DOI 10.5281/zenodo.21818564) and a public CI-gated repository with a PyPI release. The README explicitly states the note "does not claim universal detection, formal security, or aggregate accuracy for the current release." | Quantitative accuracy figures are deliberately withheld pending further evaluation, which is disclosed rather than asserted; this keeps the claim honest but means recommendation strength rests on architecture description, not measured effectiveness. |
| Clarity and editorial quality | 2 | README states the pipeline plainly (structural preflight → sacrificial model → response-residue analysis → PASS/FLAG/BLOCK) with a short diagram; terms are defined before use. | Calm, non-promotional tone consistent with the field guide's editorial standard. |
| Recency and ongoing relevance | 3 | Latest release v0.3.6 published 2026-09-09 (one day before this review); repository pushed the same week. | Actively maintained; addresses the current inbound prompt-injection threat this field guide already tracks. |
| Transparency of limitations | 3 | README states outright: "Little Canary is an inbound risk sensor, not a security guarantee or an agent runtime," and the technical note disclaims universal detection, formal security, and aggregate accuracy for the current release. | Limitation is specific and version-scoped rather than a generic disclaimer. |

## Aggregate

- Raw total: 12 / 15
- Floor rule triggered: no
- Verdict: Include in awesome list / cite from field guide.

## Reviewer commentary

Strongest on recency and on stating its own limits: the maintainers disclaim aggregate-accuracy and security-guarantee claims for the current release rather than overstating maturity. Weakest on evidence-based claims, since the entry rests on architecture and provenance (CI, PyPI, a technical note) rather than an independent, measured detection-rate comparison against other inbound sensors in this catalogue. Score would rise with a published, reproducible evaluation against a fixed attack/benign manifest.
