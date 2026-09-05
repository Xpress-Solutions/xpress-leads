export const business = {
  name: "Restaurante Weber's",
  shortName: "Weber's",
  tagline: "Eisbein e chucrute no fim de semana desde 1998.",
  slogan: "Comida caseira na semana. Mesa alemã no domingo.",
  description:
    "Buffet de comida caseira e típica alemã em Novo Hamburgo desde 1998. Eisbein e chucrute no fim de semana. Citado em guias locais como referência da cidade.",
  pitch:
    "O Weber's serve eisbein desde os anos 90 e ainda não tem um site que conte isso. Uma página com o buffet, o fim de semana alemão e o mapa na 24 de Maio resolve.",
  approach:
    "Respeite a tradição. O site é orgulho da casa alemã, não redesign de startup.",
  founded: "desde 1998",
  foundedDate: "10 de julho de 1998",
  address: {
    street: "Rua Vinte e Quatro de Maio, 222",
    neighborhood: "Rincão / Vila Rosa",
    city: "Novo Hamburgo",
    state: "RS",
    zip: "93310-370",
    full: "Rua Vinte e Quatro de Maio, 222 — Rincão / Vila Rosa, Novo Hamburgo",
  },
  phone: "(51) 3593-2822",
  phoneLink: "tel:+555135932822",
  email: "restaurantewebers@gmail.com",
  googleRating: 4.6,
  googleReviews: 1127,
  priceRange: "R$ 40–80 por pessoa",
  mapsQuery: "Restaurante Weber's Vinte e Quatro de Maio 222 Novo Hamburgo",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Restaurante+Weber%27s+Vinte+e+Quatro+de+Maio+222+Novo+Hamburgo",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Restaurante+Weber%27s+Novo+Hamburgo",
  instagram: "https://www.instagram.com/restaurantewebers/",
  facebook: "https://www.facebook.com/restaurantewebersnh",
  coordinates: { lat: -29.67795, lng: -51.13863 },
} as const;

export const hours = [
  { day: "Segunda a sexta", hours: "11h30 – 13h45" },
  { day: "Sábado e domingo", hours: "11h30 – 14h15" },
] as const;

export const weekdayBuffet = {
  title: "Na semana",
  subtitle: "Comida caseira de almoço",
  items: [
    "Buffet à quilo ou livre",
    "Cerca de 20 pratos quentes",
    "15 tipos de saladas",
    "Cardápio elaborado toda semana",
    "Alimentos frescos, muitos da horta da casa",
  ],
} as const;

export const weekendBuffet = {
  title: "No fim de semana",
  subtitle: "A mesa alemã do Vale",
  items: [
    "Eisbein — joelho de porco",
    "Chucrute",
    "Bolinho de batata ao estilo alemão",
    "Salsicha bock, língua, peixe frito",
    "Sobremesas e café com merengue — cortesia",
  ],
} as const;

export const highlights = [
  {
    name: "Eisbein",
    label: "Fim de semana",
    description:
      "O joelho de porco que a casa serve desde os anos 90. Pedido de quem pesquisa comida alemã em Novo Hamburgo.",
  },
  {
    name: "Chucrute",
    label: "Fim de semana",
    description:
      "Acompanhamento clássico da mesa colonial. No prato com o eisbein, como no Vale.",
  },
  {
    name: "Bolinho de batata",
    label: "O queridinho",
    description:
      "Ao estilo alemão. Reviews pedem para não deixar de provar — ao lado do joelho de porco.",
  },
  {
    name: "Sobremesas da casa",
    label: "Cortesia",
    description:
      "Buffet de doces, café e merengue no fim do almoço. O Destemperados ainda fala da lasanha de abacaxi.",
  },
] as const;

export const amenities = [
  { title: "Estacionamento amplo", text: "Na frente e na lateral — com segurança." },
  { title: "Mesas na área externa", text: "Quando o salão enche, o pátio também almoça." },
  { title: "Espaço kids", text: "Mesinhas, lápis e papel para a criançada." },
  { title: "Acesso PCD", text: "Rampas e circulação pensada para chegar à mesa." },
] as const;

export const reviews = [
  {
    quote:
      "Melhor comida alemã da região! Atendimento excelente! Não deixe de provar o bolinho de batata e o joelho de porco.",
    author: "Lucy Linck",
    source: "Google",
  },
  {
    quote:
      "Almoço no Restaurante Weber's há mais de 3 anos. Só tenho elogios a fazer em todos os sentidos: ambiente, serviço e comida.",
    author: "Luiz Mello da Rosa",
    source: "Google",
  },
  {
    quote:
      "O ambiente é familiar, simples, mas acolhedor. Estou levando minha família aqui todo domingo. É bom chegar antes das 12h.",
    author: "Cliente no cardápio.menu",
    source: "Avaliação local",
  },
] as const;

export const reviewThemes = [
  "Eisbein",
  "Bolinho de batata",
  "Chucrute",
  "Buffet de sobremesas",
  "Almoço em família",
  "Estacionamento",
] as const;
