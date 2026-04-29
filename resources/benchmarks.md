# Benchmarks

This page collects benchmarks, testbeds, and evaluation methods relevant to agentic AI security. Benchmarks can provide useful evidence, but they are not proof that a production agent is secure. They should be paired with threat modelling, architecture review, runtime telemetry, and system-specific red teaming.

Benchmark results are most useful when readers understand the boundary being tested: a model response, a threat snapshot, a simulated tool workflow, a red team scenario, or a production-like control path. They should not be generalised beyond the tested environment without additional evidence.

Each entry uses the repository metadata format: resource type, producer, source, relevance, coverage, maturity, last checked, and limitations.

## Entries

### AgentDojo

- Resource type: Agent security benchmark and evaluation environment.
- Producer or publisher: ETH Zurich SPY Lab and collaborators.
- Source link: <https://github.com/ethz-spylab/agentdojo>.
- Relevance to agentic execution security: Evaluates how tool-using agents behave under indirect prompt injection and how defences affect task completion and security objectives.
- Coverage: User tasks, tool calls, indirect prompt injection, adversarial content, data exfiltration, defence strategies, and scoring.
- Evidence quality and maturity level: Emerging but directly aligned to agentic prompt-injection evaluation.
- Last checked: 2026-04-29.
- Limitations or caveats: Benchmark tasks are controlled scenarios. Production systems need custom tests for their own tools, data, memory, permissions, and approval flows.

### Backbone Breaker Benchmark And AI Model Risk Index

- Resource type: Agent security benchmark and model-risk index.
- Producer or publisher: Lakera research team, with the benchmark described as built with the UK AI Security Institute.
- Source link: <https://www.lakera.ai/blog/the-backbone-breaker-benchmark>, <https://www.lakera.ai/ai-model-risk-index>, and <https://arxiv.org/abs/2510.22620>.
- Relevance to agentic execution security: Measures backbone LLM behaviour at vulnerable moments in agent execution using threat snapshots drawn from human red-team attempts.
- Coverage: Direct and indirect attacks, tool manipulation, context extraction, data exfiltration, denial of service, memory poisoning, model comparison, defence levels, and vulnerability scoring.
- Evidence quality and maturity level: Emerging but high-signal benchmark. It uses a large crowdsourced attack base and a reproducible threat snapshot method.
- Last checked: 2026-04-29.
- Limitations or caveats: It evaluates the backbone LLM rather than the full deployed agent. It should not be used as a substitute for testing tool brokers, credential boundaries, memory controls, approvals, or downstream actions.

### Gandalf Agent Breaker

- Resource type: Public red teaming testbed and challenge benchmark.
- Producer or publisher: Lakera.
- Source link: <https://gandalf.lakera.ai/agent-breaker> and <https://www.lakera.ai/blog/inside-agent-breaker>.
- Relevance to agentic execution security: Encodes realistic agentic threat snapshots as playable challenges, producing useful examples of attack objectives, vectors, defences, and scoring.
- Coverage: RAG, browsing, tools, memory, prompt extraction, tool poisoning, toxicity injection, data exfiltration, layered defences, and model leaderboards.
- Evidence quality and maturity level: Useful public testbed and data source. Medium maturity as a benchmark because scenarios are vendor-operated and simplified.
- Last checked: 2026-04-29.
- Limitations or caveats: Challenge success rates do not directly translate to production risk. Use it for learning, scenario design, and comparative intuition.

### NVIDIA NeMo Agent Toolkit Red Teaming Example

- Resource type: Agent red teaming evaluation workflow.
- Producer or publisher: NVIDIA, with Lakera contribution described publicly.
- Source link: <https://github.com/NVIDIA/NeMo-Agent-Toolkit/tree/develop/examples/safety_and_security/retail_agent> and <https://www.lakera.ai/blog/red-teaming-agentic-capabilities-in-nvidia-nemo-agent-toolkit>.
- Relevance to agentic execution security: Shows how to evaluate an agent workflow end to end, including adversarial scenarios, workflow outputs, attack success rate, and normalized risk scores.
- Coverage: Direct and indirect inputs, tool boundaries, multi-step execution, scenario categories, risk propagation, attack success rate, reports, and iterative mitigation.
- Evidence quality and maturity level: Practical emerging example for development workflows.
- Last checked: 2026-04-29.
- Limitations or caveats: The sample scenario is narrow. Teams must build their own scenario library and evaluation points for multi-agent handoffs, memory, approvals, and production tools.

### CyberSecEval

- Resource type: Cybersecurity benchmark suite for LLMs.
- Producer or publisher: Meta Purple Llama project.
- Source link: <https://github.com/meta-llama/PurpleLlama/tree/main/CybersecurityBenchmarks>.
- Relevance to agentic execution security: Provides useful security evaluation tasks for models used in cyber contexts, especially before those models are embedded in coding, analysis, or automation agents.
- Coverage: Cybersecurity knowledge and behaviour evaluations, secure coding, abuse potential, prompt injection-related tasks in newer benchmark versions, and model comparison.
- Evidence quality and maturity level: Mature open-source benchmark suite for model-level cybersecurity evaluation.
- Last checked: 2026-04-29.
- Limitations or caveats: It is not a full agentic execution benchmark. It should be paired with tests for real tools, credentials, memory, and workflow side effects.

### OWASP GenAI Red Teaming Guide

- Resource type: Red teaming methodology guide.
- Producer or publisher: OWASP GenAI Security Project.
- Source link: <https://genai.owasp.org/resource/genai-red-teaming-guide/>.
- Relevance to agentic execution security: Provides a structured approach to red teaming GenAI systems across model evaluation, implementation testing, infrastructure assessment, and runtime behaviour analysis.
- Coverage: Red team planning, evaluation scope, runtime behaviour, infrastructure, model-level testing, and stakeholder use cases.
- Evidence quality and maturity level: Practical community guide. Mature enough as methodology guidance, not a benchmark result.
- Last checked: 2026-04-29.
- Limitations or caveats: It is a guide rather than an executable benchmark. Agentic systems require additional scenarios for tool use, memory, delegated authority, multi-agent communication, and outcome control.

### Q4 2025 AI Agent Security Trends Report

- Resource type: Vendor report based on observed production attack traffic.
- Producer or publisher: Lakera.
- Source link: <https://www.lakera.ai/ai-security-guides/q4-2025-ai-agent-security-trends>.
- Relevance to agentic execution security: Provides a vendor-observed snapshot of real attack patterns against early agentic systems, including indirect prompt injection and system prompt extraction attempts.
- Coverage: Production attack traffic, system prompt leakage, indirect prompt injection, tool use, external data ingestion, script-shaped content, role play, obfuscation, and attacker intent.
- Evidence quality and maturity level: Medium maturity vendor report. Useful as directional intelligence if read with appropriate caveats.
- Last checked: 2026-04-29.
- Limitations or caveats: The full report is gated and based on one vendor's telemetry. Treat it as one signal, not a representative measurement of the entire ecosystem.
