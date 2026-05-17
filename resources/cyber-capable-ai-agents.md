# Cyber-Capable AI Agents and Autonomous Vulnerability Discovery

This cluster tracks the frontier shift from securing agents that use tools to governing agents that can perform real security work: finding, reproducing, exploiting, patching, verifying, and disclosing vulnerabilities. It is defensive in scope. The goal is to help AI engineers, security engineers, researchers, CTOs, and governance leaders understand capability, evidence, verification, disclosure, and operational control without turning the catalogue into exploitation guidance.

## Mythos / Glasswing

- **[Anthropic - Assessing Claude Mythos Preview's cybersecurity capabilities](https://red.anthropic.com/2026/mythos-preview/)**
  - Resource type: Vendor technical capability report.
  - Producer or publisher: Anthropic Frontier Red Team.
  - Why it matters for agentic AI security: Establishes the core Mythos reference for autonomous zero-day discovery, exploit generation, agentic scaffolding, benchmark saturation, responsible disclosure, and the strategic shift from protecting agentic systems to governing AI systems that can operate as cyber-capable agents.
  - Tags: cyber-agent, vulnerability-discovery, exploit-generation, benchmark, disclosure.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Many vulnerability details are withheld pending coordinated disclosure, so readers should treat public claims as high-signal but partly non-reproducible until affected maintainers publish fixes and advisories.

- **[Anthropic - Project Glasswing](https://www.anthropic.com/glasswing)**
  - Resource type: Strategic defensive deployment programme.
  - Producer or publisher: Anthropic, with launch partners including Amazon Web Services, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, the Linux Foundation, Microsoft, NVIDIA, and Palo Alto Networks.
  - Why it matters for agentic AI security: Shows how a frontier lab is channeling cyber-capable model access into defensive vulnerability discovery, hardening, black-box testing, endpoint security, and coordinated work with major technology and security organisations.
  - Tags: cyber-agent, defensive-deployment, governance, partner-ecosystem.
  - Last checked: 2026-05-17.
  - Limitations or caveats: This is a controlled-access vendor programme, not an open benchmark. Treat partner participation as evidence of coordination, not proof of model safety or operational effectiveness.

- **[CETaS / Alan Turing Institute - Claude Mythos: What Does Anthropic's New Model Mean for the Future of Cybersecurity?](https://cetas.turing.ac.uk/publications/claude-mythos-future-cybersecurity)**
  - Resource type: Independent expert analysis.
  - Producer or publisher: Centre for Emerging Technology and Security, The Alan Turing Institute.
  - Why it matters for agentic AI security: Adds an independent read on Mythos, Project Glasswing, restricted access, open-weight proliferation risk, closed versus open governance, future cyber capability diffusion, patching capacity, and the defensive challenge of keeping pace.
  - Tags: open-weight-risk, governance, cyber-agent, policy.
  - Last checked: 2026-05-17.
  - Limitations or caveats: It analyses Anthropic's public claims and early corroboration rather than reproducing the full private vulnerability corpus.

## Benchmarks And Evaluation Environments

- **[CyberGym](https://www.cybergym.io/)**
  - Resource type: Benchmark and evaluation environment for real-world AI-agent cybersecurity capability.
  - Producer or publisher: UC Berkeley researchers.
  - Why it matters for agentic AI security: Evaluates agents on real-world vulnerability analysis tasks derived from OSS-Fuzz projects, including vulnerability reproduction, proof-of-concept generation, incomplete patch discovery, open-ended discovery, sanitizer-backed validation, and zero-day discovery.
  - Tags: benchmark, cyber-agent, vulnerability-reproduction, verification.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Benchmark success does not imply safe deployment. Production agents still need sandboxing, approval gates, rate controls, disclosure procedures, and human review.

- **[ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/)**
  - Resource type: Exploitation-focused benchmark.
  - Producer or publisher: Berkeley RDI-led collaboration with researchers from UC Berkeley, Max Planck Institute for Security and Privacy, UC Santa Barbara, Arizona State University, Anthropic, OpenAI, and Google.
  - Why it matters for agentic AI security: Moves evaluation from finding or reproducing vulnerabilities toward measuring whether agents can turn known real-world vulnerabilities into working exploitation across userspace software, browser engine targets, and the Linux kernel.
  - Tags: benchmark, exploit-generation, browser-security, kernel-security.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Use as a capability signal and risk benchmark, not as operational guidance. This repository should not reproduce exploit procedures or task details.

- **[UK AI Security Institute - Frontier AI Trends Report](https://www.aisi.gov.uk/frontier-ai-trends-report)**
  - Resource type: Public-sector frontier model evaluation report.
  - Producer or publisher: UK AI Security Institute.
  - Why it matters for agentic AI security: Provides public evidence on frontier model progress in cyber tasks, cyber ranges, autonomy, and national-security-relevant capability evaluation.
  - Tags: governance, benchmark, cyber-evaluation, public-sector.
  - Last checked: 2026-05-17.
  - Limitations or caveats: AISI's public report summarises trends and selected results. It is not a full release of evaluation environments or raw transcripts.

- **[NIST Center for AI Standards and Innovation](https://www.nist.gov/caisi)**
  - Resource type: Public-sector AI evaluation and standards body.
  - Producer or publisher: U.S. National Institute of Standards and Technology.
  - Why it matters for agentic AI security: Tracks U.S. government work on evaluations, measurement science, and assessment of frontier AI risks including cybersecurity, security vulnerabilities, adversary systems, backdoors, and covert malicious behaviour.
  - Tags: governance, cyber-evaluation, public-sector, standards.
  - Last checked: 2026-05-17.
  - Limitations or caveats: The page describes institutional remit and selected updates; individual evaluation methods and results may be unavailable or limited.

## Vulnerability Disclosure And Patch Verification

- **[Anthropic - Coordinated vulnerability disclosure for Claude-discovered vulnerabilities](https://www.anthropic.com/coordinated-vulnerability-disclosure)**
  - Resource type: Vulnerability disclosure operating principles.
  - Producer or publisher: Anthropic.
  - Why it matters for agentic AI security: Defines process expectations for AI-discovered vulnerabilities, including human-reviewed reports, suggested fixes where possible, AI-labelled reports, pacing to maintainer capacity, disclosure timelines, and responsible release practices.
  - Tags: disclosure, governance, cyber-agent, maintainer-workflow.
  - Last checked: 2026-05-17.
  - Limitations or caveats: It is Anthropic's own operating policy. Teams adopting similar workflows should adapt timelines, legal boundaries, maintainer coordination, and severity handling to their own context.

- **[Anthropic - Partnering with Mozilla to improve Firefox's security](https://www.anthropic.com/news/mozilla-firefox-security)**
  - Resource type: Practical case study.
  - Producer or publisher: Anthropic, describing work with Mozilla.
  - Why it matters for agentic AI security: Shows what maintainers need from AI-assisted vulnerability work: minimal test cases, detailed proofs of concept, candidate patches, task verifiers, and evidence that helps reviewers trust and reproduce reports without being overwhelmed.
  - Tags: browser-security, disclosure, patch-verification, cyber-agent.
  - Last checked: 2026-05-17.
  - Limitations or caveats: The post reports one vendor-maintainer collaboration around Firefox. Do not generalise its results to all codebases, maintainers, or model deployments without additional evidence.

- **Minimal reproducible test cases for AI-discovered vulnerabilities**
  - Resource type: Evidence practice.
  - Primary sources: [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security) and [Anthropic coordinated vulnerability disclosure](https://www.anthropic.com/coordinated-vulnerability-disclosure).
  - Why it matters for agentic AI security: Maintainers need compact, verifiable, reproducible evidence that distinguishes a real vulnerability from noisy model output and lets them prioritise fixes.
  - Tags: disclosure, verification, maintainer-workflow.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Minimal evidence should not omit impact, affected versions, provenance, or safe reproduction boundaries.

- **AI-generated candidate patches**
  - Resource type: Patch review practice.
  - Primary sources: [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security) and [Anthropic coordinated vulnerability disclosure](https://www.anthropic.com/coordinated-vulnerability-disclosure).
  - Why it matters for agentic AI security: AI-authored security patches need provenance, human review, regression testing, vulnerability removal checks, and functional preservation checks before they can be trusted.
  - Tags: patch-verification, provenance, disclosure, secure-engineering.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Candidate patches are not fixes until maintainers review, test, merge, ship, and monitor them.

- **Task verifiers for patching agents**
  - Resource type: Verification practice.
  - Primary source: [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security).
  - Why it matters for agentic AI security: Future patching agents need verifiers that show both vulnerability removal and functional preservation; otherwise an agent can produce a plausible patch that hides the crash, breaks behaviour, or leaves an exploit path intact.
  - Tags: verification, patch-verification, cyber-agent, secure-engineering.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Verifiers are only as strong as the properties they test. They should be paired with fuzzing, sanitizers, regression suites, review, and post-release monitoring.

## Defensive Tooling And Verification

- **[OSS-Fuzz](https://google.github.io/oss-fuzz/)**
  - Resource type: Foundational fuzzing infrastructure.
  - Producer or publisher: Google, with open-source ecosystem partners.
  - Why it matters for agentic AI security: Fuzzing corpora, crash reproduction, scalable execution, bug disclosure workflows, and sanitizer-backed validation provide the evidence layer that AI-assisted vulnerability discovery needs to avoid weak or hallucinated claims.
  - Tags: fuzzing, verification, vulnerability-discovery, defensive-tooling.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Fuzzing is powerful but bounded by harness quality, coverage, target selection, sanitizer configuration, and triage capacity.

- **[AddressSanitizer](https://clang.llvm.org/docs/AddressSanitizer.html)**
  - Resource type: Sanitizer-based verification layer.
  - Producer or publisher: LLVM / Clang project.
  - Why it matters for agentic AI security: AddressSanitizer detects memory errors such as out-of-bounds accesses, use-after-free, invalid free, and related classes, making it useful for distinguishing real memory-safety bugs from weak model claims.
  - Tags: verification, memory-safety, sanitizer, defensive-tooling.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Sanitizer findings still require context, deduplication, severity assessment, affected-version analysis, and maintainer validation.

- **Browser security as an AI-cyber proving ground**
  - Resource type: Defensive capability lens.
  - Primary sources: [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security), [CyberGym](https://www.cybergym.io/), and [ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/).
  - Why it matters for agentic AI security: Browsers combine untrusted content, complex parsers and runtimes, sandboxing, user exposure, OS boundaries, and web-scale blast radius, making them strategically important for evaluating AI-assisted vulnerability discovery and patch verification.
  - Tags: browser-security, verification, vulnerability-discovery, benchmark.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Browser-focused results should not be treated as universal evidence for enterprise apps, cloud control planes, embedded systems, or robotics.

- **Kernel exploitation as a capability frontier**
  - Resource type: Defensive capability threshold.
  - Primary source: [ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/).
  - Why it matters for agentic AI security: Kernel-level exploitation is a serious threshold because it interacts with privilege boundaries, isolation assumptions, OS integrity, and the security controls that higher-level systems rely on.
  - Tags: kernel-security, exploit-generation, benchmark, capability-threshold.
  - Last checked: 2026-05-17.
  - Limitations or caveats: This entry is for risk understanding and governance. It should not be expanded into exploit recipes.

- **Memory safety vulnerability classes**
  - Resource type: Defensive literacy cluster.
  - Primary sources: [Anthropic Mythos technical report](https://red.anthropic.com/2026/mythos-preview/), [AddressSanitizer documentation](https://clang.llvm.org/docs/AddressSanitizer.html), and [ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/).
  - Why it matters for agentic AI security: AI engineers working near cyber-capable agents should recognise defensive concepts such as use-after-free, race conditions, sandbox escape, control-flow hijack, return-oriented programming, heap spraying, privilege escalation, and KASLR bypass so they can interpret risk, evidence, and verification needs.
  - Tags: memory-safety, literacy, verification, secure-engineering.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Keep this as literacy and review vocabulary, not a how-to exploitation guide.

## Capability Taxonomies And Timelines

- **Capability taxonomy: find -> reproduce -> exploit -> patch -> verify -> disclose**
  - Resource type: Defensive lifecycle taxonomy.
  - Primary sources: [Anthropic Mythos technical report](https://red.anthropic.com/2026/mythos-preview/), [Anthropic coordinated vulnerability disclosure](https://www.anthropic.com/coordinated-vulnerability-disclosure), [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security), [CyberGym](https://www.cybergym.io/), and [ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/).
  - Why it matters for agentic AI security: Gives teams a lifecycle for governing cyber-capable AI agents: discovery must be reproducible, exploitation evidence must be controlled, patches must be reviewed, verification must prove both security and functionality, and disclosure must be coordinated with maintainers.
  - Tags: taxonomy, cyber-agent, disclosure, verification.
  - Last checked: 2026-05-17.
  - Limitations or caveats: The lifecycle is defensive. It should guide control design, evaluation, and governance rather than operational offensive workflows.

- **Capability timeline: Opus 4.6 to Mythos Preview**
  - Resource type: Capability timeline note.
  - Primary source: [Anthropic Mythos technical report](https://red.anthropic.com/2026/mythos-preview/).
  - Why it matters for agentic AI security: Anthropic reports a sharp transition from Opus 4.6 being much better at finding and fixing vulnerabilities than exploiting them to Mythos Preview showing substantially stronger autonomous exploitation results. This is a key acceleration signal for capability monitoring.
  - Tags: timeline, cyber-agent, benchmark, governance.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Use Anthropic's reported comparison carefully. Do not extrapolate exact timelines or external model parity from this one vendor report.

- **Capability timeline: Firefox benchmark shift**
  - Resource type: Capability timeline note.
  - Primary sources: [Anthropic Mythos technical report](https://red.anthropic.com/2026/mythos-preview/) and [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security).
  - Why it matters for agentic AI security: The Firefox work shows a practical progression from model-assisted vulnerability discovery and reports to harder benchmarks around reproducing and exploiting browser vulnerabilities.
  - Tags: timeline, browser-security, benchmark, disclosure.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Treat this as a benchmark and case-study shift, not a complete measure of browser security risk.

- **Capability timeline: CyberGym to ExploitGym**
  - Resource type: Evaluation frontier note.
  - Primary sources: [CyberGym](https://www.cybergym.io/) and [ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/).
  - Why it matters for agentic AI security: Shows the evaluation frontier moving from reproduction, incomplete patch discovery, and zero-day discovery toward working exploitation as a separate capability threshold.
  - Tags: timeline, benchmark, exploit-generation, verification.
  - Last checked: 2026-05-17.
  - Limitations or caveats: These benchmarks measure different tasks and should not be collapsed into a single leaderboard.

- **[Anthropic - Frontier Safety Roadmap](https://www.anthropic.com/responsible-scaling-policy/roadmap)**
  - Resource type: Governance and preparedness roadmap.
  - Producer or publisher: Anthropic.
  - Why it matters for agentic AI security: Tracks planned safeguards, cyber misuse detection, red teaming, model-weight security, application security, investigation workflows, and AI-assisted defence as frontier capability grows.
  - Tags: governance, preparedness, safeguards, cyber-risk.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Roadmap targets are public goals and should be read as planned mitigations, not completed controls.

- **[Anthropic - Responsible Scaling Policy v3.0](https://www.anthropic.com/news/responsible-scaling-policy-v3)**
  - Resource type: Frontier AI governance policy.
  - Producer or publisher: Anthropic.
  - Why it matters for agentic AI security: Connects frontier capability monitoring, deployment safeguards, security levels, public roadmaps, and industry-level risk management to the governance of cyber-capable models.
  - Tags: governance, preparedness, safeguards, frontier-risk.
  - Last checked: 2026-05-17.
  - Limitations or caveats: It is a vendor policy and should be compared with independent evaluations, public-sector assessments, and operational evidence.

- **[METR - Common Elements of Frontier AI Safety Policies](https://metr.org/common-elements)**
  - Resource type: Policy and taxonomy reference.
  - Producer or publisher: METR.
  - Why it matters for agentic AI security: Collects how frontier AI safety policies define and monitor dangerous capabilities, including offensive cybersecurity, automated vulnerability discovery, exploitation, cyber operations, safeguards, and thresholds.
  - Tags: governance, taxonomy, cyber-risk, frontier-policy.
  - Last checked: 2026-05-17.
  - Limitations or caveats: It is a cross-policy synthesis. Readers should consult the underlying policies before relying on specific thresholds.

- **[UK NCSC - Why cyber defenders need to be ready for frontier AI](https://www.ncsc.gov.uk/blogs/why-cyber-defenders-need-to-be-ready-for-frontier-ai)**
  - Resource type: Public-sector cyber guidance and analysis.
  - Producer or publisher: UK National Cyber Security Centre, with AISI contribution.
  - Why it matters for agentic AI security: Frames frontier AI's impact on cyber operations, defender readiness, automation, scale, speed, vulnerability discovery, exploitability testing, remediation, logging, and automated response.
  - Tags: governance, cyber-defence, frontier-risk, public-sector.
  - Last checked: 2026-05-17.
  - Limitations or caveats: This is strategic guidance rather than a technical benchmark.

## Skills For The Future AI Security Engineer

- **Software engineering implications**
  - Resource type: Practice note.
  - Primary sources: [Anthropic Mythos technical report](https://red.anthropic.com/2026/mythos-preview/), [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security), [OSS-Fuzz](https://google.github.io/oss-fuzz/), and [AddressSanitizer](https://clang.llvm.org/docs/AddressSanitizer.html).
  - Why it matters for agentic AI security: Future software engineering will need secure-by-default agent workflows, vulnerability-aware code review, AI-assisted fuzzing, patch verification, dependency-risk mapping, CI/CD hardening, provenance, sandboxed execution, and adversarial testing.
  - Tags: secure-engineering, verification, provenance, ci-cd.
  - Last checked: 2026-05-17.
  - Limitations or caveats: These practices do not replace human ownership of releases, incident response, or risk acceptance.

- **AI engineering implications**
  - Resource type: Practice note.
  - Primary sources: [Anthropic Frontier Safety Roadmap](https://www.anthropic.com/responsible-scaling-policy/roadmap), [METR common elements](https://metr.org/common-elements), [CyberGym](https://www.cybergym.io/), and [ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/).
  - Why it matters for agentic AI security: AI engineers will need to understand model capability evaluation, tool-risk boundaries, sandbox design, telemetry, approval gates, secure scaffolds, vulnerability disclosure, prompt and tool provenance, and the convergence of autonomous coding agents with autonomous cyber agents.
  - Tags: ai-engineering, governance, telemetry, tool-risk.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Capability evaluation should be paired with deployment controls. A strong model benchmark is not a secure agent runtime.

- **Forensics implications**
  - Resource type: Evidence and audit note.
  - Primary sources: [Anthropic coordinated vulnerability disclosure](https://www.anthropic.com/coordinated-vulnerability-disclosure), [Anthropic / Mozilla Firefox security collaboration](https://www.anthropic.com/news/mozilla-firefox-security), and [Anthropic Mythos technical report](https://red.anthropic.com/2026/mythos-preview/).
  - Why it matters for agentic AI security: Prompts, traces, tool logs, generated proofs of concept, patch diffs, sandbox outputs, approval records, disclosure tickets, and execution transcripts may become forensic evidence.
  - Tags: forensics, audit, provenance, disclosure.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Evidence handling needs retention rules, access controls, legal review, and careful treatment of sensitive vulnerability details.

- **Robotics and physical AI implications**
  - Resource type: Cross-domain risk note.
  - Primary sources: [UK NCSC frontier AI guidance](https://www.ncsc.gov.uk/blogs/why-cyber-defenders-need-to-be-ready-for-frontier-ai), [METR common elements](https://metr.org/common-elements), and [Anthropic Frontier Safety Roadmap](https://www.anthropic.com/responsible-scaling-policy/roadmap).
  - Why it matters for agentic AI security: Cyber capability affects robotics and physical AI because robots are software-controlled, networked, sensor-driven, increasingly agentic, and connected to physical outcomes.
  - Tags: physical-ai, cyber-risk, governance, secure-engineering.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Keep this high-level and defensive unless supported by robotics-specific evidence.

## Watch Areas: Open-Weight Cyber Capability And China

- **Open-weight cyber-capability risk analysis**
  - Resource type: Watch area.
  - Primary sources: [CETaS Mythos analysis](https://cetas.turing.ac.uk/publications/claude-mythos-future-cybersecurity), [UK NCSC frontier AI guidance](https://www.ncsc.gov.uk/blogs/why-cyber-defenders-need-to-be-ready-for-frontier-ai), [UK AISI Frontier AI Trends Report](https://www.aisi.gov.uk/frontier-ai-trends-report), and [NIST CAISI](https://www.nist.gov/caisi).
  - Why it matters for agentic AI security: Closed-access models can be monitored, rate-limited, and governed through access programmes; downloadable or modifiable open-weight models can be used privately, altered to remove safeguards, and embedded into agent scaffolds outside provider telemetry.
  - Tags: open-weight-risk, governance, cyber-agent, safeguards.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Track evidence, not rumours. Add specific ecosystems or model families only when primary or technically credible sources show cyber-relevant capability, adoption, or governance differences.

- **Model distillation risk**
  - Resource type: Watch area.
  - Primary sources: [UK NCSC frontier AI guidance](https://www.ncsc.gov.uk/blogs/why-cyber-defenders-need-to-be-ready-for-frontier-ai), [CETaS Mythos analysis](https://cetas.turing.ac.uk/publications/claude-mythos-future-cybersecurity), and [METR common elements](https://metr.org/common-elements).
  - Why it matters for agentic AI security: Frontier cyber capability may transfer into cheaper, smaller, less-governed models, changing who can run cyber-capable agents and how quickly defensive baselines need to adapt.
  - Tags: distillation, open-weight-risk, governance, cyber-risk.
  - Last checked: 2026-05-17.
  - Limitations or caveats: Avoid exact parity dates unless backed by measured evidence. Treat time horizons as review checkpoints, not predictions.

- **China / October 2026 horizon**
  - Resource type: Watch area and review checkpoint.
  - Primary sources: [CETaS Mythos analysis](https://cetas.turing.ac.uk/publications/claude-mythos-future-cybersecurity), [UK NCSC frontier AI guidance](https://www.ncsc.gov.uk/blogs/why-cyber-defenders-need-to-be-ready-for-frontier-ai), and [NIST CAISI](https://www.nist.gov/caisi).
  - Why it matters for agentic AI security: Use October 2026 as a disciplined review checkpoint for open-weight capability lag, agent adoption velocity, uncensored variants, benchmark performance, vulnerability discovery, exploit generation, patch verification, disclosure culture, defensive readiness, and public-sector evaluations of foreign or adversary AI systems.
  - Tags: open-weight-risk, watch-area, governance, cyber-risk.
  - Last checked: 2026-05-17.
  - Limitations or caveats: This is not a prediction and should not be used for unsupported geopolitical claims. Do not add specific Chinese companies, projects, or ecosystems without credible source evidence about cyber-relevant capability or governance.

## Institutions And Companies To Track

- **Track directly from the sources above:** Anthropic, Mozilla, UC Berkeley / Berkeley RDI, CyberGym, METR, UK NCSC, UK AI Security Institute, NIST CAISI, Amazon Web Services, Apple, Broadcom, Cisco, CrowdStrike, Google, JPMorganChase, the Linux Foundation, Microsoft, NVIDIA, Palo Alto Networks, OpenAI, Max Planck Institute for Security and Privacy, UC Santa Barbara, and Arizona State University.
- **Evidence rule:** Add new companies, institutions, or regional ecosystems only when the source supports the connection. Partnership, benchmark authorship, public-sector remit, or a cited case study is enough to track; it is not enough to infer capability, deployment quality, or safety posture.
