# Case Study Rubric

A rubric for evaluating incident and scenario case studies in agentic AI security.

## Criteria
- Clarity of what happened and why it matters
- Attack surface and exploit path analysis
- Impact and controls discussion
- Evidence and references
- Maturity and generalizability

## Anchored level descriptors

Each criterion is scored 0–3 against the anchors below.

### Clarity of what happened and why it matters

- **0 — Absent.** The narrative is missing or incoherent; a reader cannot tell what occurred.
- **1 — Inadequate.** A surface narrative exists but key actors, sequence, or outcome are unclear.
- **2 — Adequate.** A reader can summarise the incident in two sentences after a single read; the *why it matters* is stated explicitly.
- **3 — Strong.** Narrative is precise, sequenced, and anchored in concrete artefacts; the *why it matters* is tied to a named threat model entry or attack chain.

### Attack surface and exploit path analysis

- **0 — Absent.** No surfaces or paths identified.
- **1 — Inadequate.** Surfaces named but not connected into a path; or path described without referencing surfaces.
- **2 — Adequate.** Attack surfaces are named using repo-native vocabulary (from [docs/02-attack-surfaces.md](../docs/02-attack-surfaces.md)) and connected into a path that maps to one of the chains in [docs/agentic-attack-chains/](../docs/agentic-attack-chains/).
- **3 — Strong.** Each step in the exploit path is anchored to a specific surface, the chain is named explicitly, and preconditions and trust boundaries are called out at each transition.

### Impact and controls discussion

- **0 — Absent.** Impact and controls are not discussed.
- **1 — Inadequate.** Impact stated vaguely; controls listed generically without tying to the failure path.
- **2 — Adequate.** Impact is concrete (data, authority, downstream system, regulatory exposure). Controls are named from [patterns/](../patterns/) and tied to the specific points in the path where they would have interrupted the chain.
- **3 — Strong.** Impact is quantified or scoped; controls discussion identifies *which* control at *which* point would have prevented or contained the chain, and acknowledges any control whose absence was the root cause.

### Evidence and references

- **0 — Absent.** No references; no indication whether the case is real, hypothetical, or composite.
- **1 — Inadequate.** Sparse references; evidence level not stated; reader cannot tell what is grounded vs. inferred.
- **2 — Adequate.** Maturity and evidence levels are explicitly stated (real / plausible / hypothetical; well-evidenced / supported / inferred). External references support the technical claims.
- **3 — Strong.** Every load-bearing claim is referenced; the evidence level per claim is explicit; provenance is clear; the case can be independently verified.

### Maturity and generalisability

- **0 — Absent.** Cannot be generalised; reads as anecdote.
- **1 — Inadequate.** One-off; no defensive lesson abstracted.
- **2 — Adequate.** Generalises into a defensive lesson tied to at least one chain and one pattern; useful for teams beyond the original context.
- **3 — Strong.** Sets a teaching example: the lesson is portable across stacks, the failure mode is named, and the case is suitable for inclusion in red-team scenario libraries or onboarding material.

## Scoring procedure

1. **Raters.** Single rater for routine review; two raters with adjudication when the case is being added to the canonical case-study set in [docs/09-incident-case-studies.md](../docs/09-incident-case-studies.md).
2. **Evidence.** Cite the case-study fields directly (e.g., *"What happened: ..." section reads ..."*). For external references, paste the URL or DOI in the *Evidence* column.
3. **Editorial check.** Verify the case follows the [CONTRIBUTING.md](../CONTRIBUTING.md) editorial standard — calm tone, evidence-led, no unnecessary operational exploit detail.
4. **Recording.** File the completed scoresheet under [scoresheets/](scoresheets/) using the naming convention `case-study-{case-slug}.md`.

## Aggregation rule

- Maximum raw score: **15** (5 criteria × 3).
- **Floor rule:** any criterion at 0 fails the rubric outright; two or more criteria at ≤ 1 also fail. *Evidence and references* at ≤ 1 is a hard fail because case studies without evidence cannot be cited safely.
- **Verdict bands:**
  - **≥ 12 with no criterion below 2 and Evidence ≥ 2** → *Publish.*
  - **9–11 with no criterion below 2** → *Publish with reviewer-noted caveats; flag the weakest dimension for a future revision.*
  - **< 9, or floor rule triggered** → *Do not publish; rework or drop.*

## Scoresheet template

```markdown
---
rubric: case-study-rubric.md
artefact: <case study title>
artefact_path: <path to case study, e.g. docs/09-incident-case-studies.md#tool-misuse-leading-to-credential-leak>
scored_by: <name or handle>
scored_on: <YYYY-MM-DD>
rater_count: <1 or 2-with-adjudication>
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Clarity of what happened and why it matters | | | |
| Attack surface and exploit path analysis | | | |
| Impact and controls discussion | | | |
| Evidence and references | | | |
| Maturity and generalisability | | | |

## Aggregate

- Raw total: __ / 15
- Floor rule triggered: <yes/no, which criterion>
- Verdict: <Publish / Publish with caveats / Do not publish>

## Reviewer commentary

<2–4 sentences on what's strongest, what's weakest, and what would lift the score.>
```

## Inter-rater agreement

Pilot pending. Target Cohen's κ ≥ 0.6 on a 12-case pilot before this rubric is treated as load-bearing for canonical case-study inclusion. Until then, scores are guidance and disagreements should be resolved through discussion.
