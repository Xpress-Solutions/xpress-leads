# DEMO-AGENTES — lançar fábrica com identidade visual

A fábrica **identifica a identidade visual da loja e aplica no site**.  
Padrão: `demos/_factory/PROMPT.md` + `brand.json` (`lib/brand.ts`).  
Ouro: Boteco Vitória e Armazém Anita (`documents/xpress/demos` no seu disco; briefs em `demos/*/brand.json` neste repo).

Leitura obrigatória: [`demos/README.md`](./demos/README.md).

## Como proceder (aqui)

1. **Sincronize** as demos locais Vitória/Anita para `demos/boteco-vitoria/` e `demos/armazem-anita/` (código + assets), para os agentes calibrarem.
2. No Cursor, abra **Cloud Agents → New Agent** (lote de 5–8).
3. Cole o prompt de `demos/_factory/PROMPT.md` com o `LEAD_ID` da tabela.
4. Um agente = um lead = branch `demo/<id>-d6be`.
5. Revise: brand.json com evidências + site que passa no teste “é esta casa?”.
6. Próximo lote.

Arthur e Leonardo podem lançar em paralelo (25 cada), sem pegar o mesmo `LEAD_ID`.

---

## Arthur (25)

### 1. Boteco Vitória (`boteco-vitoria`) — Arthur
- Porto Alegre · Jardim Botânico · score 96
- Branch: `demo/boteco-vitoria-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `boteco-vitoria`

### 2. BAH! BURGER (`bah-burger-nh`) — Arthur
- Novo Hamburgo · Centro (NH) · score 94
- Branch: `demo/bah-burger-nh-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `bah-burger-nh`

### 3. Nosso Bar (`nosso-bar`) — Arthur
- Porto Alegre · Partenon · score 94
- Branch: `demo/nosso-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `nosso-bar`

### 4. Barão 1240 (`barao-1240`) — Arthur
- Porto Alegre · Jardim Botânico · score 93
- Branch: `demo/barao-1240-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `barao-1240`

### 5. Pinhos Botecaria Pub (`pinhos-botecaria`) — Arthur
- Canoas · Centro (Canoas) · score 92
- Branch: `demo/pinhos-botecaria-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `pinhos-botecaria`

### 6. Terreiro Bar (`terreiro-bar`) — Arthur
- Porto Alegre · Cidade Baixa · score 92
- Branch: `demo/terreiro-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `terreiro-bar`

### 7. Bar do Zé (`bar-do-ze-sl`) — Arthur
- São Leopoldo · Centro (São Leopoldo) · score 91
- Branch: `demo/bar-do-ze-sl-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `bar-do-ze-sl`

### 8. Pito Bar (`pito-bar`) — Arthur
- Porto Alegre · Rio Branco · score 91
- Branch: `demo/pito-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `pito-bar`

### 9. Mato Bar (`mato-bar`) — Arthur
- Porto Alegre · Rio Branco · score 90
- Branch: `demo/mato-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `mato-bar`

### 10. Rock'n Beer Pub (`rock-n-beer-canoas`) — Arthur
- Canoas · Marechal Rondon · score 90
- Branch: `demo/rock-n-beer-canoas-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `rock-n-beer-canoas`

### 11. Jacinto Pane & Cucina (`jacinto-pane`) — Arthur
- Porto Alegre · Santana · score 89
- Branch: `demo/jacinto-pane-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `jacinto-pane`

### 12. Niramaki Sushi (`niramaki-sushi`) — Arthur
- Porto Alegre · Jardim Botânico · score 89
- Branch: `demo/niramaki-sushi-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `niramaki-sushi`

### 13. Arvo Bar (`arvo-bar`) — Arthur
- Porto Alegre · Centro Histórico · score 88
- Branch: `demo/arvo-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `arvo-bar`

### 14. La Bamba (`la-bamba-gravatai`) — Arthur
- Gravataí · Centro (Gravataí) · score 88
- Branch: `demo/la-bamba-gravatai-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `la-bamba-gravatai`

### 15. Mania do Gaúcho II (`mania-do-gaucho`) — Arthur
- Porto Alegre · Jardim Botânico · score 88
- Branch: `demo/mania-do-gaucho-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `mania-do-gaucho`

### 16. Bar e Bar Restaurante e Churrascaria (`bar-e-bar-gravatai`) — Arthur
- Gravataí · Centro (Gravataí) · score 87
- Branch: `demo/bar-e-bar-gravatai-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `bar-e-bar-gravatai`

### 17. Molt Be (`molt-be`) — Arthur
- Porto Alegre · Tristeza · score 87
- Branch: `demo/molt-be-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `molt-be`

### 18. Barbearia Jardim Botânico (`barbearia-jardim-botanico`) — Arthur
- Porto Alegre · Jardim Botânico · score 86
- Branch: `demo/barbearia-jardim-botanico-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `barbearia-jardim-botanico`

### 19. Snack Bar do Barba (`snack-barba`) — Arthur
- Porto Alegre · Jardim do Salso · score 86
- Branch: `demo/snack-barba-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `snack-barba`

### 20. Golden Bull (`golden-bull`) — Arthur
- Porto Alegre · Passo D'Areia · score 84
- Branch: `demo/golden-bull-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `golden-bull`

### 21. Pinacoteca Café (`pinacoteca-cafe`) — Arthur
- Porto Alegre · Cidade Baixa · score 84
- Branch: `demo/pinacoteca-cafe-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `pinacoteca-cafe`

### 22. Espetinho Bar do Martins (`espetinho-martins`) — Arthur
- Porto Alegre · Vila Jardim · score 83
- Branch: `demo/espetinho-martins-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `espetinho-martins`

### 23. Gringo’s Lanches (`gringos-lanches`) — Arthur
- Porto Alegre · São João · score 82
- Branch: `demo/gringos-lanches-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `gringos-lanches`

### 24. Estética do Jardim (`estetica-do-jardim`) — Arthur
- Porto Alegre · Jardim Botânico · score 78
- Branch: `demo/estetica-do-jardim-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `estetica-do-jardim`

### 25. Art em Volantes (`art-em-volantes`) — Arthur
- Porto Alegre · Jardim Botânico · score 75
- Branch: `demo/art-em-volantes-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `art-em-volantes`


---

## Leonardo (25)

### 1. A Virgem Bar (`a-virgem`) — Leonardo
- Porto Alegre · Azenha · score 95
- Branch: `demo/a-virgem-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `a-virgem`

### 2. Ninkasi Bar (`ninkasi`) — Leonardo
- Porto Alegre · Cidade Baixa · score 94
- Branch: `demo/ninkasi-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `ninkasi`

### 3. Bah Brasa (`bah-brasa-canoas`) — Leonardo
- Canoas · São Luís · score 93
- Branch: `demo/bah-brasa-canoas-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `bah-brasa-canoas`

### 4. El Farol (`el-farol`) — Leonardo
- Porto Alegre · Rio Branco · score 93
- Branch: `demo/el-farol-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `el-farol`

### 5. Terra do Churrasco (`terra-do-churrasco`) — Leonardo
- Porto Alegre · Jardim do Salso · score 92
- Branch: `demo/terra-do-churrasco-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `terra-do-churrasco`

### 6. Armazém Anita (`armazem-anita`) — Leonardo
- Porto Alegre · Jardim Botânico · score 91
- Branch: `demo/armazem-anita-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `armazem-anita`

### 7. Barril Pub (`barril-pub`) — Leonardo
- Porto Alegre · Cristal · score 91
- Branch: `demo/barril-pub-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `barril-pub`

### 8. Beladora (Bela Dora) (`beladora`) — Leonardo
- Porto Alegre · Ipanema · score 90
- Branch: `demo/beladora-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `beladora`

### 9. Restaurante Weber's (`webers-nh`) — Leonardo
- Novo Hamburgo · Rincão · score 90
- Branch: `demo/webers-nh-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `webers-nh`

### 10. Bar do Alemão (`bar-do-alemao-floresta`) — Leonardo
- Porto Alegre · Floresta · score 89
- Branch: `demo/bar-do-alemao-floresta-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `bar-do-alemao-floresta`

### 11. Masah! Sports Bar (`masah-sports`) — Leonardo
- Canoas · Marechal Rondon · score 89
- Branch: `demo/masah-sports-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `masah-sports`

### 12. Annalu Churras Pub (`annalu-churras`) — Leonardo
- Porto Alegre · Jardim Itu · score 88
- Branch: `demo/annalu-churras-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `annalu-churras`

### 13. Bar do Alemão — Unipark (`bar-alemao-unipark`) — Leonardo
- São Leopoldo · São João / Unisinos · score 88
- Branch: `demo/bar-alemao-unipark-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `bar-alemao-unipark`

### 14. Los Pepes Barbearia (`los-pepes-nh`) — Leonardo
- Novo Hamburgo · Centro (NH) · score 88
- Branch: `demo/los-pepes-nh-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `los-pepes-nh`

### 15. Piko Bar e Cozinha (`piko-bar`) — Leonardo
- Porto Alegre · Partenon · score 88
- Branch: `demo/piko-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `piko-bar`

### 16. Inca Bar de Cervejas (`inca-bar`) — Leonardo
- Porto Alegre · Boa Vista · score 87
- Branch: `demo/inca-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `inca-bar`

### 17. Barbearia 107 (`barbearia-107`) — Leonardo
- Gravataí · Barro Vermelho · score 86
- Branch: `demo/barbearia-107-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `barbearia-107`

### 18. Point do Pastel (`point-pastel`) — Leonardo
- Porto Alegre · Rubem Berta · score 86
- Branch: `demo/point-pastel-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `point-pastel`

### 19. Rota 66 (`rota-66`) — Leonardo
- Porto Alegre · Restinga · score 85
- Branch: `demo/rota-66-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `rota-66`

### 20. O Barbeiro (`o-barbeiro`) — Leonardo
- Porto Alegre · Jardim Botânico · score 84
- Branch: `demo/o-barbeiro-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `o-barbeiro`

### 21. Churrascaria Roda de Carreta (`roda-de-carreta`) — Leonardo
- Porto Alegre · Jardim Botânico · score 83
- Branch: `demo/roda-de-carreta-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `roda-de-carreta`

### 22. Resenha Gourmet (`resenha-gourmet`) — Leonardo
- Porto Alegre · Vila Ipiranga · score 83
- Branch: `demo/resenha-gourmet-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `resenha-gourmet`

### 23. Retrô Bar (`retro-bar`) — Leonardo
- Porto Alegre · Vila João Pessoa · score 82
- Branch: `demo/retro-bar-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `retro-bar`

### 24. Oficina Mecânica Guime (`mecanica-guime`) — Leonardo
- Porto Alegre · Jardim Botânico · score 76
- Branch: `demo/mecanica-guime-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `mecanica-guime`

### 25. Marmoraria Cappellari & Radin (`cappellari-radin`) — Leonardo
- Porto Alegre · Jardim Botânico · score 73
- Branch: `demo/cappellari-radin-d6be`
- Prompt: copie `demos/_factory/PROMPT.md` e troque `{{LEAD_ID}}` → `cappellari-radin`


---

## Prompt curto (colar no Cloud Agent)

```
Lead ID: <COLE_O_ID>

Siga demos/_factory/PROMPT.md no repo xpress-leads.
1) Pesquise a identidade visual (IG, Google Fotos, fachada, logo).
2) Grave demos/<ID>/brand.json (schema lib/brand.ts) com evidence e confidence.
3) Monte a demo aplicando as cores/tipografia/voz do brand.json — no espírito de demos/boteco-vitoria e demos/armazem-anita.
4) Branch demo/<ID>-d6be, build ok, commit + push.
Não use template genérico. A casa tem que ser reconhecível.
```
