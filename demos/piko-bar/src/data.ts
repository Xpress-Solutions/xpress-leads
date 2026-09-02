export const SITE = {
  name: "Piko Bar e Cozinha",
  shortName: "Piko",
  wordmark: "PIKO",
  tagline: "Bar e Cozinha",
  line: "O Popeyeroll é daqui — Pedro Boticário, 560.",
  identity:
    "Bar e cozinha na Pedro Boticário, no limite do Partenon com a Glória. Casa de noite, terça a sábado. Petisco autoral no Comida di Buteco — não é bar genérico de avenida.",
  phoneDisplay: "(51) 98500-6921",
  phoneTel: "+5551985006921",
  whatsapp:
    "https://wa.me/5551985006921?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site do Piko e queria saber do Popeyeroll e do cardápio da noite.",
    ),
  instagram: "https://www.instagram.com/piko.bar/",
  instagramHandle: "@piko.bar",
  maps: "https://www.google.com/maps/search/?api=1&query=Piko+Bar+e+Cozinha+Rua+Pedro+Boticário+560+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Piko%20Bar%20e%20Cozinha%2C%20Rua%20Pedro%20Botic%C3%A1rio%20560%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Pedro Boticário, 560",
    neighborhood: "Partenon / Glória",
    city: "Porto Alegre",
    state: "RS",
    cep: "90660-070",
    full: "Rua Pedro Boticário, 560 — Partenon / Glória, Porto Alegre/RS",
  },
  hoursLead: "Ter–sáb 18h–23h30",
  hoursNote:
    "Noite conforme o concurso e a casa. O Google também lista almoço de segunda a sexta, 11h30–14h. Confirme no balcão.",
  rating: "4,7",
  reviewsCount: "69",
  priceRange: "R$ 20–80",
} as const;

export const HOURS = [
  { day: "Segunda", time: "11h30–14h", night: false },
  { day: "Terça", time: "11h30–14h · 18h–23h30", night: true },
  { day: "Quarta", time: "11h30–14h · 18h–23h30", night: true },
  { day: "Quinta", time: "11h30–14h · 18h–23h30", night: true },
  { day: "Sexta", time: "11h30–14h · 18h–23h30", night: true },
  { day: "Sábado", time: "18h–23h30", night: true },
  { day: "Domingo", time: "Fechado", night: false },
] as const;

export const DISHES = [
  {
    name: "Popeyeroll",
    kicker: "Comida di Buteco 2026",
    text: "O petisco do concurso: enrolado dourado, folha verde e queijo. Quem vem pelo circuito precisa do ponto certo — Pedro Boticário, 560.",
    image: "/fotos/popeyeroll.jpg",
    alt: "Popeyeroll do Piko Bar — petisco do Comida di Buteco 2026, foto Israh Ramos",
  },
  {
    name: "Pãoliça",
    kicker: "Comida di Buteco 2024",
    text: "Pão tangzhong, calabresa flambada na cachaça, creme de provolone e maionese defumada. A tábua da foto tem o PIKO gravado.",
    image: "/fotos/paolica.jpg",
    alt: "Pãoliça do Piko — pães de calabresa na tábua com logo PIKO gravado",
  },
  {
    name: "Xis e hambúrguer",
    kicker: "O que a mesa pede",
    text: "Quem avalia no Google fala de xis grande, hambúrguer e fritas bem feitos. Cozinha de bar, sem firula.",
    image: "/fotos/xis-noite.jpg",
    alt: "Hambúrguer e fritas do Piko servidos em frigideira, à noite",
  },
  {
    name: "Fritas da casa",
    kicker: "Porção de mesa",
    text: "Batata crocante, cheddar e bacon na tigela de alumínio — o mesmo papel manteiga estampado da cozinha.",
    image: "/fotos/fritas.jpg",
    alt: "Porção de fritas com cheddar e bacon do Piko Bar e Cozinha",
  },
] as const;

export const REVIEWS = [
  {
    name: "Julia Cassol",
    quote: "Xis bem grande, tamanho perfeito e saboroso. Hambúrguer nota 10.",
    source: "Google",
  },
  {
    name: "Paula Battisti",
    quote:
      "Hambúrguer e fritas muito saborosos. Comida bem feita, ingredientes de qualidade e valor justíssimo.",
    source: "Google",
  },
] as const;

export const NAV = [
  { href: "#popeyeroll", label: "Popeyeroll" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Como chegar" },
] as const;
