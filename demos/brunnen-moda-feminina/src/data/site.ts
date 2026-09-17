export const SITE = {
  name: "Brunnen",
  fullName: "Brunnen Moda Feminina",
  tagline: "Vestir, sentir, viver.",
  line: "Atual, real e consciente — moda contemporânea na Padre Chagas.",
  phoneDisplay: "(51) 98189-1335",
  phoneTel: "+5551981891335",
  landlineDisplay: "(51) 3019-3335",
  landlineTel: "+555130193335",
  email: "brunnenmoinhos@gmail.com",
  whatsapp:
    "https://wa.me/5551981891335?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Brunnen%20e%20queria%20ver%20as%20pe%C3%A7as.",
  instagram: "https://www.instagram.com/brunnenmodafeminina/",
  instagramHandle: "@brunnenmodafeminina",
  facebook: "https://www.facebook.com/brunnenmodafeminina/",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua+Padre+Chagas+242+Moinhos+de+Vento+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Padre%20Chagas%20242%2C%20Moinhos%20de%20Vento%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Padre Chagas, 242",
    neighborhood: "Moinhos de Vento",
    city: "Porto Alegre",
    state: "RS",
    cep: "90570-080",
    full: "Rua Padre Chagas, 242 — Moinhos de Vento, Porto Alegre/RS",
  },
  hoursLabel: "Seg–sex 10h–19h · sáb 10h–18h",
  hoursNote: "Domingo fechado. Confirme o expediente do dia no WhatsApp.",
  rating: "4,7",
  priceRange: "$$",
} as const;

export const TICKER = [
  "Vestir",
  "Sentir",
  "Viver",
  "Moinhos de Vento",
  "Padre Chagas 242",
  "Contemporânea",
] as const;

export const NAV = [
  { href: "#colecao", label: "Coleção" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#casa", label: "A casa" },
  { href: "#onde", label: "Onde" },
] as const;

export type NavHref = (typeof NAV)[number]["href"];

export const LOOKS = [
  {
    src: "/fotos/look-azul.png",
    title: "Conjunto azul",
    note: "Caimento fluido — junto ou em peças soltas.",
    radius: "3.5rem 1.2rem 3.5rem 1.2rem",
  },
  {
    src: "/fotos/look-creme.png",
    title: "Leveza em creme",
    note: "Para o dia que pede um casaquinho por cima.",
    radius: "1.2rem 3.8rem 1.2rem 3.8rem",
  },
  {
    src: "/fotos/look-preto.png",
    title: "Preto contemporâneo",
    note: "Sedução quieta, sem pose de vitrine.",
    radius: "4.2rem 4.2rem 1.1rem 1.1rem",
  },
] as const;

export const REVIEWS = [
  { name: "M. L.", text: "Boa loja, ótimo atendimento. Roupas caras, mas de boa qualidade." },
  { name: "R. C.", text: "Adoro a loja!" },
  { name: "G. M.", text: "Roupas de bom gosto." },
] as const;
