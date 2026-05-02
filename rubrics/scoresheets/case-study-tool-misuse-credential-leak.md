---
rubric: case-study-rubric.md
artefact: Tool Misuse Exposes Cloud Credentials
artefact_path: 'docs/09-incident-case-studies.md (Example Case Study — Tool Misuse Leading to Credential Leak)'
scored_by: maintainer (worked example)
scored_on: 2026-05-01
rater_count: 1
---

## Scores

| Criterion | Score (0–3) | Evidence | Notes |
|---|---|---|---|
| Clarity of what happened and why it matters | 2 | *What happened* and *Why it matters* fields are filled with concise prose: *"An agentic AI system with tool access was prompted to retrieve sensitive data... used a file system tool to access a credentials file and then sent the contents to an external endpoint."* A reader can summarise the incident in two sentences after a single read. | Adequate but not strong: narrative is concise rather than richly sequenced; no named actors or temporal anchors. |
| Attack surface and exploit path analysis | 2 | *Attack surface* names "File system tool, external API tool, agent prompt interface" — repo-native vocabulary from [docs/02-attack-surfaces.md](../../docs/02-attack-surfaces.md). *Exploit path* connects the surfaces: *"Malicious prompt → agent uses file system tool → reads credentials file → uses API tool to send data externally."* | Path is connected and surfaces are named. Could lift to 3 by explicitly naming the chain (this is *Prompt Injection → Tool Misuse* composed with *Credential Overreach* and *Code-Execution Side Effects*). |
| Impact and controls discussion | 2 | *Impact* is concrete: *"Cloud account compromise, potential data breach, regulatory exposure."* *Controls* names patterns by file: *"Tool call restrictions, credential vaulting, output filtering, audit logging, approval gates for sensitive actions"* with a reference to [patterns/credential-and-token-boundaries.md](../../patterns/credential-and-token-boundaries.md) and [patterns/secure-tool-calling.md](../../patterns/secure-tool-calling.md). | Adequate: controls listed and tied to patterns. Could lift to 3 by walking through which control would have interrupted the chain at which step (e.g., *"a per-task allowlist on the file-system tool would have refused the credentials path; absent that, output-filtering on the external API call would have caught the secret in transit"*). |
| Evidence and references | 2 | *Maturity level* and *Evidence level* are explicit: *"Plausible, based on real-world agent tool integrations"* and *"Hypothetical, but supported by public incident reports and research."* References point to internal patterns and the attack-surfaces doc. | Adequate. Could lift to 3 by citing one or two specific public incident reports or research papers that support the *"based on real-world agent tool integrations"* claim. |
| Maturity and generalisability | 2 | The case generalises into a defensive lesson useful beyond its original setting: any agent with file-system access plus an external network tool faces this composition risk. Tied to two patterns and at least one chain. | Adequate. Could lift to 3 by being positioned explicitly as a teaching example (e.g., *"This case is suitable as the canonical illustration of credential overreach via tool composition; cited from [patterns/credential-and-token-boundaries.md](../../patterns/credential-and-token-boundaries.md)"*) and added to a red-team scenario library. |

## Aggregate

- Raw total: **10 / 15**
- Floor rule triggered: no
- Verdict: **Publish with reviewer-noted caveats**

## Reviewer commentary

The case study is consistently *adequate* across all five criteria — it follows the template, names surfaces and patterns from repo-native vocabulary, and reaches a defensive lesson that generalises beyond its setting. None of the criteria is genuinely weak, but none is strong either. The single highest-leverage improvement is on *Impact and controls discussion*: rewriting the controls list as a per-step walk-through (which control would have interrupted the chain at which step) would lift the case from "useful illustration" to "teaching example," and would naturally surface a citation point for the case from the relevant pattern files. The next-most-useful improvement is on *Evidence and references*, by citing one or two public incident reports that support the *"plausible based on real-world integrations"* maturity claim.
