# Agent-to-Agent Contamination

Malicious data or instructions propagate from one agent to another, spreading compromise.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [docs/03-agentic-attack-chains.md](../03-agentic-attack-chains.md)

A failure or compromise in one agent emits manipulated output that flows through orchestration, queues, or shared memory into a second agent which treats it as trusted input, turning a contained local failure into a customer-facing policy decision elsewhere in the system.

```mermaid
flowchart LR
    A["Source agent fails<br/>or is influenced"] --> B["Manipulated<br/>output"]
    B --> C["Orchestration /<br/>queue / shared memory"]
    C --> D["Receiving agent treats<br/>input as trusted"]
    D --> E["Policy decision<br/>elsewhere"]
    E --> F["Customer-facing<br/>action"]
```

<br/><br/>

Defence isolates each agent in its own zone, brokers every inter-agent message through a channel that source-labels content and preserves instruction-data separation, and stitches a single trace across boundaries so contamination cannot cross silently.

```mermaid
flowchart LR
    subgraph Z1["Agent zone A"]
      A1["Agent A"]
    end
    subgraph Br["Inter-agent broker"]
      SL["Source labelling<br/>on messages"]
      ID["Instruction-data<br/>separation"]
      TR["Linked<br/>end-to-end trace"]
    end
    subgraph Z2["Agent zone B"]
      A2["Agent B"]
    end
    A1 --> SL
    SL --> ID
    ID --> TR
    TR --> A2
```
