---
rubric: resource-quality-rubric.md
artefact: Harness Handbook: Making Evolving Agent Harnesses Readable, Navigable, And Editable
artefact_url_or_path: https://arxiv.org/abs/2607.13285
artefact_version: arXiv v1, submitted 2026-07-14
last_checked: 2026-07-20
scored_by: Codex
scored_on: 2026-07-20
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | The abstract frames the agent harness as the system layer that constructs prompts, manages state, invokes tools, and coordinates execution, then introduces behaviour-to-code mapping for locating implementation sites. | Adequate: directly relevant to agent runtime review and change-impact analysis, but the paper is software-engineering focused rather than security-control focused. |
| Evidence-based claims | 2 | The paper reports an evaluation on modification requests from two open-source harnesses and distinguishes the proposed Harness Handbook and Behavior-Guided Progressive Disclosure method from the empirical planning results. | Adequate: load-bearing claims are tied to an experimental setup, although full reproduction depends on the paper artefacts and implementation details. |
| Clarity and editorial quality | 2 | The resource clearly defines the problem of behaviour localisation and explains the representation and progressive-disclosure workflow at a level useful to reviewers of agent codebases. | Adequate: the framing is clear, though readers seeking security-specific review procedures must translate it into their own assurance workflow. |
| Recency and ongoing relevance | 3 | The arXiv record shows v1 submitted on 2026-07-14 and records this review's last-checked date as 2026-07-20. | Strong: current research on a live agent-engineering problem. |
| Transparency of limitations | 2 | The abstract scopes the contribution to locating code locations for modification and reports evaluation across two open-source harnesses. | Adequate: the scope boundary is visible, but limitations around security assurance, tool-specific harness designs, and production deployment are not the primary focus. |

## Aggregate

- Raw total: **11 / 15**
- Floor rule triggered: no
- Verdict: **Include with reviewer-noted caveats**

## Reviewer commentary

The strongest reason to include this paper is that it addresses a practical discoverability gap in agent harnesses: behaviours are often implemented across prompts, state code, tools, and execution middleware. Its weakest dimension for this repository is that it is not primarily a security paper, so readers should treat it as support for inspectability and change-impact review rather than as a standalone control. The score would increase with released artefacts, security-specific examples, or worked guidance showing how behaviour localisation integrates with policy, testing, and audit evidence.
