---
rubric: resource-quality-rubric.md
artefact: aaesverify
artefact_url_or_path: https://github.com/aaes-ai/aaesverify
artefact_version: v0.2.0 (85c1bccc36ec0edead9d3952377a0e98ed72b299)
last_checked: 2026-10-13
scored_by: alschell (AAES-affiliated contributor; self-assessment)
scored_on: 2026-10-13
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | The upstream README's verification and limitations sections describe review of retained agent-action evidence. | Narrow evidence-integrity surface; no runtime prevention or agent evaluation. |
| Evidence-based claims | 2 | Tagged source, public synthetic sample, test vectors, release provenance, and documented exit codes. | Vendor-maintained evidence; independent validation and adoption are not established. |
| Clarity and editorial quality | 2 | README separates commands, verification checks, trust assumptions, formats, and licence. | Export-specific terminology requires reading the specification. |
| Recency and ongoing relevance | 3 | v0.2.0 source and release are current within twelve months at the checked date. | New repository; maintenance and external usage should be reassessed. |
| Transparency of limitations | 3 | README explicitly excludes completeness, input truth, decision correctness, provider execution, and absence of conflicting histories; documents shared producer code and the witness-less sample. | Ordinary integrity success does not establish independence. |

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Propose inclusion, subject to independent maintainer review**

## Reviewer commentary

This is an affiliated contributor's self-assessment, not an independent
endorsement. The tool's useful contribution is a runnable, offline check of
one documented evidence format with explicit trust limits. It is less mature
than widely adopted evaluation tools and does not test live agent controls.
The maintainer should reassess the scores and whether the narrow format is
useful to this catalogue's readers.
