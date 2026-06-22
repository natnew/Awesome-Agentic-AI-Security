# Tools

This page collects tools that can help teams secure, observe, test, govern, or evaluate agentic AI systems. Tools are included when they support defensive work. Tool inclusion is not endorsement, and no tool should be treated as sufficient evidence of safety by itself.

Tool results should be treated as bounded signals. A scanner, red teaming harness, bill of materials generator, or runtime guardrail can support review, but it cannot prove that the full execution system is secure across real tools, memory, credentials, approvals, and downstream actions.

Each entry uses the repository metadata format: resource type, producer, source, relevance, coverage, maturity, last checked, and limitations.

## Entries

### PyRIT

- Resource type: Open-source red teaming and risk identification framework.
- Producer or publisher: Microsoft.
- Source link: <https://github.com/Azure/PyRIT>.
- Relevance to agentic execution security: Helps structure adversarial testing workflows against generative AI systems and can support repeatable evaluation of prompts, targets, scoring, and attack strategies.
- Coverage: Red teaming orchestration, prompt attacks, target abstraction, scoring, automation, and repeatable test workflows.
- Evidence quality and maturity level: Actively maintained open-source project from a major platform vendor. Mature enough for experimentation and internal evaluation workflows.
- Last checked: 2026-04-29.
- Limitations or caveats: It is a testing framework, not a runtime control. Agentic systems still need architecture-specific scenarios for tools, memory, credentials, approvals, and downstream actions.

### Garak

- Resource type: Open-source LLM vulnerability scanner.
- Producer or publisher: NVIDIA.
- Source link: <https://github.com/NVIDIA/garak>.
- Relevance to agentic execution security: Provides automated probes for LLM security weaknesses that can inform model and application risk assessment before agents are given execution authority.
- Coverage: Prompt injection, jailbreaks, data leakage, model behaviour probes, detectors, and reporting.
- Evidence quality and maturity level: Mature and widely referenced open-source testing tool.
- Last checked: 2026-04-29.
- Limitations or caveats: Model-level or prompt-level scanner results do not directly measure full agentic workflow safety. Use as one signal, not as a merge gate for agent deployment.

### AgentDojo

- Resource type: Open-source benchmark and evaluation environment.
- Producer or publisher: ETH Zurich SPY Lab and collaborators.
- Source link: <https://github.com/ethz-spylab/agentdojo>.
- Relevance to agentic execution security: Provides a structured environment for evaluating indirect prompt injection and defences in tool-using LLM agents.
- Coverage: Agent tasks, tool use, adversarial content, indirect prompt injection, data exfiltration objectives, defences, and evaluation metrics.
- Evidence quality and maturity level: Emerging but directly relevant to agentic prompt-injection testing.
- Last checked: 2026-04-29.
- Limitations or caveats: It models specific task environments. Production agents need custom scenarios that reflect their actual tools, authority, memory, and data flows.

### NVIDIA NeMo Agent Toolkit Safety And Security Example

- Resource type: Open-source agent red teaming example and evaluation workflow.
- Producer or publisher: NVIDIA, with Lakera contribution described in related research.
- Source link: <https://github.com/NVIDIA/NeMo-Agent-Toolkit/tree/develop/examples/safety_and_security/retail_agent>.
- Relevance to agentic execution security: Demonstrates system-level red teaming for an agent workflow, including attack scenarios, evaluation points, risk scoring, and propagation analysis.
- Coverage: Agent workflow testing, direct and indirect inputs, tool boundaries, scenario definitions, attack success rate, risk scoring, report generation, and mitigation iteration.
- Evidence quality and maturity level: Emerging practical example. Useful for teams building their own agent evaluation loop.
- Last checked: 2026-04-29.
- Limitations or caveats: The sample agent is not representative of every production architecture. Treat it as a starting pattern, not a complete evaluation suite.

### Promptfoo

- Resource type: Open-source LLM evaluation and red teaming tool.
- Producer or publisher: Promptfoo project.
- Source link: <https://github.com/promptfoo/promptfoo>.
- Relevance to agentic execution security: Helps teams write repeatable tests for prompts, model outputs, policies, and red-team cases, which can become part of a broader agentic assurance workflow.
- Coverage: Evaluation cases, assertions, red-team plugins, model comparison, CI integration, reporting, and policy tests.
- Evidence quality and maturity level: Mature open-source tool with active adoption.
- Last checked: 2026-04-29.
- Limitations or caveats: It is strongest for prompt and response evaluation. Full agentic risk requires tests that exercise tool calls, memory writes, approvals, credentials, and downstream actions.

### Inspect AI

- Resource type: Open-source evaluation framework.
- Producer or publisher: UK AI Security Institute.
- Source link: <https://github.com/UKGovernmentBEIS/inspect_ai>.
- Relevance to agentic execution security: Supports structured AI evaluations with tasks, solvers, scorers, and logs that can be adapted for security-focused evaluation work.
- Coverage: Evaluation tasks, model interaction, scoring, reproducibility, logging, and benchmark execution.
- Evidence quality and maturity level: Mature public evaluation framework from a public AI safety and security institution.
- Last checked: 2026-04-29.
- Limitations or caveats: It is a general evaluation framework. Security teams must design agentic threat scenarios and scorers that match their systems.

### OWASP AIBOM Generator

- Resource type: Open-source AI bill of materials tool.
- Producer or publisher: OWASP GenAI Security Project.
- Source link: <https://genai.owasp.org/resource/owasp-aibom-generator/>.
- Relevance to agentic execution security: Supports transparency around AI components, which is useful for inventory, governance, supply-chain review, and assurance evidence.
- Coverage: AI software bills of materials, model and component inventory, supply-chain transparency, and governance documentation.
- Evidence quality and maturity level: Emerging OWASP tool. Useful as part of AI asset discovery and documentation.
- Last checked: 2026-04-29.
- Limitations or caveats: An AIBOM does not prove that an agent is secure. It supports inventory and review, but runtime authority, tool use, memory, and policy enforcement still require separate controls.

### Armorer Guard

- Resource type: Open-source runtime scanner and MCP proxy.
- Producer or publisher: Armorer Labs.
- Source link: <https://github.com/ArmorerLabs/Armorer-Guard>.
- Relevance to agentic execution security: Provides a local hot-path control that can inspect untrusted text and MCP tool-call arguments before they become context, actions, memory writes, or outbound data.
- Coverage: Prompt injection, credential leakage, data exfiltration requests, risky tool-call arguments, structured reasons, sanitized text, scan identifiers, and a local feedback overlay for deployment-specific policy corrections.
- Evidence quality and maturity level: Early-stage open-source project with public code, MIT licence, local Rust runtime, CLI/MCP proxy interface, benchmark documentation, and active maintenance. Useful as an example of a lightweight runtime boundary control.
- Last checked: 2026-06-22.
- Limitations or caveats: It is not a complete proof of agent safety and should not replace least-privilege tool design, approval gates, sandboxing, observability, credential isolation, or system-specific red-team evaluation. Effectiveness should be validated against the target agent's actual tools, authority, and data flows.

### Lakera Agent Breaker

- Resource type: Public red teaming playground and research testbed.
- Producer or publisher: Lakera.
- Source link: <https://gandalf.lakera.ai/agent-breaker> and <https://www.lakera.ai/blog/inside-agent-breaker>.
- Relevance to agentic execution security: Models realistic GenAI and agentic attack scenarios, including RAG, tools, browsing, memory, prompt extraction, tool poisoning, and data exfiltration.
- Coverage: Threat snapshots, attack objectives, attack vectors, layered defences, scoring, model comparison, and distributed red teaming.
- Evidence quality and maturity level: Useful vendor-run public testbed with large-scale human attack data. Medium maturity as a tool for learning and research rather than enterprise assurance.
- Last checked: 2026-04-29.
- Limitations or caveats: Scenarios are simplified and vendor-operated. Results should inform threat modelling and evaluation design, not replace testing against the actual production system.

### Lakera Guard And Lakera Red

- Resource type: Commercial runtime protection and red teaming products.
- Producer or publisher: Lakera.
- Source link: <https://docs.lakera.ai/introduction>, <https://docs.lakera.ai/guard>, and <https://docs.lakera.ai/red>.
- Relevance to agentic execution security: Provides examples of runtime screening, policy enforcement, red teaming, and AI gateway integration patterns that map to agentic security operations.
- Coverage: Prompt injection detection, data loss prevention, policy configuration, runtime screening, adversarial testing, agentic workflows, reporting, and integration with application or gateway layers.
- Evidence quality and maturity level: Commercial tooling with public documentation. Useful to study as an example control pattern.
- Last checked: 2026-04-29.
- Limitations or caveats: Product claims and effectiveness require independent validation in the target environment. Avoid relying on any single vendor control for complete agentic security.
