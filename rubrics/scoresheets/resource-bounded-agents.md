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
|Relevance to agentic AI security|3|The paper centres on delegated authority, multi-agent chains, tool actions, session state, and composition closure.|Strong fit for credentials, identity, delegated authority, and runtime enforcement.|
|Evidence-based claims|3|The methodology reports 3,154 evaluation instances across public benchmarks, live-agent runs, delegation-chain scenarios, and adaptive attacks; code, result files, and verification scripts are public.|Quantitative claims are tied to named cohorts and reproducible artefacts.|
|Clarity and editorial quality|2|The paper defines the APC model, six-condition predicate, threat model, formal results, evaluation protocol, and guarantee tiers in separate sections.|Precise and structured, although the density of notation raises the entry cost for non-specialist readers.|
|Recency and ongoing relevance|3|Published in 2026 with a public reference implementation and evaluation artefacts; checked on 2026-08-22.|Current and directly aligned with multi-agent delegation risks.|
|Transparency of limitations|3|The scope and limitations sections identify policy completeness, serialised admission, static restrictions, per-session state, parameter-level validation, and production hardening boundaries.|Limitations are specific and connected to the formal guarantees and evaluation scope.|
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
