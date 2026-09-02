import brand from "../../brand.json";

export const site = {
  name: "Pinacoteca Café",
  shortName: "Pinacoteca",
  tagline: "Bar, arte e cultura na Rua da República.",
  kicker: "Cidade Baixa · Porto Alegre",
  phoneDisplay: "(51) 3211-5762",
  phoneTel: "+555132115762",
  whatsapp:
    "https://wa.me/555132115762?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site da Pinacoteca Café e queria saber mais sobre a casa.",
    ),
  instagram: "https://www.instagram.com/pinacotecabar/",
  instagramHandle: "@pinacotecabar",
  facebook: "https://www.facebook.com/Pinacotecabar",
  maps: "https://www.google.com/maps/search/?api=1&query=Pinacoteca+Caf%C3%A9+Rua+da+Rep%C3%BAblica+409+Cidade+Baixa+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Pinacoteca%20Caf%C3%A9%2C%20Rua%20da%20Rep%C3%BAblica%20409%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua da República, 409",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90050-321",
    full: "Rua da República, 409 — Cidade Baixa, Porto Alegre",
    nearby: "Quase ao lado da Sorveteria Jóia, sob os jacarandás da República",
  },
  rating: "4,4",
  reviewsCount: "+1.700",
  priceRange: "R$ 20–60",
  founded: "2005",
  hoursNote:
    "Horários conforme o circuito Comida di Buteco 2026 e listagens públicas. Confirme no balcão.",
  hours: [
    { day: "Segunda", hours: "Fechado" },
    { day: "Terça", hours: "17h – 0h" },
    { day: "Quarta", hours: "17h – 0h" },
    { day: "Quinta", hours: "17h – 0h" },
    { day: "Sexta", hours: "17h – 2h" },
    { day: "Sábado", hours: "17h – 2h" },
    { day: "Domingo", hours: "17h – 0h" },
  ],
  identity: brand.positioning,
} as const;

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#croqueflor", label: "Croqueflor" },
  { href: "#casa", label: "A casa" },
  { href: "#cardapio", label: "Mesa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Quem veio" },
  { href: "#local", label: "República 409" },
] as const;
