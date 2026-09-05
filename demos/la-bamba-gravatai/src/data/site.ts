export const SITE = {
  name: "La Bamba",
  legalName: "Restaurante e Lancheria La Bamba",
  neighborhood: "Centro — Gravataí",
  headline: "La Bamba",
  subhead: "Café da manhã na Dorival.",
  line: "Café-bar na avenida principal de Gravataí. Do café da manhã ao fim da tarde — ponto de rotina da cidade, não só happy hour.",
  description:
    "La Bamba na Av. Dorival Cândido Luz de Oliveira, 184, Centro de Gravataí. Café da manhã a partir das 5h45, salgados, lanches e prato feito. 4,6 no Google com 215 avaliações.",
  pitch:
    "O La Bamba já tem 4.6 no Google na Dorival e ainda não tem site. Uma página com o café da manhã, o cardápio e o horário captura quem pesquisa em Gravataí.",
  phoneDisplay: "(51) 3488-5082",
  phoneTel: "+555134885082",
  whatsapp:
    "https://wa.me/555194303063?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site e queria saber o café da manhã / cardápio de hoje no La Bamba.",
    ),
  maps: "https://www.google.com/maps/search/?api=1&query=La+Bamba+Dorival+C%C3%A2ndido+Luz+de+Oliveira+184+Gravata%C3%AD",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Dorival%20C%C3%A2ndido%20Luz%20de%20Oliveira%2C%20184%2C%20Gravata%C3%AD&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=La+Bamba+Dorival+C%C3%A2ndido+Luz+de+Oliveira+184+Gravata%C3%AD",
  facebook: "https://www.facebook.com/RestauranteeLancheriaLaBamba/",
  email: "labambarestaurante.lancheria@gmail.com",
  address: {
    street: "Av. Dorival Cândido Luz de Oliveira, 184",
    neighborhood: "Centro",
    city: "Gravataí",
    state: "RS",
    cep: "94030-000",
    full: "Av. Dorival Cândido Luz de Oliveira, 184 — Centro, Gravataí/RS",
  },
  coordinates: { lat: -29.93954, lng: -50.99904 },
  rating: "4,6",
  ratingNum: 4.6,
  reviewsCount: 215,
  priceRange: "R$ 1–40",
  hoursLine: "Seg–sáb 5h45–19h · domingo fechado",
  hours: [
    { day: "Segunda", hours: "5h45 – 19h" },
    { day: "Terça", hours: "5h45 – 19h" },
    { day: "Quarta", hours: "5h45 – 19h" },
    { day: "Quinta", hours: "5h45 – 19h" },
    { day: "Sexta", hours: "5h45 – 19h" },
    { day: "Sábado", hours: "5h45 – 19h" },
    { day: "Domingo", hours: "Fechado" },
  ],
  since: 1996,
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#manha", label: "Café da manhã" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Onde fica" },
] as const;

export const MENU = [
  {
    title: "Café da manhã",
    text: "A porta abre 5h45. Café, suco e o que está na estufa — o primeiro ponto da Dorival antes do expediente.",
  },
  {
    title: "Salgados e pastéis",
    text: "Salgados de qualidade com bom preço, como o Google já escreveu. Pastéis na bandeja de inox, direto do balcão.",
  },
  {
    title: "Lanches",
    text: "Misto, lanche de lancheria, o pedido de quem passa na avenida e não quer fila de shopping.",
  },
  {
    title: "Prato feito e à la minuta",
    text: "Comida caseira: arroz, feijão, bife, ovo — o PF que a própria casa mostra no letreiro.",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/estufa.jpg", alt: "Estufa de salgados do La Bamba" },
  { src: "/fotos/pasteis.jpg", alt: "Pastéis na bandeja de inox" },
  { src: "/fotos/lanche.jpg", alt: "Lanche no prato de vidro âmbar" },
  { src: "/fotos/paes.jpg", alt: "Pães doces no balcão" },
  { src: "/fotos/bolo.jpg", alt: "Bolo de cenoura da casa" },
] as const;

export const REVIEWS = [
  {
    name: "g c",
    source: "Google",
    text: "Atendimento rápido e salgados de qualidade com um bom preço.",
  },
  {
    name: "Vera Regina",
    source: "Google",
    text: "Ambiente amistoso, gente que atende bem, comida gostosa, preço acessível.",
  },
  {
    name: "Ivanir De Araujo",
    source: "Google",
    text: "Muito bom atendimento e muito boa comida. Parabéns funcionários do La Bamba.",
  },
] as const;
