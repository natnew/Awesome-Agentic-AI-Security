# Credential and Token Boundaries

## Context
Agentic systems often require credentials or tokens to access tools, APIs, or data. Improper handling can lead to leaks, misuse, or privilege escalation.

## Risk
- Leaked credentials can enable unauthorized access.
- Overbroad tokens may grant excessive privileges.
- Poor isolation can allow lateral movement between agents or tasks.

## Recommended Controls
- Use scoped, short-lived tokens for each agent/task.
- Store credentials securely (vaults, environment variables, not code).
- Enforce least-privilege on all credentials and tokens.
- Monitor credential usage and rotate regularly.

## Implementation Notes
- Integrate with secret management systems.
- Audit all credential accesses and uses.
- Apply token scoping and expiration policies.

## Evaluation Checks
- Are credentials stored and accessed securely?
- Are tokens scoped and short-lived?
- Is credential usage monitored and audited?

## Limitations
- Frequent rotation may disrupt agent workflows.
- Overly narrow scopes can block legitimate actions.
- Secret management integration may add complexity.
