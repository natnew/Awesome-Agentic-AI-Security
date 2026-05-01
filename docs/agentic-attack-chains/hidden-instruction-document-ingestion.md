# Hidden Instruction in Document Ingestion

Instructions are hidden in ingested documents, causing the agent to act unexpectedly.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [patterns/secure-agent-runtime.md](../../patterns/secure-agent-runtime.md)

An attacker conceals directives inside a document — in metadata, comments, or invisible text — so when retrieval ranks it highly the agent ingests it and treats the embedded instructions as control rather than evidence, overriding policy or invoking tools the user never asked for.

```mermaid
flowchart LR
    A["Document with<br/>hidden instructions"] --> B["Embedding<br/>and ranking"]
    B --> C["High-rank<br/>retrieval"]
    C --> D["Agent treats<br/>text as control"]
    D --> E["Policy override /<br/>unintended tool call"]
```

<br/><br/>

Defence checks provenance and freshness at ingestion, scans for instruction-shaped content, enforces instruction-data separation in the agent's context, and runs every action through a policy decision and runtime guardrail so embedded directives cannot quietly become commands.

```mermaid
block-beta
columns 1
  L1["Provenance and freshness<br/>check at ingestion"]
  L2["Instruction-shape<br/>anomaly detection"]
  L3["Instruction-data<br/>separation in context"]
  L4["Policy decision<br/>before action"]
  L5["Runtime guardrail<br/>on drift from approved task"]
```
