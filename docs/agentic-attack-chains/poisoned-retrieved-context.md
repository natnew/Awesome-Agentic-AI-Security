# Poisoned Retrieved Context

Retrieved context is manipulated to influence agent behaviour or outputs.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [patterns/memory-security.md](../../patterns/memory-security.md)

An attacker plants a document the retriever will rank highly so that when the agent fetches context for an unrelated task it pulls in attacker-controlled content and treats it as authoritative evidence for a high-impact decision.

```mermaid
flowchart LR
    A["Attacker plants<br/>poisoned doc"] --> B["Retriever ranks<br/>by relevance"]
    B --> C["Agent treats content<br/>as evidence"]
    C --> D["Action on<br/>false premise"]
    D --> E["Organisational<br/>impact"]
```

<br/><br/>

Defence checks every retrieval result for provenance and freshness, attaches an explicit trust label, and routes it through a policy decision so that low-trust or stale content cannot silently shape the agent's reasoning.

```mermaid
flowchart LR
    A["Retrieval<br/>result"] --> B["Provenance<br/>check"]
    B --> C["Freshness<br/>filter"]
    C --> D["Trust label<br/>applied"]
    D --> E["Policy<br/>decision"]
    E --> F["Agent<br/>reasoning"]
```
