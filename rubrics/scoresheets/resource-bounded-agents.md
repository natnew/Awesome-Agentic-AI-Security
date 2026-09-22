---
rubric: resource-quality-rubric.md
artefact: "Bounded Agents: Delegation Security for Multi-Agent AI Systems"
artefact_url_or_path: https://arxiv.org/abs/2608.15888
artefact_version: arXiv:2608.15888v1
last_checked: 2026-08-22
scored_by: xmuruaga
scored_on: 2026-08-22
rater_count: 1
---

# Resource scoresheet

## Scores

<!-- markdownlint-disable MD013 -->
|Criterion|Score (0-3)|Evidence|Notes|
|---|---|---|---|
|Relevance to agentic AI security|3|Paper §§1 and 3–5 define the delegated-authority problem, multi-agent threat model, session-scoped authorisation model, composition constraints, and external PEP/PDP enforcement architecture.|Strong fit for credentials, identity, delegated authority, and runtime enforcement.|
|Evidence-based claims|3|Paper §6 and §6.6's Evaluation Summary table break down 3,154 instances across InjecAgent, ASB, AgentDojo, delegation-chain scenarios, and adaptive attacks; Appendix I identifies the public code, result files, and verification scripts.|Quantitative claims are tied to named cohorts, protocols, and reproducible artefacts.|
|Clarity and editorial quality|2|Paper §§3–6 separately define the threat model, APC abstractions, six-condition policy lifecycle, and evaluation protocol; §7.2 separates formal guarantees from empirical evidence.|Precise and structured, although the density of notation raises the entry cost for non-specialist readers.|
|Recency and ongoing relevance|3|arXiv:2608.15888v1 was published in 2026; Appendix I links the public reference implementation and evaluation artefacts, checked on 2026-08-22.|Current and directly aligned with multi-agent delegation risks.|
|Transparency of limitations|3|Paper §§3.5, 4.6, 7.2, and 7.4 state non-goals and assumptions covering policy completeness, serialised admission, static restrictions, per-session state, parameter-level validation, and production hardening.|Limitations are specific and connected to the formal guarantees and evaluation scope.|
<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **14 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

The paper is directly relevant to delegated authority and composed outcomes in
multi-agent systems, and it provides unusually detailed evaluation and public
reproduction artefacts. Its guarantees remain conditional on policy
completeness and serialised admission, while parameter-level validation,
cross-session composition, and production hardening require complementary
controls.
