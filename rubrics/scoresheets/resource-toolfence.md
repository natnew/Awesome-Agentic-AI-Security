---
rubric: resource-quality-rubric.md
artefact: "ToolFence: Fine-Grained Authorization for Secure Tool-Using LLM Agents"
artefact_url_or_path: https://arxiv.org/abs/2609.37196
artefact_version: arXiv:2609.37196v1 (2026-09-29)
last_checked: 2026-10-03
scored_by: Claude (single-rater assessment)
scored_on: 2026-10-03
rater_count: 1
---

# Resource scoresheet

## Scores

<!-- markdownlint-disable MD013 -->
|Criterion|Score (0-3)|Evidence|Notes|
|---|---|---|---|
|Relevance to agentic AI security|3|Argument-level tool-call authorisation with provenance tracking and a deterministic monitor outside the model, addressing indirect prompt injection.|Direct fit for tool brokers, scopes, and approval gates.|
|Evidence-based claims|2|Evaluated on 629 AgentDojo injection-task pairs with three backbone models and six baselines, including CaMeL.|Author-reported results; no code released and no adaptive-attacker evaluation.|
|Clarity and editorial quality|2|Separates cross-tool escalation from within-tool hijacking and defines the blueprint, provenance classes, monitor, and judge roles.|Clear framing; the judge's capability-extension step needs careful reading.|
|Recency and ongoing relevance|3|arXiv v1 published on 2026-09-29; checked on 2026-10-03.|Current and aligned with provenance-aware authorisation work.|
|Transparency of limitations|2|Authors state utility loss when authority-sensitive values appear only in untrusted sources, residual attacks when the model chooses among authorised values, and the absence of adaptive attacks.|No code or availability statement is provided.|
<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

The paper extends tool allow-listing to argument-level authority and shows why
allow-lists alone leave within-tool hijacking open. Results are limited to
AgentDojo without adaptive attackers, and no code is released, so the entry
should keep those caveats visible. Link only the arXiv page: unrelated projects
share the name.
