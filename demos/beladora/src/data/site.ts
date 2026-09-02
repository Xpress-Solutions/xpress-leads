export const SITE = {
  name: "Beladora",
  alsoKnownAs: "Bela Dora",
  tagline: "Espetinho à beira do Guaíba.",
  subheadline: "Espetinho à beira do Guaíba. Até 1h, em Ipanema.",
  identity:
    "Bar e restaurante à beira do Guaíba em Ipanema. Centenas de avaliações no Google. No Comida di Buteco 2026 com Espetinho Beladora. Ponto de orla com identidade de espetinho e vista — não é bar genérico de avenida.",
  phoneDisplay: "(51) 3105-4661",
  phoneTel: "+555131054661",
  whatsapp:
    "https://wa.me/555131054661?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Beladora%20e%20queria%20saber%20mais.",
  instagram: "https://www.instagram.com/beladora_restaurante/",
  instagramHandle: "@beladora_restaurante",
  facebook: "https://www.facebook.com/Bela-Dora-Restaurante-218264382035758/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Bela+Dora+Av.+Gua%C3%ADba+10748+Ipanema+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Gua%C3%ADba%2010748%2C%20Ipanema%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Guaíba, 10748",
    neighborhood: "Ipanema",
    city: "Porto Alegre",
    state: "RS",
    cep: "91760-120",
    full: "Av. Guaíba, 10748 — Ipanema, Porto Alegre",
  },
  reviewsCount: 584,
  hoursLabel: "Ter–dom até 1h",
  hoursNote: "Horários variados até 1h, conforme listagens do Comida di Buteco 2026. Confirme no WhatsApp.",
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#espetinho", label: "Espetinho" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde" },
] as const;

export const HOURS = [
  { day: "Segunda", value: "Fechado" },
  { day: "Terça", value: "Até 1h" },
  { day: "Quarta", value: "Até 1h" },
  { day: "Quinta", value: "Até 1h" },
  { day: "Sexta", value: "Até 1h" },
  { day: "Sábado", value: "Até 1h" },
  { day: "Domingo", value: "Até 1h" },
] as const;

export const HOUSE = [
  {
    title: "Bar",
    copy: "Chope e mesa na orla. A casa abre para o Guaíba, não para uma avenida sem rio.",
  },
  {
    title: "Cafeteria",
    copy: "O toldo ainda diz cafeteria: ponto de encontro de Ipanema, do fim de tarde até a noite.",
  },
  {
    title: "Petiscaria",
    copy: "Espetinho Beladora no Comida di Buteco 2026. Petisco da casa, não prato de vitrine.",
  },
] as const;

export const REVIEWS = [
  {
    quote:
      "Ambiente agradável, arejado e acolhedor. Comida quente, bem feita, preço justo. Pretendo voltar.",
    author: "Ariane",
    source: "cardapio.menu",
  },
  {
    quote:
      "Atendimento muito bom, comida formidável e bem preparada. Recomendo.",
    author: "Roberta",
    source: "cardapio.menu",
  },
  {
    quote:
      "Centenas de avaliações na orla: a Beladora é o ponto de Ipanema com espetinho e vista para o Guaíba.",
    author: "Google",
    source: "584 avaliações públicas",
  },
] as const;

export const GALLERY = [
  {
    src: "/fotos/fachada.jpg",
    alt: "Fachada da Beladora na Av. Guaíba: toldos verde-floresta, logo cursiva e barris de madeira",
  },
  {
    src: "/fotos/espetinho.jpg",
    alt: "Espetinho Beladora do Comida di Buteco 2026 — foto Israh Ramos / Sabores do Sul",
  },
  {
    src: "/fotos/orla.jpg",
    alt: "Pôr do sol no calçadão de Ipanema, Av. Guaíba — a orla da casa",
  },
  {
    src: "/fotos/guaiba.jpg",
    alt: "Avenida Guaíba em Ipanema, com placa do bairro e araucárias",
  },
] as const;
