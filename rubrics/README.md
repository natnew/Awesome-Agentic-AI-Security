# Rubrics

This directory holds the assessment layer of the field guide. Where [docs/](../docs/) explains *what* the threats and defences are, and [patterns/](../patterns/) explains *how* to engineer the controls, the rubrics here define *what counts as good* — the bar a resource, benchmark, case study, or system must clear before it earns its place in the repository or in production.

## Evaluation principle

Four tools, each answering a different question. Use the right one for the job.

| Tool | Answers | When to reach for it | Example in this repo |
|---|---|---|---|
| **Rubric** | "Is this *good*?" Multi-criterion human judgement against anchored descriptors. | Subjective, multi-faceted quality calls where reasonable reviewers might disagree until the criteria are made explicit. | Should we add this benchmark to the catalogue? Is this case study credible enough to publish? |
| **Test suite** | "Does it do X under condition Y?" Behavioural verification with deterministic pass/fail. | When the question has a defined right answer and inputs can be controlled. | Does the tool broker reject calls that fail schema validation? Does the credential broker refuse to issue a token outside the requested scope? |
| **Assertion** | "Has this invariant been violated?" A condition that must hold at every step. | When something must *never* happen, regardless of intent or path. | Did any tool call execute without a logged policy decision? Did memory ever store an instruction-shaped string? |
| **LLM-as-judge** | "Did this output regress against a known reference?" | Tightly-scoped regression where ground-truth checks are hard to express but a stable reference output exists. | Did this agent's response drift from approved task framing across 200 trials? |

The rubrics in this directory address the first row only. **If a criterion can be automated, it should be a CI assertion, not a rubric line.** The rubrics' job is the part of evaluation that requires human judgement; everything else belongs in tests, assertions, or scoped LLM-as-judge regressions.

## When to use each rubric

| Rubric | Scores | Used at |
|---|---|---|
| [agent-security-readiness-rubric.md](agent-security-readiness-rubric.md) | A real or proposed agentic AI system | Pre-production review, architecture sign-off, periodic re-assessment |
| [benchmark-quality-rubric.md](benchmark-quality-rubric.md) | A third-party benchmark before citing or recommending it | Before adding to [docs/06-benchmarks.md](../docs/06-benchmarks.md) |
| [case-study-rubric.md](case-study-rubric.md) | An incident or scenario case study | Before publishing in [docs/09-incident-case-studies.md](../docs/09-incident-case-studies.md) |
| [resource-quality-rubric.md](resource-quality-rubric.md) | An external resource (standard, framework, paper, tool) or an internal field-guide resource | Before adding to the awesome list or accepting a substantial doc contribution |

## Anchored scoring at a glance

Every rubric uses the same four-level scale per criterion:

- **0 — Absent.** The criterion is not addressed at all.
- **1 — Inadequate.** Addressed superficially; would not survive review.
- **2 — Adequate.** Meets the bar for inclusion or production-readiness; minor gaps acceptable.
- **3 — Strong.** Sets the bar; could be used as a model for others.

Each rubric file contains the per-criterion prose for what 0, 1, 2, and 3 look like for that specific criterion.

## Aggregation and verdict

- Five criteria × three points = **15** maximum raw score.
- **Floor rule:** any criterion at 0 fails the rubric outright; two or more criteria at ≤1 also fail.
- **Verdict bands** (rubric files may tighten these):
  - **≥ 12 with no criterion below 2** → *Strong; include or green-light.*
  - **9–11 with no criterion below 2** → *Acceptable with reviewer-noted caveats.*
  - **< 9, or any criterion at 0–1** → *Reject or rework.*

## How to apply a rubric

1. Open the relevant rubric file and read the per-criterion anchors.
2. Copy the scoresheet template at the bottom of that rubric file into a new file under [scoresheets/](scoresheets/), following the naming convention in [scoresheets/README.md](scoresheets/README.md).
3. Score each criterion 0–3 with a short evidence quote or pointer in the *Evidence* column.
4. Compute the aggregate, apply the floor rule, and record the verdict.
5. For substantial decisions, score with two raters and adjudicate disagreements before recording the verdict.

## Inter-rater agreement

Each rubric carries a placeholder for inter-rater agreement (κ ≥ 0.6 target on a small pilot). These are pilot-pending until two raters score a sample of artefacts and Cohen's κ is computed. Rubrics should be treated as *guidance* until a pilot has produced calibration evidence; once calibrated, they become *load-bearing* for inclusion decisions.

## Worked examples

The [scoresheets/](scoresheets/) directory contains worked examples showing each rubric applied to a real artefact. Read these before scoring your first artefact — they show what level of evidence is expected per cell.

## Status

This is a v1 framework. Known gaps:

- No worked example yet for [agent-security-readiness-rubric.md](agent-security-readiness-rubric.md); deferred until a candidate system is selected for assessment.
- Inter-rater pilots not yet run; targets stated, results pending.
- LLM-as-judge harness referenced in the principle table but not yet built; out of scope for v1.

## Related

- [CONTRIBUTING.md](../CONTRIBUTING.md) — editorial standards every scored artefact must also satisfy.
- [docs/05-red-teaming-and-evaluation.md](../docs/05-red-teaming-and-evaluation.md) — broader evaluation context (planned coverage).
- [docs/04-defence-architecture.md](../docs/04-defence-architecture.md) — the layered control model the readiness rubric maps onto.
