// Internal link checker for the built Starlight site.
// Scans every HTML file in dist/, extracts href/src targets, and reports
// any internal references that do not resolve to a built file.
//
// External links (http/https/mailto/tel) are ignored.
// Anchors (#foo) are checked: the target page must exist.

import { readFile, readdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { join, resolve, dirname, extname, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, '..', 'dist');
const SITE_BASE = '/Awesome-Agentic-AI-Security';

if (!existsSync(distDir)) {
  console.error(`[check-links] dist/ not found. Run 'npm run build' first.`);
  process.exit(1);
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const out = [];
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

function resolveTarget(fromHtml, href) {
  // Strip query and fragment.
  const [pathPart] = href.split('#');
  if (!pathPart) return null; // pure fragment, same-page anchor
  let target;
  if (pathPart.startsWith('/')) {
    // Site-absolute. Internal links MUST include the configured base, otherwise
    // they 404 once the site is served from /<repo>/. Treat missing-base paths
    // as broken rather than silently resolving them under dist/.
    if (!pathPart.startsWith(SITE_BASE + '/') && pathPart !== SITE_BASE) {
      return join(distDir, '__missing-base__', pathPart);
    }
    const p = pathPart.slice(SITE_BASE.length) || '/';
    target = join(distDir, p);
  } else {
    target = resolve(dirname(fromHtml), pathPart);
  }
  // If target is a directory, look for index.html.
  if (existsSync(target) && statSync(target).isDirectory()) {
    target = join(target, 'index.html');
  } else if (!extname(target)) {
    // Pretty URL without trailing slash.
    if (existsSync(target + '/index.html')) target = target + '/index.html';
    else if (existsSync(target + '.html')) target = target + '.html';
  }
  return target;
}

const files = (await walk(distDir)).filter((f) => f.endsWith('.html'));
const broken = [];
const ATTR = /(?:href|src)\s*=\s*"([^"]+)"/gi;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  let m;
  ATTR.lastIndex = 0;
  while ((m = ATTR.exec(html))) {
    const href = m[1];
    if (!href) continue;
    if (/^(?:https?:|mailto:|tel:|data:|javascript:|#)/i.test(href)) continue;
    if (href.startsWith('//')) continue;
    const target = resolveTarget(file, href);
    if (!target) continue;
    if (!existsSync(target)) {
      broken.push({ file: file.replace(distDir, ''), href, target: target.replace(distDir, '') });
    }
  }
}

if (broken.length === 0) {
  console.log(`[check-links] OK — scanned ${files.length} pages, no broken internal links.`);
} else {
  console.log(`[check-links] ${broken.length} broken link(s) across ${files.length} pages:`);
  // Group by source file.
  const byFile = new Map();
  for (const b of broken) {
    if (!byFile.has(b.file)) byFile.set(b.file, []);
    byFile.get(b.file).push(b);
  }
  for (const [f, list] of byFile) {
    console.log(`\n  ${f}`);
    for (const b of list) console.log(`    -> ${b.href}   (missing: ${b.target})`);
  }
  process.exit(1);
}
