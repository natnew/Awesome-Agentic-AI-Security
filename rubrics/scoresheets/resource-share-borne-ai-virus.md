---
rubric: resource-quality-rubric.md
artefact: "Share-Borne AI Virus: Memory-Hopping Attacks Across LLM Agents"
artefact_url_or_path: https://arxiv.org/abs/2609.35576
artefact_version: arXiv:2609.35576v1 (2026-09-28)
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
|Relevance to agentic AI security|3|Covers memory write paths, shared artefacts, and multi-hop propagation between independent assistants that use file tools and persistent memory files.|Maps directly to the Tool Result To Memory Persistence and Cross-Agent Propagation chains.|
|Evidence-based claims|2|Evaluated on 36 held-out simulated worlds (3-12 agents, six domains) with four backbone models and per-hop metrics; evaluation code is public with inert carriers only.|Preprint with author-reported results; effective payloads are withheld, so attack-side results cannot be fully reproduced.|
|Clarity and editorial quality|2|Defines the threat model, the endpoint-assisted and prompt-only variants, and propagation metrics (infection, hop depth, per-hop continuation).|Clear structure; the variants need careful reading to avoid overstating the endpoint-free results.|
|Recency and ongoing relevance|3|arXiv v1 published on 2026-09-28; repository and paper checked on 2026-10-03.|Current and aligned with emerging multi-agent memory risks.|
|Transparency of limitations|2|Authors state reliance on the external endpoint, degraded endpoint-free propagation, evaluated-model scope, and world-design assumptions; the memory-write classifier is reported to miss belief-only payloads and flag some legitimate instructions.|Repository licence is not stated.|
<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

The paper provides empirical evidence for propagation between independent
assistants through shared artefacts, which the catalogue models but previously
lacked a cited source for. Results come from simulated worlds and a limited set
of models, and the main variant depends on an attacker-operated endpoint. The
finding that instruction-free payloads evade an instruction-focused classifier
is a useful caveat for teams relying on memory-write screening alone.
