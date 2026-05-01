---
rubric: resource-quality-rubric.md
artefact: Prompt Injection to Tool Misuse (chain stub)
artefact_url_or_path: docs/agentic-attack-chains/prompt-injection-tool-misuse.md
artefact_version: HEAD on branch claude/optimistic-chandrasekhar-59a942 (post PR #2)
last_checked: 2026-05-01
scored_by: maintainer (worked example)
scored_on: 2026-05-01
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 3 | Page is the canonical entry for the *Prompt Injection → Tool Misuse* chain in the [chain library README](../../docs/agentic-attack-chains/README.md), one of the foundational chains in the field guide's progressive-breach model. | Central, not tangential; chain is named in [docs/01-threat-model.md](../../docs/01-threat-model.md) and [docs/03-agentic-attack-chains.md](../../docs/03-agentic-attack-chains.md). |
| Evidence-based claims | 2 | The page's claims (untrusted input bypasses policy check; layered controls interrupt the chain) align with referenced architecture in [patterns/secure-tool-calling.md](../../patterns/secure-tool-calling.md). The [attack-chain-template](../../docs/agentic-attack-chains/attack-chain-template.md) fields *Detection signals*, *Test case*, and *Residual risk* are not yet filled in, so empirical claims that would normally live in those fields are absent. | Adequate, not strong: claims are well-aligned but not yet fully evidenced through the template structure. |
| Clarity and editorial quality | 3 | Two well-chosen Mermaid diagrams (sequenceDiagram for the attack, block-beta for layered defence) with one-sentence captions describing the attack and defence themselves, not the diagrams. British English; calm, evidence-led tone. | Diagrams reuse repo-native vocabulary (*source labelling*, *instruction-data separation*, *policy decision*, *tool broker*, *outcome control*). |
| Recency and ongoing relevance | 3 | Updated 2026-05-01 (this branch). Aligns with the current chain taxonomy. | Stub was created 2026-05-01 and updated the same day with diagrams. |
| Transparency of limitations | 2 | The line *"See [attack-chain-template.md](../../docs/agentic-attack-chains/attack-chain-template.md) for full structure"* implicitly acknowledges that the full template fields are not yet filled in. | Adequate but could be lifted to 3 by adding an explicit *Status* line stating "stub; full template fields not yet completed." |

## Aggregate

- Raw total: **13 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

Strongest dimension is clarity: the recently added attack and defence diagrams give the page genuine teaching value, and the captions describe the chain rather than the diagram literally. Weakest is evidence-based claims, because the attack-chain-template fields (detection signals, test case, residual risk) are not populated — the page is currently descriptive rather than fully analytic. The single most useful follow-up would be to fill in those template fields so the page can ground concrete detection and mitigation work, after which the score would lift to 14–15.
