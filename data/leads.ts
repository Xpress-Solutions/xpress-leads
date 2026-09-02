import type { City, ExcludedBusiness, Lead, Neighborhood } from "@/lib/types";
import { metroLeads } from "@/data/metro-leads";

export const RESEARCH_DATE = "2 de setembro de 2026";
export const CITY = "Região Metropolitana de Porto Alegre / RS";

export const leads: Lead[] = [
  {
    id: "boteco-vitoria",
    name: "Boteco Vitória",
    category: "gastronomia",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 96,
    address: "Rua Felizardo, 445 — Jardim Botânico",
    mapsQuery: "Boteco Vitória Rua Felizardo 445 Porto Alegre",
    phone: "(51) 3407-4940",
    whatsapp: "555134074940",
    googleRating: 4.7,
    founded: "2015 (11 anos)",
    identity:
      "Boteco de bairro premiado. 1º lugar no Comida di Buteco 2022 em Porto Alegre e participante ativo da edição 2026. CNPJ 22.686.382/0001-91 (Rodrigues Bar e Restaurante Ltda), situação ativa. Sem pretensão de virar restaurante sofisticado: comida de boteco bem executada, informal, fora do circuito óbvio da cidade.",
    digitalGap:
      "Não tem site oficial. Aparece em guias de terceiros (Comida di Buteco, BOABreja, Restaurant Guru) e o Google está atualizado (horário conferido em maio de 2026). A casa não controla a própria narrativa nem o cardápio.",
    conversionWhy:
      "Identidade sólida, prêmio nacional, casa aberta e concorrendo em 2026. Público local + caçadores de boteco. Um site com cardápio, história do prato campeão, reserva/WhatsApp e galeria transforma busca em visita — especialmente na temporada do concurso.",
    approach:
      "Chegue pelo prêmio, não pelo 'você precisa de um site'. Mostre como o Comida di Buteco 2026 está gerando tráfego para páginas de terceiros, e que a casa não captura esse clique.",
    pitch:
      "Vi que o Vitória está de novo no Comida di Buteco e que o Google e os guias estão falando pela casa. Montei um site curto — cardápio, o prato da edição, horários e WhatsApp — para o clique cair aqui e não no Restaurant Guru. Posso passar aí numa terça à tarde?",
    hours:
      "Ter–sex 17h–1h (almoço 12h–14h30) · sáb 12h–1h · seg e dom fechado",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/buteco/boteco-vitoria-2/",
      },
      {
        label: "Participação 2026",
        url: "http://www.feirasecia.com.br/det_buteco_2026.php?codfor=28563",
      },
      {
        label: "BOABreja",
        url: "https://www.boabreja.com.br/estabelecimentos/rs/porto-alegre/boteco-vitoria",
      },
    ],
  },
  {
    id: "barao-1240",
    name: "Barão 1240",
    category: "gastronomia",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 93,
    address: "Rua Barão do Amazonas, 1240 — Jardim Botânico",
    mapsQuery: "Barão 1240 Rua Barão do Amazonas Porto Alegre",
    phone: "(51) 3533-1240",
    whatsapp: "555135331240",
    instagram: "barao1240",
    googleRating: 4.6,
    identity:
      "Cafeteria-restaurante de rua, café da manhã ao fim da tarde. Entre as 31 melhores cafeterias de Porto Alegre no Restaurant Guru (de 2.409). Avaliação 4.6 no Google. Atmosfera calma, atendimento elogiado, ponto fixo na principal via comercial do bairro.",
    digitalGap:
      "Instagram ativo, sem site próprio. Cardápios em agregadores estão desatualizados (versões de 7 anos). Quem busca 'café Jardim Botânico' cai em diretório, não na casa.",
    conversionWhy:
      "Ticket recorrente (café da manhã + almoço de bairro). Site com cardápio do dia, horário e encomenda de kit café/festa de aniversário fecha o ciclo que o Instagram não fecha — especialmente para quem pesquisa no Google, não no Reels.",
    approach:
      "Ofereça um site-cardápio que atualiza o café da manhã e o almoço. Dono de cafeteria sente a dor de 'as pessoas ligam perguntando o que tem hoje'.",
    pitch:
      "O Barão 1240 já é referência de café no bairro, mas quem pesquisa no Google ainda não encontra o cardápio de vocês. Um site simples com o que tem hoje, horários e WhatsApp para encomenda resolve isso sem virar mais uma rede social para alimentar.",
    hours: "Seg–sáb 7h–18h30 · domingo fechado",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://restaurantguru.com.br/Cafeteria-Restaurante-Barao-1240-Porto-Alegre",
      },
    ],
  },
  {
    id: "armazem-anita",
    name: "Armazém Anita",
    category: "gastronomia",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 91,
    address: "Rua Buenos Aires, 373 — Jardim Botânico",
    mapsQuery: "Armazém Anita Rua Buenos Aires 373 Porto Alegre",
    phone: "(51) 3276-0903",
    whatsapp: "555132760903",
    instagram: "armazemanitaoficial",
    googleRating: 4.6,
    googleReviews: 246,
    identity:
      "Ponto de encontro familiar do bairro: churrasquinho, chope e música ao vivo. Duas unidades (Jardim Botânico e Boa Vista). Comentários do tipo 'melhor do bairro'. Preço acessível (R$ 40–60). Identidade gaúcha clara, sem ser temática forçada.",
    digitalGap:
      "Instagram oficial, sem site. As duas casas compartilham a mesma marca e não têm um endereço digital único com cardápio, horários por unidade e eventos.",
    conversionWhy:
      "Marca com duas lojas já precisa de um hub. Site institucional + cardápio + agenda de música ao vivo + 'onde fica cada casa' é conversão direta para happy hour e grupos.",
    approach:
      "Fale das duas unidades. Mostre que a marca já saiu do 'boteco de esquina' e ainda se apresenta como se fosse uma só porta no Instagram.",
    pitch:
      "Vocês já têm duas casas e uma marca que o bairro reconhece. O que falta é um lugar só — cardápio, horários de cada unidade e a programação da música ao vivo — para quem não está no Instagram achar vocês e ir.",
    hours: "Segunda a sábado (happy hour e jantar)",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://www.restaurantguru.com.br/Armazem-Anita-Porto-Alegre",
      },
    ],
  },
  {
    id: "niramaki-sushi",
    name: "Niramaki Sushi",
    category: "gastronomia",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 89,
    address: "Rua Barão do Amazonas, 1145 — Jardim Botânico",
    mapsQuery: "Niramaki Sushi Barão do Amazonas 1145 Porto Alegre",
    identity:
      "Japonês de bairro com reputação de 'melhor sushi de POA' em avaliações recentes. Peças grandes, salmão generoso, drinks e atendimento. Aberto todas as noites até 2h. Já vende bem no iFood — a marca existe na prática, só não é dona do canal próprio.",
    digitalGap:
      "Cardápio e pedido passam por ola.click (terceiro) e iFood. Sem domínio próprio. A casa entrega a conversão para plataformas que cobram comissão.",
    conversionWhy:
      "Restaurante noturno com ticket médio alto e demanda de delivery. Um site com cardápio, pedido via WhatsApp/retirada e galeria reduz dependência de marketplace e recupera margem.",
    approach:
      "Não ataque o iFood. Ofereça um canal próprio para cliente recorrente do bairro: 'peça direto e pague menos taxa'. Mostre o ola.click como prova de que eles já sentiram a necessidade.",
    pitch:
      "O Niramaki já tem fila de elogio e pedido no iFood. O site que eu faria é o atalho para quem já conhece a casa: cardápio, retirada e WhatsApp, sem a taxa da plataforma. O iFood continua para quem descobre; o site é para quem volta.",
    hours: "Todos os dias 18h–2h",
    sources: [
      {
        label: "Cardápio em terceiro",
        url: "https://niramaki.ola.click/",
      },
      {
        label: "Avaliações locais",
        url: "https://www.locaisdobrasil.com.br/encontre/restaurante-japones/porto-alegre-rs/niramaki-sushi/67a0e2544c0fe6115e4355f1",
      },
    ],
  },
  {
    id: "mania-do-gaucho",
    name: "Mania do Gaúcho II",
    category: "comercio",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 88,
    address: "Rua Felizardo, 465 — Jardim Botânico",
    mapsQuery: "Mania do Gaúcho II Rua Felizardo 465 Porto Alegre",
    founded: "1978 (48 anos)",
    identity:
      "Casa de carnes de bairro desde 1978. Cortes certificados, açougueiros que ensinam o ponto, vinhos, cervejas artesanais e acessórios de churrasco. Nome e discurso 100% gaúchos — identidade que um site novo não precisa inventar, só organizar.",
    digitalGap:
      "Facebook da loja, sem site e sem Instagram próprio rastreável. Horário completo no Google (inclusive domingo de manhã). A história de quase 50 anos vive só na vitrine.",
    conversionWhy:
      "Comércio de ticket alto (prime rib, T-bone, cordeiro) e encomenda para churrasco de fim de semana. Site com cortes, dicas de preparo e pedido por WhatsApp converte o vizinho que hoje só 'passa na frente'.",
    approach:
      "Fale da tradição de 1978 e do churrasco de domingo. O site é vitrine de cortes + encomenda, não e-commerce pesado.",
    pitch:
      "Quase 50 anos na Felizardo e a casa ainda depende de quem passa na porta. Um site com os cortes da semana, o que reservar para o domingo e WhatsApp de encomenda coloca a Mania do Gaúcho na busca de quem está montando o churrasco em casa.",
    hours:
      "Seg–sex 8h–13h e 15h–20h · sáb 8h–20h · dom 8h–13h",
    sources: [
      {
        label: "Listagem da Rua Felizardo",
        url: "https://www.locaisdobrasil.com.br/endereco/rua-felizardo/porto-alegre-rs",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com/casadecarnesmaniadogaucho2/",
      },
    ],
  },
  {
    id: "barbearia-jardim-botanico",
    name: "Barbearia Jardim Botânico",
    category: "beleza",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 86,
    address: "Rua Felizardo, 579, sala 02 — Jardim Botânico",
    mapsQuery: "Barbearia Jardim Botânico Rua Felizardo 579 Porto Alegre",
    phone: "(51) 98535-7339",
    whatsapp: "5551985357339",
    googleReviews: 143,
    identity:
      "Barbearia de bairro com clientela de anos — há quem corte lá há 7 anos e quem venha de fora de POA quando visita a cidade. Atendimento personalizado, corte com tesoura, reforma recente do espaço. O próprio nome já é o bairro: identidade geográfica imediata.",
    digitalGap:
      "Agenda só por WhatsApp. Sem site. Avaliações fortes espalhadas em agregadores. Quem pesquisa 'barbearia Jardim Botânico' deveria cair numa página da casa, não numa lista genérica.",
    conversionWhy:
      "Serviço recorrente (corte a cada 3–4 semanas) e ticket previsível. Site com equipe, preços, fotos da reforma e botão de agendamento no WhatsApp reduz no-show e captura busca de nome.",
    approach:
      "Mostre a busca do próprio nome. Eles já 'são' o bairro no Google — falta a página oficial para não perder o clique para o concorrente da mesma rua.",
    pitch:
      "Quando alguém pesquisa o nome de vocês, o Google mostra avaliação de terceiro. Uma página com horários, os barbeiros e o WhatsApp de agenda segura esse cliente antes dele cair no O Barbeiro ou no Cioccari, na mesma Felizardo.",
    hours: "Seg–sex 8h30–19h · sáb 8h30–18h",
    sources: [
      {
        label: "Avaliações agregadas",
        url: "https://avaliacoesbrasil.com/barbearia/porto-alegre/barbearia-jardim-botanico/",
      },
      {
        label: "Rua Felizardo",
        url: "https://www.locaisdobrasil.com.br/endereco/rua-felizardo/porto-alegre-rs",
      },
    ],
  },
  {
    id: "o-barbeiro",
    name: "O Barbeiro",
    category: "beleza",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 84,
    address: "Rua Felizardo, 336 — Jardim Botânico",
    mapsQuery: "O Barbeiro Rua Felizardo 336 Porto Alegre",
    founded: "legado familiar de 50+ anos",
    googleRating: 5,
    googleReviews: 19,
    identity:
      "Barbearia de família com mais de 50 anos de ofício. Discurso próprio: 'barba e cabelo pensados e arquitetados'. Clientes citam o profissional Daniel pelo nome. Preço justo, ambiente de bairro. Não é franquia — o obarbeiro.com.br que aparece na busca é de Florianópolis, outra casa.",
    digitalGap:
      "Sem site e sem Instagram local rastreável. A busca pelo nome disputa com uma barbearia de SC que tem domínio. Risco real de o cliente errar o negócio.",
    conversionWhy:
      "Nome genérico + legado longo = urgência de domínio próprio (ex.: obarbeirojb.com.br). Site curto com história da família, horários e o barbeiro de referência protege a marca local.",
    approach:
      "Mostre o site de Florianópolis no celular. A conversa escreve sozinha: 'hoje quem pesquisa O Barbeiro não acha vocês'.",
    pitch:
      "Tem uma barbearia em Florianópolis dona do site O Barbeiro. Quem pesquisa o nome de vocês no Google pode ir para o lugar errado. Uma página da casa da Felizardo — a história dos 50 anos, o Daniel, o horário — resolve isso de uma vez.",
    hours: "Seg–sex 8h–20h · sáb 9h–18h",
    sources: [
      {
        label: "Rua Felizardo",
        url: "https://www.locaisdobrasil.com.br/endereco/rua-felizardo/porto-alegre-rs",
      },
    ],
    notes:
      "Não confundir com Barbearia O Barbeiro de Florianópolis (obarbeiro.com.br).",
  },
  {
    id: "roda-de-carreta",
    name: "Churrascaria Roda de Carreta",
    category: "gastronomia",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "alta",
    score: 83,
    address: "Avenida Ipiranga, 5300 — Jardim Botânico (35 CTG)",
    mapsQuery: "Churrascaria Roda de Carreta Avenida Ipiranga 5300 Porto Alegre",
    phone: "(51) 3336-0817",
    whatsapp: "555133360817",
    googleRating: 4.1,
    googleReviews: 3325,
    founded: "1986 (40 anos)",
    identity:
      "Churrascaria ligada ao 35 CTG, fundada em 1986. Salão de madeira para ~500 pessoas, garçons à paisana gaúcha, 16 cortes. Nome e cenário de tropeirismo — identidade cultural pronta. Volume de avaliações (3.325) prova operação contínua e fluxo real.",
    digitalGap:
      "O domínio churrascariarodadecarreta.com.br existe e está morto (página vazia). Quem clica no link antigo do Google cai no vazio. A casa perdeu o site que já teve — isso é gancho comercial raro.",
    conversionWhy:
      "Alto volume, eventos e turismo de tradição. Recolocar o domínio no ar com cardápio, reserva e a história do 35 CTG recupera autoridade e ajuda a responder avaliações mistas (4.1) com uma vitrine controlada.",
    approach:
      "Abra o domínio morto na frente deles. 'O site de vocês ainda aparece no Google, mas não abre.' Ofereça religar o domínio, não 'criar presença do zero'.",
    pitch:
      "O endereço churrascariarodadecarreta.com.br ainda aparece em guias, mas a página está vazia. Com 40 anos e mais de três mil avaliações, a casa merece o domínio de volta: cardápio, reserva e a história do 35 CTG. Posso religar isso sem trocar o nome que o cliente já conhece.",
    hours: "Seg–sáb 11h30–14h e 19h30–22h · dom 11h30–15h",
    sources: [
      {
        label: "Guia local",
        url: "https://guiaportoalegrers.com.br/jardim-botanico/churrascaria-roda-de-carreta",
      },
      {
        label: "Domínio (morto)",
        url: "https://www.churrascariarodadecarreta.com.br/",
      },
    ],
    notes:
      "Nota 4.1 é mista. O site também serve para gerir reputação. Confirmar no local se a operação do salão segue no 35 CTG antes da visita comercial.",
  },
  {
    id: "estetica-do-jardim",
    name: "Estética do Jardim",
    category: "beleza",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "media",
    score: 78,
    address: "Rua La Plata, 699 — Jardim Botânico",
    mapsQuery: "Estética do Jardim Rua La Plata 699 Porto Alegre",
    googleReviews: 94,
    identity:
      "Clínica/salão de estética de bairro com dezenas de avaliações e comentários do tipo 'melhor estética do Jardim Botânico'. Nome próprio, geolocalizado, fácil de lembrar. Também aparece associada à Rua Buenos Aires, 205 — mesma marca, ponto de rua.",
    digitalGap:
      "Sem site oficial. Presença em Facebook/diretórios. Agendamento provavelmente só por telefone/WhatsApp. Busca pelo nome compete com o tema 'jardim encantado' de festas infantis — ruído de SEO.",
    conversionWhy:
      "Estética tem ticket médio-alto e jornada de pesquisa (procedimentos, antes/depois, profissionais). Site com serviços, equipe e agendamento converte melhor que feed.",
    approach:
      "Leve um mockup com os procedimentos e um botão de avaliação. Fale da confusão de busca com o tema de festa: o site posiciona a clínica de verdade.",
    pitch:
      "Quem pesquisa Estética do Jardim hoje mistura vocês com festa infantil. Uma página com os tratamentos, a equipe e o WhatsApp de agenda deixa claro quem é a clínica do bairro — e para de perder o clique.",
    sources: [
      {
        label: "Avaliações",
        url: "https://avaliacoesbrasil.com/salao-de-beleza/porto-alegre/estetica-do-jardim/",
      },
    ],
    notes:
      "Confirmar o endereço exato na visita (La Plata 699 e/ou Buenos Aires 205).",
  },
  {
    id: "mecanica-guime",
    name: "Oficina Mecânica Guime",
    category: "automotivo",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "media",
    score: 76,
    address: "Rua Oito de Julho, 155 — Jardim Botânico",
    mapsQuery: "Oficina Mecânica Guime Rua Oito de Julho 155 Porto Alegre",
    phone: "(51) 3336-9688",
    whatsapp: "555133369688",
    founded: "25/01/1973 (53 anos)",
    identity:
      "Oficina de rua aberta em 1973. Meio século no mesmo ofício: mecânica, elétrica, lanternagem, alinhamento e peças. Sobrenome Guime é marca familiar. Cliente de oficina antiga compra confiança, não anúncio.",
    digitalGap:
      "Só cadastro em diretório automotivo. Sem site. A história de 53 anos não está em lugar nenhum que o Google considere oficial.",
    conversionWhy:
      "Serviço de alto ticket e decisão por confiança. Uma página com tempo de casa, serviços, fotos da oficina e WhatsApp para orçamento diferencia da oficina genérica da Ipiranga.",
    approach:
      "Não fale em 'marketing digital'. Fale em 'a oficina mais antiga do bairro sem uma página para o cliente mandar o orçamento'.",
    pitch:
      "A Guime tem 53 anos na Oito de Julho e ainda não tem uma página sua. Um site curto — o que vocês fazem, o telefone de orçamento e a história da casa — é o que o motorista pesquisa antes de deixar o carro.",
    sources: [
      {
        label: "Cadastro da oficina",
        url: "https://oficinasautomotivas.com/e/oficina-mecanica-guime-ltda-bmvkkl/",
      },
    ],
  },
  {
    id: "art-em-volantes",
    name: "Art em Volantes",
    category: "automotivo",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "media",
    score: 75,
    address: "Rua Barão do Amazonas, 1475 — Jardim Botânico",
    mapsQuery: "Art em Volantes Rua Barão do Amazonas 1475 Porto Alegre",
    phone: "(51) 3377-3090",
    whatsapp: "555133773090",
    identity:
      "Nicho raro: customização e reforma de volantes. Nome próprio, ofício artesanal, ponto na Barão do Amazonas. Cliente chega com um problema específico — e hoje só acha a casa se já souber o nome.",
    digitalGap:
      "Telefones em lista comercial, sem site. Trabalho visual (antes/depois de volante) é conteúdo nativo para uma galeria web e ainda não está organizado.",
    conversionWhy:
      "Nicho + ticket alto + prova visual. Site com portfólio, materiais e pedido de orçamento captura busca estadual ('reforma de volante Porto Alegre'), não só a do bairro.",
    approach:
      "Peça para ver um volante pronto. Fotografe e mostre no mockup no mesmo dia. O produto vende o site.",
    pitch:
      "Reforma de volante é busca de quem já sabe o que quer — e hoje essa busca não tem uma página de vocês. Um portfólio com os trabalhos e o WhatsApp de orçamento atende Porto Alegre inteira, não só quem passa na Barão.",
    sources: [
      {
        label: "Lista comercial",
        url: "https://www.empresafone.com.br/empresa/art-em-volantes-porto-alegre-rs-jardim-botanico-1552001",
      },
    ],
  },
  {
    id: "cappellari-radin",
    name: "Marmoraria Cappellari & Radin",
    category: "casa-obra",
    neighborhood: "jardim-botanico",
    city: "porto-alegre",
    priority: "media",
    score: 73,
    address: "Avenida Ipiranga, 8621 — Jardim Botânico",
    mapsQuery:
      "Marmoraria Cappellari e Radin Avenida Ipiranga 8621 Porto Alegre",
    founded: "10+ anos",
    identity:
      "Marmoraria de avenida, mais de uma década em mármores e granitos nacionais e importados (tear, basalto, ardósia, pedras decorativas). Sobrenomes de família no nome — identidade B2B e residencial. Ponto de fácil acesso na Ipiranga.",
    digitalGap:
      "Única vitrine digital é ficha em diretório estrangeiro (all.biz). Sem site, sem catálogo, sem formulário de orçamento.",
    conversionWhy:
      "Obra e reforma têm ticket alto e ciclo de orçamento. Arquitetos e síndicos pesquisam fornecedor com portfólio. Um site com pedras, obras feitas e pedido de visita à pedreira/loja fecha lead qualificado.",
    approach:
      "Fale com o sócio no horário comercial. Leve referência de sites de marmoraria com catálogo por tipo de pedra. Eles entendem 'amostra' — o site é o mostruário 24h.",
    pitch:
      "Quem pesquisa mármore em Porto Alegre não encontra o catálogo da Cappellari. Um site com as pedras, fotos de bancada e o pedido de orçamento trabalha enquanto a loja está fechada — e chega em arquiteto que nunca vai passar de carro na Ipiranga 8621.",
    sources: [
      {
        label: "Diretório comercial",
        url: "https://20027-br.all.biz/",
      },
    ],
  },
  {
    id: "nosso-bar",
    name: "Nosso Bar",
    category: "gastronomia",
    neighborhood: "partenon",
    city: "porto-alegre",
    priority: "alta",
    score: 94,
    address: "Avenida Bento Gonçalves, 1979 — Partenon",
    mapsQuery: "Nosso Bar Avenida Bento Gonçalves 1979 Porto Alegre",
    identity:
      "Boteco de avenida no Partenon, participante do Comida di Buteco 2026 (pastel de vento). Casa noturna de verdade: segunda a sábado até 4h, domingo até 2h. Já esteve no circuito em 2022. Identidade de boteco raiz, fora da Cidade Baixa.",
    digitalGap:
      "Sem site oficial. A temporada do concurso manda o clique para a página do Comida di Buteco e para guias. A casa não captura reserva, cardápio nem a história do petisco.",
    conversionWhy:
      "Concurso nacional + horário de madrugada + corredor da Bento Gonçalves. Site com o petisco da edição, cardápio e WhatsApp converte o fluxo do concurso e o cliente que sai da PUCRS/Ipiranga.",
    approach:
      "Chegue pelo Comida di Buteco 2026. Mostre que o pastel de vento está em site de terceiro e que o Nosso Bar não fica com o clique.",
    pitch:
      "O Nosso Bar está no Comida di Buteco 2026 e quem pesquisa o pastel cai no site do concurso. Um site curto — o petisco, o cardápio da madrugada e o WhatsApp — deixa o clique na casa, não no guia.",
    hours: "Seg–sáb até 4h · dom até 2h",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/butecos/porto-alegre/page/2/",
      },
      {
        label: "Sabores do Sul 2026",
        url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
      },
    ],
  },
  {
    id: "el-farol",
    name: "El Farol",
    category: "gastronomia",
    neighborhood: "rio-branco",
    city: "porto-alegre",
    priority: "alta",
    score: 93,
    address: "Rua Mariante, 855 — Rio Branco",
    mapsQuery: "El Farol Rua Mariante 855 Porto Alegre",
    founded: "2009 (15+ anos)",
    identity:
      "Restaurante argentino na Mariante desde 2009, do uruguaio-argentino Alfredo Navarro. Empanadas, milanesas, entrecot, fernet e milonga de tango às quintas. Ponto da comunidade platina em Porto Alegre. Participante do Comida di Buteco 2026 (iscas de entrecôte com gorgonzola).",
    digitalGap:
      "Sem site oficial no ar. A história de 15 anos, o tango e o petisco do concurso vivem em matéria de jornal e Instagram de terceiro.",
    conversionWhy:
      "Identidade cultural rara + 15 anos + concurso 2026. Site com cardápio argentino, agenda da milonga e reserva fecha o cliente que hoje só acha a casa no Google Maps.",
    approach:
      "Fale da milonga de quinta e do concurso. O site é a casa argentina oficial de Porto Alegre — não mais um boteco.",
    pitch:
      "Quinze anos de El Farol e o tango de quinta ainda não têm uma página sua. O Comida di Buteco 2026 está mandando gente para guia. Um site com o cardápio, a milonga e a reserva coloca a casa no controle do clique.",
    hours: "Ter–dom 18h30–0h",
    sources: [
      {
        label: "Comida di Buteco 2026",
        url: "https://comidadibuteco.com.br/butecos/porto-alegre/",
      },
      {
        label: "Jornal do Comércio",
        url: "https://www.jornaldocomercio.com/ge2/noticias/2024/07/1161572-ha-15-anos-restaurante-e-referencia-em-gastronomia-argentina-em-porto-alegre.html",
      },
    ],
  },
  {
    id: "terra-do-churrasco",
    name: "Terra do Churrasco",
    category: "gastronomia",
    neighborhood: "jardim-do-salso",
    city: "porto-alegre",
    priority: "alta",
    score: 92,
    address: "Rua Professor Cristiano Fischer, 1440 — Jardim do Salso",
    mapsQuery: "Terra do Churrasco Cristiano Fischer 1440 Porto Alegre",
    phone: "(51) 99630-1149",
    whatsapp: "5551996301149",
    googleReviews: 942,
    founded: "2024",
    identity:
      "Casa de carnes no lugar do antigo Pátio Bar, na Cristiano Fischer. Capacidade de centenas de lugares, espaço kids e reserva para grupo grande. Discurso gaúcho explícito — 'traga teu cusco e teu chimarrão'. 942 avaliações no Google em pouco tempo de casa. Operação ativa, horário noturno de semana e almoço de fim de semana.",
    digitalGap:
      "Sem site oficial. WhatsApp e fichas em guia. Uma operação desse tamanho — eventos, kids, cardápio de cortes — não tem um endereço próprio para reserva.",
    conversionWhy:
      "Ticket alto, eventos e família. Site com cortes, espaço kids, reserva de grupo e WhatsApp converte o vizinho do Salso e quem vem da Ipiranga sem passar no Instagram.",
    approach:
      "Fale de reserva para 50 pessoas e do espaço kids. O site é a recepção de evento, não um feed.",
    pitch:
      "A Terra do Churrasco já tem quase mil avaliações e ainda não tem uma página para reservar mesa de aniversário. Um site com os cortes, o espaço kids e o WhatsApp de reserva segura o grupo que hoje só liga ou desiste.",
    hours: "Ter–sex 18h30–23h · sáb 11h30–23h · dom 11h30–22h · seg fechado",
    sources: [
      {
        label: "Guia local",
        url: "https://guiaportoalegrers.com.br/jardim-do-salso/terra-do-churrasco",
      },
      {
        label: "Jornal do Comércio",
        url: "https://www.jornaldocomercio.com/ge2/noticias/2024/08/1165369-com-capacidade-para-500-pessoas-nova-churrascaria-de-porto-alegre-aposta-em-variedade-de-cortes-e-espaco-kids.html",
      },
    ],
  },
  {
    id: "pito-bar",
    name: "Pito Bar",
    category: "gastronomia",
    neighborhood: "rio-branco",
    city: "porto-alegre",
    priority: "alta",
    score: 91,
    address: "Rua Mariante, 587 — Rio Branco",
    mapsQuery: "Pito Bar Rua Mariante 587 Porto Alegre",
    identity:
      "Boteco da Mariante no circuito Comida di Buteco 2026 (tábua campeira). Casa de rua no Rio Branco, bairro de alta renda colado no Petrópolis. Funciona todos os dias. Identidade de boteco de esquina com petisco de concurso — o tipo de casa que o Google já entrega e o site ainda não existe.",
    digitalGap:
      "Sem domínio próprio. A tábua campeira e o horário vivem na ficha do concurso.",
    conversionWhy:
      "Mariante é corredor de bar com público que pesquisa antes de sair. Site com petisco, horário e WhatsApp captura o clique do concurso e o happy hour do bairro.",
    approach:
      "Mostre a página do Comida di Buteco no celular. O gancho é o mesmo do Vitória: o concurso fala pela casa.",
    pitch:
      "A tábua campeira do Pito está no Comida di Buteco 2026 e o clique não cai na casa. Um site com o petisco, o horário da Mariante e o WhatsApp resolve isso nesta semana.",
    hours: "Todos os dias, horários variados — confirmar no local",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/butecos/porto-alegre/page/2/",
      },
    ],
    notes:
      "Confirmar no balcão se a casa segue aberta após a temporada de abril–maio de 2026.",
  },
  {
    id: "mato-bar",
    name: "Mato Bar",
    category: "gastronomia",
    neighborhood: "rio-branco",
    city: "porto-alegre",
    priority: "alta",
    score: 90,
    address: "Rua Francisco Ferrer, 192 — Rio Branco",
    mapsQuery: "Mato Bar Rua Francisco Ferrer 192 Porto Alegre",
    instagram: "_matobar",
    founded: "2024",
    identity:
      "Bar da cervejaria Primor da Terra no Rio Branco: cardápio 100% vegetal, chope autoral e drinks. Sócios com prêmio em Blumenau (2022). Nicho claro — vegano + cerveja experimental — e participante do Comida di Buteco 2026. Casa aberta de terça/quarta a sábado à noite.",
    digitalGap:
      "Instagram @_matobar, sem site. A cervejaria e o bar compartilham a marca e não têm um hub com cardápio, torneiras e o petisco do concurso.",
    conversionWhy:
      "Nicho + concurso + público que pesquisa 'bar vegano Porto Alegre'. Site com cardápio, cervejas da casa e o petisco do circuito converte busca estadual, não só a da Ferrer.",
    approach:
      "Não fale em 'presença digital'. Fale em cardápio de plantas e lista de torneiras que o Instagram enterra.",
    pitch:
      "Quem busca bar vegano com chope próprio em Porto Alegre não acha o cardápio do Mato. Um site com as torneiras, os lanches e o petisco do Comida di Buteco tira a casa do Instagram e coloca na busca.",
    hours: "Qua/qui–sáb 18h–0h (confirmar o dia de abertura da semana)",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/butecos/porto-alegre/page/2/",
      },
      {
        label: "Jornal do Comércio",
        url: "https://www.jornaldocomercio.com/ge2/noticias/2024/03/1145923-com-cardapio-baseado-em-plantas-cervejaria-abre-bar-no-bairro-rio-branco.html",
      },
    ],
  },
  {
    id: "jacinto-pane",
    name: "Jacinto Pane & Cucina",
    category: "gastronomia",
    neighborhood: "santana",
    city: "porto-alegre",
    priority: "alta",
    score: 89,
    address: "Rua Jacinto Gomes, 209 — Santana",
    mapsQuery: "Jacinto Pane Cucina Rua Jacinto Gomes 209 Porto Alegre",
    googleRating: 4.9,
    identity:
      "Padaria de fermentação natural em Santana, colada em Santa Cecília e a poucos minutos do Jardim Botânico. Focaccia citada como a melhor da cidade. Avaliação 4.9 no Google. Ofício claro, nome de rua, produto de busca recorrente. Casa pequena com identidade de bairro e qualidade de destinação.",
    digitalGap:
      "Cardápio e pedido passam por jacinto.goomer.app (terceiro). Sem domínio próprio. Quem pesquisa 'focaccia Porto Alegre' não cai numa página da casa.",
    conversionWhy:
      "Produto de culto + nota altíssima + pedido já digitalizado em plataforma de comissão. Site próprio com o forno do dia e encomenda de focaccia recupera margem e a busca de nome.",
    approach:
      "Mostre o goomer.app. Eles já sentiram a necessidade de cardápio digital — falta o endereço ser deles.",
    pitch:
      "A focaccia do Jacinto já é destino e o pedido ainda passa por um app de terceiro. Um site com o pão do dia, a encomenda e o endereço da Jacinto Gomes tira a casa do goomer e coloca no Google.",
    hours: "Ter–sex 11h30–19h · sáb e dom fechado (confirmar)",
    sources: [
      {
        label: "Restaurant Guru",
        url: "https://restaurantguru.com.br/Jacinto-PaneandCucina-Porto-Alegre",
      },
    ],
  },
  {
    id: "piko-bar",
    name: "Piko Bar e Cozinha",
    category: "gastronomia",
    neighborhood: "partenon",
    city: "porto-alegre",
    priority: "alta",
    score: 88,
    address: "Rua Pedro Boticário, 560 — Partenon / Glória",
    mapsQuery: "Piko Bar e Cozinha Rua Pedro Boticário 560 Porto Alegre",
    identity:
      "Bar e cozinha na Pedro Boticário, listado no Comida di Buteco 2026 pelo Partenon (a rua toca a Glória). Petisco Popeyeroll. Casa de noite, terça a sábado. Identidade de cozinha de boteco com prato autoral — não é bar genérico de avenida.",
    digitalGap:
      "Sem site. O Popeyeroll e o horário estão só no circuito do concurso e em Instagram.",
    conversionWhy:
      "Petisco de concurso + casa de bairro fora do circuito óbvio. Site com o prato, o cardápio da noite e o mapa da Pedro Boticário converte quem vem pelo Comida di Buteco e se perde entre Partenon e Glória.",
    approach:
      "Leve o nome do petisco. O site é a página do Popeyeroll com endereço certo — o concurso às vezes lista Partenon, guias listam Glória.",
    pitch:
      "O Piko está no Comida di Buteco 2026 e o Popeyeroll não tem uma página da casa. Um site com o petisco, o horário e o ponto na Pedro Boticário evita que o cliente do concurso vá para o bar errado.",
    hours: "Ter–sáb 18h–23h30",
    sources: [
      {
        label: "Comida di Buteco",
        url: "https://comidadibuteco.com.br/butecos/porto-alegre/page/2/",
      },
    ],
    notes:
      "O concurso lista Partenon; um guia local cita Glória. Confirmar o ponto antes da visita.",
  },
  ...metroLeads,
];

export const excluded: ExcludedBusiness[] = [
  {
    name: "Boteco Pedrini (incl. Gravataí)",
    reason: "Já tem site",
    detail: "botecopedrini.com.br — rede com site institucional e várias casas.",
  },
  {
    name: "Sr. Luiz (Canoas)",
    reason: "Fora do perfil / verificar",
    detail: "Priorizamos casas com identidade e sinal claro de operação no circuito 2026.",
  },

  {
    name: "Shark Sushi",
    reason: "Já tem site",
    detail: "sharksushi.com.br ativo, com cardápio e duas casas.",
  },
  {
    name: "Fazenda na Tábua / Na Tábua Burger",
    reason: "Já tem site",
    detail: "fazendanatabua.com.br — Rua Felizardo, 268.",
  },
  {
    name: "SOS Bikini",
    reason: "Já tem site",
    detail: "sosbikini.com.br — Barão do Amazonas, 1090.",
  },
  {
    name: "Barão Borracharia",
    reason: "Já tem site",
    detail: "baraoborracharia.com.br — operação digital completa.",
  },
  {
    name: "Five Points Burguer",
    reason: "Fora do recorte / já tem site",
    detail: "Site próprio; unidade atual no Viva Open Mall (Nilo Peçanha).",
  },
  {
    name: "Padaria Petrópolis",
    reason: "Inativa",
    detail:
      "Incêndio em 5 de maio de 2026 destruiu o ponto na Barão do Amazonas, 746.",
  },
  {
    name: "Zaffari, Panvel, Bourbon Ipiranga",
    reason: "Rede",
    detail: "Identidade de grupo; não convertem para site autoral.",
  },
  {
    name: "Elleve Clinic",
    reason: "Já posicionada",
    detail: "Clínica de shopping com presença digital própria.",
  },
  {
    name: "Al Nur",
    reason: "Já tem site",
    detail: "alnur.com.br — Protásio Alves, Santa Cecília.",
  },
  {
    name: "Parrilla Del Sur",
    reason: "Já tem site",
    detail: "parrilladelsur.com.br — Nilópolis, Petrópolis.",
  },
  {
    name: "La Mafia Barbearia",
    reason: "Já tem site",
    detail: "lamafiabarbearia.com.br — rede com unidade no Petrópolis.",
  },
  {
    name: "Tio Max Barbearia",
    reason: "Já tem site",
    detail: "tiomaxbarbearia.com.br — Protásio Alves, Petrópolis.",
  },
  {
    name: "Thompson & Hill",
    reason: "Já tem site",
    detail: "thompsonandhill.com.br — Ramiro Barcelos, Santana.",
  },
];

export const categoryLabel: Record<Lead["category"], string> = {
  gastronomia: "Gastronomia",
  beleza: "Beleza e estética",
  automotivo: "Automotivo",
  comercio: "Comércio de bairro",
  "casa-obra": "Casa e obra",
};

export const cityLabel: Record<City, string> = {
  "porto-alegre": "Porto Alegre",
  canoas: "Canoas",
  gravatai: "Gravataí",
  "novo-hamburgo": "Novo Hamburgo",
  "sao-leopoldo": "São Leopoldo",
};

export const cityOrder: City[] = [
  "porto-alegre",
  "canoas",
  "gravatai",
  "novo-hamburgo",
  "sao-leopoldo",
];

export const neighborhoodLabel: Record<Neighborhood, string> = {
  "jardim-botanico": "Jardim Botânico",
  partenon: "Partenon",
  "jardim-do-salso": "Jardim do Salso",
  "rio-branco": "Rio Branco",
  santana: "Santana",
  azenha: "Azenha",
  "cidade-baixa": "Cidade Baixa",
  floresta: "Floresta",
  cristal: "Cristal",
  ipanema: "Ipanema",
  "centro-historico": "Centro Histórico",
  "jardim-itu": "Jardim Itu",
  tristeza: "Tristeza",
  "boa-vista": "Boa Vista",
  "passo-dareia": "Passo D'Areia",
  "rubem-berta": "Rubem Berta",
  restinga: "Restinga",
  "vila-jardim": "Vila Jardim",
  "sao-joao": "São João",
  "vila-ipiranga": "Vila Ipiranga",
  "vila-joao-pessoa": "Vila João Pessoa",
  "santa-rosa-de-lima": "Santa Rosa de Lima",
  "sao-luis-canoas": "São Luís",
  "centro-canoas": "Centro (Canoas)",
  "marechal-rondon": "Marechal Rondon",
  "centro-gravatai": "Centro (Gravataí)",
  "barro-vermelho": "Barro Vermelho",
  rincao: "Rincão",
  "centro-nh": "Centro (NH)",
  "centro-sl": "Centro (São Leopoldo)",
  "sao-joao-sl": "São João / Unisinos",
};

export const neighborhoodOrder: Neighborhood[] = [
  "jardim-botanico",
  "partenon",
  "jardim-do-salso",
  "rio-branco",
  "santana",
  "azenha",
  "cidade-baixa",
  "floresta",
  "cristal",
  "ipanema",
  "centro-historico",
  "jardim-itu",
  "tristeza",
  "boa-vista",
  "passo-dareia",
  "rubem-berta",
  "restinga",
  "vila-jardim",
  "sao-joao",
  "vila-ipiranga",
  "vila-joao-pessoa",
  "santa-rosa-de-lima",
  "sao-luis-canoas",
  "centro-canoas",
  "marechal-rondon",
  "centro-gravatai",
  "barro-vermelho",
  "rincao",
  "centro-nh",
  "centro-sl",
  "sao-joao-sl",
];

export const neighborhoodCity: Record<Neighborhood, City> = {
  "jardim-botanico": "porto-alegre",
  partenon: "porto-alegre",
  "jardim-do-salso": "porto-alegre",
  "rio-branco": "porto-alegre",
  santana: "porto-alegre",
  azenha: "porto-alegre",
  "cidade-baixa": "porto-alegre",
  floresta: "porto-alegre",
  cristal: "porto-alegre",
  ipanema: "porto-alegre",
  "centro-historico": "porto-alegre",
  "jardim-itu": "porto-alegre",
  tristeza: "porto-alegre",
  "boa-vista": "porto-alegre",
  "passo-dareia": "porto-alegre",
  "rubem-berta": "porto-alegre",
  restinga: "porto-alegre",
  "vila-jardim": "porto-alegre",
  "sao-joao": "porto-alegre",
  "vila-ipiranga": "porto-alegre",
  "vila-joao-pessoa": "porto-alegre",
  "santa-rosa-de-lima": "porto-alegre",
  "sao-luis-canoas": "canoas",
  "centro-canoas": "canoas",
  "marechal-rondon": "canoas",
  "centro-gravatai": "gravatai",
  "barro-vermelho": "gravatai",
  rincao: "novo-hamburgo",
  "centro-nh": "novo-hamburgo",
  "centro-sl": "sao-leopoldo",
  "sao-joao-sl": "sao-leopoldo",
};

export const methodology = {
  place: "Região Metropolitana de Porto Alegre — capital, Canoas, Gravataí, Novo Hamburgo e São Leopoldo",
  date: RESEARCH_DATE,
  criteria: [
    "Ponto em Porto Alegre ou na RMPA (Canoas, Gravataí, Novo Hamburgo, São Leopoldo).",
    "Sinal de operação recente: Comida di Buteco 2026, horário/avaliações atualizados em 2025–2026, Booksy ativo ou CNPJ em situação regular.",
    "Identidade própria — nome, ofício, prêmio, tempo de casa ou personagem. Sem rede e sem negócio genérico.",
    "Sem site oficial no ar. Instagram, iFood, Goomer, Booksy ou domínio morto não contam como site.",
    "Alta conversão: cardápio, reserva, concurso, encomenda, agendamento ou ticket alto. Sem negócio repetido.",
    "Excluídos: casas com site (Pedrini, Shark, Al Nur etc.), redes e pontos inativos.",
  ],
  streets:
    "Corredores: Felizardo/Barão (Jardim Botânico), Olavo Bilac e João Alfredo (CB), Wenceslau Escobar (Cristal), Guaíba (Ipanema), Victor Barreto e Farroupilha (Canoas), Dorival Cândido (Gravataí), China e 24 de Maio (NH), Roosevelt e Unisinos (São Leopoldo).",
};
