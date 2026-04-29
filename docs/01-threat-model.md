# Threat Model: Agentic AI Failure Modes

This threat model describes how agentic AI systems can fail when language, context, tools, credentials, memory, code, approvals, and other agents are connected into an execution environment.

It is a defensive taxonomy, not an exploit guide. The goal is to help teams ask better control questions before agentic behaviour reaches sensitive systems or organisational outcomes.

For the broader system map, start with the [landscape map](00-landscape-map.md).

## Scope And Assumptions

This model applies to systems where an AI component can do one or more of the following:

- Retrieve context from documents, tickets, repositories, emails, web pages, databases, or knowledge systems.
- Call tools, APIs, functions, plugins, MCP servers, skills, extensions, scripts, or workflows.
- Use credentials, tokens, delegated authority, service accounts, or user-bound permissions.
- Store or update memory, summaries, preferences, task state, or learned context.
- Generate code, modify files, run commands, or trigger automation.
- Coordinate with other agents, queues, orchestrators, humans, or approval systems.

The model assumes that not every unsafe outcome begins with a malicious user. Failures can also come from ambiguous goals, stale context, over-broad permissions, weak tool design, poor observability, flawed evaluation, or normal users placing too much trust in agent output.

## Assets, Authority, And Boundaries

Agentic threat modelling should start with what the system can affect.

| Area | What to identify |
| --- | --- |
| Assets | Data, code, cloud resources, SaaS records, identities, secrets, financial actions, customer communications, operational workflows, and audit evidence. |
| Authority | User permissions, service identities, delegated scopes, token lifetime, tool permissions, approval rights, and policy exceptions. |
| Boundaries | Model boundary, instruction sources, retrieval boundary, tool boundary, credential boundary, memory boundary, code execution boundary, human approval boundary, and agent-to-agent boundary. |
| Evidence | Logs, traces, prompts, retrieved context, tool parameters, tool results, memory changes, approval records, diffs, and downstream side effects. |

The most important design question is whether the system can distinguish trusted control instructions from untrusted data and whether authority is constrained before action happens.

## Failure Modes

### 1. Prompt And Instruction Attacks

What can go wrong: Untrusted language changes the agent's priorities, overrides intended instructions, hides risk, or redirects the task away from the user's goal.

Common preconditions:

- The agent reads untrusted text from users, retrieved documents, web pages, comments, tickets, emails, or tool outputs.
- Instructions from different sources are mixed without clear trust labels or precedence.
- The agent can call tools or update state based on interpreted instructions.

Why it matters: Instruction attacks become more serious when the agent can act. The risk is not only an unsafe response, but an unsafe tool call, state change, approval request, or downstream action.

Control questions:

- Which instruction sources are trusted, untrusted, system-owned, user-owned, or external?
- Can untrusted content change goals, policies, tool selection, memory, or approvals?
- Are tool calls checked against the user's intent and the source of the instruction?

### 2. Goal Hijacking

What can go wrong: The agent follows a competing objective, reinterprets the task too broadly, prioritises an injected subgoal, or optimises for a proxy that conflicts with user intent or policy.

Common preconditions:

- Goals are underspecified, long-running, or delegated across multiple steps.
- The system rewards task completion without checking whether the path remains aligned.
- Intermediate context or tool results can redefine success.

Why it matters: Goal drift can turn ordinary autonomy into unauthorised action, especially when the system has broad tools or weak approval gates.

Control questions:

- Is the user's intended outcome represented separately from retrieved or generated instructions?
- Does the system re-check goal alignment before high-impact actions?
- Are autonomous steps bounded by explicit task scope, policy, and authority?

### 3. Tool Misuse And Unsafe Composition

What can go wrong: The agent calls the wrong tool, uses a tool with unsafe parameters, chains tools in an unsafe order, or combines low-risk tools into a high-impact action path.

Common preconditions:

- Tools expose broad operations, weak schemas, or insufficient parameter validation.
- Tool descriptions encourage use without enough policy or risk context.
- The system evaluates individual calls but not the combined effect of multiple calls.

Why it matters: Tool access is where language-shaped intent becomes system action. Unsafe composition can create impact even when each individual tool appears acceptable.

Control questions:

- What can each tool read, write, modify, delete, send, purchase, deploy, or approve?
- Are tool calls authorised per task, identity, data sensitivity, and likely outcome?
- Are high-risk tool chains detected before they complete?

### 4. Credential And Token Misuse

What can go wrong: The agent uses credentials outside the user's intended scope, exposes secrets through context or output, reuses tokens across tasks, or acts through an identity that is too powerful for the operation.

Common preconditions:

- Credentials are long-lived, over-scoped, shared, or available to broad tool paths.
- The system does not bind authority to a specific user, task, session, or approval.
- Logs, traces, memory, prompts, or tool outputs can carry sensitive tokens.

Why it matters: Credential misuse turns agentic mistakes into authorised changes in real systems. It also makes accountability unclear when service identities act on behalf of users.

Control questions:

- Which identity is used for each action, and is it visible in audit evidence?
- Can credentials be scoped, brokered, time-limited, and bound to the approved task?
- Are secrets excluded from prompts, memory, traces, and model-visible context?

### 5. Context Poisoning

What can go wrong: Retrieved or supplied context contains misleading, stale, hostile, or irrelevant content that changes the agent's decision-making.

Common preconditions:

- Retrieval systems ingest untrusted or poorly labelled sources.
- Context ranking favours relevance without trust, provenance, freshness, or sensitivity checks.
- The agent treats retrieved content as instruction rather than evidence.

Why it matters: Context is often the evidence base for action. Poisoned context can make an unsafe decision appear justified.

Control questions:

- Is retrieved context labelled with source, trust level, freshness, and sensitivity?
- Can the agent distinguish instructions from quoted or retrieved content?
- Are high-impact decisions allowed to rely on a single unverified source?

### 6. Memory Poisoning

What can go wrong: The agent stores manipulated facts, preferences, summaries, credentials, policy interpretations, or behavioural instructions that influence future sessions.

Common preconditions:

- Memory writes are automatic, poorly reviewed, or triggered by untrusted content.
- Stored memory lacks provenance, expiry, owner, or change history.
- The agent retrieves memory as trusted context in later decisions.

Why it matters: Memory can make a temporary compromise persistent. It can also spread incorrect assumptions across tasks, users, or agents.

Control questions:

- What is allowed to enter memory, and what must never be stored?
- Can users and reviewers inspect, correct, expire, or delete memory entries?
- Are memory reads and writes logged with source, reason, and scope?

### 7. MCP, Skill, And Extension Compromise

What can go wrong: A tool server, skill, extension, plugin, or packaged capability exposes unsafe actions, changes behaviour after installation, misrepresents its capability, or becomes a bridge to sensitive systems.

Common preconditions:

- Capabilities are discovered or installed without strong review.
- Tool servers have broad file, network, cloud, repository, or SaaS access.
- The agent trusts capability descriptions or tool results without independent checks.

Why it matters: MCP servers, skills, and extensions are authority-bearing boundaries. A compromised capability can turn agent intent into high-impact side effects.

Control questions:

- How are capabilities reviewed, approved, versioned, configured, and revoked?
- Which data and actions can each capability access?
- Are tool descriptions, parameters, outputs, and side effects observable and auditable?

### 8. Multi-Agent Propagation

What can go wrong: One agent's manipulated output becomes another agent's trusted input, allowing failure to move across workflows, queues, shared memory, or delegated tasks.

Common preconditions:

- Agents communicate through natural language, shared state, tickets, comments, or task queues.
- Receiving agents cannot verify source, authority, or trust level.
- Shared memory or orchestration systems preserve and redistribute manipulated content.

Why it matters: Multi-agent systems can amplify local compromise. A failure in one role can become a policy decision, code change, approval request, or customer-facing action elsewhere.

Control questions:

- Are agent-to-agent messages authenticated, scoped, and labelled by origin?
- Can one agent delegate authority or policy changes to another?
- Are shared memories, queues, and task artefacts treated as trust boundaries?

### 9. Unsafe Autonomous Action

What can go wrong: The agent takes an irreversible, high-impact, or policy-sensitive action without enough confirmation, review, or outcome control.

Common preconditions:

- The system allows multi-step autonomy with broad tools or unclear stopping conditions.
- Approval gates focus on final text rather than tool parameters, diffs, data movement, or downstream impact.
- Rollback, compensation, or incident response paths are weak.

Why it matters: Autonomy changes the timing of security. Controls must operate before and during action, not only after a final answer is produced.

Control questions:

- Which actions are reversible, sensitive, external, costly, destructive, or compliance-relevant?
- What evidence must be shown before approval?
- Can the system pause, constrain, roll back, or compensate for unsafe actions?

### 10. Monitoring And Evaluation Blind Spots

What can go wrong: The organisation tests single prompts or final responses but misses multi-step behaviour, tool side effects, memory changes, approval quality, or downstream outcomes.

Common preconditions:

- Logs do not connect prompts, context, tool calls, credentials, approvals, and final actions.
- Evaluations focus on model answers rather than agentic workflows.
- Audit evidence is incomplete, inaccessible, or not reviewed.

Why it matters: Unobserved systems cannot be governed. Blind spots make it harder to detect failures, prove control effectiveness, learn from incidents, or satisfy assurance needs.

Control questions:

- Can reviewers reconstruct the full action path from instruction to outcome?
- Do evaluations test tools, memory, autonomy, multi-agent communication, and approval gates?
- Are logs and traces designed for security review, not only debugging?

## Common Action Paths

Failure modes often combine across the execution system. Useful review should look for paths such as:

| Path | Defensive concern |
| --- | --- |
| Instruction influence -> tool call -> downstream change | Can untrusted language produce an authorised action? |
| Poisoned context -> goal drift -> approval request | Does the reviewer see the source and trust level of the evidence? |
| Tool output -> memory write -> future task | Can a transient tool result become persistent trusted state? |
| Broad token -> automation -> external system update | Is delegated authority scoped to the task and outcome? |
| Agent message -> second agent action -> shared workflow change | Are agent-to-agent boundaries observable and constrained? |
| Weak logging -> incomplete incident review -> repeated failure | Can the organisation learn what happened and prove what changed? |

Detailed breach-chain walkthroughs belong in later attack-surface and breach-chain docs. The purpose here is to keep the taxonomy clear enough that teams can identify where controls need to sit.

## Minimum Control Questions

For any agentic system that can act, defenders should be able to answer:

1. What can the system do without human approval?
2. Which instructions can influence tool use, memory, credentials, code, or downstream action?
3. Which identity and authority are used for each action?
4. Which context sources are trusted, untrusted, stale, sensitive, or externally controlled?
5. What can be written to memory, and how can it be reviewed or removed?
6. Which tool calls are high impact alone or in combination?
7. What evidence does a human approver see before action?
8. Can the full path from instruction to outcome be reconstructed after the fact?

The answer to these questions determines whether the system is governable, not only whether the model appears safe in isolation.