# Scoresheets

This directory holds completed scoresheets — one file per artefact that has been scored against a rubric. Each scoresheet records the rubric used, the artefact, the scores per criterion with evidence, and the verdict.

## How to add a scoresheet

1. Pick the rubric that fits the artefact (see [../README.md](../README.md) for the *when to use each* table).
2. Open that rubric file and copy the **Scoresheet template** block at the bottom.
3. Create a new file in this directory using the naming convention below.
4. Fill in the YAML front-matter, score each criterion 0–3 with a short evidence quote, compute the aggregate, apply the floor rule, and record the verdict.
5. For substantial decisions, score with two raters and adjudicate disagreements before recording the verdict.

## Naming convention

`{rubric-prefix}-{artefact-slug}.md`

| Rubric | Prefix | Example filename |
|---|---|---|
| [agent-security-readiness-rubric.md](../agent-security-readiness-rubric.md) | `agent-readiness-` | `agent-readiness-internal-research-agent.md` |
| [benchmark-quality-rubric.md](../benchmark-quality-rubric.md) | `benchmark-` | `benchmark-agentdojo.md` |
| [case-study-rubric.md](../case-study-rubric.md) | `case-study-` | `case-study-tool-misuse-credential-leak.md` |
| [resource-quality-rubric.md](../resource-quality-rubric.md) | `resource-` | `resource-owasp-llm-top-10.md` |

The artefact slug is lowercase, hyphen-separated, and short enough that the filename remains readable. For internal artefacts, derive the slug from the file path or title; for external artefacts, derive from the publisher and resource name.

## Worked examples in this directory

These four scoresheets are the canonical worked examples. New contributors should read at least one before scoring their first artefact.

| File | Rubric | Artefact |
|---|---|---|
| [resource-chain-prompt-injection-tool-misuse.md](resource-chain-prompt-injection-tool-misuse.md) | resource-quality | Internal: [docs/agentic-attack-chains/prompt-injection-tool-misuse.md](../../docs/agentic-attack-chains/prompt-injection-tool-misuse.md) |
| [resource-owasp-llm-top-10.md](resource-owasp-llm-top-10.md) | resource-quality | External: OWASP Top 10 for LLM Applications |
| [case-study-tool-misuse-credential-leak.md](case-study-tool-misuse-credential-leak.md) | case-study | Internal: example case study in [docs/09-incident-case-studies.md](../../docs/09-incident-case-studies.md) |
| [benchmark-agentdojo.md](benchmark-agentdojo.md) | benchmark-quality | External: AgentDojo |

A worked example for [agent-security-readiness-rubric.md](../agent-security-readiness-rubric.md) is deferred to v2 and will be added when a candidate system is selected for assessment.

## Editorial standards

Scoresheets are public-facing artefacts. They must follow [CONTRIBUTING.md](../../CONTRIBUTING.md):

- Calm, evidence-led tone — no hype, no fear-based language.
- No unnecessary operational exploit detail.
- No copied source material when a summary and a link are enough.

## Status of scores

A score recorded here is the verdict at the *artefact_version* recorded in the front-matter. When a scored artefact materially changes (a benchmark releases a new version, a doc page is rewritten, a system's runtime is replaced), re-score and add a new dated scoresheet rather than editing the old one. Old scoresheets remain as a record of the bar at that point in time.
