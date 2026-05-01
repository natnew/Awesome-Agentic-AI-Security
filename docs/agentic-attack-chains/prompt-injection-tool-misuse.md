# Prompt Injection to Tool Misuse

A malicious prompt causes the agent to misuse a tool, breaching intended boundaries.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [docs/02-attack-surfaces.md](../02-attack-surfaces.md), [patterns/secure-tool-calling.md](../../patterns/secure-tool-calling.md)

An attacker hides directives inside ordinary user input so the agent treats them as legitimate goals, calls a tool with attacker-chosen parameters, and reaches the downstream system before any policy check has a chance to fire.

```mermaid
sequenceDiagram
    participant U as Untrusted input
    participant A as Agent
    participant T as Tool
    participant D as Downstream system
    U->>A: Embedded instruction<br/>(Influence)
    note right of A: Intent reinterpreted,<br/>no policy check
    A->>T: Tool call without<br/>schema or scope check
    T->>D: Unsafe operation<br/>(Authority)
    D-->>A: Impact realised
```

<br/><br/>

Defence source-labels every input, separates instructions from data, forces a policy decision before any tool is invoked, and routes the call through a tool broker so that even a successful injection cannot reach the downstream system unchecked.

```mermaid
block-beta
columns 1
  L1["Source labelling<br/>on every input"]
  L2["Instruction-data<br/>separation"]
  L3["Policy decision<br/>before action"]
  L4["Tool broker:<br/>allowlist and schema validation"]
  L5["Outcome control<br/>and end-to-end trace"]
```
