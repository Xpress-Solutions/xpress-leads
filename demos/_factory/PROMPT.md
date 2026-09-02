# Prompt da fábrica — um lead, um agente

Substitua `{{LEAD_ID}}` (ex.: `ninkasi`, `bah-burger-nh`).

---

Você está na fábrica de demos Xpress (repo `xpress-leads`).

## Objetivo
Criar uma **demo de site one-page** para o lead `{{LEAD_ID}}` que pareça **a casa real**, não um template genérico.

## Regras de ouro
1. **Identidade visual primeiro.** Antes de layout, pesquise e grave `demos/{{LEAD_ID}}/brand.json` no schema `BrandIdentity` (`lib/brand.ts`).
2. Fontes de verdade visual (nesta ordem):
   - Demo ouro local se existir: `documents/xpress/demos` / `demos/boteco-vitoria` / `demos/armazem-anita` (calibre o nível de fidelidade)
   - Instagram oficial do lead (se houver em `data/leads.ts`)
   - Fotos do Google / guias / matérias
   - Logo, fachada, cardápio impresso, cores recorrentes nos posts
3. **Aplique** o `brand.json` no site (CSS variables: background, foreground, brand, accent, surface, muted; tipografia display/body; hero full-bleed; voz do copy).
4. Conteúdo vem do lead em `data/leads.ts` (nome, endereço, horários, WhatsApp, pitch, identity). Copy real, sem lorem.
5. Teste de marca: se remover a nav, ainda dá para dizer que é **esta** loja? Se não, refaça cores/hero.
6. Proibido: tema roxo-tech, cream+terracotta genérico de IA, Inter/Roboto como display, cards no hero, stock genérico que não é a casa.
7. Branch: `demo/{{LEAD_ID}}-d6be`. Não misture outros leads. Commit + push. Build ok.

## Passos
1. Abra o lead `{{LEAD_ID}}` em `data/leads.ts`.
2. Pesquise identidade visual → escreva `demos/{{LEAD_ID}}/brand.json` com `evidence[]` e `confidence`.
3. Se `confidence < 0.55`, continue pesquisando; não chute palette SaaS.
4. Implemente a demo em `demos/{{LEAD_ID}}/` (mesmo espírito das demos Vitória/Anita) **ou** rota Next `/demo/{{LEAD_ID}}` consumindo o brand.json — escolha o padrão já usado no repo após inspecionar `demos/`.
5. Hero: nome da marca dominante + uma frase + CTA (WhatsApp/ligar) + imagem/atmosfera da casa.
6. `npm run build` (ou o build do stack da demo). Corrija erros.
7. Commit descritivo + push da branch.

## Entrega
- `demos/{{LEAD_ID}}/brand.json`
- Site demo rodando / build verde
- Branch `demo/{{LEAD_ID}}-d6be` no remote
- 2–3 frases no final: de onde tirou as cores e por que o site “é” a casa
