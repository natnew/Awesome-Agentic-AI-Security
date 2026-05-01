---
rubric: benchmark-quality-rubric.md
artefact: AgentDojo
artefact_url: https://github.com/ethz-spylab/agentdojo
artefact_version: as published, NeurIPS 2024 D&B Track
scored_by: maintainer (worked example)
scored_on: 2026-05-01
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Scope and relevance to agentic systems | 3 | The benchmark places agents in realistic environments (Slack, Banking, Travel, Workspace) and evaluates them on tasks that exercise tool use, indirect prompt injection through tool results, and multi-step planning. This maps directly to multiple chains in this field guide: [Prompt Injection → Tool Misuse](../../docs/agentic-attack-chains/prompt-injection-tool-misuse.md), [Hidden Instruction in Document Ingestion](../../docs/agentic-attack-chains/hidden-instruction-document-ingestion.md), and aspects of [Code-Execution Side Effects](../../docs/agentic-attack-chains/code-execution-side-effects.md). | Strong: covers multiple agentic surfaces with realistic adversarial scenarios. |
| Methodological soundness | 3 | Published in the NeurIPS 2024 Datasets and Benchmarks Track, which subjects benchmarks to peer review for methodology, baselines, and threats-to-validity. Explicit threat model (attacker controls a subset of tool outputs); baselines for both attack success and task utility; ablations across model and defence configurations. | Strong: pre-published methodology with explicit threat model and ablations. |
| Evidence requirements | 3 | The repository publishes per-task definitions, the full set of tools and environments, the attack injection points, and supports recording per-trial transcripts. Results are reproducible per-task, not only aggregate. | Strong. |
| Transparency of limitations | 2 | The paper discusses limitations including the constructed-environment trade-off (realistic but not real), English-only prompts, the attack realism choices, and the fixed task set. | Adequate: limitations are stated and reasoned but not exhaustively quantified; the document does not work through specific scenarios where the benchmark's conclusions stop applying. |
| Reproducibility | 3 | Pip-installable Python package with pinned dependencies; deterministic execution given a fixed seed and model; CI-runnable; public leaderboard tracks runs across model and defence configurations. | Strong. |

## Aggregate

- Raw total: **14 / 15**
- Floor rule triggered: no
- Verdict: **Recommended; cite confidently**

## Reviewer commentary

AgentDojo is a load-bearing benchmark for agentic prompt-injection and tool-use evaluation: it covers multiple chains from this repo's library, has been peer-reviewed at a venue that scrutinises methodology, and ships reproducible artefacts including a pip-installable runtime and per-task definitions. The single area for improvement is *Transparency of limitations* — the existing limitations discussion is honest but not exhaustively quantified, and a reader has to infer the boundary conditions from the construction of the environments rather than from an explicit scope-of-claims statement. This is a strong candidate for the first concrete entry in [docs/06-benchmarks.md](../../docs/06-benchmarks.md)'s currently empty catalogue.
