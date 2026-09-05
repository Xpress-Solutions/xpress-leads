export const SITE = {
  name: "BAH! BURGER",
  shout: "BAH!",
  rest: "BURGER",
  slogan: "Loco de especial.",
  phrase: "Hambúrguer na brasa na China 14 — casa de NH, não rede.",
  phoneDisplay: "(51) 99207-8679",
  phoneTel: "+5551992078679",
  whatsapp:
    "https://wa.me/5551992078679?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20BAH%21%20BURGER%20e%20quero%20pedir.",
  instagram: "https://www.instagram.com/bah_burgerev/",
  instagramHandle: "@bah_burgerev",
  cardapioWeb: "https://app.cardapioweb.com/bah_burger",
  maps: "https://www.google.com/maps/search/?api=1&query=BAH%20BURGER%20Rua%20China%2014%20Novo%20Hamburgo",
  mapsEmbed:
    "https://maps.google.com/maps?q=BAH%20BURGER%2C%20Rua%20China%2014%2C%20Novo%20Hamburgo&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua China, 14",
    neighborhood: "Centro",
    city: "Novo Hamburgo",
    state: "RS",
    cep: "93310-420",
  },
  rating: "4,9",
  reviewsCount: "119",
  priceRange: "R$ 20–60",
  hoursLine: "Qua–sáb 18h30–23h · dom 18h–22h · seg–ter fechado",
  pitch:
    "A BAH! BURGER está com 4.9 no Google e ainda não tem site. Uma página com o cardápio, o horário e o WhatsApp na China 14 captura quem pesquisa hambúrguer em NH.",
  about:
    "Hambúrguer artesanal feito na brasa. A proposta da casa é entregar um produto diferenciado — do atendimento ao preparo, da embalagem à entrega. Carinho, comprometimento e sabor. Equipe BAH!Burger.",
} as const;

export const NAV_LINKS = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#a-casa", label: "A casa" },
  { href: "#avaliacoes", label: "4,9" },
  { href: "#local", label: "China 14" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: [{ startMin: hm(18), endMin: hm(22), label: "18h – 22h" }] },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: { label: "Terça", short: "Ter", slots: null },
  3: { label: "Quarta", short: "Qua", slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }] },
  4: { label: "Quinta", short: "Qui", slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }] },
  5: { label: "Sexta", short: "Sex", slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }] },
  6: { label: "Sábado", short: "Sáb", slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }] },
};

export const REVIEWS = [
  {
    name: "Zorel Ferreira",
    source: "Google",
    text: "Melhor hambúrguer de Novo Hamburgo, várias opções. Atendimento nota 10 e entrega super rápida.",
  },
  {
    name: "Dienifer Negri",
    source: "Google",
    text: "Os hambúrguers são maravilhosos, a carne é suculenta e bem temperada. Eu e minha família adoramos!!",
  },
  {
    name: "Kaique L.",
    source: "Google",
    text: "Ambiente simples onde o hambúrguer que é a estrela. Pedimos o Laçador com provolone crispy e cebola — a carne veio no ponto. Já fui em hamburguerias de grande estrutura que não entregam a qualidade da BAH! BURGER.",
  },
] as const;
