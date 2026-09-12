---
rubric: resource-quality-rubric.md
artefact: Gram
artefact_url_or_path: https://github.com/speakeasy-api/gram
artefact_version: upstream commit e9baacc6cea7cff42e8987b5e84a4a60f39c79f0
last_checked: 2026-09-12
scored_by: Abdul Baari Davids
scored_on: 2026-09-12
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
| --- | --- | --- | --- |
| Relevance to agentic AI security | 3 | The project describes an AI control plane that connects and manages agents and MCPs, with policy enforcement and granular access control. | Strong: it directly addresses runtime control of tool access and MCP connections. |
| Evidence-based claims | 2 | The public AGPL-3.0 repository includes source code and project documentation describing its permissions, policy, threat-detection, and observability features. | Adequate: the reviewed evidence is first-party project material, not an independent effectiveness evaluation. |
| Clarity and editorial quality | 2 | The repository describes the control-plane scope and lists the relevant operational capabilities. | Adequate: the published scope is clear, although evaluators must map features to their own agent and MCP deployments. |
| Recency and ongoing relevance | 3 | The public repository showed recent activity when checked on 2026-09-12. | Strong: the project is actively maintained at the time of review. |
| Transparency of limitations | 2 | The repository exposes implementation and documentation, allowing deployment-specific review of policy and access-control configuration. | Adequate: project documentation does not establish independent coverage across threat models or deployments. |

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

Gram is a direct fit for the repository's agentic execution-security scope because it focuses on controlling connections between agents and MCPs, including policy enforcement and access control. The main limitation is evidential: the reviewed source is project-maintained material rather than an independent effectiveness evaluation. Readers should validate its policy coverage, identity integration, audit retention, and threat-model fit in their own deployment, alongside least-privilege design, approval gates, sandboxing, and testing.
