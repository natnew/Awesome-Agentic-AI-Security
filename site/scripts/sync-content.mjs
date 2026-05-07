// Sync existing repository markdown into Starlight content collection.
// Source-of-truth markdown lives at the repo root (../docs, ../patterns, ../resources, ../rubrics).
// This script copies them into site/src/content/docs/<route>/<slug>.md, prepending
// minimal Starlight frontmatter and rewriting a small set of relative links.
//
// Run via `npm run sync` or as a `prebuild` step.

import { readFile, writeFile, mkdir, rm, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, basename, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(here, '..', '..');
const contentRoot = resolve(here, '..', 'src', 'content', 'docs');

// [sourceRelPath, destRoute, slug]
const filenameSlug = (file) => basename(file, extname(file)).replace(/^\d+-/, '').toLowerCase();

const mappings = [
  // Start here / guide
  { src: 'docs/00-landscape-map.md', dest: 'guide/landscape-map.md', title: 'Landscape map' },
  { src: 'docs/01-threat-model.md', dest: 'guide/threat-model.md', title: 'Threat model' },
  { src: 'docs/02-attack-surfaces.md', dest: 'guide/attack-surfaces.md', title: 'Attack surfaces' },
  { src: 'docs/03-agentic-attack-chains.md', dest: 'guide/agentic-attack-chains.md', title: 'Agentic attack chains' },

  // Defense
  { src: 'docs/04-defence-architecture.md', dest: 'defense/defense-architecture.md', title: 'Defense architecture' },
  { src: 'docs/07-secure-engineering-patterns.md', dest: 'defense/secure-engineering-patterns.md', title: 'Secure engineering patterns' },
  { src: 'patterns/secure-agent-runtime.md', dest: 'defense/secure-agent-runtime.md', title: 'Secure agent runtime' },
  { src: 'patterns/secure-tool-calling.md', dest: 'defense/secure-tool-calling.md', title: 'Secure tool calling' },
  { src: 'patterns/secure-mcp.md', dest: 'defense/secure-mcp.md', title: 'Secure MCP' },
  { src: 'patterns/memory-security.md', dest: 'defense/memory-security.md', title: 'Memory security' },
  { src: 'patterns/credential-and-token-boundaries.md', dest: 'defense/credential-and-token-boundaries.md', title: 'Credential & token boundaries' },

  // Evaluation
  { src: 'docs/05-red-teaming-and-evaluation.md', dest: 'evaluation/red-teaming.md', title: 'Red teaming & evaluation' },
  { src: 'docs/06-benchmarks.md', dest: 'evaluation/benchmarks.md', title: 'Benchmarks' },
  { src: 'rubrics/README.md', dest: 'evaluation/rubrics.md', title: 'Rubrics' },
  { src: 'rubrics/agent-security-readiness-rubric.md', dest: 'evaluation/agent-security-readiness.md', title: 'Agent security readiness rubric' },
  { src: 'rubrics/benchmark-quality-rubric.md', dest: 'evaluation/benchmark-quality.md', title: 'Benchmark quality rubric' },
  { src: 'rubrics/case-study-rubric.md', dest: 'evaluation/case-study.md', title: 'Case study rubric' },
  { src: 'rubrics/resource-quality-rubric.md', dest: 'evaluation/resource-quality.md', title: 'Resource quality rubric' },

  // Resources
  // Note: `/resources` index is rendered by src/pages/resources/index.astro,
  // so we deliberately skip syncing resources/README.md here.
  { src: 'resources/standards-and-frameworks.md', dest: 'resources/standards-and-frameworks.md', title: 'Standards & frameworks' },
  { src: 'resources/papers.md', dest: 'resources/papers.md', title: 'Papers' },
  { src: 'resources/tools.md', dest: 'resources/tools.md', title: 'Tools' },
  { src: 'resources/benchmarks.md', dest: 'resources/benchmarks.md', title: 'Benchmarks (catalogue)' },
  { src: 'resources/vendor-research.md', dest: 'resources/vendor-research.md', title: 'Vendor research' },

  // Operate
  { src: 'docs/09-incident-case-studies.md', dest: 'operate/case-studies.md', title: 'Incident case studies' },
  { src: 'docs/10-open-research-questions.md', dest: 'operate/open-questions.md', title: 'Open research questions' },
];

// Auto-include all chains under docs/agentic-attack-chains/
async function discoverChains() {
  const dir = join(repoRoot, 'docs', 'agentic-attack-chains');
  if (!existsSync(dir)) return [];
  const entries = await readdir(dir);
  const out = [];
  for (const e of entries) {
    if (!e.endsWith('.md') || e.toLowerCase() === 'readme.md') continue;
    const slug = filenameSlug(e);
    const titleRaw = slug.replace(/-/g, ' ');
    const title = titleRaw.charAt(0).toUpperCase() + titleRaw.slice(1);
    out.push({ src: `docs/agentic-attack-chains/${e}`, dest: `chains/${slug}.md`, title });
  }
  return out;
}

// Map from markdown basename (without extension or numeric prefix) to site route.
// Used by rewriteLinks() to resolve any relative .md link regardless of `../` prefix.
const BASENAME_ROUTES = {
  // guide
  'landscape-map': '/guide/landscape-map/',
  'threat-model': '/guide/threat-model/',
  'attack-surfaces': '/guide/attack-surfaces/',
  'agentic-attack-chains': '/guide/agentic-attack-chains/',
  // defense
  'defence-architecture': '/defense/defense-architecture/',
  'defense-architecture': '/defense/defense-architecture/',
  'secure-engineering-patterns': '/defense/secure-engineering-patterns/',
  'secure-agent-runtime': '/defense/secure-agent-runtime/',
  'secure-tool-calling': '/defense/secure-tool-calling/',
  'secure-mcp': '/defense/secure-mcp/',
  'memory-security': '/defense/memory-security/',
  'credential-and-token-boundaries': '/defense/credential-and-token-boundaries/',
  // evaluation
  'red-teaming-and-evaluation': '/evaluation/red-teaming/',
  'red-teaming': '/evaluation/red-teaming/',
  'benchmarks': '/evaluation/benchmarks/',
  'agent-security-readiness-rubric': '/evaluation/agent-security-readiness/',
  'benchmark-quality-rubric': '/evaluation/benchmark-quality/',
  'case-study-rubric': '/evaluation/case-study/',
  'resource-quality-rubric': '/evaluation/resource-quality/',
  // resources (overrides 'benchmarks' above when path includes resources/ — handled in regex)
  'standards-and-frameworks': '/resources/standards-and-frameworks/',
  'papers': '/resources/papers/',
  'tools': '/resources/tools/',
  'vendor-research': '/resources/vendor-research/',
  // operate
  'incident-case-studies': '/operate/case-studies/',
  'case-studies': '/operate/case-studies/',
  'open-research-questions': '/operate/open-questions/',
  'open-questions': '/operate/open-questions/',
  // chains template
  'attack-chain-template': '/chains/attack-chain-template/',
};

function rewriteLinks(md) {
  // 1. Rewrite resources/<slug>.md (handle ambiguity: resources/benchmarks vs evaluation/benchmarks).
  let out = md.replace(/\]\(([^)]*?)resources\/([\w-]+)\.md(#[^)]*)?\)/g,
    (_m, _pre, slug, hash = '') => `](/resources/${slug}/${hash})`);
  // 2. Rewrite chains/<slug>.md
  out = out.replace(/\]\(([^)]*?)agentic-attack-chains\/([\w-]+)\.md(#[^)]*)?\)/g,
    (_m, _pre, slug, hash = '') => `](/chains/${slug}/${hash})`);
  // 3. Generic: any .md link → look up by basename (strip leading digits).
  out = out.replace(/\]\(([^)\s]+\.md)(#[^)]*)?\)/g, (m, path, hash = '') => {
    const file = path.split('/').pop() || '';
    const base = file.replace(/\.md$/i, '').replace(/^\d+-/, '').toLowerCase();
    const route = BASENAME_ROUTES[base];
    if (route) return `](${route}${hash})`;
    return m; // leave unknown .md links alone (will be flagged by checker)
  });
  // 4. Drop links to /visuals/*.mmd (the .mmd source files don't ship to the site)
  //    — replace with the link text only.
  out = out.replace(/\[([^\]]+)\]\(([^)]*?)visuals\/[\w./-]+\.mmd\)/g, '$1');
  // 5. Bare directory listings on GitHub (e.g. `../patterns/`, `scoresheets/`,
  //    `../visuals/`, `../docs/agentic-attack-chains/`) → point to the closest
  //    site equivalent or to the GitHub source tree.
  const GH = 'https://github.com/natnew/Awesome-Agentic-AI-Security/tree/main';
  const GH_BLOB = 'https://github.com/natnew/Awesome-Agentic-AI-Security/blob/main';
  const dirMap = [
    [/\]\((?:\.\.\/)*patterns\/\)/g, `](/defense/)`],
    [/\]\((?:\.\.\/)*docs\/agentic-attack-chains\/\)/g, `](/guide/agentic-attack-chains/)`],
    [/\]\((?:\.\.\/)*docs\/\)/g, `](/guide/)`],
    [/\]\((?:\.\.\/)*resources\/\)/g, `](/resources/)`],
    [/\]\((?:\.\.\/)*rubrics\/\)/g, `](/evaluation/rubrics/)`],
    [/\]\((?:\.\.\/)*visuals\/\)/g, `](${GH}/visuals)`],
    [/\]\((?:\.\.\/)*scoresheets\/(?:README\.md)?\)/g, `](${GH}/rubrics/scoresheets)`],
    [/\]\((?:\.\.\/)*CONTRIBUTING\.md\)/g, `](${GH_BLOB}/CONTRIBUTING.md)`],
    [/\]\((?:\.\.\/)*LICENSE\)/g, `](${GH_BLOB}/LICENSE)`],
    [/\]\((?:\.\.\/)*README\.md\)/g, `](${GH_BLOB}/README.md)`],
  ];
  for (const [re, repl] of dirMap) out = out.replace(re, repl);
  return out;
}

function frontmatter(title) {
  return `---\ntitle: ${JSON.stringify(title)}\n---\n\n`;
}

// ---------------------------------------------------------------------------
// Mermaid → themed HTML transformer.
//
// Source-of-truth markdown still uses ```mermaid``` blocks (rendered on
// GitHub). For the site we replace each block with structured HTML that
// matches the dark/animated landing-page aesthetic. We do not run Mermaid
// in the browser.
// ---------------------------------------------------------------------------

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cleanLabel(s) {
  if (!s) return '';
  // Collapse mermaid <br/> and <b> tags into plain text + a separator.
  return String(s)
    .replace(/<br\s*\/?>(\s*)/gi, ' — ')
    .replace(/<\/?b>/gi, '')
    .replace(/<\/?i>/gi, '')
    .replace(/\\n/g, ' — ')
    .replace(/\s+/g, ' ')
    .trim();
}

function transformMermaid(md) {
  return md.replace(/```mermaid\s*\n([\s\S]*?)```/g, (_m, src) => renderDiagram(src));
}

// Convert plain ```text fenced blocks that look like an arrow-chain
// (lines connected by `->` / `→`) into a styled aas-diagram chain.
function transformChainBlocks(md) {
  return md.replace(/```text\s*\n([\s\S]*?)```/g, (m, src) => {
    const raw = src.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (raw.length < 2) return m;
    // Treat block as a chain only if every non-first line starts with -> or →,
    // OR if a single line uses inline arrows.
    const arrowLine = /^(?:->|→)\s*/;
    const startsWithArrow = raw.slice(1).every((l) => arrowLine.test(l));
    let steps = [];
    if (startsWithArrow) {
      steps = [raw[0], ...raw.slice(1).map((l) => l.replace(arrowLine, ''))];
    } else if (raw.length === 1 && /(->|→)/.test(raw[0])) {
      steps = raw[0].split(/\s*(?:->|→)\s*/).filter(Boolean);
    } else {
      return m;
    }
    const items = steps
      .map((s, i) => {
        const arrow = i < steps.length - 1
          ? '<span class="aas-diagram__arrow" aria-hidden="true">→</span>'
          : '';
        return `<li class="aas-diagram__step"><span class="aas-diagram__node">${escapeHtml(s)}</span>${arrow}</li>`;
      })
      .join('');
    return `\n<figure class="aas-diagram aas-diagram--chain"><ol class="aas-diagram__chain">${items}</ol></figure>\n`;
  });
}

function renderDiagram(src) {
  const lines = src.split(/\r?\n/).map((l) => l.replace(/\t/g, '  ')).filter((l) => l.trim().length);
  if (!lines.length) return diagramShell('flow', '', '');
  const head = lines[0].trim();
  try {
    if (/^(flowchart|graph)\b/i.test(head)) return renderFlowchart(lines.slice(1));
    if (/^mindmap\b/i.test(head)) return renderMindmap(lines.slice(1));
    if (/^sequenceDiagram\b/i.test(head)) return renderSequence(lines.slice(1));
    if (/^block-beta\b/i.test(head)) return renderBlock(lines.slice(1));
    if (/^stateDiagram(-v2)?\b/i.test(head)) return renderFlowchart(lines.slice(1), { kind: 'state' });
    if (/^erDiagram\b/i.test(head)) return renderErDiagram(lines.slice(1));
  } catch (e) {
    // fall through to fallback
  }
  return renderFallback(lines);
}

function diagramShell(kind, body, caption = '') {
  const cap = caption ? `<figcaption class="aas-diagram__caption">${escapeHtml(caption)}</figcaption>` : '';
  return `\n<figure class="aas-diagram aas-diagram--${kind}">${body}${cap}</figure>\n`;
}

// ----- flowchart / graph / state -----
function renderFlowchart(lines, opts = {}) {
  const labels = new Map();
  const edges = [];
  const NODE_DEF = /^\s*([A-Za-z0-9_]+)\s*(?:\[(?:"([^"]*)"|([^\]]+))\]|\(\(\s*([^)]+?)\s*\)\)|\(\s*([^)]+?)\s*\)|\{\s*([^}]+?)\s*\})\s*$/;
  const EDGE = /^\s*([A-Za-z0-9_]+)\s*(?:-->|--->|->>|->|==>|-\.->)\s*(?:\|\s*([^|]+?)\s*\|)?\s*([A-Za-z0-9_]+)\s*$/;
  // Inline node-with-label embedded in an edge: `A["x"] --> B`
  const INLINE_NODE = /([A-Za-z0-9_]+)\s*(?:\["([^"]*)"\]|\[([^\]]+)\]|\(\(\s*([^)]+?)\s*\)\)|\(\s*([^)]+?)\s*\))/g;

  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('%%') || /^subgraph\b/i.test(line) || /^end\b/i.test(line) || /^direction\b/i.test(line) || /^classDef\b/i.test(line) || /^class\b/i.test(line) || /^style\b/i.test(line) || /^link/i.test(line) || /^\[\*\]/.test(line)) continue;
    let m;
    INLINE_NODE.lastIndex = 0;
    while ((m = INLINE_NODE.exec(line))) {
      const id = m[1];
      const label = m[2] || m[3] || m[4] || m[5];
      if (label && !labels.has(id)) labels.set(id, cleanLabel(label));
    }
    const nm = NODE_DEF.exec(line);
    if (nm) {
      const id = nm[1];
      const label = nm[2] || nm[3] || nm[4] || nm[5] || nm[6];
      if (label) labels.set(id, cleanLabel(label));
      continue;
    }
    const em = EDGE.exec(line.replace(INLINE_NODE, (_, id) => id));
    if (em) {
      edges.push({ from: em[1], label: em[2] ? cleanLabel(em[2]) : '', to: em[3] });
      continue;
    }
  }

  const labelOf = (id) => labels.get(id) || id;
  let body;
  if (edges.length) {
    body = `<ol class="aas-diagram__chain">${edges
      .map(
        (e) =>
          `<li class="aas-diagram__step"><span class="aas-diagram__node">${escapeHtml(labelOf(e.from))}</span><span class="aas-diagram__arrow" aria-hidden="true">→</span>${
            e.label ? `<span class="aas-diagram__edge-label">${escapeHtml(e.label)}</span>` : ''
          }<span class="aas-diagram__node">${escapeHtml(labelOf(e.to))}</span></li>`
      )
      .join('')}</ol>`;
  } else if (labels.size) {
    body = `<ul class="aas-diagram__stack">${[...labels.values()]
      .map((l) => `<li class="aas-diagram__node">${escapeHtml(l)}</li>`)
      .join('')}</ul>`;
  } else {
    return renderFallback(lines);
  }
  return diagramShell(opts.kind === 'state' ? 'state' : 'flow', body);
}

// ----- mindmap -----
function renderMindmap(lines) {
  // Build hierarchy by indentation depth (in spaces).
  const items = [];
  for (const raw of lines) {
    if (!raw.trim() || raw.trim().startsWith('%%')) continue;
    const depth = raw.match(/^\s*/)[0].length;
    let label = raw.trim();
    label = label.replace(/^\(\(\s*([^)]+?)\s*\)\)$/, '$1');
    label = label.replace(/^\[\s*([^\]]+?)\s*\]$/, '$1');
    label = label.replace(/^\{\{\s*([^}]+?)\s*\}\}$/, '$1');
    label = label.replace(/^::icon\(.*\)$/, '');
    if (!label) continue;
    items.push({ depth, label: cleanLabel(label) });
  }
  if (!items.length) return renderFallback(lines);
  // Normalize depths to 0,1,2…
  const uniq = [...new Set(items.map((i) => i.depth))].sort((a, b) => a - b);
  const depthMap = new Map(uniq.map((d, i) => [d, i]));
  items.forEach((i) => (i.depth = depthMap.get(i.depth)));
  const root = items[0];
  // Branches = depth-1 items, each owns following deeper items until next depth-1.
  const branches = [];
  let current = null;
  for (const item of items.slice(1)) {
    if (item.depth === 1) {
      current = { title: item.label, leaves: [] };
      branches.push(current);
    } else if (current && item.depth >= 2) {
      current.leaves.push(item.label);
    }
  }
  const body = `
    <div class="aas-diagram__mindmap-root">${escapeHtml(root.label)}</div>
    <ul class="aas-diagram__branches">${branches
      .map(
        (b) =>
          `<li class="aas-diagram__branch"><div class="aas-diagram__branch-title">${escapeHtml(b.title)}</div>${
            b.leaves.length
              ? `<ul class="aas-diagram__leaves">${b.leaves.map((l) => `<li>${escapeHtml(l)}</li>`).join('')}</ul>`
              : ''
          }</li>`
      )
      .join('')}</ul>`;
  return diagramShell('mindmap', body);
}

// ----- sequenceDiagram -----
function renderSequence(lines) {
  const participants = new Map();
  const messages = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('%%')) continue;
    let m;
    if ((m = /^participant\s+([A-Za-z0-9_]+)(?:\s+as\s+(.+))?$/i.exec(line))) {
      participants.set(m[1], cleanLabel(m[2] || m[1]));
      continue;
    }
    if ((m = /^note\s+(?:right of|left of|over)\s+[A-Za-z0-9_,\s]+:\s*(.+)$/i.exec(line))) {
      messages.push({ kind: 'note', text: cleanLabel(m[1]) });
      continue;
    }
    if ((m = /^([A-Za-z0-9_]+)\s*(-->>|->>|-->|->|--x|-x)\s*([A-Za-z0-9_]+)\s*:\s*(.+)$/.exec(line))) {
      messages.push({ kind: 'msg', from: m[1], to: m[3], text: cleanLabel(m[4]) });
    }
  }
  const labelOf = (id) => participants.get(id) || id;
  const body = `
    ${
      participants.size
        ? `<ul class="aas-diagram__actors">${[...participants.values()]
            .map((p) => `<li>${escapeHtml(p)}</li>`)
            .join('')}</ul>`
        : ''
    }
    <ol class="aas-diagram__timeline">${messages
      .map((mm) =>
        mm.kind === 'note'
          ? `<li class="aas-diagram__note"><em>${escapeHtml(mm.text)}</em></li>`
          : `<li class="aas-diagram__message"><span class="aas-diagram__node">${escapeHtml(labelOf(mm.from))}</span><span class="aas-diagram__arrow" aria-hidden="true">→</span><span class="aas-diagram__node">${escapeHtml(labelOf(mm.to))}</span><span class="aas-diagram__msg-text">${escapeHtml(mm.text)}</span></li>`
      )
      .join('')}</ol>`;
  return diagramShell('sequence', body);
}

// ----- block-beta -----
function renderBlock(lines) {
  const NODE_DEF = /^\s*([A-Za-z0-9_]+)\s*\[(?:"([^"]*)"|([^\]]+))\]\s*$/;
  const stack = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || /^columns\b/i.test(line) || /^block\b/i.test(line) || /^end\b/i.test(line)) continue;
    const m = NODE_DEF.exec(line);
    if (m) stack.push(cleanLabel(m[2] || m[3]));
  }
  if (!stack.length) return renderFallback(lines);
  const body = `<ol class="aas-diagram__layered">${stack
    .map((s, i) => `<li><span class="aas-diagram__layer-index">${i + 1}</span><span>${escapeHtml(s)}</span></li>`)
    .join('')}</ol>`;
  return diagramShell('layered', body);
}

// ----- erDiagram -----
function renderErDiagram(lines) {
  const REL = /^\s*([A-Z0-9_]+)\s+(\|\|--\|\||\|\|--o\{|\|\|--\|\{|\}o--o\{|\}\|--\|\{)\s+([A-Z0-9_]+)\s*:\s*(.+)$/;
  const rels = [];
  for (const raw of lines) {
    const m = REL.exec(raw.trim());
    if (m) rels.push({ from: m[1], to: m[3], label: cleanLabel(m[4]) });
  }
  if (!rels.length) return renderFallback(lines);
  const body = `<ol class="aas-diagram__chain">${rels
    .map(
      (r) =>
        `<li class="aas-diagram__step"><span class="aas-diagram__node">${escapeHtml(r.from)}</span><span class="aas-diagram__arrow" aria-hidden="true">→</span><span class="aas-diagram__edge-label">${escapeHtml(r.label)}</span><span class="aas-diagram__node">${escapeHtml(r.to)}</span></li>`
    )
    .join('')}</ol>`;
  return diagramShell('flow', body);
}

function renderFallback(lines) {
  const body = `<ul class="aas-diagram__stack">${lines
    .map((l) => `<li class="aas-diagram__node">${escapeHtml(cleanLabel(l))}</li>`)
    .join('')}</ul>`;
  return diagramShell('flow', body);
}

async function copyOne({ src, dest, title }) {
  const srcPath = join(repoRoot, src);
  if (!existsSync(srcPath)) {
    console.warn(`[sync] missing: ${src}`);
    return;
  }
  const raw = await readFile(srcPath, 'utf8');
  // Strip an existing leading H1 to avoid duplicate titles (Starlight renders frontmatter title).
  const stripped = raw.replace(/^#\s+[^\n]+\n+/, '');
  // Remove "Source: [foo.mmd](...)" attribution lines — diagrams are now rendered inline,
  // and the .mmd links would 404 on the site.
  const desourced = stripped.replace(/^Source:\s*\[[^\]]+\.mmd\][^\n]*\n?/gm, '');
  const transformed = transformMermaid(transformChainBlocks(rewriteLinks(desourced)));
  const out = frontmatter(title) + transformed;
  const outPath = join(contentRoot, dest);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, out, 'utf8');
}

async function main() {
  if (existsSync(contentRoot)) await rm(contentRoot, { recursive: true, force: true });
  await mkdir(contentRoot, { recursive: true });

  const all = [...mappings, ...(await discoverChains())];
  let count = 0;
  for (const m of all) {
    await copyOne(m);
    count++;
  }
  console.log(`[sync] wrote ${count} files into src/content/docs`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
