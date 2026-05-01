# Memory Poisoning

Malicious input corrupts agent memory, leading to unsafe or unintended actions.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [patterns/memory-security.md](../../patterns/memory-security.md)

An attacker manipulates input during one session so a poisoned fact is committed to long-term memory; in a later, unrelated session the agent retrieves it as trusted state and lets it shape decisions the attacker is no longer present to make.

```mermaid
stateDiagram-v2
    [*] --> UntrustedWrite : Manipulated<br/>input arrives
    UntrustedWrite --> StoredAsTrusted : No classification<br/>at write
    StoredAsTrusted --> RetrievedAsState : Future task<br/>reads memory
    RetrievedAsState --> InfluencesAction : Treated as<br/>agent fact
    InfluencesAction --> [*]
```

<br/><br/>

Defence classifies and tags every write with provenance and expiry, blocks instruction-shaped content from entering memory, and re-checks freshness and trust on every read so that no untrusted fact silently becomes durable agent state.

```mermaid
flowchart TD
    M["Memory store"]
    M --> W["Write-side<br/>controls"]
    M --> R["Read-side<br/>controls"]
    W --> W1["Classification<br/>before write"]
    W --> W2["Provenance and<br/>expiry tags"]
    W --> W3["Anomaly detection on<br/>instruction-shaped content"]
    R --> R1["Freshness<br/>filter"]
    R --> R2["Instruction-data<br/>separation in memory"]
    R --> R3["Logging of<br/>influential reads"]
```
