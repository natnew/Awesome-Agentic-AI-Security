# CLAUDE.md

## Project Mission & Workflow
- **Mission**: A curated, structured, and continuously updated map of security risks, controls, benchmarks, architectures, and research for agentic, multi-agent, tool-using, self-improving AI systems.
- **Workflow**: Strictly follow Spec Driven Development (SDD). Research -> Strategy -> Execution.
- **Security Focus**: All contributions must align with the AI Defense Plane (Discover, Protect, Govern). Ensure threat models and attack chains are grounded in research or empirical evidence.

## Coding Standards

### Project Structure & Purpose
- `docs/`: Conceptual foundations, threat models, and attack surface maps.
- `patterns/`: Hardened engineering specifications (Tool calling, memory, credentials).
- `resources/`: Curated indexes of external tools, benchmarks, and research papers.
- `rubrics/`: Evaluation frameworks and readiness scorecards.
- `visuals/`: Reference architectures and flow diagrams (Mermaid).
- `site/`: Astro/Starlight web source for the project portal.
- `specs/`: (Local-only) Technical specifications and implementation plans.
- `agents/`: Custom agent configurations and instructions.
- `skills/`: Reusable agent skills.

### Markdown Guidelines
- Use descriptive, hierarchical headers (H1-H4).
- Utilize structured lists for clarity.
- Maintain rigorous cross-links between documentation sections to ensure discoverability.
- Follow frontmatter requirements for all agent-related files (`.agent.md`, `.instruction.md`).

### Resource Curation Standards (Quality Bar)
Resources added to the index must be **Evidence-Led** and meet the following criteria:
1. **Actionability**: Provides a concrete control or a reproducible test case.
2. **Structural Relevance**: Addresses the agentic execution loop (Planning -> Acting -> Observing).
3. **Maturity**: Preference for established standards (OWASP, NIST) or peer-reviewed research.
4. **Fidelity**: Patterns must reflect modern execution protocols (e.g., Model Context Protocol).

## Tech Stack
- **Site**: Astro, Starlight, Node.js (Vanilla CSS).
- **Docs**: MkDocs, Material for MkDocs, Mermaid.js.
- **Validation**: `agentrc` CLI for readiness scoring.
