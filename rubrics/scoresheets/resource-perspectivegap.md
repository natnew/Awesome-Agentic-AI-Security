---
rubric: resource-quality-rubric.md
artefact: PerspectiveGap: A Benchmark for Multi-Agent Orchestration Prompting
artefact_url_or_path: https://arxiv.org/abs/2606.08878
artefact_version: arXiv:2606.08878 and public repository as checked on 2026-07-25
last_checked: 2026-07-25
scored_by: WhymustIhaveaname
scored_on: 2026-07-25
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---:|---|---|
| Relevance to agentic AI security | 2 | Sections 3 and 6 define role-specific information boundaries and measure both distractor leakage and broader out-of-role leakage across multi-agent orchestration prompts. | Directly addresses information exposure between sub-agent roles, but does not evaluate deployed tools, credentials, memory, or runtime controls. |
| Evidence-based claims | 3 | Sections 3 and 5 specify 110 scenarios across 10 topologies, two task formats, deterministic metrics, and 14,520 evaluations over 33 commercial models. The public repository contains the scenarios, scoring code, and results. | Quantitative claims are tied to released benchmark artefacts and explicit scoring rules. |
| Clarity and editorial quality | 2 | The paper separates role-fragment assignment from free-form prompt writing, defines strict pass and partial-credit diagnostics, and explains why leakage rates may exceed 100%. | The benchmark is clearly structured, although some metric details require careful reading. |
| Recency and ongoing relevance | 3 | The paper and public benchmark were released in 2026, and the repository exposes current data, evaluation code, and leaderboard links. | Current work on multi-agent orchestration and context boundaries. |
| Transparency of limitations | 2 | The Limitations section states that the benchmark covers 10 topologies rather than all orchestration patterns, evaluates prompt artefacts rather than downstream execution, lacks external annotator-agreement measurements, and may penalise some paraphrases. | Specific scope boundaries are stated, but downstream security consequences are not measured. |

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include**

## Reviewer commentary

PerspectiveGap provides a concrete way to inspect information boundaries in multi-agent orchestration prompts, with public scenarios and deterministic scoring. Its security value is diagnostic rather than end-to-end: it exposes omissions and cross-role leakage at the handoff artefact, but does not test whether those errors produce unsafe downstream actions. The catalogue entry should retain that boundary explicitly.
