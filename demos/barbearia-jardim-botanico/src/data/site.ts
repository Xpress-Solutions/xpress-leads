import brand from "../../brand.json";

export const BRAND = brand;

export const SITE = {
  name: brand.name,
  leadId: brand.leadId,
  line: "Corte com tesoura na Felizardo — cliente de anos, não de lista.",
  identity:
    "Barbearia de bairro com clientela de anos — há quem corte lá há 7 anos e quem venha de fora de POA quando visita a cidade. Atendimento personalizado, corte com tesoura, reforma recente do espaço. O próprio nome já é o bairro: identidade geográfica imediata.",
  address: "Rua Felizardo, 579, sala 02 — Jardim Botânico",
  street: "Rua Felizardo, 579, sala 02",
  neighborhood: "Jardim Botânico",
  city: "Porto Alegre",
  state: "RS",
  cep: "90690-200",
  hours: "Seg–sex 8h30–19h · sáb 8h30–18h",
  hoursNote: "Domingo fechado. Horário conforme listagens públicas da casa.",
  phoneDisplay: "(51) 98535-7339",
  phoneTel: "+5551985357339",
  whatsapp:
    "https://wa.me/5551985357339?text=" +
    encodeURIComponent("Olá! Vim pelo site e quero marcar horário na Barbearia Jardim Botânico."),
  maps: "https://www.google.com/maps/search/?api=1&query=Barbearia+Jardim+Bot%C3%A2nico+Rua+Felizardo+579+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Barbearia%20Jardim%20Bot%C3%A2nico%2C%20Rua%20Felizardo%20579%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  reviewsCount: 143,
  digitalGap:
    "Agenda só por WhatsApp. Sem site. Avaliações fortes espalhadas em agregadores. Quem pesquisa 'barbearia Jardim Botânico' deveria cair numa página da casa, não numa lista genérica.",
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#oficio", label: "Ofício" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Onde" },
] as const;

export const SERVICES = [
  {
    title: "Corte com tesoura",
    text: "O ofício que a casa declara: corte pensado, não máquina no automático. Tempo de cadeira, não fila de shopping.",
  },
  {
    title: "Atendimento personalizado",
    text: "A bio pública da Felizardo 579 é essa frase. Hora marcada no WhatsApp — o barbeiro sabe quem entra.",
  },
  {
    title: "Cliente de anos",
    text: "Há quem corte aqui há 7 anos. Há quem venha de fora de Porto Alegre quando visita a cidade. Recorrência, não moda.",
  },
] as const;

export const HOURS_ROWS = [
  { day: "Segunda a sexta", time: "8h30 – 19h" },
  { day: "Sábado", time: "8h30 – 18h" },
  { day: "Domingo", time: "Fechado" },
] as const;

export const REVIEWS = [
  {
    text: "Atmosfera acolhedora, atendimento que trata pelo nome e serviço que faz voltar. É o que se lê nas avaliações da casa.",
    source: "Síntese das listagens públicas",
  },
  {
    text: "Corte com tesoura, espaço reformado, horário de bairro — abre 8h30. Quem pesquisa o nome não deveria cair numa lista da Felizardo.",
    source: "Identidade do lead + horários da casa",
  },
  {
    text: "Clientela de anos: tem quem corte há 7 anos e quem venha de fora de POA quando visita. Barbearia do Jardim Botânico, não franquia.",
    source: "Pesquisa pública do lead",
  },
] as const;

export const GALLERY = [
  {
    src: "/fotos/sala-reformada.png",
    alt: "Sala reformada: parede verde-floresta, cadeira de couro e janela para o dossel",
  },
  {
    src: "/fotos/tesoura.png",
    alt: "Tesoura e pente na bancada de madeira da casa",
  },
  {
    src: "/fotos/jardim-dossel.jpg",
    alt: "Trilha e dossel do Jardim Botânico de Porto Alegre — o nome da casa",
  },
  {
    src: "/fotos/jardim-portico.jpg",
    alt: "Pórtico do Jardim Botânico de Porto Alegre, letreiro em verde-floresta",
  },
  {
    src: "/fotos/jardim-bambu.jpg",
    alt: "Bambus no Jardim Botânico de Porto Alegre",
  },
  {
    src: "/fotos/jardim-lago.jpg",
    alt: "Lago do Jardim Botânico de Porto Alegre",
  },
  {
    src: "/fotos/jardim-arvores.jpg",
    alt: "Calliandra no Jardim Botânico de Porto Alegre",
  },
] as const;
