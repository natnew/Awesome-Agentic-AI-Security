---
rubric: resource-quality-rubric.md
artefact: Orca AI Incident Archive
artefact_url_or_path: https://github.com/Continuum-AI-Corp/Orca-AI-Incident-Archive
artefact_version: b8998b6 (main, 2026-09-23)
last_checked: 2026-09-24
scored_by: xizhuomengcontin (project-affiliated submitter; single-rater self-assessment)
scored_on: 2026-09-24
rater_count: 1
---

# Resource scoresheet

## Scores

Evidence pointers refer to the repository at the commit recorded above.

<!-- markdownlint-disable MD013 -->

|Criterion|Score (0-3)|Evidence|Notes|
|---|---|---|---|
|Relevance to agentic AI security|3|`docs/scope.md` limits the archive to agent-as-target (prompt injection), agent-as-weapon, rogue agent actions, agent supply chain, agent-infrastructure CVEs, and agent-specific policy. Records are tagged across indirect prompt injection (45), credentials (55), MCP (31), sandbox escape (24), and evaluation breakout (19).|Covers several surfaces and chains in this field guide. Pure jailbreaks, deepfake fraud, and ordinary CVEs with no agent element are explicitly excluded.|
|Evidence-based claims|2|Each of the 354 records links at least one clickable primary source (593 unique URLs, listed in `dist/sources.txt`); 302 records are graded A (primary source). Each record carries `real_harm` and `ai_involvement` (`confirmed` / `disputed` / `unverified`) before any narrative.|Sourcing is systematic, but the classifications are editorial and have not been independently reviewed.|
|Clarity and editorial quality|2|One Markdown file per record, with a YAML header, an attack-chain (Mermaid) diagram, and sources. `SCHEMA.md` defines the fields, and the JSON exports in `dist/` are validated against a JSON Schema in CI. Seven topic pages group records by attack surface.|Structured and consistent. There is also a single-file offline browser (`index.html`) and full Chinese text under `incidents/i18n/zh/`.|
|Recency and ongoing relevance|2|Records run month by month from 2025-01 to 2026-09. The latest commit is dated 2026-09-23, and the sweeps include non-English sources.|Currency meets the level-3 anchor. The repository was only created on 2026-09-16, so there is no maintenance record yet; scored 2 until sustained updates are shown.|
|Transparency of limitations|3|`docs/data-quality.md` records methodology risk, disputed facts, and conflicting numbers, with worked corrections: two fabricated entries deleted, the PaperCut "domain admin in six hours" claim corrected to seven minutes, and Step Finance downgraded to grade D because its primary reporting never mentions AI. Claims whose primary source shows no AI are labelled rather than deleted.|Limitations are stated per record and per claim, not only as a general disclaimer.|

<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include / cite from field guide**

## Reviewer commentary

The resource is strongest on sourcing discipline and on separating confirmed
harm from demonstrations, which suits the defensive case-study use in this
guide. It is weakest on maturity: it is a new, single-team project, and its
labels are editorial judgements. This is a self-assessment by a
project-affiliated submitter, so an independent re-score is welcome. Sustained
maintenance and independent review of the labels would lift the evidence and
recency scores.
