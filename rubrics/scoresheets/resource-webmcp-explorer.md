---
rubric: resource-quality-rubric.md
artefact: WebMCP Explorer
artefact_url_or_path: https://github.com/CorsenAI/webmcp-explorer
artefact_version: v2.6.1 (2026-11-10)
last_checked: 2026-11-14
scored_by: CorsenAI (Corsen AI, producer of the artefact; self-assessment)
scored_on: 2026-11-14
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | Reviews the tool contracts a web page registers for agents through WebMCP, which the draft's own security section treats as an attack surface: tool poisoning in descriptions (6.3.1.1), misrepresentation of intent such as read-only claims (6.3.2), and over-parameterisation (6.3.3). An optional local MCP bridge asks for approval before each call by default. | Scoped to the tool surface of agents working in Chrome through WebMCP; memory, credential brokering, and multi-agent flows are out of scope, so adequate rather than strong. |
| Evidence-based claims | 2 | Rules are in the public Apache-2.0 source. QUALIFICATION.md (v2.6.1) records 805 unit cases on three operating systems, 76 of 76 functional browser scenarios on two, and a before-and-after measurement of the agent-instruction rule on 488 real descriptions from 12 public projects and 16 published tool-poisoning phrasings. | All figures are the producer's own; there is no independent or comparative evaluation, and the report itself notes that the real-world set does not bound the new rule's errors. |
| Clarity and editorial quality | 2 | The README separates what each feature does from a "Security boundaries" section; findings in the extension show their evidence, severity, and source. | Dense in places; written in American English, which the rubric does not require of external resources. |
| Recency and ongoing relevance | 3 | v2.6.1 was qualified on 10 November 2026; recent releases follow Chrome's WebMCP implementation and the draft (origin-trial token handling in 2.6.0, a two-tier instruction rule in 2.6.1). | WebMCP itself is an experimental draft, so this currency is also a dependency on a moving target. |
| Transparency of limitations | 3 | README: "Tool metadata and read-only hints are untrusted. A grade is not a security certification." QUALIFICATION.md states that instruction indicators match English text and miss rephrased or non-English instructions, that metadata cannot attest callbacks or backend authorisation, and that no Windows functional result is claimed for 2.6.1. | Limitations are specific and version-scoped rather than a generic disclaimer. |

## Aggregate

- Raw total: 12 / 15
- Floor rule triggered: no
- Verdict: Include in awesome list / cite from field guide.

## Reviewer commentary

This is a self-assessment by the producer, recorded with that conflict of interest; the maintainers' own scoring should prevail. Strongest on stating its limits and on recency. Weakest on evidence: every measurement comes from the producer and covers English text only, and the user base is still small (31 Chrome Web Store users on 14 November 2026). The score would rise with an independent evaluation against a fixed set of poisoned and benign WebMCP tool contracts.
