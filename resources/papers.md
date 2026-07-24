<!-- markdownlint-disable MD013 -->

# Papers

This page collects academic, independent, and research-oriented work relevant to agentic AI security. Papers are included when they help explain attack surfaces, evaluation methods, memory risk, prompt injection, tool use, or system-level safety and security. Inclusion does not mean the paper is definitive.

Each entry uses the repository metadata format: resource type, producer, source, relevance, coverage, maturity, last checked, and limitations.

## Entries

### Compromising Real-World LLM-Integrated Applications With Indirect Prompt Injection

- Resource type: Academic paper.
- Producer or publisher: Greshake et al.
- Source link: <https://arxiv.org/abs/2302.12173>.
- Relevance to agentic execution security: Establishes indirect prompt injection as a practical risk when LLM applications consume external content, which is foundational for agents that read documents, browse, retrieve context, or call tools.
- Coverage: Indirect prompt injection, external content, retrieval, application integration, data exfiltration, and downstream action manipulation.
- Evidence quality and maturity level: Mature foundational research for LLM application security.
- Last checked: 2026-04-29.
- Limitations or caveats: The field has moved quickly since publication. Pair it with newer agent-specific work on tools, memory, and multi-step execution.

### AgentPoison: Red-Teaming LLM Agents Via Poisoning Memory Or Knowledge Bases

- Resource type: Academic paper.
- Producer or publisher: Research authors on arXiv.
- Source link: <https://arxiv.org/abs/2407.12784>.
- Relevance to agentic execution security: Shows how poisoning an agent's memory or knowledge base can implant hidden objectives that affect future behaviour.
- Coverage: Agent memory poisoning, knowledge-base poisoning, hidden objectives, persistence, delayed triggers, and red teaming of agent behaviours.
- Evidence quality and maturity level: Emerging academic research with strong relevance to persistent-state risk.
- Last checked: 2026-04-29.
- Limitations or caveats: Experimental settings may not match production agent architectures. Validate assumptions about memory write paths, retrieval, permissions, and human review.

### A Practical Memory Injection Attack Against LLM Agents

- Resource type: Academic paper.
- Producer or publisher: Research authors on arXiv.
- Source link: <https://arxiv.org/html/2503.03704v2>.
- Relevance to agentic execution security: Provides a concrete memory-injection framing for agents with long-term memory, reinforcing that stored state must be treated as untrusted input.
- Coverage: Memory injection, long-term memory, persistence across sessions, later recall, and agent behaviour manipulation.
- Evidence quality and maturity level: Emerging research. Useful for threat modelling memory systems and evaluating memory controls.
- Last checked: 2026-04-29.
- Limitations or caveats: Implementation details and attack feasibility depend heavily on the memory system, summarisation policy, retrieval thresholds, and write authorisation model.

### Breaking Agent Backbones: Evaluating The Security Of Backbone LLMs In AI Agents

- Resource type: Research paper and benchmark methodology.
- Producer or publisher: Lakera research team and collaborators.
- Source link: <https://arxiv.org/abs/2510.22620>.
- Relevance to agentic execution security: Introduces threat snapshots for isolating vulnerable moments in agent execution and evaluating the backbone LLM's security behaviour under adversarial pressure.
- Coverage: Backbone LLM security, threat snapshots, crowdsourced adversarial attacks, model comparison, prompt injection, context extraction, tool misuse, data exfiltration, memory poisoning, and benchmark design.
- Evidence quality and maturity level: Emerging but high-signal research. It includes a large crowdsourced attack dataset and a reproducible evaluation framing.
- Last checked: 2026-04-29.
- Limitations or caveats: It evaluates backbone LLM behaviour rather than full production agent security. Tool isolation, permissions, policy enforcement, memory integrity, and deployment controls remain separate concerns.

### A Safety And Security Framework For Real-World Agentic Systems

- Resource type: Research paper and framework.
- Producer or publisher: Lakera research team and collaborators.
- Source link: <https://arxiv.org/abs/2511.21990>.
- Relevance to agentic execution security: Frames safety and security as emergent properties of interactions among models, orchestrators, tools, data, and operating environments.
- Coverage: Agentic risk taxonomy, contextual risk discovery, evaluation, mitigation, AI-driven red teaming, human oversight, enterprise workflows, tool misuse, cascading action chains, and unintended control amplification.
- Evidence quality and maturity level: Emerging research with a practical case-study orientation.
- Last checked: 2026-04-29.
- Limitations or caveats: It should be read as a proposed framework and case study, not as a settled standard. Organisations need to adapt the framework to their own workflows, authorities, and assurance evidence.

### Gandalf: Adaptive Defences For Large Language Models

- Resource type: Research paper and dataset.
- Producer or publisher: Lakera research team.
- Source link: <https://arxiv.org/abs/2501.07927>.
- Relevance to agentic execution security: Provides evidence from large-scale human red teaming and discusses adaptive defences and defence in depth for LLM systems.
- Coverage: Dynamic security evaluation, multi-step interactions, adversarial prompts, defence degradation, adaptive defences, datasets, and crowd-sourced red teaming.
- Evidence quality and maturity level: Medium to high signal for adversarial prompt data and defence evaluation. Useful context for agentic red teaming.
- Last checked: 2026-04-29.
- Limitations or caveats: It is broader than agentic execution and should not be used alone to assess tool, memory, credential, or multi-agent risk.

### Prompt Injection Attacks On Agentic Coding Assistants

- Resource type: Academic or technical paper.
- Producer or publisher: Research authors on arXiv.
- Source link: <https://arxiv.org/abs/2601.17548>.
- Relevance to agentic execution security: Targets coding assistants, where natural-language instructions can influence file writes, commands, dependencies, credentials, and development workflows.
- Coverage: Coding-agent prompt injection, repository context, tool use, command execution, code modification, and developer workflow risk.
- Evidence quality and maturity level: Emerging research. Relevant to one of the highest-impact agentic deployment patterns.
- Last checked: 2026-04-29.
- Limitations or caveats: Coding-assistant architectures differ substantially. Validate findings against the specific assistant, IDE integration, permission model, and repository trust boundary.

### AgentDojo: A Dynamic Environment To Evaluate Prompt Injection Attacks And Defences For LLM Agents

- Resource type: Academic benchmark paper and evaluation environment.
- Producer or publisher: ETH Zurich SPY Lab and collaborators.
- Source link: <https://github.com/ethz-spylab/agentdojo>.
- Relevance to agentic execution security: Provides a task environment for evaluating indirect prompt injection and defences in tool-using agents.
- Coverage: Prompt injection, tool use, data exfiltration, user tasks, adversarial content, defence evaluation, and benchmark scenarios.
- Evidence quality and maturity level: Emerging but influential benchmark environment.
- Last checked: 2026-04-29.
- Limitations or caveats: Benchmark performance does not guarantee production safety. Treat it as one source of evidence alongside architecture review, runtime controls, and system-specific red teaming.

### Harness Handbook: Making Evolving Agent Harnesses Readable, Navigable, And Editable

- Resource type: Academic paper.
- Producer or publisher: Wang et al.
- Source link: <https://arxiv.org/abs/2607.13285>.
- Relevance to agentic execution security: Describes behaviour-to-code mapping for agent harnesses that construct prompts, manage state, invoke tools, and coordinate execution, which can support security review and change-impact analysis.
- Coverage: Agent harnesses, behaviour localisation, source-code mapping, static analysis, LLM-assisted structuring, progressive disclosure, edit planning, and verification of candidate implementation locations.
- Evidence quality and maturity level: Emerging academic research with experimental evaluation on modification requests from two open-source harnesses.
- Last checked: 2026-07-20.
- Limitations or caveats: The paper focuses on harness readability and edit planning rather than security controls directly. Security value depends on integrating the method into review, testing, policy, and audit workflows.

### BlindGuard: Safeguarding LLM-based Multi-Agent Systems under Unknown Attacks

- Resource type: Academic paper.
- Producer or publisher: Miao et al., Association for Computational Linguistics (ACL 2026).
- Source link: <https://aclanthology.org/2026.acl-long.1819/>.
- Relevance to agentic execution security: Examines propagation vulnerability in multi-agent systems and proposes an unsupervised detection approach that does not require attack-specific labels.
- Coverage: Multi-agent interaction security, malicious-agent detection, unknown-attack generalisation, propagation risk, interaction-pattern modelling, and contrastive learning over normal-behaviour signals.
- Evidence quality and maturity level: Emerging peer-reviewed research (ACL long paper). High signal for multi-agent defence framing, but still a research result rather than a deployment standard.
- Last checked: 2026-07-24.
- Limitations or caveats: Reported performance is based on the paper's experimental settings. Real-world effectiveness depends on deployment context, communication topology, threat model fit, and operational integration with runtime controls.

<!-- markdownlint-enable MD013 -->
