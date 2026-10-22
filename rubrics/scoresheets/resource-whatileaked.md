---
rubric: resource-quality-rubric.md
artefact: whatileaked
artefact_url_or_path: https://github.com/selan-ai/whatileaked
artefact_version: v0.5.3 (2026-10-20)
last_checked: 2026-10-22
scored_by: tomas-sereikis (Selan, the tool's publisher)
scored_on: 2026-10-22
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Relevance to agentic AI security | 2 | Addresses the credential surface of coding agents: secrets that reached the model through pasted prompts, tool output or instruction files, and that persist in local session history (README, "Where it looks"). | Scoped to one surface (credentials already disclosed to the model provider) and to after-the-fact detection, so adequate rather than strong. |
| Evidence-based claims | 2 | Detection uses the gitleaks rule set unmodified; the no-network and zero-dependency claims can be verified from the source and `package.json`; the npm release and CI are public. | No independent, measured evaluation of detection rate or false positives against other scanners has been published. |
| Clarity and editorial quality | 2 | README states plainly what is scanned, per agent and path, what the output contains, and what each exit code means, with a worked example of the confirmation step for `wipe`. | Plain, non-promotional tone. |
| Recency and ongoing relevance | 3 | Latest release v0.5.3 published 2026-10-20; repository pushed the same week. | Actively maintained; tracks the session formats of current coding agents. |
| Transparency of limitations | 3 | README states that deleting the local copy "does not call it back" and the key must be rotated, that test fixtures can appear as findings, that Cursor's older Ask-mode chats are not scanned, and that the publisher sells a redacting proxy. | Limitations are specific to the tool rather than a generic disclaimer. |

## Aggregate

- Raw total: 12 / 15
- Floor rule triggered: no
- Verdict: Include in awesome list / cite from field guide.

## Reviewer commentary

Scored by the publisher, so a second, independent rater would strengthen this verdict. Strongest on recency and on stating its own limits, including that it acts after disclosure and cannot undo it. Weakest on evidence, since there is no published, reproducible detection-rate comparison; the score would rise with one against a fixed corpus of real and fixture credentials.
