# Agentic AI Security Benchmarks

This document catalogues and describes benchmarks for agentic AI security, including their scope, methodology, and limitations.

## Why Benchmarks Matter And How To Read Them

Benchmarks can provide useful evidence, but they are not proof that a production agent is secure. They should be paired with threat modelling, architecture review, runtime telemetry, and system-specific red teaming.

Benchmark results are most useful when readers understand the boundary being tested: a model response, a threat snapshot, a simulated tool workflow, a red team scenario, or a production-like control path. Results should not be generalised beyond the tested environment without additional evidence.

When you read a benchmark report, ask:

- What is being scored — the model in isolation, an agent loop, or an end-to-end deployed system?
- What threat model and trust boundary does the benchmark assume?
- Which surfaces does it exercise (instructions, retrieved context, tools, credentials, memory, approvals, downstream actions)?
- What does a passing or failing score actually demonstrate about real risk?

## What Makes A Good Benchmark For Agentic Systems

A useful agentic security benchmark generally:

- Tests an agent in motion (tools, memory, state, multi-step reasoning), not only the underlying model.
- States its threat model and trust boundary explicitly so readers can map the result to their own deployment.
- Exercises adversarial inputs across more than one surface — for example, indirect prompt injection that lands in a tool call, or a poisoned retrieval that drives a memory write.
- Reports both task success and security objectives, so improvements on one are not masked by regressions on the other.
- Documents method, scoring, and limitations clearly enough for another team to reproduce or contest the result.
- Provides reusable scenarios, payloads, or harnesses that teams can extend with their own tools, data, and policies.

For the full criteria and scoring guide, see the [benchmark quality rubric](../rubrics/benchmark-quality-rubric.md).

## Catalogue Of Current Benchmarks

The table below summarises the public benchmarks and evaluation harnesses tracked by this repository. For full metadata (producer, source, coverage, last checked, limitations) see the [resource catalogue](../resources/benchmarks.md).

| Benchmark | Producer | What it tests | Maturity |
| --- | --- | --- | --- |
| [AgentDojo](https://github.com/ethz-spylab/agentdojo) | ETH Zurich SPY Lab | Tool-using agents under indirect prompt injection; defences vs. task completion | Emerging |
| [Backbone Breaker Benchmark](https://www.lakera.ai/blog/the-backbone-breaker-benchmark) | Lakera (with UK AISI) | Backbone LLM behaviour at vulnerable agent moments via threat snapshots | Emerging, high-signal |
| [Gandalf Agent Breaker](https://gandalf.lakera.ai/agent-breaker) | Lakera | Public testbed: RAG, browsing, tools, memory, prompt extraction, exfiltration | Medium |
| [NVIDIA NeMo Agent Toolkit Red Teaming](https://github.com/NVIDIA/NeMo-Agent-Toolkit/tree/develop/examples/safety_and_security/retail_agent) | NVIDIA | End-to-end agent workflow evaluation with adversarial scenarios and risk scores | Practical example |
| [CyberSecEval](https://github.com/meta-llama/PurpleLlama/tree/main/CybersecurityBenchmarks) | Meta Purple Llama | Cybersecurity knowledge, secure coding, abuse, prompt-injection-related tasks | Mature (model-level) |
| [CyberGym](https://www.cybergym.io/) | UC Berkeley researchers | Real-world vulnerability reproduction, PoC generation, incomplete patch discovery, and open-ended discovery | Emerging, high-signal |
| [ExploitGym](https://rdi.berkeley.edu/blog/exploitgym/) | Berkeley RDI-led collaboration | Real-world exploitation tasks across userspace, browser engine, and Linux kernel categories | Emerging, high-risk capability signal |
| [OWASP GenAI Red Teaming Guide](https://genai.owasp.org/resource/genai-red-teaming-guide/) | OWASP GenAI Security Project | Methodology for model, implementation, infrastructure, and runtime testing | Mature (guide) |
| [Q4 2025 AI Agent Security Trends Report](https://www.lakera.ai/ai-security-guides/q4-2025-ai-agent-security-trends) | Lakera | Vendor-observed production attack traffic against early agentic systems | Medium (vendor report) |

For richer notes on each entry — coverage, evidence quality, and caveats — see the full [benchmark catalogue](../resources/benchmarks.md).

## Methodology And Evaluation Criteria

Treat benchmark scores as one signal in a wider evaluation programme. The following references describe how to design, score, and combine evaluations:

- [Red teaming and evaluation](05-red-teaming-and-evaluation.md) — methodology for scenario design, evidence requirements, and reporting.
- [Benchmark quality rubric](../rubrics/benchmark-quality-rubric.md) — criteria for judging whether a benchmark is informative for a given system.
- [Agent security readiness rubric](../rubrics/agent-security-readiness-rubric.md) — control coverage expectations a benchmark alone cannot demonstrate.

## Known Limitations And Gaps

Even strong benchmarks have meaningful gaps when applied to real agentic deployments:

- Many benchmarks score the backbone LLM rather than the full deployed agent, so they miss tool brokering, credential boundaries, memory controls, approvals, and downstream actions.
- Coverage of memory poisoning, multi-agent propagation, and long-horizon autonomy is uneven across the public landscape.
- Scenarios are often simplified, vendor-operated, or narrowly scoped; results rarely transfer between deployments without re-testing on the target system.
- Defence comparisons can be misleading when the benchmark does not separate task success from security objectives.
- Public benchmarks cannot cover production-specific tools, data, policies, and approval flows; system-specific tests are still required.

## Where To Go Next

- [Red teaming and evaluation](05-red-teaming-and-evaluation.md) for evaluation methodology.
- [Rubrics](../rubrics/) for scoring guides used across this repository.
- [Resources: benchmarks catalogue](../resources/benchmarks.md) for the full per-entry metadata.
- [Cyber-capable AI agents resource cluster](../resources/cyber-capable-ai-agents.md) for Mythos, CyberGym, ExploitGym, disclosure, patch verification, and frontier cyber-governance context.
