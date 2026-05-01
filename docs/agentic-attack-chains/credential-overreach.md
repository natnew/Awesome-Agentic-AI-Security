# Credential Overreach

Agent or tool is granted excessive credentials, enabling privilege escalation or data exfiltration.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [patterns/credential-and-token-boundaries.md](../../patterns/credential-and-token-boundaries.md)

The agent is issued a credential broader and longer-lived than its current task requires; after legitimately calling one tool it reuses the same token to invoke an unrelated, out-of-scope tool, expanding impact far beyond the user's intent.

```mermaid
sequenceDiagram
    participant Br as Credential broker
    participant Ag as Agent
    participant T1 as Narrow task tool
    participant T2 as Out-of-scope tool
    Br->>Ag: Issues broad,<br/>long-lived token
    Ag->>T1: Calls for narrow<br/>approved task
    Ag->>T2: Reuses same token<br/>(overreach)
    T2-->>Ag: Wider impact<br/>realised
```

<br/><br/>

Defence brokers credentials per task, checks scope and lifetime before issuance, hands out short-lived task-bound tokens from a vault, and revokes them automatically on expiry or out-of-scope use so that no credential outlives the action it was approved for.

```mermaid
stateDiagram-v2
    [*] --> Requested : Agent task<br/>begins
    Requested --> ScopeChecked : Pre-issuance<br/>check
    ScopeChecked --> Issued : Task-bound,<br/>short-lived
    ScopeChecked --> Denied : Scope or<br/>lifetime violation
    Issued --> InUse
    InUse --> Expired : TTL elapsed
    InUse --> Revoked : Out-of-scope<br/>use detected
    Expired --> [*]
    Revoked --> [*]
    Denied --> [*]
```
