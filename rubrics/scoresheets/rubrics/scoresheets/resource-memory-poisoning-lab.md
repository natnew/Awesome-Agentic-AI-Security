---
rubric: resource-quality-rubric.md
artefact: Memory Poisoning Lab
artefact_url_or_path: https://github.com/RishabhPande/memory-poison-lab
artefact_version: 31a1da17ba9d65ca1466be94ad9a231f230253bc
last_checked: 2026-11-14
scored_by: RishabhPande (author self-assessment, not independent review)
scored_on: 2026-11-14
rater_count: 1
---

## Scores

| Criterion | Score (0-3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | README, "Why this exists" and "How it fits together": controlled memory writes, storage labels, source origin and later decisions. | Focused teaching resource for one execution surface, not a complete agent-security framework. |
| Evidence-based claims | 2 | README scenario table, robustness-suite description and evidence boundaries link the claims to supplied scenarios and public tests. | Scripted examples are not independent measurements of LLM behaviour or production controls. No new execution or independent replication is claimed by this assessment. |
| Clarity and editorial quality | 2 | README separates the scenario mechanics, backend setup, repair limits and evidence boundaries. | The proposed catalogue entry labels this as a teaching range rather than a deployment recommendation. |
| Recency and ongoing relevance | 2 | Public repository and README checked on 2026-11-14 at the commit recorded above. | Current memory-provenance topic; short project history does not establish durable maintenance or adoption. |
| Transparency of limitations | 3 | README A4, A6 and "Evidence boundaries": pre-import origin cannot be recovered; repair alone cannot remove a preference without an owner policy; the scripted agent acts only on parseable claims. | Specific worked limits, not a universal defence claim. |

## Aggregate

- Raw total: 11 / 15
- Floor rule triggered: no
- Verdict: Include with caveats, proposed for maintainer review.

## Reviewer commentary

This author self-assessment supports inclusion as a small teaching tool, not as an independently validated security control or model benchmark. Its useful distinction is between a memory entry's changeable storage label and recorded source origin. Evidence is limited to supplied synthetic scenarios and public code; independent reproduction and model-backed evaluation would strengthen it. The maintainer should review the scores and placement rather than treat this self-assessment as an acceptance decision.
