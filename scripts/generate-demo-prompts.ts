import fs from "fs";
import { leads, cityLabel, neighborhoodLabel } from "../data/leads";
import type { Lead } from "../lib/types";

const sorted = [...leads].sort(
  (a, b) => b.score - a.score || a.name.localeCompare(b.name, "pt-BR")
);
const arthur = sorted.filter((_, i) => i % 2 === 0);
const leo = sorted.filter((_, i) => i % 2 === 1);

function promptBlock(lead: Lead, owner: string, n: number) {
  return `### ${n}. ${lead.name} (\`${lead.id}\`) — ${owner}
- ${cityLabel[lead.city]} · ${neighborhoodLabel[lead.neighborhood]} · score ${lead.score}
- Branch: \`demo/${lead.id}-d6be\`
- Prompt: copie \`demos/_factory/PROMPT.md\` e troque \`{{LEAD_ID}}\` → \`${lead.id}\`
`;
}

const md = `# DEMO-AGENTES — lançar fábrica com identidade visual

A fábrica **identifica a identidade visual da loja e aplica no site**.  
Padrão: \`demos/_factory/PROMPT.md\` + \`brand.json\` (\`lib/brand.ts\`).  
Ouro: Boteco Vitória e Armazém Anita (\`documents/xpress/demos\` no seu disco; briefs em \`demos/*/brand.json\` neste repo).

Leitura obrigatória: [\`demos/README.md\`](./demos/README.md).

## Como proceder (aqui)

1. **Sincronize** as demos locais Vitória/Anita para \`demos/boteco-vitoria/\` e \`demos/armazem-anita/\` (código + assets), para os agentes calibrarem.
2. No Cursor, abra **Cloud Agents → New Agent** (lote de 5–8).
3. Cole o prompt de \`demos/_factory/PROMPT.md\` com o \`LEAD_ID\` da tabela.
4. Um agente = um lead = branch \`demo/<id>-d6be\`.
5. Revise: brand.json com evidências + site que passa no teste “é esta casa?”.
6. Próximo lote.

Arthur e Leonardo podem lançar em paralelo (25 cada), sem pegar o mesmo \`LEAD_ID\`.

---

## Arthur (25)

${arthur.map((l, i) => promptBlock(l, "Arthur", i + 1)).join("\n")}

---

## Leonardo (25)

${leo.map((l, i) => promptBlock(l, "Leonardo", i + 1)).join("\n")}

---

## Prompt curto (colar no Cloud Agent)

\`\`\`
Lead ID: <COLE_O_ID>

Siga demos/_factory/PROMPT.md no repo xpress-leads.
1) Pesquise a identidade visual (IG, Google Fotos, fachada, logo).
2) Grave demos/<ID>/brand.json (schema lib/brand.ts) com evidence e confidence.
3) Monte a demo aplicando as cores/tipografia/voz do brand.json — no espírito de demos/boteco-vitoria e demos/armazem-anita.
4) Branch demo/<ID>-d6be, build ok, commit + push.
Não use template genérico. A casa tem que ser reconhecível.
\`\`\`
`;

fs.writeFileSync(new URL("../DEMO-AGENTES.md", import.meta.url), md);
console.log("wrote DEMO-AGENTES.md", arthur.length, leo.length);
