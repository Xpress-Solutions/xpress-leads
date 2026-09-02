# Fábrica de demos — identidade visual

Sim: **cada agente da fábrica identifica a identidade visual da loja e aplica no site** antes de “desenhar” a página. Não usa um tema genérico Xpress.

Referências ouro (já existentes aí em `documents/xpress/demos`):
- Boteco Vitória
- Armazém Anita

Neste repo, o contrato da fábrica vive em `demos/<leadId>/brand.json` + prompt em `demos/_factory/`.

---

## Pipeline (obrigatório por lead)

```text
1. PESQUISA VISUAL     Instagram / Google Fotos / fachada / logo / matérias
2. brand.json          cores, tipografia, mood, evidências (lib/brand.ts)
3. SITE DA DEMO        aplica brand.json no template (CSS vars + hero + voz)
4. CHECK               “sem o nav, ainda parece ESTA casa?”
```

Se o passo 2 estiver fraco (`confidence < 0.55`) ou sem evidência de foto/logo, o agente **não inventa SaaS roxo** — reforça pesquisa ou marca `needsReview: true`.

---

## O que o agente extrai

| Campo | De onde vem |
|--------|-------------|
| Cores | Logo, fachada, posts recorrentes, Uniforme/cardápio impresso |
| Tipografia | Letreiro, logo, clima (boteco vs café vs barbearia) |
| Mood / voz | Bio do IG, tom das legendas, reviews |
| Imagem hero | Melhor foto real da casa (não stock genérico) |
| UI (radius, densidade) | Ambiente real: raiz = mais denso; boutique = mais airy |

Saída: `demos/<leadId>/brand.json` validando `BrandIdentity` em `lib/brand.ts`.

---

## Como aplicar no site

1. Ler `data/leads.ts` (copy, WhatsApp, endereço, pitch).
2. Ler `demos/<leadId>/brand.json` (visual).
3. Gerar `demos/<leadId>/` (ou rota `/demo/<leadId>`) com:
   - `--background`, `--brand`, `--accent`, etc. vindos do JSON
   - Nome da casa como sinal hero (não um H1 genérico)
   - CTA WhatsApp / telefone do lead
   - Tom de texto alinhado a `voice` / `avoid`
4. Comparar mentalmente com Vitória (escuro, vermelho, boteco) vs Anita (claro, verde/brasa, armazém) — **duas casas = duas peles**.

---

## Lotes de agentes

- **1 lead = 1 Cloud Agent = 1 branch** `demo/<leadId>-d6be`
- Prompt padronizado: `demos/_factory/PROMPT.md` (só troca `LEAD_ID`)
- Lista pronta: `DEMO-AGENTES.md` (Arthur / Leonardo)
- Lotes de 5–8 por vez

---

## Calibragem com suas demos locais

A pasta `documents/xpress/demos` **não está nesta VM**. Para a fábrica aprender o padrão real de Vitória/Anita:

1. Copie (ou faça commit) dessas duas demos para `demos/boteco-vitoria/` e `demos/armazem-anita/` neste repo, **ou**
2. Anexe/zip no chat do agente orquestrador

Os `brand.json` já versionados aqui são um primeiro brief público; ao sincronizar as demos locais, os agentes usam o visual delas como **source of truth** e só refinam o JSON.
