# Benchmark Quality Rubric

A rubric for assessing the quality of agentic AI security benchmarks.

## Criteria
- Scope and relevance to agentic systems
- Methodological soundness
- Evidence requirements
- Transparency of limitations
- Reproducibility

## Anchored level descriptors

Each criterion is scored 0–3 against the anchors below.

### Scope and relevance to agentic systems

- **0 — Absent.** Tests only single-turn model responses; no notion of tools, memory, multi-step planning, or delegated authority.
- **1 — Inadequate.** Touches one agentic surface superficially (e.g., generic prompt-injection on chat without tool use).
- **2 — Adequate.** Covers at least one agentic chain end-to-end (input → reasoning → tool call → outcome) with realistic tool surfaces.
- **3 — Strong.** Covers multiple chains from the agentic threat taxonomy (tool misuse, credential overreach, memory poisoning, multi-agent contamination, code-execution side effects, etc.) with realistic adversarial scenarios and clear mapping to attack surfaces.

### Methodological soundness

- **0 — Absent.** No method described; results cannot be interpreted.
- **1 — Inadequate.** Method described but key choices (task selection, scoring, baselines) are unjustified.
- **2 — Adequate.** Method is documented with justified choices, baselines, and acknowledged limitations. Independent re-running would yield comparable results.
- **3 — Strong.** Pre-registered or peer-reviewed method with explicit threats-to-validity, ablations, and statistical treatment of variance. Replication has been demonstrated externally.

### Evidence requirements

- **0 — Absent.** Reports headline numbers only; no per-task results, prompts, or traces.
- **1 — Inadequate.** Aggregate results published; underlying prompts, tools, or per-task scores are not shareable.
- **2 — Adequate.** Per-task results, prompts, and tool definitions are published; traces or transcripts are available for inspection.
- **3 — Strong.** All artefacts are versioned and reproducible: prompts, tool implementations, per-task results, and full traces. Results across model/agent versions are tracked over time.

### Transparency of limitations

- **0 — Absent.** No discussion of limitations; results presented as definitive.
- **1 — Inadequate.** Boilerplate caveat only ("results may not generalise").
- **2 — Adequate.** Specific known limitations are listed (coverage gaps, language scope, threat-model assumptions, contamination risk).
- **3 — Strong.** Limitations are quantified where possible, threat-model boundaries are explicit, and the benchmark documents what it does *not* claim to measure.

### Reproducibility

- **0 — Absent.** Cannot be reproduced from public artefacts.
- **1 — Inadequate.** Partial artefacts; dependency or runtime details missing; non-deterministic without seeds.
- **2 — Adequate.** Public, runnable artefact with pinned dependencies; seeded runs produce comparable results within a documented variance.
- **3 — Strong.** One-command reproduction with containerised runtime, pinned dependencies, recorded seeds, and documented variance bounds. CI runs the benchmark on each release.

## Scoring procedure

1. **Raters.** Single rater for routine catalogue review; two raters with adjudication for any benchmark a published recommendation will rest on.
2. **Evidence.** Cite a section, table, or repository path for each score. For per-task evidence, link to the artefact location (e.g., the GitHub directory containing per-task transcripts).
3. **Recency.** Re-score when the benchmark publishes a new version or when the agentic threat landscape it claims to cover materially shifts.
4. **Recording.** File the completed scoresheet under [scoresheets/](scoresheets/) using the naming convention `benchmark-{benchmark-slug}.md`.

## Aggregation rule

- Maximum raw score: **15** (5 criteria × 3).
- **Floor rule:** any criterion at 0 fails the rubric outright; two or more criteria at ≤ 1 also fail.
- **Verdict bands:**
  - **≥ 12 with no criterion below 2** → *Recommended; cite confidently.*
  - **9–11 with no criterion below 2** → *Cite with caveats noted alongside the entry.*
  - **< 9, or any criterion at 0–1** → *Do not cite as authoritative; treat as exploratory only.*

## Scoresheet template

```markdown
---
rubric: benchmark-quality-rubric.md
artefact: <benchmark name>
artefact_version: <release tag or commit SHA>
artefact_url: <link to benchmark repository or paper>
scored_by: <name or handle>
scored_on: <YYYY-MM-DD>
rater_count: <1 or 2-with-adjudication>
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Scope and relevance to agentic systems | | | |
| Methodological soundness | | | |
| Evidence requirements | | | |
| Transparency of limitations | | | |
| Reproducibility | | | |

## Aggregate

- Raw total: __ / 15
- Floor rule triggered: <yes/no, which criterion>
- Verdict: <Recommended / Cite with caveats / Do not cite>

## Reviewer commentary

<2–4 sentences on what's strongest, what's weakest, and what would lift the score.>
```

## Inter-rater agreement

Pilot pending. Target Cohen's κ ≥ 0.6 on a 12-benchmark pilot before this rubric is treated as load-bearing for catalogue inclusion. Until then, scores are guidance and disagreements should be resolved through discussion.
