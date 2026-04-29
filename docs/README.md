# Docs

This section is the conceptual map for agentic AI security. It will explain how risks emerge across the full execution system around a model: prompts, retrieved context, tools, credentials, memory, code execution, approvals, delegated authority, and multi-agent workflows.

The goal is to help readers understand failure modes and control boundaries before they move into resource lists, engineering patterns, diagrams, or assessment rubrics.

## Planned Coverage

Future docs will cover:

- The agentic AI security landscape.
- Threat models for systems that can retrieve, decide, call tools, update state, and act.
- Attack surfaces across prompts, context, memory, credentials, tools, skills, MCP, approvals, and agents.
- Breach chains that show how local compromise can become organisational impact.
- Defence architecture for observing, interpreting, constraining, auditing, discovering, protecting, and governing agentic behaviour.
- Red teaming and evaluation methods for agentic behaviour rather than single model responses.
- Case studies and open research questions.

## Reader Path

AI leaders and CTOs should use this section to understand why agentic systems change security architecture and assurance expectations.

AI engineers and security engineers should use it to map where controls need to sit across the execution environment.

Governance leaders and researchers should use it to connect delegated authority, evidence, audit, evaluation, and open problems.

## Editorial Standard

Docs in this section should be calm, precise, and evidence-led. Risks should be described as failure modes, breach paths, and control requirements rather than as isolated terms or unsupported claims.