---
rubric: resource-quality-rubric.md
artefact: BlindGuard: Safeguarding LLM-based Multi-Agent Systems under Unknown Attacks
artefact_url_or_path: https://aclanthology.org/2026.acl-long.1819/
artefact_version: ACL 2026 long paper (Anthology ID 2026.acl-long.1819)
last_checked: 2026-07-24
scored_by: maintainer (contribution support)
scored_on: 2026-07-24
rater_count: 1
---

# Resource scoresheet

## Scores

<!-- markdownlint-disable MD013 -->
|Criterion|Score (0-3)|Evidence|Notes|
|---|---|---|---|
|Relevance to agentic AI security|3|The abstract explicitly frames propagation vulnerability in LLM-based multi-agent systems and focuses on malicious-agent influence over collective decision-making.|Strong fit for multi-agent propagation and interaction-security concerns in this repository.|
|Evidence-based claims|2|Peer-reviewed ACL long paper with a stated method and experimental results; claims are tied to reported experiments rather than informal commentary.|Adequate: empirical evidence exists, but external validation across independent deployments is not yet established.|
|Clarity and editorial quality|3|The paper states the threat model motivation, method components (hierarchical encoder and corruption-guided detector), and evaluation intent in clear technical terms.|High technical clarity for a research artefact.|
|Recency and ongoing relevance|3|Published in 2026 (ACL 64), aligned with current growth in multi-agent runtime and propagation-risk discussions.|Strong recency and relevance.|
|Transparency of limitations|2|Method is evaluated in controlled experiments; practical deployment constraints are not fully resolved in the abstract-level claims.|Adequate: caveats are needed when carrying results into production controls.|
<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **13 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

The resource is a strong fit for this repository's multi-agent security scope
and contributes a useful unsupervised defence framing for unknown attacks. It
should be cited as high-signal research evidence, while keeping the
repository's standard caveat that benchmarked or experimental results do not by
themselves establish production-safe behaviour without runtime controls, policy
enforcement, and system-specific evaluation.
