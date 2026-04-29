# Visuals

This section will hold reusable diagrams for explaining agentic execution security. Diagrams should make boundaries, flows, decisions, and control points easier to understand without oversimplifying the security model.

Reusable diagrams should be stored as Mermaid source files so they remain readable in GitHub Markdown and portable to the future documentation site.

## Available Now

- [Progressive Breach Model](progressive-breach-model.mmd) shows the path from untrusted language or data to organisational impact, with control points along the chain.
- [Agent, Tool, And Memory Attack Flow](agent-tool-memory-attack-flow.mmd) shows how agent reasoning, tools, credentials, memory, approvals, observability, and downstream systems interact.
- [AI Defense Plane](ai-defense-plane.mmd) shows Discover, Protect, and Govern across agents, tools, memory, authority, downstream action, and assurance evidence.
- [Secure Agent Reference Architecture](secure-agent-reference-architecture.mmd) shows the control path across intake, agent planning, policy decisions, guardrails, tool and credential brokers, approvals, outcome control, memory, and audit.

## Planned Coverage

Future visuals will cover:

- Policy decision, tool broker, credential broker, observability, and audit boundaries.

## Diagram Standard

Diagrams should:

- Focus on execution boundaries, action flows, escalation paths, observability points, policy decisions, and control points.
- Be small enough to read without excessive zooming.
- Avoid decorative complexity that makes the security model harder to inspect.
- Use concise labels that work in both GitHub and documentation-site rendering.

## Use In The Field Guide

Visuals should support the written docs, patterns, and rubrics. A diagram is useful when it helps a reader see how authority, context, tools, memory, controls, and outcomes interact across an agentic system.