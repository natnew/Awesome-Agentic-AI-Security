# Resource Quality Rubric

A rubric for assessing the quality of resources included in the agentic AI security field guide.

## Criteria
- Relevance to agentic AI security
- Evidence-based claims
- Clarity and editorial quality
- Recency and ongoing relevance
- Transparency of limitations

## Anchored level descriptors

Each criterion is scored 0–3 against the anchors below. The rubric applies to both external resources (standards, papers, tools) and internal field-guide resources (docs pages, chain stubs, patterns).

### Relevance to agentic AI security

- **0 — Absent.** Generic AI or general security material with no agentic relevance.
- **1 — Inadequate.** Touches one aspect tangentially (e.g., LLM safety in general) without addressing tools, memory, credentials, multi-agent flow, or delegated authority.
- **2 — Adequate.** Directly addresses one or more agentic surfaces or chains; useful to a reader of this field guide.
- **3 — Strong.** Centrally about agentic execution security; addresses multiple surfaces or chains and earns a place in a reading path for the topic.

### Evidence-based claims

- **0 — Absent.** Claims are unsupported, speculative, or promotional.
- **1 — Inadequate.** Some claims are supported, others are assertions without evidence; reader cannot tell which is which.
- **2 — Adequate.** Load-bearing claims are sourced (citation, dataset, code, or named example). Distinction between empirical claim and informed opinion is clear.
- **3 — Strong.** Every load-bearing claim is referenced or demonstrated; methodology behind quantitative claims is explicit; opinions are flagged as such.

### Clarity and editorial quality

- **0 — Absent.** Unstructured, jargon-heavy, or unreadable; key terms undefined.
- **1 — Inadequate.** Readable but disorganised; key concepts buried; tone inconsistent with the field guide's editorial standard.
- **2 — Adequate.** Well-structured, precise prose; key terms defined; tone is calm and evidence-led; British English (or established AI Defense Plane spelling) where the resource is internal.
- **3 — Strong.** Exceptionally clear; lands its argument quickly; cross-references its own taxonomy; could be used as an editorial model.

### Recency and ongoing relevance

- **0 — Absent.** Material describes systems or threats that have been superseded; recommendations are obsolete.
- **1 — Inadequate.** More than two years old without re-publication; primary surfaces or threats it addresses have shifted.
- **2 — Adequate.** Within two years, or older but still describes durable architecture or principles; last-checked date recorded for external resources.
- **3 — Strong.** Current within twelve months, or older but maintained and re-published; explicitly tracks changes in the agentic threat landscape.

### Transparency of limitations

- **0 — Absent.** Presents conclusions as universal; no caveats, scope statement, or threat model.
- **1 — Inadequate.** Generic disclaimer only; no specific limitation or scope boundary stated.
- **2 — Adequate.** Specific limitations and scope boundaries stated (model classes, tool surfaces, deployment contexts not covered).
- **3 — Strong.** Limitations are quantified or worked through with examples; the resource explicitly states what it does *not* claim and where its conclusions stop applying.

## Scoring procedure

1. **Raters.** Single rater for awesome-list inclusion; two raters with adjudication for resources that the field guide will rely on heavily (e.g., a pattern document, a foundational standard cited from multiple chains).
2. **Evidence.** Cite a section, page, or paragraph for each score. For external resources, record the URL and the *Last-checked date* required by [CONTRIBUTING.md](../CONTRIBUTING.md).
3. **Editorial check.** Verify [CONTRIBUTING.md](../CONTRIBUTING.md) editorial standards: British English (where internal), calm tone, no copied source material, no unnecessary operational exploit detail, no overstated maturity.
4. **Recording.** File the completed scoresheet under [scoresheets/](scoresheets/) using the naming convention `resource-{slug}.md`.

## Aggregation rule

- Maximum raw score: **15** (5 criteria × 3).
- **Floor rule:** any criterion at 0 fails the rubric outright; two or more criteria at ≤ 1 also fail. *Evidence-based claims* at ≤ 1 is a hard fail.
- **Verdict bands:**
  - **≥ 12 with no criterion below 2** → *Include in awesome list / cite from field guide.*
  - **9–11 with no criterion below 2** → *Include with reviewer-noted caveats alongside the entry.*
  - **< 9, or floor rule triggered** → *Do not include; rework if internal, drop if external.*

## Scoresheet template

```markdown
---
rubric: resource-quality-rubric.md
artefact: <resource title>
artefact_url_or_path: <URL for external; repo path for internal>
artefact_version: <publication date or commit SHA>
last_checked: <YYYY-MM-DD>  # for external resources only
scored_by: <name or handle>
scored_on: <YYYY-MM-DD>
rater_count: <1 or 2-with-adjudication>
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | | | |
| Evidence-based claims | | | |
| Clarity and editorial quality | | | |
| Recency and ongoing relevance | | | |
| Transparency of limitations | | | |

## Aggregate

- Raw total: __ / 15
- Floor rule triggered: <yes/no, which criterion>
- Verdict: <Include / Include with caveats / Do not include>

## Reviewer commentary

<2–4 sentences on what's strongest, what's weakest, and what would lift the score.>
```

## Inter-rater agreement

Pilot pending. Target Cohen's κ ≥ 0.6 on a 12-resource pilot before this rubric is treated as load-bearing for awesome-list inclusion. Until then, scores are guidance and disagreements should be resolved through discussion.
