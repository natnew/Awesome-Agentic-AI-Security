---
rubric: resource-quality-rubric.md
artefact: "sshleash: an SSH agent firewall"
artefact_url_or_path: https://github.com/hamarshehmhmd/sshleash
artefact_version: v0.1.0 (2026-11-14)
last_checked: 2026-11-14
scored_by: Mohammad Hamarsheh (tool author; single-rater, self-assessment)
scored_on: 2026-11-14
rater_count: 1
---

# Resource scoresheet

## Scores

<!-- markdownlint-disable MD013 -->
|Criterion|Score (0-3)|Evidence|Notes|
|---|---|---|---|
|Relevance to agentic AI security|3|Addresses delegated SSH credentials reaching AI agents through agent forwarding and sandbox socket sharing, a pattern discussed for desktop agent apps and Docker sandboxes in November 2026.|Fits credential boundaries and least-privilege delegation.|
|Evidence-based claims|2|Unit tests against a real OpenSSH ssh-agent and an end-to-end CI job with two real sshd servers (laptop, devbox, gitserver) show a forwarded login being identified and refused.|Author-run tests only; no independent review yet.|
|Clarity and editorial quality|2|README states the threat, policy model, setup steps, and an example policy.|Policy semantics (first match wins, key hiding) need careful reading.|
|Recency and ongoing relevance|2|v0.1.0 released on 2026-11-14; checked on 2026-11-14.|Very new; maintenance record not yet established.|
|Transparency of limitations|3|README lists OpenSSH 8.9+ requirement for forwarding detection, unknown destinations with older remote clients, testing only against OpenSSH ssh-agent, and that processes able to reach the real agent socket can bypass it.|Limitations are stated next to the feature claims.|
<!-- markdownlint-enable MD013 -->

## Aggregate

- Raw total: **12 / 15**
- Floor rule triggered: no
- Verdict: **Include with caveats (self-assessed by the author; second rater recommended)**

## Reviewer commentary

The tool applies a policy at the ssh-agent boundary, which is where delegated SSH
authority actually leaves the user's machine. It uses OpenSSH's session-bind
data to tell forwarded requests and destinations apart, and only trusts remote
binds that the real agent has verified. The entry should keep its caveats
visible: it is new, it has a single maintainer, and this scoresheet was written
by the author.
