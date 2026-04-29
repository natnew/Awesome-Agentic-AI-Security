# Secure Tool Calling

## Context
Agentic systems often call external tools (APIs, scripts, plugins) to perform actions. Tool calls can introduce risk if not properly constrained and monitored.

## Risk
- Tools may be misused to exfiltrate data, escalate privileges, or perform unintended actions.
- Insufficient validation of tool inputs/outputs can lead to injection or logic flaws.

## Recommended Controls
- Restrict tool access by agent role, context, and task.
- Validate and sanitize all tool inputs and outputs.
- Monitor and log all tool invocations and results.
- Implement rate limiting and error handling for tool calls.

## Implementation Notes
- Use explicit tool whitelists per agent/task.
- Apply input/output schemas for validation.
- Integrate tool call monitoring with runtime observability.

## Evaluation Checks
- Are tool calls logged and monitored?
- Are inputs/outputs validated against schemas?
- Is tool access limited by agent role and context?

## Limitations
- Excessive restrictions may block legitimate use cases.
- Schema drift can cause validation failures.
- Monitoring may not catch all misuse patterns.
