# Awesome Agentic AI Security

[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
![Map: Security Risks And Controls](https://img.shields.io/badge/map-security%20risks%20and%20controls-blue.svg)
![Focus: Agentic AI](https://img.shields.io/badge/focus-agentic%20AI-2ea44f.svg)

The security boundary has moved from the model to the agentic execution system.

Awesome Agentic AI Security is a curated, structured, and continuously updated map of security risks, controls, benchmarks, architectures, and research for agentic, multi-agent, tool-using, self-improving AI systems.

AI systems that act cannot be secured with isolated controls. They need security systems that can see, understand, and govern actions as they unfold. They need controls that observe, interpret, and constrain AI behaviour across prompts, context, tools, memory, credentials, code execution, delegated authority, and multi-agent workflows.

Language is now part of the execution layer. Instructions can shape tool calls, trigger workflows, update memory, write code, route data, and influence decisions across enterprise systems. That changes the security equation: securing agentic AI means securing the system of action around the model, not only the model interface.

## Core Question

The central question for agentic AI security is:

> What can this AI system do, under whose authority, with which tools, using which data, with what memory, and under what controls?

This repository helps AI leaders, CTOs, AI engineers, AI researchers, security engineers, and governance leaders reason about that question with clear maps, practical controls, quality benchmarks, and evidence-led research.

## Why This Matters

Agentic systems behave less like isolated chat applications and more like distributed execution environments. A single compromised instruction can combine with tool permissions, retrieved context, stored memory, delegated authority, weak approval paths, and poor observability to create a breach chain.

Useful security for these systems must do more than filter inputs or scan outputs. It must understand the relationship between intent, authority, action, context, and outcome.

The goal of this project is to map:

- Security risks that emerge when AI systems can act.
- Control patterns that constrain tools, memory, credentials, and delegated authority.
- Benchmarks and evaluation methods that test agentic behaviour, not only model responses.
- Architectures for runtime governance, observability, approval, policy enforcement, and audit.
- Research and standards that help teams make evidence-led security decisions.

## From Model Security To Execution Security

| Model-centred security | Agentic execution security |
| --- | --- |
| Protects prompts, completions, and model-facing data flows. | Protects the full system of action around the model. |
| Asks whether the model revealed, generated, or transformed something unsafe. | Asks what the system can do, who authorised it, and whether the outcome is controlled. |
| Treats language mainly as input and output. | Treats language as part of the execution layer that can influence tools, memory, code, and workflows. |
| Evaluates single responses or short conversation paths. | Evaluates multi-step behaviour across context, tools, credentials, memory, approvals, and agents. |
| Relies heavily on isolated controls around prompt handling and output filtering. | Requires layered controls that observe, interpret, constrain, and govern behaviour as it unfolds. |

## Agentic Risk Map

Agentic AI security needs to track how risks compose across the execution system. Core surfaces include:

- Prompt and instruction attacks.
- Retrieved context and data-flow compromise.
- Tool misuse and unsafe tool composition.
- Credential, token, and delegated-authority misuse.
- Memory poisoning and persistent state manipulation.
- Code execution, file-system access, and automation side effects.
- Skill, extension, and Model Context Protocol (MCP) compromise.
- Human approval gaps and weak hand-off controls.
- Multi-agent communication and cross-agent propagation.
- Monitoring, evaluation, and audit blind spots.

These risks rarely stay isolated. They compose into action paths:

```text
Prompt injection
-> intent compromise
-> tool misuse
-> credential or token abuse
-> memory poisoning
-> cross-agent propagation
-> unsafe autonomous action
-> organisational impact
```

The defensive task is to recognise those paths early, break them deliberately, and make the system's authority and outcomes governable.

## Security That Governs Action

AI systems that act need controls that can see and shape behaviour at runtime:

| Capability | Security purpose |
| --- | --- |
| Observe | Capture prompts, context, tool calls, memory reads and writes, approvals, outputs, and downstream actions. |
| Interpret | Understand intent, authority, data sensitivity, tool risk, policy fit, and likely impact. |
| Constrain | Limit actions through policy decisions, tool brokers, credential brokers, sandboxing, approval gates, and outcome controls. |
| Audit | Preserve evidence for review, incident response, governance, assurance, and continuous improvement. |

This is the practical shift: security must operate across the agentic execution system, not only at the model boundary.

## AI Defense Plane

The repository organises controls around the AI Defense Plane:

| Layer | Purpose | Example controls |
| --- | --- | --- |
| Discover | Know where AI systems, agents, tools, prompts, data flows, credentials, memory, and autonomous workflows exist. | Inventory, ownership, data-flow mapping, tool registry, agent catalogue. |
| Protect | Control inputs, outputs, retrieved context, tool calls, memory writes, data transfers, and autonomous actions. | Runtime guardrails, policy decisions, tool brokers, credential brokers, memory controls, sandboxing, approval gates. |
| Govern | Manage delegated authority, evidence, audit trails, risk acceptance, and compliance obligations. | Assurance records, evaluation evidence, audit logs, review cadences, exception handling, accountability paths. |

The AI Defense Plane connects access control with outcome control. A secure agentic system needs to know not only who or what can call a tool, but why the action is being taken, which context shaped it, what authority it uses, and how the result is constrained.

## Who This Is For

| Audience | What this map helps with |
| --- | --- |
| AI leaders and CTOs | Understand how agentic systems change enterprise risk, architecture, and assurance expectations. |
| AI engineers | Design safer agent runtimes, tool interfaces, memory systems, approval paths, and evaluation loops. |
| Security engineers | Map attack surfaces, breach chains, controls, monitoring points, and incident response evidence. |
| Governance leaders | Connect delegated authority, accountability, audit, compliance, and assurance evidence. |
| AI researchers | Track open problems, benchmarks, emerging failure modes, and evidence quality. |

## What The Map Covers

This project is organised around five kinds of security knowledge:

| Area | Coverage |
| --- | --- |
| Risks | Threat models, attack surfaces, breach chains, and failure modes for agentic systems. |
| Controls | Runtime guardrails, policy enforcement, tool governance, credential boundaries, memory controls, and approval gates. |
| Benchmarks | Evaluation methods for tool use, autonomy, memory, multi-agent behaviour, and control effectiveness. |
| Architectures | Reference models for secure agent runtimes, AI gateways, observability, audit, and governance layers. |
| Research | Standards, frameworks, papers, vendor research, independent analysis, and open research questions. |

The first section indexes are available here:

| Section | Use it for |
| --- | --- |
| [Docs](docs/README.md) | Conceptual maps, threat models, breach chains, defence architecture, evaluation, governance, case studies, and open questions. |
| [Resources](resources/README.md) | Curated standards, frameworks, research, tools, benchmarks, and evidence requirements. |
| [Patterns](patterns/README.md) | Secure engineering patterns for agent runtimes, tool calling, MCP, memory, credentials, approval, sandboxing, observability, and policy enforcement. |
| [Visuals](visuals/README.md) | Mermaid diagrams for execution boundaries, action paths, control points, and reference architectures. |

Start with the [landscape map](docs/00-landscape-map.md), [threat model](docs/01-threat-model.md), [attack surfaces](docs/02-attack-surfaces.md), and [agentic attack chains](docs/03-agentic-attack-chains.md) for the first conceptual foundation. More detailed topic pages will be added in focused phases, and the section indexes describe the intended structure without presenting planned files as complete.

## Quality Bar

Substantial entries should explain:

- What type of resource, benchmark, control, or pattern it is.
- Who produced it or owns it.
- Why it matters for agentic AI security.
- Which risks, behaviours, or controls it covers.
- Its maturity level and important limitations.
- When it was last checked.

The repository favours fewer, better-labelled entries over a large unstructured catalogue.

## Licence

This project is released under the [MIT License](LICENSE).
