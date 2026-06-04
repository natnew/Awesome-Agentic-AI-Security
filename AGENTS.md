# AGENTS.md

## Project Overview

The Awesome Agentic AI Security repository is a curated body of knowledge and resource index for securing autonomous, tool-using, and cyber-capable AI systems. 

Unlike a flat list of links, this repository organizes security primitives into five functional categories that reflect the "AI Defense Plane" (Discover, Protect, Govern):

- **[Docs](docs/)**: Conceptual foundations including the system-level Landscape Map, Threat Models, and the Attack Surface Map.
- **[Patterns](patterns/)**: Hardened engineering specifications for tool calling, memory management, and credential boundaries.
- **[Resources](resources/)**: A curated index of external tools, benchmarks, papers, and standards.
- **[Rubrics](rubrics/)**: Scorecards and evaluation frameworks used to assess the "security readiness" of agentic systems.
- **[Visuals](visuals/)**: Reference architectures and flow diagrams (Mermaid) for secure execution paths.

## Resource Curation Standards

We prioritize **Evidence-Led Security**. Resources are evaluated against the following bar:

1. **Actionability**: Does it provide a concrete control or a reproducible test case?
2. **Structural Relevance**: Does it address the agentic execution loop (Planning -> Acting -> Observing)?
3. **Maturity**: Preference is given to established standards (OWASP, NIST) and peer-reviewed research.
4. **Fidelity**: Visuals and patterns must accurately reflect modern execution protocols (e.g., MCP).

## Repository Structure

```
.
├── docs/             # Theoretical and tactical security documentation
├── patterns/         # Reusable secure engineering patterns
├── resources/        # Curated indexes (Tools, Benchmarks, Papers)
├── rubrics/          # Evaluation scorecards
├── site/             # Astro/Starlight web source
├── visuals/          # Mermaid diagrams and reference architectures
└── .devcontainer/    # Sandboxed execution environment
```

## License

MIT License - see [LICENSE](LICENSE) for details
