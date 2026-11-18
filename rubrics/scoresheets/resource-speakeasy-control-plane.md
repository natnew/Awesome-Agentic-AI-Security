---
rubric: resource-quality-rubric.md
artefact: Speakeasy control plane
artefact_url_or_path: https://github.com/speakeasy-api/gram
artefact_version: 2099875521be1e389a7b5b716b19993c448bb7bd
last_checked: 2026-10-26
scored_by: Codex (single-rater documentation review for hashkader47)
scored_on: 2026-10-26
rater_count: 1
---

# Resource scoresheet

## Scores

<!-- markdownlint-disable MD013 -->
| Criterion | Score (0–3) | Evidence | Notes |
| --- | --- | --- | --- |
| Relevance to agentic AI security | 3 | Source README: Connect and Distribute describe MCP access, OAuth and role-based permissions; Introduction describes tool-call and access logs. | Addresses tool authority, credentials and audit at the MCP boundary. |
| Evidence-based claims | 2 | Public AGPL-3.0 implementation and [gateway documentation](https://www.speakeasy.com/docs/ai-control-plane/mcp-gateway) support the listed functions. | Vendor documentation and code, not independent security effectiveness evidence. No benchmark claim is made. |
| Clarity and editorial quality | 2 | Source README separates Observe, Secure, Connect, Distribute and Running locally; technical documentation explains remote, tunneled and built MCP backends. | Public implementation is evaluable; some repository links retain legacy technical names. |
| Recency and ongoing relevance | 3 | Public source commit recorded above, reviewed on 2026-10-26; current gateway documentation describes MCP session proxying and team access. | Maintained implementation of current MCP access controls. |
| Transparency of limitations | 2 | [Concepts](https://www.speakeasy.com/docs/ai-control-plane/concepts) distinguishes policy enforcement and observability; local setup is explicitly for development. | Entry states gateway-routing scope, separate execution isolation, and absence of independent deployment testing. Hosted features and self-hosted source capabilities should be assessed per deployment. |
<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include with the stated scope and evidence caveats**

## Reviewer commentary

The useful distinction is enterprise identity mapped to MCP tool permissions,
with attributable call logs for investigation and governance. This is a gateway
control, not an execution sandbox or proof of resistance to prompt injection.
The assessment uses vendor documentation and public source; a deployment-specific
security evaluation would strengthen the evidence. The submitter is helping
Speakeasy with directory outreach, so this is a disclosed affiliated assessment
rather than an independent endorsement.
