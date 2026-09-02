export const SITE = {
  name: "Jacinto Pane & Cucina",
  shortName: "Jacinto",
  wordmark: "Jacinto",
  rest: "Pane & Cucina",
  neighborhood: "Santana — Porto Alegre",
  headline: "Jacinto",
  subhead: "Pane & Cucina",
  line: "A focaccia que já é destino em Santana.",
  description:
    "Padaria de fermentação natural na Rua Jacinto Gomes, 209. Focaccia citada como a melhor da cidade. Casa pequena, ofício de forno, 4,9 no Google.",
  phoneDisplay: "(51) 98484-8784",
  phoneTel: "+5551984848784",
  whatsapp:
    "https://wa.me/5551984848784?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site do Jacinto e queria encomendar focaccia / saber o pão do dia.",
    ),
  maps: "https://www.google.com/maps/search/?api=1&query=Jacinto+Pane+Cucina+Rua+Jacinto+Gomes+209+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Jacinto%20Gomes%20209%2C%20Santana%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Jacinto Gomes, 209",
    neighborhood: "Santana",
    city: "Porto Alegre",
    state: "RS",
    cep: "90040-270",
    full: "Rua Jacinto Gomes, 209 — Santana, Porto Alegre/RS",
  },
  coordinates: { lat: -30.0394197, lng: -51.2096745 },
  rating: "4,9",
  ratingNum: 4.9,
  priceRange: "R$ 20–40",
  hoursLine: "Ter–sáb 11h30–19h · dom e seg fechado",
  hoursNote:
    "Horário anunciado pela própria casa no cardápio digital. Algumas listagens ainda marcam só terça a sexta — confirme no WhatsApp.",
  hours: [
    { day: "Segunda", hours: "Fechado" },
    { day: "Terça", hours: "11h30 – 19h" },
    { day: "Quarta", hours: "11h30 – 19h" },
    { day: "Quinta", hours: "11h30 – 19h" },
    { day: "Sexta", hours: "11h30 – 19h" },
    { day: "Sábado", hours: "11h30 – 19h" },
    { day: "Domingo", hours: "Fechado" },
  ],
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#focaccia", label: "Focaccia" },
  { href: "#forno", label: "O forno" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Onde fica" },
] as const;

export const OVEN = [
  {
    title: "Focaccia",
    text: "A que o bairro já trata como destino. Alcaparras, azeite, o miolo alveolar — o pão que o Google e o balcão confirmam.",
  },
  {
    title: "Fermentação natural",
    text: "Pães de longa fermentação, feitos na Jacinto Gomes. Casa pequena, forno do dia, sem linha industrial.",
  },
  {
    title: "Cucina para levar",
    text: "Além do pão, a casa nasceu com uma linha de pratos congelados — pane e cucina no mesmo número.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Eduardo Siufi",
    source: "Google",
    text: "Jacinto Pane&Cucina está entre as melhores padarias de fermentação natural de Porto Alegre. A focaccia é a melhor, sem dúvidas, entre outros pães e produtos.",
  },
  {
    name: "leoksuarez",
    source: "Google",
    text: "Levei uma focaccia com alcaparras e um cachorrinho. Gostei bastante. A moça do balcão me atendeu super bem. Legal ter um lugar que trabalhe com fermentação natural aqui no bairro.",
  },
  {
    name: "Graziane Alberici",
    source: "Google",
    text: "Tudo de muita qualidade.",
  },
] as const;
