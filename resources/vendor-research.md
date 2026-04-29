# Vendor Research

This page collects vendor-produced research and guidance that is useful for understanding agentic AI security. Vendor material can be valuable, especially when it contains concrete evidence, datasets, or architecture lessons. It should still be read with attention to incentives, product positioning, and reproducibility.

Each entry uses the repository metadata format: resource type, producer, source, relevance, coverage, maturity, last checked, and limitations.

## Entries

### Lakera: The Progressive Breach Model Behind The OWASP Top 10 For Agentic Applications

- Resource type: Vendor research and analysis.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/the-progressive-breach-model-behind-the-owasp-top-10-for-agentic-applications>.
- Relevance to agentic execution security: Explains agentic compromise as a progression from manipulated intent to tool use, delegated authority, propagation, cascading failures, and loss of containment.
- Coverage: Prompt injection, goal hijack, memory poisoning, tool misuse, credential and identity abuse, inter-agent propagation, supply-chain risk, cascading failures, and outcome containment.
- Evidence quality and maturity level: Useful conceptual synthesis with links to OWASP material and related research. Medium maturity as vendor analysis rather than an independent benchmark.
- Last checked: 2026-04-29.
- Limitations or caveats: The model is interpretive. Use it to reason about breach chains and containment, not as proof that a specific control is effective.

### Lakera: Agentic AI Threats - Memory Poisoning And Long-Horizon Goal Hijacks

- Resource type: Vendor research and educational analysis.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/agentic-ai-threats-p1>.
- Relevance to agentic execution security: Highlights persistent memory and long-horizon objective drift as agent-specific risks that do not appear in single-turn model evaluations.
- Coverage: Memory poisoning, goal hijacking, persistent state, retrieved context, provenance, workflow monitoring, layered guardrails, and red teaming.
- Evidence quality and maturity level: Medium maturity. It synthesises research, examples, and Lakera's own Agent Breaker scenarios.
- Last checked: 2026-04-29.
- Limitations or caveats: Includes product references and simplified examples. It should be paired with independent work on memory injection and agent poisoning.

### Lakera: Memory Poisoning And Instruction Drift From Discord Chat To Reverse Shell

- Resource type: Vendor research lab write-up.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/memory-poisoning-instruction-drift-from-discord-chat-to-reverse-shell>.
- Relevance to agentic execution security: Demonstrates how persistent memory and tool execution can interact so that gradual trust drift influences later execution behaviour.
- Coverage: Persistent memory, instruction drift, long-lived state, shell execution, Discord integration, least privilege, sandboxing, and memory integrity.
- Evidence quality and maturity level: Medium maturity lab evidence. The write-up is useful because it describes controlled conditions and architectural implications.
- Last checked: 2026-04-29.
- Limitations or caveats: The scenario is a controlled experiment and should not be generalised without considering the exact agent runtime, permissions, memory design, and execution controls.

### Lakera: The Agent Skill Ecosystem - When AI Extensions Become A Malware Delivery Channel

- Resource type: Vendor research and marketplace audit.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/the-agent-skill-ecosystem-when-ai-extensions-become-a-malware-delivery-channel>.
- Relevance to agentic execution security: Treats agent skills as a software supply-chain layer with local execution, credential access, network egress, and marketplace distribution.
- Coverage: Malicious skills, credential exposure, over-broad OAuth scopes, command injection, hardcoded secrets, unsandboxed execution, code signing, provenance, and marketplace review.
- Evidence quality and maturity level: Medium to high signal for the analysed ecosystem. It reports a large scrape and a deeper review subset.
- Last checked: 2026-04-29.
- Limitations or caveats: The findings are specific to the analysed OpenClaw-style skill ecosystem. Relevance to other platforms depends on their package format, execution model, signing, sandboxing, and review process.

### Lakera: AI Gateways - What They Are, What They Control, And Why They Matter

- Resource type: Vendor architecture guidance.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/ai-gateways-what-they-are-what-they-control-and-why-they-matter>.
- Relevance to agentic execution security: Describes AI gateways as central control points for identity, routing, guardrails, telemetry, virtual keys, budget controls, and tool governance.
- Coverage: Gateway architecture, provider abstraction, SSO, RBAC, ABAC, policy enforcement, MCP and tool governance, agent registries, RAG boundaries, observability, and audit logs.
- Evidence quality and maturity level: Useful architecture explainer. Medium maturity because it is vendor guidance and partly market framing.
- Last checked: 2026-04-29.
- Limitations or caveats: A gateway is not a complete security architecture. Document-level permissions, runtime outcome control, memory integrity, tool isolation, and downstream system controls still need separate enforcement.

### Lakera: From Access Control To Outcome Control

- Resource type: Vendor architecture and product integration analysis.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/from-access-control-to-outcome-control-securing-ai-agents-with-check-point-and-google-cloud>.
- Relevance to agentic execution security: Clearly distinguishes valid access from acceptable outcomes, which is central to securing systems where agents act under legitimate credentials.
- Coverage: Agent gateways, agent registries, identity, access, policy, observability, runtime behaviour evaluation, tool usage checks, prompt injection detection, data exposure control, and outcome control.
- Evidence quality and maturity level: Medium maturity vendor analysis. Valuable for architecture language, but tied to a specific product partnership.
- Last checked: 2026-04-29.
- Limitations or caveats: Product availability and control effectiveness require independent validation. Use the architecture idea, not the marketing claim, as the reusable resource.

### Lakera: Your AI Coding Assistant Just Shipped Your API Keys

- Resource type: Vendor security research.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/your-ai-coding-assistant-just-shipped-your-api-keys>.
- Relevance to agentic execution security: Shows how coding-agent local state and packaging workflows can leak credentials through ordinary development and release processes.
- Coverage: Coding assistants, local permission allowlists, package registry publishing, hidden settings files, API keys, token leakage, artefact inspection, and release hygiene.
- Evidence quality and maturity level: Medium to high signal for the scanned npm sample. The write-up includes methodology, observed scale, and practical prevention steps.
- Last checked: 2026-04-29.
- Limitations or caveats: The reported scan focuses on a specific assistant file and registry workflow. Other coding agents and package managers need their own file-selection and secret-exposure review.

### Lakera: Stop Letting Models Grade Their Own Homework

- Resource type: Vendor security analysis.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/blog/stop-letting-models-grade-their-own-homework-why-llm-as-a-judge-fails-at-prompt-injection-defense>.
- Relevance to agentic execution security: Argues that instruction-following models should not be the hard security boundary for prompt injection or runtime enforcement.
- Coverage: LLM-as-judge limitations, prompt injection, recursive failure, deterministic enforcement, non-LLM classifiers, guardrail layering, and security-boundary design.
- Evidence quality and maturity level: Medium maturity vendor argument. Useful for caveats when evaluating LLM-based guardrails and judges.
- Last checked: 2026-04-29.
- Limitations or caveats: It promotes a vendor position. The architectural warning is valuable, but claims about specific defence types should be validated with independent testing.
