---
rubric: resource-quality-rubric.md
artefact: OWASP Top 10 for LLM Applications
artefact_url_or_path: https://genai.owasp.org/llm-top-10/
artefact_version: 2025 release
last_checked: 2026-05-01
scored_by: maintainer (worked example)
scored_on: 2026-05-01
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | Several items map directly to agentic surfaces — *LLM01 Prompt Injection* covers the influence stage of the [Prompt Injection → Tool Misuse chain](../../docs/agentic-attack-chains/prompt-injection-tool-misuse.md); *LLM06 Excessive Agency* aligns with [Credential Overreach](../../docs/agentic-attack-chains/credential-overreach.md) and [Workflow Automation Abuse](../../docs/agentic-attack-chains/workflow-automation-abuse.md); *LLM02 Sensitive Information Disclosure* aligns with [Code-Execution Side Effects](../../docs/agentic-attack-chains/code-execution-side-effects.md). | Adequate: addresses agentic surfaces but is LLM-application-centric rather than agent-execution-centric. Multi-agent contamination, MCP capability governance, and memory-poisoning lifecycles are not first-class topics. |
| Evidence-based claims | 2 | Authored by a community of named experts; each item lists prevention strategies with references to public incidents and research papers; load-bearing claims are sourced. | Adequate. Some prevention recommendations are descriptive of patterns rather than empirically validated; not all items distinguish empirical claim from informed opinion. |
| Clarity and editorial quality | 3 | Each item follows the same structure (description → common examples → prevention). Definitions are precise; the document is widely used as a reference and is well-edited. | Sets the bar for accessible LLM-security reference material. |
| Recency and ongoing relevance | 3 | 2025 release current within twelve months as of *last_checked*. OWASP maintains the list with versioned releases and a public revision history. | Strong. |
| Transparency of limitations | 2 | Scope statement is explicit (LLM applications, not full agentic systems); each item acknowledges that the prevention list is non-exhaustive. | Adequate. Limitations are stated but not quantified or worked through with examples; the document does not enumerate what it explicitly does *not* claim to cover (e.g., multi-agent orchestration, MCP governance). |

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

Strongest dimensions are clarity and recency: the document is a maintained, well-edited reference that contributors and reviewers can use as a shared vocabulary. Weakest dimensions are relevance and transparency, because the document is LLM-application-shaped rather than agent-execution-shaped — several agentic surfaces this field guide treats as first-class (multi-agent contamination, MCP capability governance, memory lifecycle) sit at the edges of OWASP's framing. Cite as a foundational standard and a shared vocabulary, but pair with chain-specific resources for the agentic-execution surfaces it does not cover in depth.
