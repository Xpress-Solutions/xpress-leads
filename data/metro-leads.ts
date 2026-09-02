import type { Lead } from "@/lib/types";

/** Novos leads da expansão metropolitana — anexados aos 19 existentes. */
export const metroLeads: Lead[] = [
  {
    id: "a-virgem",
    name: "A Virgem Bar",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "azenha",
    priority: "alta",
    score: 95,
    address: "Rua Olavo Bilac, 251 — Azenha / Cidade Baixa, Porto Alegre",
    mapsQuery: "A Virgem Bar Rua Olavo Bilac 251 Porto Alegre",
    phone: "(51) 3237-6818",
    instagram: "avirgembar",
    googleRating: 4.6,
    identity:
      "Bar-tattoo-arte na Olavo Bilac: pizzas autorais, drinks, mesas na calçada e ~19 mil seguidores. Participante do Comida di Buteco 2026 (petisco Bella Virgem). Identidade visual forte — grafite, plantas, estúdio de tattoo no mesmo espaço. Casa ativa na temporada 2026.",
    digitalGap:
      "Instagram e Linktree para reserva. Sem site oficial. Guias (BOABreja, QuintoAndar, Viajali) contam a história da casa; o domínio próprio não existe.",
    conversionWhy:
      "Marca cult da CB + concurso + pizza/reserva. Site com cardápio, galeria da arte, o petisco da edição e WhatsApp de reserva captura o tráfego que hoje cai em guia e Instagram.",
    approach:
      "Chegue pela identidade visual e pelo concurso. Mostre que a página do Linktree não ranqueia no Google como um site da casa.",
    pitch:
      "A Virgem já é destino na Olavo Bilac e está no Comida di Buteco 2026, mas quem pesquisa no Google ainda cai em guia de terceiro. Um site com pizza, o Bella Virgem, horários e reserva no WhatsApp deixa o clique na casa.",
    hours: "Seg–sáb a partir das 17h30/18h · domingo fechado",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
      {
        label: "BOABreja",
        url: "https://www.boabreja.com.br/estabelecimentos/rs/porto-alegre/a-virgem",
      },
    ],
  },
  {
    id: "ninkasi",
    name: "Ninkasi Bar",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "cidade-baixa",
    priority: "alta",
    score: 94,
    address: "Rua João Alfredo, 557 — Cidade Baixa, Porto Alegre",
    mapsQuery: "Ninkasi Bar Rua João Alfredo 557 Porto Alegre",
    instagram: "ninkasi_bar_poa",
    identity:
      "Bar de cerveja artesanal na João Alfredo desde 2021, parceria das cervejarias Sapatista e DaLuz (mulheres na produção). Nome da deusa suméria da cerveja. No Comida di Buteco 2026 com o petisco Peppa Mafiosa. Identidade de causa + ofício claro.",
    digitalGap:
      "Instagram oficial, sem site. A narrativa feminina da marca e o cardápio de chopes vivem em matéria de terceiro e no feed.",
    conversionWhy:
      "História proprietária + concurso + público da CB. Site com a origem da casa, torneiras, petisco da edição e eventos converte busca de 'cerveja artesanal Cidade Baixa'.",
    approach:
      "Fale da história Sapatista/DaLuz. O site é o manifesto curto da casa, não só cardápio.",
    pitch:
      "A Ninkasi tem uma história que nenhum guia conta direito — e está no Comida di Buteco 2026. Um site com as torneiras, o Peppa Mafiosa e a origem da casa captura quem pesquisa cerveja na João Alfredo.",
    hours: "Ter–sáb até 2h",
    sources: [
      {
        label: "QuintoAndar / Ninkasi",
        url: "https://www.quintoandar.com.br/regioes-atendidas/cidade-baixa-porto-alegre-rs-brasil-9p6wtn17dr/local/ninkasi-bar",
      },
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "terreiro-bar",
    name: "Terreiro Bar",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "cidade-baixa",
    priority: "alta",
    score: 92,
    address: "Rua Luiz Afonso, 247 — Cidade Baixa, Porto Alegre",
    mapsQuery: "Terreiro Bar Rua Luiz Afonso 247 Porto Alegre",
    identity:
      "Bar ancestral na Luiz Afonso, Cidade Baixa. No Comida di Buteco 2026 com a Porção de Axé. Identidade afro-brasileira explícita — nome, petisco e vibe — fora do boteco genérico.",
    digitalGap:
      "Presença em Instagram e no circuito do concurso. Sem site oficial com cardápio, agenda e a história do terreiro.",
    conversionWhy:
      "Nome e conceito únicos + concurso. Site com o axé da casa, o petisco e eventos culturais fecha busca de identidade, não só de chopp.",
    approach:
      "Respeite o conceito. O pitch é dar casa digital ao terreiro, não 'modernizar' a marca.",
    pitch:
      "O Terreiro está no Comida di Buteco 2026 e a Porção de Axé ainda não tem página da casa. Um site com o petisco, a agenda e o ponto na Luiz Afonso segura quem vem pelo concurso e pela vibe.",
    hours: "Qua–dom até meia-noite",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "barril-pub",
    name: "Barril Pub",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "cristal",
    priority: "alta",
    score: 91,
    address: "Av. Wenceslau Escobar, 2997 — Cristal, Porto Alegre",
    mapsQuery: "Barril Pub Wenceslau Escobar 2997 Porto Alegre",
    instagram: "barrilpub",
    founded: "2014 (CNPJ ativo)",
    identity:
      "Pub e restaurante na Wenceslau Escobar desde 2014 (CNPJ 21.249.349/0001-31, situação ativa). Participante recorrente do Comida di Buteco — em 2026 com Brócolis na Rede. Casa de corredor comercial do Cristal, com tempo de marca.",
    digitalGap:
      "Instagram e páginas de CNPJ/guia. Sem site próprio com cardápio, almoço e o petisco da edição.",
    conversionWhy:
      "Mais de dez anos + concurso + avenida de fluxo. Site com horário de almoço/noite e o prato do buteco converte busca local na Zona Sul.",
    approach:
      "Mostre o tempo de CNPJ e o concurso. Casa antiga costuma aceitar site quando vê o Google falando pelos outros.",
    pitch:
      "O Barril Pub está aberto desde 2014 e de novo no Comida di Buteco, mas quem pesquisa na Wenceslau Escobar não acha o cardápio de vocês. Um site curto resolve isso.",
    hours: "Seg–sáb 11h–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
      {
        label: "CNPJ / Econodata",
        url: "https://www.econodata.com.br/consulta-empresa/21249349000131-barril-pub-bar-e-restaurante-ltda",
      },
    ],
  },
  {
    id: "beladora",
    name: "Beladora (Bela Dora)",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "ipanema",
    priority: "alta",
    score: 90,
    address: "Av. Guaíba, 10748 — Ipanema, Porto Alegre",
    mapsQuery: "Bela Dora Av Guaíba 10748 Porto Alegre",
    phone: "(51) 3105-4661",
    instagram: "beladora_restaurante",
    googleReviews: 584,
    identity:
      "Bar e restaurante à beira do Guaíba em Ipanema. Centenas de avaliações no Google. No Comida di Buteco 2026 com Espetinho Beladora. Ponto de orla com identidade de espetinho e vista — não é bar genérico de avenida.",
    digitalGap:
      "Facebook/Instagram como 'site'. Sem domínio próprio com cardápio, vista e reserva.",
    conversionWhy:
      "Orla + volume de review + concurso. Site com espetinho, horário até 1h e mapa da Guaíba captura busca 'bar Ipanema' e 'espetinho orla'.",
    approach:
      "Leve a orla e o volume de avaliações. O site é a vitrine que o Facebook não ranqueia bem.",
    pitch:
      "A Beladora já tem centenas de avaliações na orla e está no Comida di Buteco, mas o Google ainda não aponta para um site de vocês. Um site com o espetinho e o horário fecha o ciclo.",
    hours: "Ter–dom até 1h (horários variados)",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
      {
        label: "Restaurant Guru",
        url: "https://restaurantguru.com.br/Bela-Dora-Porto-Alegre",
      },
    ],
  },
  {
    id: "bar-do-alemao-floresta",
    name: "Bar do Alemão",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "floresta",
    priority: "alta",
    score: 89,
    address: "Rua Doutor Timóteo, 201 — Floresta, Porto Alegre",
    mapsQuery: "Bar do Alemão Rua Doutor Timóteo 201 Porto Alegre",
    phone: "(51) 3222-3148",
    identity:
      "Lancheria-boteco clássica na Dr. Timóteo, Floresta. Participante do Comida di Buteco 2026 (Bolinho de Couve da Vovó). Horário de almoço e tarde — casa de bairro com nome próprio e petisco de avó, não franquia.",
    digitalGap:
      "Telefone e fichas em guia. Sem site. Cardápio e o bolinho da edição vivem só no concurso.",
    conversionWhy:
      "Almoço de bairro + concurso. Site com o bolinho, o horário de semana e delivery/WhatsApp converte o 4º Distrito e quem vem pelo buteco.",
    approach:
      "Confirme que é a unidade da Timóteo (há homônimos). Chegue pelo bolinho da vovó.",
    pitch:
      "O Alemão da Timóteo está no Comida di Buteco 2026 e o Bolinho de Couve da Vovó não tem página da casa. Um site com o petisco e o horário de almoço resolve.",
    hours: "Seg–sex 11h–22h · sáb 11h–15h",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/buteco/bar-do-alemao-3/",
      },
    ],
    notes: "Há outro 'Alemão' em Jardim Carvalho — confirmar Timóteo 201.",
  },
  {
    id: "annalu-churras",
    name: "Annalu Churras Pub",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "jardim-itu",
    priority: "alta",
    score: 88,
    address: "Rua Gomes de Freitas, 421 — Jardim Itu Sabará, Porto Alegre",
    mapsQuery: "Annalu Churras Pub Gomes de Freitas 421 Porto Alegre",
    identity:
      "Churras pub no Jardim Itu Sabará. No Comida di Buteco 2026 com Espetinho Poro e Brasa. Nome próprio, ofício de espeto e noite de bairro residencial — identidade clara fora do Centro.",
    digitalGap:
      "Sem site. Aparece no circuito do concurso; cardápio e horário não têm endereço web próprio.",
    conversionWhy:
      "Zona Norte com pouca vitrine digital + concurso. Site com espetinho, cardápio de pub e WhatsApp captura o público do bairro e o voto do buteco.",
    approach:
      "Fale do Poro e Brasa e do vazio digital do Jardim Itu.",
    pitch:
      "A Annalu está no Comida di Buteco 2026 e o Jardim Itu ainda não tem um site da casa. Página com o espetinho, horário e WhatsApp fecha a busca do bairro.",
    hours: "Seg–sáb 18h–23h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "arvo-bar",
    name: "Arvo Bar",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "centro-historico",
    priority: "alta",
    score: 88,
    address: "Coronel Fernando Machado, 1200 — Centro, Porto Alegre",
    mapsQuery: "Arvo Bar Coronel Fernando Machado 1200 Porto Alegre",
    identity:
      "Bar no Centro Histórico. No Comida di Buteco 2026 com 'O Melhor Sanduba do Mundo'. Nome curto, petisco autoral e ponto de noite no centro — identidade de sanduíche de concurso.",
    digitalGap:
      "Sem site. O sanduíche campeão de marketing do concurso vive em matérias de terceiro.",
    conversionWhy:
      "Nome do petisco é gancho de SEO. Site com o sanduba, horário e mapa do Centro converte busca direta do concurso.",
    approach:
      "O pitch é a página do sanduíche — o concurso já fez a propaganda.",
    pitch:
      "O Melhor Sanduba do Mundo está no Comida di Buteco e ainda não tem uma página do Arvo. Um site com o sanduíche e o ponto na Fernando Machado captura o clique.",
    hours: "Ter–dom 18h–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "molt-be",
    name: "Molt Be",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "tristeza",
    priority: "alta",
    score: 87,
    address: "Rua Mario Totta, 963 — Tristeza, Porto Alegre",
    mapsQuery: "Molt Be Mario Totta 963 Porto Alegre",
    identity:
      "Casa na Tristeza, Zona Sul. No Comida di Buteco 2026 com croqueta de alho-poró. Nome próprio e petisco técnico — perfil de bar de bairro com cozinha cuidada.",
    digitalGap:
      "Sem site. Depende do concurso e do boca a boca da Mario Totta.",
    conversionWhy:
      "Zona Sul com busca local + concurso. Site com croqueta, cardápio e horário diário (a casa abre todos os dias na ficha do concurso) fecha conversão de morador.",
    approach:
      "Enfatize a rotina diária e o petisco — casa de bairro, não só temporada de concurso.",
    pitch:
      "O Molt Be está no Comida di Buteco e a croqueta de alho-poró não tem página da casa. Um site com o petisco e o horário na Mario Totta resolve para a Tristeza.",
    hours: "Todos os dias (horários variados — confirmar)",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "inca-bar",
    name: "Inca Bar de Cervejas",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "boa-vista",
    priority: "alta",
    score: 87,
    address: "Av. Inácio Vasconcelos, 69 — Boa Vista, Porto Alegre",
    mapsQuery: "Inca Bar de Cervejas Inácio Vasconcelos 69 Porto Alegre",
    identity:
      "Bar de cervejas na Boa Vista. No Comida di Buteco 2026 com Croqueta Andina. Nome e petisco andinos — identidade de nicho (cerveja + referência latina), não boteco genérico.",
    digitalGap:
      "Sem site. Cardápio de torneiras e a croqueta andina não têm hub próprio.",
    conversionWhy:
      "Nicho de cerveja + concurso + bairro de alto poder aquisitivo. Site com torneiras, petiscos e eventos de rótulo converte bem.",
    approach:
      "Fale do nome Inca e da croqueta andina — o site reforça o posicionamento.",
    pitch:
      "O Inca está no Comida di Buteco com a Croqueta Andina e ainda não tem site. Uma página com as torneiras e o petisco posiciona a casa na Boa Vista.",
    hours: "Ter–sáb 17h30–22h30",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "point-pastel",
    name: "Point do Pastel",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "rubem-berta",
    priority: "alta",
    score: 86,
    address:
      "Rua Maria Augusta Generoso Estrela, 1070 — Rubem Berta, Porto Alegre",
    mapsQuery:
      "Point do Pastel Maria Augusta Generoso Estrela 1070 Porto Alegre",
    identity:
      "Casa de pastel no Rubem Berta. No Comida di Buteco 2026 com O Magnífico. Ofício único (pastel de boteco) e nome de ponto — identidade de produto, não de bar genérico.",
    digitalGap:
      "Sem site. O Magnífico e o cardápio de pastéis vivem no concurso e no Instagram eventual.",
    conversionWhy:
      "Produto de busca ('pastel Rubem Berta') + concurso. Site com sabores, O Magnífico e entrega/WhatsApp converte Zona Norte.",
    approach:
      "Mostre o Magnífico como hero do site — pastel de concurso precisa de página.",
    pitch:
      "O Point do Pastel está no Comida di Buteco com O Magnífico e ainda não tem site. Uma página com os sabores e o WhatsApp captura o Rubem Berta.",
    hours: "Ter–dom 18h30–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "rota-66",
    name: "Rota 66",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "restinga",
    priority: "alta",
    score: 85,
    address: "Av. Nilo Wulff, 902 — Restinga, Porto Alegre",
    mapsQuery: "Rota 66 Nilo Wulff 902 Porto Alegre",
    identity:
      "Bar na Restinga, Extremo Sul. No Comida di Buteco 2026 com Spin Bacon. Nome de estrada, ponto de avenida e participação no concurso — identidade de casa de bairro com ambição de destino.",
    digitalGap:
      "Sem site. Pouca vitrine digital na Restinga; o concurso é o principal canal de descoberta.",
    conversionWhy:
      "Bairro pouco coberto por sites autorais + concurso. Site com Spin Bacon, cardápio e horário diário vira referência local.",
    approach:
      "Valorize o bairro. O pitch é ser a página oficial da Restinga no circuito do buteco.",
    pitch:
      "A Rota 66 está no Comida di Buteco 2026 e a Restinga ainda não tem um site da casa. Página com o Spin Bacon e o horário na Nilo Wulff fecha isso.",
    hours: "Todos os dias 11h30–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "snack-barba",
    name: "Snack Bar do Barba",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "jardim-do-salso",
    priority: "alta",
    score: 86,
    address: "Rua Ângelo Crivellaro, 540 — Jardim do Salso, Porto Alegre",
    mapsQuery: "Snack Bar do Barba Ângelo Crivellaro 540 Porto Alegre",
    identity:
      "Snack bar no Jardim do Salso. No Comida di Buteco 2026 com Feijoca Crocante. Nome de dono + petisco de feijoada em formato de boteco — identidade pessoal clara.",
    digitalGap:
      "Sem site. Aparece no concurso ao lado de outras casas do Salso; cardápio não tem hub.",
    conversionWhy:
      "Petisco memorável + bairro já no nosso mapa. Site com a Feijoca, horário e WhatsApp completa o corredor Cristiano Fischer / Ângelo Crivellaro.",
    approach:
      "Ligue ao Terra do Churrasco (mesmo bairro): mostre o cluster e a falta de sites no Salso.",
    pitch:
      "O Barba está no Comida di Buteco com a Feijoca Crocante e o Salso ainda não tem um site da casa. Uma página com o petisco e o ponto na Ângelo Crivellaro resolve.",
    hours: "Seg–dom (horários variados — confirmar)",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "golden-bull",
    name: "Golden Bull",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "passo-dareia",
    priority: "media",
    score: 84,
    address: "Rua Cipó, 1264 — Passo D’Areia, Porto Alegre",
    mapsQuery: "Golden Bull Rua Cipó 1264 Porto Alegre",
    identity:
      "Casa no Passo D’Areia. No Comida di Buteco 2026 com Bruscheta Golden. Nome de marca e petisco autoral — perfil de bar de noite de bairro.",
    digitalGap:
      "Sem site. Depende do concurso e de redes.",
    conversionWhy:
      "Concurso + Zona Norte. Site com bruschetta e cardápio de petiscos captura busca local.",
    approach:
      "Chegue pelo petisco da edição.",
    pitch:
      "O Golden Bull está no Comida di Buteco e a Bruscheta Golden não tem página da casa. Um site curto na Cipó resolve.",
    hours: "Seg–sáb 18h–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "pinacoteca-cafe",
    name: "Pinacoteca Café",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "cidade-baixa",
    priority: "media",
    score: 84,
    address: "Rua da República, 409 — Cidade Baixa, Porto Alegre",
    mapsQuery: "Pinacoteca Café Rua da República 409 Porto Alegre",
    identity:
      "Café-bar na República, Cidade Baixa. No Comida di Buteco 2026 com Croqueflor. Nome que evoca arte + petisco floral — identidade de casa cultural/gastronômica.",
    digitalGap:
      "Sem site. Cardápio e o croquete da edição não têm endereço próprio.",
    conversionWhy:
      "Nome forte para SEO + CB + concurso. Site com café, petiscos e o Croqueflor converte.",
    approach:
      "Use o nome Pinacoteca — já vende atmosfera.",
    pitch:
      "A Pinacoteca Café está no Comida di Buteco e o Croqueflor ainda não tem página. Um site na República 409 fecha a busca.",
    hours: "Ter–dom (horários variados)",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "bah-brasa-canoas",
    name: "Bah Brasa",
    category: "gastronomia",
    city: "canoas",
    neighborhood: "sao-luis-canoas",
    priority: "alta",
    score: 93,
    address: "Rua Berto Círio, 329 — São Luís, Canoas",
    mapsQuery: "Bah Brasa Berto Círio 329 Canoas",
    identity:
      "Buteco em São Luís, Canoas. No Comida di Buteco 2026 com Bolinho do Brasa. Nome gaúcho + brasa — identidade de casa de esquina metropolitana participando do mesmo circuito de Porto Alegre.",
    digitalGap:
      "Sem site oficial. Ficha do concurso e guias de CNPJ; cardápio não tem hub. (Há negócios parecidos em Canoas — confirmar Berto Círio 329.)",
    conversionWhy:
      "Canoas no circuito nacional do buteco + pouca oferta de sites autorais. Site com o bolinho, horário e WhatsApp posiciona a casa no Google de Canoas.",
    approach:
      "Confirme o ponto Berto Círio (não confundir com Brasa e Beer na Sezefredo).",
    pitch:
      "A Bah Brasa está no Comida di Buteco 2026 em Canoas e o Bolinho do Brasa não tem página da casa. Um site com o petisco e o ponto na Berto Círio captura o clique.",
    hours: "Qua–sáb 18h30–23h30",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
    notes: "Não confundir com Brasa e Beer (Av. Sezefredo) nem La Brasa.",
  },
  {
    id: "pinhos-botecaria",
    name: "Pinhos Botecaria Pub",
    category: "gastronomia",
    city: "canoas",
    neighborhood: "centro-canoas",
    priority: "alta",
    score: 92,
    address: "Av. Victor Barreto, 3588 — Centro, Canoas",
    mapsQuery: "Pinhos Botecaria Victor Barreto 3588 Canoas",
    phone: "(51) 99604-4639",
    whatsapp: "5551996044639",
    googleRating: 4.6,
    identity:
      "Botecaria no Centro de Canoas, Victor Barreto. Google 4.6. No Comida di Buteco 2026 com Deliciaporo / Bomba de sabores. Casa de avenida principal, noite de quarta a sábado — identidade de pub de Canoas, não extensão de POA.",
    digitalGap:
      "Instagram e WhatsApp para reserva. Sem site com cardápio, agenda e o petisco da edição.",
    conversionWhy:
      "Centro de Canoas + nota alta + concurso. Site com reserva, cardápio e Deliciaporo converte busca 'boteco Canoas'.",
    approach:
      "Mostre a Victor Barreto e o concurso. Ofereça página de reserva que o Instagram não ranqueia.",
    pitch:
      "A Pinhos está no Comida di Buteco e no Google com 4.6, mas sem site. Uma página com o petisco, o horário e o WhatsApp na Victor Barreto fecha a conversão.",
    hours: "Qua–qui 19h–0h · sex–sáb 19h–2h",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/buteco/pinhos-botecaria-pub/",
      },
      {
        label: "Restaurant Guru",
        url: "https://www.restaurantguru.com.br/Pinhos-Butecaria-Canoas",
      },
    ],
  },
  {
    id: "rock-n-beer-canoas",
    name: "Rock'n Beer Pub",
    category: "gastronomia",
    city: "canoas",
    neighborhood: "marechal-rondon",
    priority: "alta",
    score: 90,
    address:
      "Av. Doutor Sezefredo Azambuja Vieira, 266 — Marechal Rondon / Vila Rosa, Canoas",
    mapsQuery: "Rock n Beer Sezefredo Azambuja Vieira 266 Canoas",
    phone: "(51) 3785-7529",
    instagram: "rocknbeerpubcanoas",
    identity:
      "Pub rock em Canoas, Sezefredo. Participante do Comida di Buteco (petisco Belo Horizonte — mini-hambúrgueres). Instagram próprio da unidade Canoas. Identidade de música + burger de concurso.",
    digitalGap:
      "Instagram @rocknbeerpubcanoas. Sem site com cardápio, shows e o petisco.",
    conversionWhy:
      "Nicho rock + concurso + avenida de Canoas. Site com agenda, cardápio e o Belo Horizonte captura fãs e votos.",
    approach:
      "Fale de shows e do petisco. O site é agenda + cardápio, não só landing.",
    pitch:
      "O Rock'n Beer de Canoas está no circuito do buteco e o Instagram não ranqueia no Google. Um site com o Belo Horizonte, a agenda e o ponto na Sezefredo resolve.",
    hours: "Ter–qui 19h–23h30 · sex–sáb 19h–1h",
    sources: [
      {
        label: "Feiras & Cia",
        url: "https://www.feirasecia.com.br/det_buteco.php?codfor=38095",
      },
    ],
  },
  {
    id: "masah-sports",
    name: "Masah! Sports Bar",
    category: "gastronomia",
    city: "canoas",
    neighborhood: "marechal-rondon",
    priority: "alta",
    score: 89,
    address: "Av. Farroupilha, 3833, Loja 03 — Marechal Rondon, Canoas",
    mapsQuery: "Masah Sports Bar Farroupilha 3833 Canoas",
    phone: "(51) 99920-0521",
    whatsapp: "5551999200521",
    identity:
      "Sports bar na Farroupilha, Canoas. No Comida di Buteco com o petisco Farroupilha (ciabatta com entrecôte). Nome com exclamação, perfil de jogo + cozinha — identidade clara de sports bar, não boteco anônimo.",
    digitalGap:
      "Telefone/WhatsApp e ficha do concurso. Sem site com cardápio, jogos do dia e o petisco.",
    conversionWhy:
      "Sports bar vive de agenda (jogos) + cardápio. Site com placar da semana, Farroupilha e reserva converte recorrência.",
    approach:
      "Ofereça bloco 'jogos da semana' no site — dor óbvia de sports bar.",
    pitch:
      "O Masah! está no Comida di Buteco e ainda avisa jogo pelo WhatsApp. Um site com o petisco Farroupilha, os jogos da semana e o ponto na avenida resolve.",
    hours: "Ter–sex 18h–23h30 · sáb 18h–23h30 · dom 11h30–16h",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/buteco/masah-sports-bar/",
      },
    ],
  },
  {
    id: "la-bamba-gravatai",
    name: "La Bamba",
    category: "gastronomia",
    city: "gravatai",
    neighborhood: "centro-gravatai",
    priority: "alta",
    score: 88,
    address:
      "Av. Dorival Cândido Luz de Oliveira, 184 — Gravataí",
    mapsQuery: "La Bamba Dorival Cândido Luz de Oliveira 184 Gravataí",
    phone: "(51) 3488-5082",
    googleRating: 4.6,
    googleReviews: 215,
    identity:
      "Café-bar na avenida principal de Gravataí. Google 4.6 com 200+ avaliações (atualizado em 2026). Café da manhã ao fim da tarde, ambiente elogiado — ponto de rotina da cidade, não só happy hour.",
    digitalGap:
      "Sem site. Aparece em Restaurant Guru e diretórios; cardápio de café/lanche não tem hub.",
    conversionWhy:
      "Ticket recorrente de café + nota alta + avenida de fluxo. Site com café da manhã, lanches e horário fecha busca 'café Gravataí'.",
    approach:
      "Fale do café da manhã e das 215 avaliações. Dono de café sente a dor do 'o que tem hoje'.",
    pitch:
      "O La Bamba já tem 4.6 no Google na Dorival e ainda não tem site. Uma página com o café da manhã, o cardápio e o horário captura quem pesquisa em Gravataí.",
    hours: "Seg–sáb 5h45–19h · domingo fechado",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://restaurantguru.com.br/Labamba-Gravatai",
      },
    ],
  },
  {
    id: "bar-e-bar-gravatai",
    name: "Bar e Bar Restaurante e Churrascaria",
    category: "gastronomia",
    city: "gravatai",
    neighborhood: "centro-gravatai",
    priority: "alta",
    score: 87,
    address: "Rua Elmo Lenz, 1480 — Gravataí",
    mapsQuery: "Bar e Bar Restaurante Churrascaria Elmo Lenz 1480 Gravataí",
    googleRating: 4.7,
    identity:
      "Churrascaria-restaurante em Gravataí com 4.7 no Google. Nome duplicado ('Bar e Bar') vira marca. Ofício de churrasco e almoço — identidade de casa de cidade, avaliações recentes em 2026.",
    digitalGap:
      "Sem site. Cardápio de churrasco/almoço e promoções de bariátrica/desconto vivem no balcão e no Google.",
    conversionWhy:
      "Churrascaria sem site em cidade-dormitório da RMPA é conversão clássica: cardápio, horário, reserva de mesa e delivery.",
    approach:
      "Ofereça página de almoço + reserva. Churrascaria sente ligação demais no horário de pico.",
    pitch:
      "O Bar e Bar já tem 4.7 no Google e ainda não tem site. Uma página com o churrasco, o horário e reserva na Elmo Lenz tira a casa do diretório.",
    hours: "Confirmar no Google / balcão",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://www.restaurantguru.com.br/Bar-e-Bar-Gravatai-2",
      },
    ],
  },
  {
    id: "barbearia-107",
    name: "Barbearia 107",
    category: "beleza",
    city: "gravatai",
    neighborhood: "barro-vermelho",
    priority: "alta",
    score: 86,
    address: "Estrada Cavalhada Barro Vermelho, 571 — Gravataí",
    mapsQuery: "Barbearia 107 Cavalhada Barro Vermelho 571 Gravataí",
    googleRating: 5.0,
    googleReviews: 43,
    identity:
      "Barbearia em Gravataí com 5.0 no Booksy (avaliações até julho de 2026). Nome numérico próprio, barbeiro Fabricio Brasil citado nos reviews. Agenda ativa — sinal claro de operação corrente.",
    digitalGap:
      "Agenda só no Booksy (terceiro). Sem site com serviços, preços e marca própria.",
    conversionWhy:
      "Nota máxima + agendamento em plataforma de comissão. Site com serviços, preços e link de agenda (ou WhatsApp) recupera a marca e o SEO local.",
    approach:
      "Mostre o Booksy como prova de demanda e como taxa. O site é a casa; o Booksy pode continuar como motor.",
    pitch:
      "A 107 já está com nota 5 e agenda cheia no Booksy, mas sem site. Uma página com os combos, o Fabricio e o WhatsApp deixa a marca sua — não do app.",
    hours: "Via Booksy / confirmar",
    sources: [
      {
        label: "Booksy",
        url: "https://booksy.com/pt-br/214693_barbearia-107_barbearias_799807_gravatai",
      },
    ],
  },
  {
    id: "bah-burger-nh",
    name: "BAH! BURGER",
    category: "gastronomia",
    city: "novo-hamburgo",
    neighborhood: "centro-nh",
    priority: "alta",
    score: 94,
    address: "Rua China, 14 — Novo Hamburgo",
    mapsQuery: "BAH BURGER Rua China 14 Novo Hamburgo",
    phone: "(51) 99207-8679",
    whatsapp: "5551992078679",
    googleRating: 4.9,
    identity:
      "Hamburgueria em Novo Hamburgo com 4.9 no Google. Nome gaúcho com exclamação, ofício único, horário de noite (qua–dom). Identidade de burger premium de cidade industrial — não rede.",
    digitalGap:
      "Telefone/WhatsApp e Restaurant Guru. Sem site com cardápio, combos e pedido.",
    conversionWhy:
      "Nota altíssima + produto de busca ('hambúrguer Novo Hamburgo') + delivery natural. Site com cardápio e WhatsApp converte imediato.",
    approach:
      "Mostre a nota 4.9 e a ausência de domínio. Pitch de cardápio-pedido.",
    pitch:
      "A BAH! BURGER está com 4.9 no Google e ainda não tem site. Uma página com o cardápio, o horário e o WhatsApp na China 14 captura quem pesquisa hambúrguer em NH.",
    hours: "Qua–sáb 18h30–23h · dom 18h–22h · seg–ter fechado",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://restaurantguru.com.br/BAH-BURGER-Novo-Hamburgo",
      },
    ],
  },
  {
    id: "webers-nh",
    name: "Restaurante Weber's",
    category: "gastronomia",
    city: "novo-hamburgo",
    neighborhood: "rincao",
    priority: "alta",
    score: 90,
    address: "Rua Vinte e Quatro de Maio, 222 — Rincão / Vila Rosa, Novo Hamburgo",
    mapsQuery: "Restaurante Weber's Vinte e Quatro de Maio 222 Novo Hamburgo",
    phone: "(51) 3593-2822",
    founded: "desde 1998",
    identity:
      "Buffet de comida caseira e típica alemã em Novo Hamburgo desde 1998. Eisbein e chucrute no fim de semana. Citado em guias locais (QuintoAndar) como referência da cidade. Tempo de casa + ofício colonial — identidade sólida da região do Vale.",
    digitalGap:
      "Facebook e fichas antigas (Hagah). Sem site atualizado com buffet do dia, fim de semana alemão e estacionamento.",
    conversionWhy:
      "Quase 30 anos + culinária alemã de busca + almoço de rotina. Site com o buffet da semana e o cardápio de domingo converte famílias e quem pesquisa 'comida alemã NH'.",
    approach:
      "Respeite a tradição. O site é orgulho da casa alemã, não redesign de startup.",
    pitch:
      "O Weber's serve eisbein desde os anos 90 e ainda não tem um site que conte isso. Uma página com o buffet, o fim de semana alemão e o mapa na 24 de Maio resolve.",
    hours: "Seg–sex 11h30–13h45 · sáb–dom 11h30–14h15",
    sources: [
      {
        label: "QuintoAndar",
        url: "https://www.quintoandar.com.br/guias/cidades/melhores-restaurantes-em-novo-hamburgo/",
      },
      {
        label: "Hagah",
        url: "https://www.hagah.com.br/restaurante-webers-vinte-e-quatro-de-maio-222",
      },
    ],
  },
  {
    id: "los-pepes-nh",
    name: "Los Pepes Barbearia",
    category: "beleza",
    city: "novo-hamburgo",
    neighborhood: "centro-nh",
    priority: "alta",
    score: 88,
    address: "Rua Leopoldo Wasun, 149 — Novo Hamburgo",
    mapsQuery: "Los Pepes Barbearia Leopoldo Wasun 149 Novo Hamburgo",
    identity:
      "Barbearia em Novo Hamburgo com nome próprio forte (Los Pepes). Agenda ativa no Booksy — corte, barba, sobrancelha. Identidade latina/masculina clara, não 'Barbearia do Fulano' genérica.",
    digitalGap:
      "Booksy como vitrine. Sem site com serviços, equipe e marca.",
    conversionWhy:
      "Nome memorável + agenda digital em terceiro. Site com combos e agendamento/WhatsApp recupera SEO e margem de plataforma.",
    approach:
      "Mostre o Booksy e proponha site-marca com o mesmo link de agenda embutido.",
    pitch:
      "A Los Pepes já agenda no Booksy e ainda não tem site. Uma página com os combos, a equipe e o WhatsApp deixa o nome de vocês no Google — não só no app.",
    hours: "Via Booksy / confirmar",
    sources: [
      {
        label: "Booksy",
        url: "https://booksy.com/pt-br/95621_los-pepes-barbearia_barbearias_802050_novo-hamburgo",
      },
    ],
  },
  {
    id: "bar-do-ze-sl",
    name: "Bar do Zé",
    category: "gastronomia",
    city: "sao-leopoldo",
    neighborhood: "centro-sl",
    priority: "alta",
    score: 91,
    address: "Rua Pres. Roosevelt, 323 — São Leopoldo",
    mapsQuery: "Bar do Zé Presidente Roosevelt 323 São Leopoldo",
    googleRating: 4.9,
    identity:
      "Bar de praça em São Leopoldo: mesa na calçada/praça, xis caprichado, cerveja gelada. Google 4.9. Atendimento pessoal do Zé citado nos reviews. Identidade de boteco de cidade — nome do dono, ritual de praça, preço justo.",
    digitalGap:
      "Sem site. História e o xis vivem só no Google e no boca a boca.",
    conversionWhy:
      "Nota 4.9 + personagem (Zé) + produto (xis). Site com o xis, a praça e o horário vira cartão postal digital da casa.",
    approach:
      "Chegue pelo Zé e pela praça. O site é homenagem à casa, não pitch frio de marketing.",
    pitch:
      "O Bar do Zé já é 4.9 na Roosevelt e ainda não tem site. Uma página com o xis, a mesa na praça e o horário conta a história que o Google só resume.",
    hours: "Confirmar no balcão / Google",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://www.restaurantguru.com.br/Bar-Do-Ze-Sao-Leopoldo",
      },
    ],
  },
  {
    id: "bar-alemao-unipark",
    name: "Bar do Alemão — Unipark",
    category: "gastronomia",
    city: "sao-leopoldo",
    neighborhood: "sao-joao-sl",
    priority: "alta",
    score: 88,
    address: "Rua Padre Luís Gonzaga Jaeger, 80 — São Leopoldo (junto ao Unipark / Unisinos)",
    mapsQuery: "Bar do Alemão Padre Luís Gonzaga Jaeger 80 São Leopoldo",
    googleRating: 4.7,
    identity:
      "Bar amplo perto da Unisinos/Unipark: litrão, sinuca, buffet, espaço para banda. Google 4.7. Identidade de ponto universitário e de happy hour de São Leopoldo — casa com nome e localização ímpar.",
    digitalGap:
      "Sem site. Eventos, buffet e horário vivem no Google e no boca a boca do campus.",
    conversionWhy:
      "Público universitário pesquisa no celular. Site com cardápio, eventos e mapa do acesso 2 da Unisinos converte fresco todo semestre.",
    approach:
      "Fale dos alunos e dos eventos. Ofereça agenda no site.",
    pitch:
      "O Alemão do Unipark já é ponto da Unisinos e ainda não tem site. Uma página com o cardápio, a sinuca e o mapa do acesso 2 captura quem pesquisa no celular antes da aula.",
    hours: "Seg–sex 9h–0h · sáb 9h–16h · dom fechado",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://restaurantguru.com.br/Bar-do-Alemao-Unipark-Sao-Leopoldo-2",
      },
    ],
  },
  {
    id: "resenha-gourmet",
    name: "Resenha Gourmet",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "vila-ipiranga",
    priority: "media",
    score: 83,
    address: "Av. do Forte, 1220 — Vila Ipiranga, Porto Alegre",
    mapsQuery: "Resenha Gourmet Av do Forte 1220 Porto Alegre",
    identity:
      "Casa na Vila Ipiranga. No Comida di Buteco 2026 com Bolinho Resenha. Nome de 'resenha' (encontro) + gourmet — posicionamento de boteco elevado de avenida.",
    digitalGap:
      "Sem site. Concurso é o principal canal.",
    conversionWhy:
      "Av. do Forte + concurso. Site com bolinho e cardápio de almoço/noite.",
    approach:
      "Chegue pelo Bolinho Resenha.",
    pitch:
      "A Resenha Gourmet está no Comida di Buteco e o bolinho ainda não tem página. Um site na Av. do Forte resolve.",
    hours: "Seg–sáb 11h–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "retro-bar",
    name: "Retrô Bar",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "vila-joao-pessoa",
    priority: "media",
    score: 82,
    address: "Rua Rocio, 479 — Vila João Pessoa, Porto Alegre",
    mapsQuery: "Retrô Bar Rua Rocio 479 Porto Alegre",
    identity:
      "Bar na Vila João Pessoa. No Comida di Buteco 2026 com Bolinho de Buteco. Abre de manhã (8h) — identidade de casa de dia e noite, não só pub.",
    digitalGap:
      "Sem site. Horário longo e petisco do concurso sem hub.",
    conversionWhy:
      "Horário estendido + concurso. Site com café/almoço/noite e o bolinho.",
    approach:
      "Destaque o horário desde as 8h — diferencial raro.",
    pitch:
      "O Retrô abre às 8h, está no Comida di Buteco e ainda não tem site. Uma página com o horário completo e o bolinho resolve.",
    hours: "Seg–sáb 8h–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "gringos-lanches",
    name: "Gringo’s Lanches",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "sao-joao",
    priority: "media",
    score: 82,
    address: "Av. Ceará, 823 — São João, Porto Alegre",
    mapsQuery: "Gringo Lanches Av Ceará 823 Porto Alegre",
    identity:
      "Lanchonete no São João. No Comida di Buteco 2026 com Tesouro de Molho. Nome Gringo’s — marca pessoal de lanche de avenida.",
    digitalGap:
      "Sem site. Cardápio de lanches e o petisco do concurso sem página.",
    conversionWhy:
      "Lanche de avenida + concurso. Site com cardápio e delivery/WhatsApp.",
    approach:
      "Pitch de cardápio-pedido para lanchonete de fluxo.",
    pitch:
      "A Gringo’s está no Comida di Buteco e ainda pede-se pelo telefone. Um site com o Tesouro de Molho e o cardápio na Ceará resolve.",
    hours: "Seg–sáb (horários variados)",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "espetinho-martins",
    name: "Espetinho Bar do Martins",
    category: "gastronomia",
    city: "porto-alegre",
    neighborhood: "vila-jardim",
    priority: "media",
    score: 83,
    address: "Av. Circular, 593 — Vila Jardim, Porto Alegre",
    mapsQuery: "Espetinho Bar do Martins Av Circular 593 Porto Alegre",
    identity:
      "Espetinho na Vila Jardim. No Comida di Buteco 2026 com Kachurrasco. Nome do dono + ofício de espeto — identidade clássica de boteco de esquina.",
    digitalGap:
      "Sem site. Kachurrasco e cardápio de espetos só no concurso.",
    conversionWhy:
      "Produto visual (espeto) + concurso. Site com cardápio de espetos e WhatsApp.",
    approach:
      "Hero do Kachurrasco no site.",
    pitch:
      "O Martins está no Comida di Buteco com o Kachurrasco e ainda não tem site. Uma página com os espetos na Circular resolve.",
    hours: "Seg–sáb 18h–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
];
