# Standards And Frameworks

This page collects standards, frameworks, and community guidance that help teams reason about agentic AI security. These entries are starting points for threat modelling, control design, governance, and assurance. They are not a substitute for system-specific risk assessment.

Each entry uses the repository metadata format: resource type, producer, source, relevance, coverage, maturity, last checked, and limitations.

## Entries

### OWASP Top 10 For LLM Applications

- Resource type: Community security framework.
- Producer or publisher: OWASP GenAI Security Project.
- Source link: <https://genai.owasp.org/llm-top-10/> and <https://owasp.org/www-project-top-10-for-large-language-model-applications/>.
- Relevance to agentic execution security: Provides the model- and application-level risk baseline that agentic systems extend. Prompt injection, excessive agency, supply-chain risk, sensitive information disclosure, and output handling are especially relevant once LLMs can call tools, retrieve context, and trigger workflows.
- Coverage: Prompt injection, sensitive information disclosure, supply-chain risk, data and model poisoning, improper output handling, excessive agency, vector and embedding weakness, misinformation, unbounded consumption, and related LLM application risks.
- Evidence quality and maturity level: Mature and widely adopted community guidance. The project is actively maintained and has broad practitioner participation.
- Last checked: 2026-04-29.
- Limitations or caveats: It is broader than agentic systems and should be paired with agent-specific guidance when assessing memory, tool use, delegated authority, and multi-agent propagation.

### OWASP Top 10 For Agentic Applications 2026

- Resource type: Agentic AI security framework.
- Producer or publisher: OWASP GenAI Security Project.
- Source link: <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>.
- Relevance to agentic execution security: Directly addresses autonomous and agentic systems that plan, act, use tools, and make decisions across workflows.
- Coverage: Goal hijack, tool misuse, identity and privilege abuse, agentic supply chain vulnerabilities, unexpected code execution, memory and context poisoning, insecure inter-agent communication, cascading failures, human-agent trust exploitation, and rogue agents.
- Evidence quality and maturity level: Emerging but high-signal community framework, developed with broad expert input and positioned as an operational starting point for agentic AI risk.
- Last checked: 2026-04-29.
- Limitations or caveats: It is a taxonomy and guidance framework, not a validation method. Teams still need architecture-specific threat models, controls, red teaming, and runtime evidence.

### OWASP Agentic AI - Threats And Mitigations

- Resource type: Threat-modelling guide.
- Producer or publisher: OWASP Agentic Security Initiative, within the OWASP GenAI Security Project.
- Source link: <https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/>.
- Relevance to agentic execution security: Frames agentic AI as a threat-model problem rather than a prompt-only problem, which matches the repository thesis that security has moved to the execution system.
- Coverage: Emerging agentic threats, mitigations, autonomous behaviour, system boundaries, tool use, and risk introduced by LLM-enabled agents.
- Evidence quality and maturity level: Emerging community guidance. Useful as a structured reference and as context for the newer Agentic Applications Top 10.
- Last checked: 2026-04-29.
- Limitations or caveats: It should be treated as guidance for analysis, not as a complete control catalogue or compliance standard.

### OWASP Securing Agentic Applications Guide 1.0

- Resource type: Secure engineering guide.
- Producer or publisher: OWASP GenAI Security Project.
- Source link: <https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/>.
- Relevance to agentic execution security: Gives builders and defenders practical guidance for designing, developing, and deploying secure LLM-powered agentic applications.
- Coverage: Technical recommendations for agentic application design, implementation, deployment, and mitigation practices that complement threat-modelling material.
- Evidence quality and maturity level: Practical community guidance, versioned as 1.0 and suitable for early implementation reference.
- Last checked: 2026-04-29.
- Limitations or caveats: It is guidance, not a guarantee of secure deployment. The recommendations need to be adapted to the specific agent framework, tool boundary, memory model, and governance environment.

### OWASP Agentic Skills Top 10

- Resource type: Agent skill security framework.
- Producer or publisher: OWASP Agentic Skills Top 10 project.
- Source link: <https://owasp.org/www-project-agentic-skills-top-10/> and <https://github.com/OWASP/www-project-agentic-skills-top-10>.
- Relevance to agentic execution security: Focuses on the skill layer: reusable behaviours that tell agents how to orchestrate tools, workflows, local files, shell access, network calls, and persistent state.
- Coverage: Malicious skills, supply-chain compromise, over-privileged skills, insecure metadata, unsafe deserialisation, weak isolation, update drift, poor scanning, missing governance, and cross-platform reuse.
- Evidence quality and maturity level: Incubator-stage OWASP project under active development. Strongly relevant to emerging agent ecosystems, but still maturing.
- Last checked: 2026-04-29.
- Limitations or caveats: Some linked material is still evolving and includes ecosystem-specific findings. Treat it as early but important guidance for agent skill governance, not a settled standard.

### MITRE ATLAS

- Resource type: Adversarial knowledge base and threat matrix.
- Producer or publisher: MITRE.
- Source link: <https://atlas.mitre.org/>.
- Relevance to agentic execution security: Provides a structured way to map adversary tactics and techniques against AI-enabled systems, including cases where AI components interact with broader systems.
- Coverage: AI attack tactics and techniques, mitigations, case studies, and adversarial behaviour patterns modelled after MITRE ATT&CK.
- Evidence quality and maturity level: Mature and widely referenced knowledge base, maintained as a living resource.
- Last checked: 2026-04-29.
- Limitations or caveats: ATLAS covers AI-enabled systems broadly. Agent-specific tool, memory, skill, and multi-agent behaviours may need additional modelling beyond the matrix entries.

### NIST AI Risk Management Framework

- Resource type: Risk management framework.
- Producer or publisher: National Institute of Standards and Technology.
- Source link: <https://www.nist.gov/itl/ai-risk-management-framework>.
- Relevance to agentic execution security: Provides governance functions for mapping, measuring, managing, and governing AI risks. It is useful for connecting agentic technical controls to organisational assurance.
- Coverage: Trustworthy AI risk management, governance, measurement, management, mapping, playbook material, and a generative AI profile.
- Evidence quality and maturity level: Mature public-sector framework developed through an open, consensus-oriented process.
- Last checked: 2026-04-29.
- Limitations or caveats: It is intentionally broad and voluntary. Teams need more concrete control patterns for runtime tool use, memory, credentials, and autonomous action.

### NIST AI RMF Generative AI Profile

- Resource type: Generative AI risk profile.
- Producer or publisher: National Institute of Standards and Technology.
- Source link: <https://doi.org/10.6028/NIST.AI.600-1>.
- Relevance to agentic execution security: Adds generative-AI-specific risk framing that can support governance for agentic applications, especially where generated content, retrieved context, and autonomous workflows introduce new failure modes.
- Coverage: Generative AI risks and suggested actions aligned to the AI RMF.
- Evidence quality and maturity level: Mature companion profile to the NIST AI RMF.
- Last checked: 2026-04-29.
- Limitations or caveats: It is not agent-specific. It should be combined with agentic threat models and runtime control evidence.
