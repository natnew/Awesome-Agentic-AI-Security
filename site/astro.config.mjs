// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const REPO = 'Awesome-Agentic-AI-Security';

export default defineConfig({
  site: `https://natnew.github.io/${REPO}/`,
  base: `/${REPO}/`,
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'Awesome Agentic AI Security',
      description:
        'A live map of risks, controls, benchmarks, and architectures for agentic, multi-agent, tool-using AI.',
      logo: { src: './src/assets/logo-mark.svg', replacesTitle: false },
      social: {
        github: 'https://github.com/natnew/Awesome-Agentic-AI-Security',
      },
      customCss: ['./src/styles/tokens.css', './src/styles/global.css'],
      components: {
        Header: './src/components/SiteHeader.astro',
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Overview', link: '/guide/' },
            { label: 'Landscape map', link: '/guide/landscape-map/' },
            { label: 'Threat model', link: '/guide/threat-model/' },
            { label: 'Attack surfaces', link: '/guide/attack-surfaces/' },
          ],
        },
        {
          label: 'Attack chains',
          autogenerate: { directory: 'chains' },
        },
        {
          label: 'Defense',
          items: [
            { label: 'Defense architecture', link: '/defense/' },
            { label: 'Secure agent runtime', link: '/defense/secure-agent-runtime/' },
            { label: 'Secure tool calling', link: '/defense/secure-tool-calling/' },
            { label: 'Secure MCP', link: '/defense/secure-mcp/' },
            { label: 'Memory security', link: '/defense/memory-security/' },
            { label: 'Credential & token boundaries', link: '/defense/credential-and-token-boundaries/' },
            { label: 'Secure engineering patterns', link: '/defense/secure-engineering-patterns/' },
          ],
        },
        {
          label: 'Evaluation',
          items: [
            { label: 'Red teaming & evaluation', link: '/evaluation/red-teaming/' },
            { label: 'Benchmarks', link: '/evaluation/benchmarks/' },
            { label: 'Rubrics', link: '/evaluation/rubrics/' },
            { label: 'Agent security readiness rubric', link: '/evaluation/agent-security-readiness/' },
            { label: 'Benchmark quality rubric', link: '/evaluation/benchmark-quality/' },
            { label: 'Case study rubric', link: '/evaluation/case-study/' },
            { label: 'Resource quality rubric', link: '/evaluation/resource-quality/' },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Catalogue', link: '/resources/' },
            { label: 'Standards & frameworks', link: '/resources/standards-and-frameworks/' },
            { label: 'Papers', link: '/resources/papers/' },
            { label: 'Tools', link: '/resources/tools/' },
            { label: 'Benchmarks', link: '/resources/benchmarks/' },
            { label: 'Cyber-capable AI agents', link: '/resources/cyber-capable-ai-agents/' },
            { label: 'Vendor research', link: '/resources/vendor-research/' },
          ],
        },
        {
          label: 'Operate',
          items: [
            { label: 'Incident case studies', link: '/operate/case-studies/' },
            { label: 'Open research questions', link: '/operate/open-questions/' },
          ],
        },
      ],
    }),
  ],
});
