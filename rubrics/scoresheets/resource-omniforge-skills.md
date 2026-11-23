---
rubric: resource-quality-rubric.md
artefact: "OmniForge Agent Skills: 50 read-only pre-deploy security and DNS audit skills"
artefact_url_or_path: https://github.com/zColdWater/omniforge-skills
artefact_version: v2.6.0 (2026-11-23)
last_checked: 2026-11-23
scored_by: OmniForge maintainer (zColdWater; single-rater, self-assessment)
scored_on: 2026-11-23
rater_count: 1
---

# Resource scoresheet

## Scores

<!-- markdownlint-disable MD013 -->
|Criterion|Score (0-3)|Evidence|Notes|
|---|---|---|---|
|Relevance to agentic AI security|3|Directly addresses security hygiene for AI-generated web apps and coding-agent workflows (Supabase RLS CVE-2025-48757, Next.js CVE-2025-29927, leaked client secrets, CSP/HSTS, RFC 9116 security.txt, SPF/DKIM/DMARC, and read-only MCP tool design).|Fits defensive tool use and pre-deploy verification.|
|Evidence-based claims|2|Accompanied by five reproducible passive 2026 benchmark datasets (390 live audits published as open JSON) and automated smoke tests for the companion zero-dependency MCP server.|Author-run benchmarks and tests; no independent third-party audit yet.|
|Clarity and editorial quality|2|Each of the 50 skills declares explicit ethical scope, read-only commands, and step-by-step checks, plus Codex and Claude plugin manifests and a `SECURITY.md` policy.|Large 50-skill scope requires picking specific skills per stack rather than loading all at once.|
|Recency and ongoing relevance|2|Released `v2.6.0` on 2026-11-23; checked on 2026-11-23.|Very new project; long-term maintenance track record is not yet established.|
|Transparency of limitations|3|Explicitly notes read-only passive scope (does not replace authenticated pentesting or runtime sandboxing), author affiliation, and that optional domain-tailored fix packs are commercial add-ons outside the MIT repository.|Boundaries and commercial add-ons are stated alongside capabilities.|
<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include with caveats (self-assessed by the author; second rater recommended)**

## Reviewer commentary

This pack provides read-only pre-deploy security and infrastructure verification
workflows for coding agents (`Claude Code`, `Codex`, `Cursor`, `Gemini CLI`)
without requiring cloud write credentials or runtime exploit execution. Caveats
should remain explicit: the release is new (`v2.6.0`), the scoresheet is
author-assessed, passive external scans cannot replace authenticated testing or
agent sandboxing, and optional copy-paste remediation packs are paid add-ons
separate from the MIT open-source repository.
