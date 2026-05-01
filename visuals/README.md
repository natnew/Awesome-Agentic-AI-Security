# Visuals

This section holds reusable diagrams for explaining agentic execution security. Diagrams should make boundaries, lifecycles, decisions, and control points easier to understand without oversimplifying the security model.

Diagrams are stored as Mermaid source files so they remain readable in GitHub Markdown and portable to the future documentation site. Each diagram is also embedded inline in the docs that consume it. The `.mmd` files remain the canonical reusable source.

## Diagram-Syntax Selection Rule

Mermaid syntax should match the communication goal. Default to flowchart only for small decision flows or simple branching logic.

| Goal | Syntax |
| --- | --- |
| Layered conceptual architecture | `block-beta` |
| Step-by-step interactions over time | `sequenceDiagram` |
| Lifecycle of states with explicit transitions | `stateDiagram-v2` |
| Taxonomy or conceptual map | `mindmap` |
| Chronological progression | `timeline` |
| Small decision branch | `flowchart` |

The full selection rule set is documented at the top of the diagram review notes in this folder.

## Available Now

### System-level diagrams

- [Agentic Reasoning And Risk](agentic-reasoning-and-risk.mmd) — `flowchart`. Three input categories converge on agentic reasoning, fan out into three action targets, and compose into risk accumulation. Used at the top of the main README.
- [Agentic Defence In Depth](agentic-defence-in-depth.mmd) — `mindmap`. Eight defence categories grouped under defence-in-depth, plus the security/performance/coordination trade-off. Used in the main README.
- [Agentic Execution Landscape](agentic-execution-landscape.mmd) — `block-beta`. Five stacked layers of the agentic execution system, with the control posture wrapping the system.
- [Failure-Mode Taxonomy](failure-mode-taxonomy.mmd) — `mindmap`. Ten failure modes grouped into six families.
- [Surface Boundary Map](surface-boundary-map.mmd) — `mindmap`. Twelve attack surfaces grouped into five families.
- [Progressive Breach Model](progressive-breach-model.mmd) — `timeline`. Eight chronological stages from untrusted input to organisational impact.
- [Agent, Tool, And Memory Attack Flow](agent-tool-memory-attack-flow.mmd) — `sequenceDiagram`. Step-by-step interactions between user, agent, policy, tool broker, tool, memory, and audit.
- [AI Defense Plane](ai-defense-plane.mmd) — `block-beta`. Discover, Protect, and Govern as three stacked layers wrapping the agentic execution system.
- [Secure Agent Reference Architecture](secure-agent-reference-architecture.mmd) — `block-beta`. Seven stacked components of the layered control model.

### Pattern diagrams

- [Pattern Shape](pattern-shape.mmd) — `mindmap`. The standard nine sections every pattern follows, grouped by why, what, how, coverage, caveats.
- [Secure Engineering Patterns Overview](secure-engineering-patterns-overview.mmd) — `block-beta`. Three layers: runtime, engineering controls, audit.
- [Secure Agent Runtime Boundaries](secure-agent-runtime-boundaries.mmd) — `sequenceDiagram`. Step-by-step exchange between user, agent, policy, approval, guardrail, action, audit.
- [Secure Tool Calling Flow](secure-tool-calling-flow.mmd) — `sequenceDiagram`. Step-by-step exchange between agent, tool broker, policy, credential broker, tool runtime, audit.
- [Secure MCP Boundaries](secure-mcp-boundaries.mmd) — `block-beta`. Three layers: agent host, trust boundary, MCP servers.
- [Memory Security Flow](memory-security-flow.mmd) — `stateDiagram-v2`. Lifecycle of a memory entry from proposed to expired, blocked, or quarantined.
- [Credential And Token Boundaries](credential-token-boundaries.mmd) — `stateDiagram-v2`. Lifecycle of a credential from requested to expired, revoked, or denied.

### Navigation, lifecycle, and library-index diagrams

- [Docs Reading Map](docs-reading-map.mmd) — `mindmap`. The field guide grouped into conceptual, composition, engineering, and evidence families.
- [Chain Library Index](chain-library-index.mmd) — `mindmap`. The ten attack-chain stubs grouped by progressive-breach-model stage.
- [Case-Study Lifecycle](case-study-lifecycle.mmd) — `stateDiagram-v2`. Lifecycle of an incident case study from detected to closed.
- [Open-Research Framing](open-research-framing.mmd) — `stateDiagram-v2`. Lifecycle of a research question from failure mode to revision.

## Planned Coverage

Future visuals will cover:

- Sandboxing and code execution boundaries.
- Multi-agent communication and delegated authority boundaries.

## Diagram Standard

Every diagram should:

- Communicate one idea only.
- Prefer 4–7 visible components where possible.
- Use Mermaid syntax that matches the communication goal — see the table above.
- Use short, concise labels.
- Avoid unexplained acronyms.
- Render correctly in GitHub Markdown and MkDocs Material.
- Have a short caption above the embedded block explaining what it shows and why this syntax was chosen.

## Use In The Field Guide

Visuals support the written docs, patterns, and rubrics. A diagram is useful when it helps a reader see how authority, context, tools, memory, controls, and outcomes interact across an agentic system. If a diagram cannot be understood at a glance, it is wrong — split it, simplify it, or change the syntax.
