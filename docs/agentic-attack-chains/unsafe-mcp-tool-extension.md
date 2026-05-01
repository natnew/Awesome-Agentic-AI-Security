# Unsafe MCP/Tool Extension

An untrusted or unsafe extension to the MCP or tool interface enables new attack paths.

- See [attack-chain-template.md](attack-chain-template.md) for full structure.
- Related: [docs/01-threat-model.md](../01-threat-model.md), [patterns/secure-mcp.md](../../patterns/secure-mcp.md)

A capability is added to the agent's MCP surface without registry review, signing, or scope check, giving an untrusted server a direct path from agent intent to high-impact downstream actions on real systems of record.

```mermaid
architecture-beta
    group ext[External]
    service mcp(disk)[Untrusted MCP] in ext

    group rt[Agent runtime]
    service agent(server)[Agent] in rt

    group ds[Downstream]
    service db(database)[System of record] in ds

    mcp:R --> L:agent
    agent:R --> L:db
```

<br/><br/>

Defence pins every capability in a versioned registry, requires a signed manifest, checks scope before each call, isolates the capability's context, and validates its responses so that an untrusted or compromised server cannot smuggle authority into the agent.

```mermaid
block-beta
columns 1
  L1["Capability registry<br/>with version pinning"]
  L2["Server authentication<br/>and signed manifest"]
  L3["Capability<br/>scope check"]
  L4["Context isolation<br/>filter"]
  L5["Response validation<br/>and instruction separation"]
```
