# Agent Security Readiness Rubric

A rubric for evaluating the security readiness of agentic AI systems.

## Criteria
- Observability and auditability
- Tool and credential boundary controls
- Memory and context security
- Policy and approval enforcement
- Evidence of evaluation and red teaming

## Anchored level descriptors

Each criterion is scored 0–3 against the anchors below.

### Observability and auditability

- **0 — Absent.** No structured logging of agent decisions, tool calls, or context. Failures cannot be reconstructed.
- **1 — Inadequate.** Some logging exists but is unstructured or partial. The chain from input to outcome cannot be reconstructed end-to-end.
- **2 — Adequate.** Structured logs cover inputs, policy decisions, tool calls, and outcomes. An end-to-end trace can be reconstructed for a sampled task. Retention is defined.
- **3 — Strong.** Linked traces from influence to outcome are available for every task. Decision logs, approval records, and tool-call payloads are queryable, retained per policy, and used routinely in incident response and review.

### Tool and credential boundary controls

- **0 — Absent.** Agent has unscoped tool access; credentials are long-lived and broad.
- **1 — Inadequate.** Some allowlisting or scoping exists but is inconsistent; credentials are reused across tasks or persisted in agent context.
- **2 — Adequate.** A tool broker mediates calls with per-task allowlist and schema validation. Credentials are issued task-bound from a vault and have a defined lifetime. Out-of-scope use is detected.
- **3 — Strong.** All tool calls flow through a broker with risk-aware policy decisions and composition checks. Credentials are short-lived, task-bound, vault-backed, and never exposed to the agent. Revocation paths are tested.

### Memory and context security

- **0 — Absent.** Memory and retrieved context are accepted without provenance, classification, or freshness checks.
- **1 — Inadequate.** Some controls exist on writes or reads but not both; instruction-shaped content can enter memory unnoticed.
- **2 — Adequate.** Writes are classified and tagged with provenance and expiry; reads apply freshness and instruction-data separation; memory contents are reviewer-visible.
- **3 — Strong.** Write and read controls are layered with anomaly detection on instruction-shaped content; logs of influential reads exist; retention and deletion rules are enforced and audited.

### Policy and approval enforcement

- **0 — Absent.** No policy decision precedes tool calls; sensitive actions execute without human review.
- **1 — Inadequate.** Policies exist on paper but are not enforced at runtime; approval gates surface only the agent's natural-language summary.
- **2 — Adequate.** A policy decision precedes every tool call, considering source trust, data sensitivity, and impact. Approval gates show parameters, diffs, and forecast impact for sensitive or irreversible actions.
- **3 — Strong.** Policy is hot-reloadable and version-controlled. Approval records carry intent, parameters, diff, data movement, downstream impact, and a trace link. Runtime guardrails detect drift mid-execution.

### Evidence of evaluation and red teaming

- **0 — Absent.** No evaluation or adversarial testing has been performed.
- **1 — Inadequate.** Ad-hoc manual testing only; no documented threat scenarios or coverage of agentic chains.
- **2 — Adequate.** A test suite covers behavioural verification of key controls; at least one adversarial exercise has been run against the system; results are documented.
- **3 — Strong.** Continuous evaluation is wired into CI; chain-aligned red-team scenarios run on a defined cadence; regressions block release; results are tracked and acted upon.

## Scoring procedure

1. **Raters.** For pre-production review and architecture sign-off, score with two raters drawn from different functions (security engineer + AI engineer is a typical pair). Adjudicate disagreements of two or more points before recording the verdict.
2. **Evidence.** Each score must cite concrete evidence — a trace ID, a config file path, a runbook link, an evaluation report, or an absence ("no logging configured for tool calls; verified by inspection of logging.yaml").
3. **Cadence.** Score on initial production sign-off and re-score on material change to runtime, tools, credentials, memory layer, or policy.
4. **Recording.** File the completed scoresheet under [scoresheets/](scoresheets/) using the naming convention `agent-readiness-{system-slug}.md`.

## Aggregation rule

- Maximum raw score: **15** (5 criteria × 3).
- **Floor rule:** any criterion at 0 fails the rubric outright; two or more criteria at ≤ 1 also fail.
- **Verdict bands:**
  - **≥ 13 with no criterion below 2** → *Production-ready.*
  - **10–12 with no criterion below 2** → *Acceptable with reviewer-noted caveats and a remediation plan.*
  - **< 10, or any criterion at 0–1** → *Not ready; rework before re-scoring.*

The bar is stricter than the cross-rubric default because production sign-off is load-bearing.

## Scoresheet template

```markdown
---
rubric: agent-security-readiness-rubric.md
artefact: <system name>
artefact_version: <commit SHA, release tag, or assessment date>
scored_by: <names>
scored_on: <YYYY-MM-DD>
rater_count: <1 or 2-with-adjudication>
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Observability and auditability | | | |
| Tool and credential boundary controls | | | |
| Memory and context security | | | |
| Policy and approval enforcement | | | |
| Evidence of evaluation and red teaming | | | |

## Aggregate

- Raw total: __ / 15
- Floor rule triggered: <yes/no, which criterion>
- Verdict: <Production-ready / Acceptable with caveats / Not ready>

## Reviewer commentary

<2–4 sentences on what's strongest, what's weakest, and what would lift the score.>
```

## Inter-rater agreement

Pilot pending. Target Cohen's κ ≥ 0.6 on a 12-system pilot before this rubric is treated as load-bearing for production sign-off. Until then, scores are guidance and disagreements should be resolved through discussion rather than averaged.
