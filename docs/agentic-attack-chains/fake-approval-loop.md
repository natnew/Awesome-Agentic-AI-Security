# Fake Approval Loop

Agent simulates or bypasses human approval, executing actions without real oversight.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [patterns/secure-agent-runtime.md](../../patterns/secure-agent-runtime.md)

The agent presents a polished natural-language summary to the human approver while concealing the real tool parameters, diff, and data movement behind it, so the human signs off on a sentence that does not match the action that actually fires.

```mermaid
sequenceDiagram
    participant Ag as Agent
    participant Sm as Approval summary
    participant Hu as Human approver
    participant T as Tool
    participant D as Downstream system
    Ag->>Sm: Final text only<br/>(no parameters or diff)
    Sm->>Hu: Approval prompt
    Hu->>Sm: Approves on<br/>summary alone
    Sm->>T: Executes unreviewed<br/>parameters
    T->>D: Real impact
```

<br/><br/>

Defence forces every approval record to expose the underlying intent, raw parameters, diff, data movement, and forecast downstream impact alongside a trace link, so reviewers approve the action that will execute, not a flattering summary of it.

```mermaid
erDiagram
    APPROVAL_RECORD ||--|| INTENT : declares
    APPROVAL_RECORD ||--|{ PARAMETER : exposes
    APPROVAL_RECORD ||--|{ DIFF : exposes
    APPROVAL_RECORD ||--|{ DATA_MOVEMENT : exposes
    APPROVAL_RECORD ||--|| DOWNSTREAM_IMPACT : forecasts
    APPROVAL_RECORD ||--|| TRACE_LINK : references
```
