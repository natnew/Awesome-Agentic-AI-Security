---
rubric: resource-quality-rubric.md
artefact: Patronus Ark
artefact_url_or_path: https://github.com/patronus-protect/patronus-security
artefact_version: 5a5f7b4129c139cf121845d8c55a5a49e01c90b0
last_checked: 2026-09-26
scored_by: Codex (AI-assisted assessment for affiliated contributor DominikHommer)
scored_on: 2026-09-26
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | [Threat model][threat] identifies untrusted input, tool outputs, and outgoing tool calls as scan boundaries. | Directly relevant detection component; does not govern a full agent execution lifecycle. |
| Evidence-based claims | 2 | [README][readme] provides Rust and Python examples and describes native and model-backed scanning. The [threat model][threat] separates classification from enforcement. | Implementation and documentation support the bounded catalogue description. No independent effectiveness assessment or benchmark reproduction was performed for this submission. |
| Clarity and editorial quality | 2 | [README][readme] separates installation, quickstart, scanning layers, and licensing. [Threat model][threat] lists assumptions and failure behaviour. | Practical documentation; understanding degraded model results still requires integration-specific review. |
| Recency and ongoing relevance | 2 | [Reviewed commit][commit], dated 2026-09-23, fixes false-positive username detection. | Recent implementation evidence; long-term maintenance and independent adoption are not established by this review. |
| Transparency of limitations | 2 | [Threat model][threat] explicitly covers false positives, missed attacks, trusted-host assumptions, missing assets, and lack of trajectory tracking or sandboxing. | Specific boundaries are documented; deployment-specific residual risk is not quantified here. |

## Aggregate

- Raw total: **10 / 15**
- Floor rule triggered: no
- Verdict: **Include with caveats**

## Reviewer commentary

The strongest evidence is the documented separation of detection signals from
application-enforced controls and the concrete integration examples.
The main gap is independent evaluation of detection effectiveness in realistic
agent workflows; this assessment reviews documentation, not runtime performance.
Treat the library as one input to application policy, with separate tool
permissions, approval gates, and sandboxing where required.
Independent, reproducible evaluation would strengthen a future reassessment.

Disclosure: DominikHommer is affiliated with Casdo Labs, the producer of Patronus
Ark. This is an AI-assisted contributor assessment, not an independent endorsement
or a maintainer acceptance decision.

[readme]: https://github.com/patronus-protect/patronus-security/blob/5a5f7b4129c139cf121845d8c55a5a49e01c90b0/README.md
[threat]: https://github.com/patronus-protect/patronus-security/blob/5a5f7b4129c139cf121845d8c55a5a49e01c90b0/docs/concepts/threat-model.md
[commit]: https://github.com/patronus-protect/patronus-security/commit/5a5f7b4129c139cf121845d8c55a5a49e01c90b0
