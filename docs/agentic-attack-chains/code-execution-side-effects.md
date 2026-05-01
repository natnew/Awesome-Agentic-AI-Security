# Code-Execution Side Effects

Agent executes code with unintended or unsafe side effects, breaching system boundaries.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [patterns/secure-agent-runtime.md](../../patterns/secure-agent-runtime.md)

The agent runs generated code or commands whose visible result is the only thing surfaced to the user, while filesystem writes, outbound network calls, downstream updates, leaked secrets, and persisted state quietly accumulate as unaudited side effects.

```mermaid
mindmap
  root((Code execution))
    Filesystem write
    Outbound network call
    Downstream system update
    Secret leak in logs
    Persisted side state
```

<br/><br/>

Defence dry-runs every command in a sandbox, runs an impact assessment, executes within bounded authority, validates real outcomes against expectations, and rolls back or trips a circuit breaker the moment anything drifts beyond the approved blast radius.

```mermaid
flowchart TD
    A["Generated code<br/>or command"] --> B["Dry run<br/>in sandbox"]
    B --> C["Impact assessment<br/>by policy decision"]
    C --> D["Bounded<br/>execution"]
    D --> E["Post-action<br/>validation"]
    E --> F{"Within<br/>bounds?"}
    F -- Yes --> G["Commit<br/>and audit"]
    F -- No --> H["Rollback /<br/>circuit breaker"]
```
