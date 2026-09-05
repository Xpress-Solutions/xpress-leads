export const SITE = {
  name: "Bar do Alemão — Unipark",
  shortName: "Alemão",
  campusName: "Unipark",
  tagline: "O ponto da Unisinos · São Leopoldo",
  headline: "Alemão Unipark",
  subheadline: "Litrão, sinuca e o ponto do campus.",
  pitch:
    "O Alemão do Unipark já é ponto da Unisinos e ainda não tem site. Uma página com o cardápio, a sinuca e o mapa do acesso 2 captura quem pesquisa no celular antes da aula.",
  identity:
    "Bar amplo perto da Unisinos/Unipark: litrão, sinuca, buffet, espaço para banda. Google 4.7. Identidade de ponto universitário e de happy hour de São Leopoldo — casa com nome e localização ímpar.",
  phoneDisplay: "(51) 3590-4905",
  phoneTel: "+555135904905",
  whatsapp:
    "https://wa.me/555135904905?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Alem%C3%A3o%20Unipark%20e%20queria%20saber%20do%20card%C3%A1pio%20e%20da%20sinuca.",
  instagram: "https://www.instagram.com/bardoalemao.bda/",
  instagramHandle: "@bardoalemao.bda",
  facebook: "https://www.facebook.com/bardoalemaounipark/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Bar%20do%20Alem%C3%A3o%20Padre%20Lu%C3%ADs%20Gonzaga%20Jaeger%2080%20S%C3%A3o%20Leopoldo",
  mapsEmbed:
    "https://maps.google.com/maps?q=Bar%20do%20Alem%C3%A3o%2C%20Rua%20Padre%20Lu%C3%ADs%20Gonzaga%20Jaeger%2080%2C%20S%C3%A3o%20Leopoldo&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Bar%20do%20Alem%C3%A3o%20Unipark%20S%C3%A3o%20Leopoldo",
  address: {
    street: "Rua Padre Luís Gonzaga Jaeger, 80",
    neighborhood: "Cristo Rei / Unipark",
    city: "São Leopoldo",
    state: "RS",
    cep: "93022-250",
    nearby: "Junto ao Unipark · acesso 2 da Unisinos",
  },
  rating: "4,7",
  priceRange: "R$ 20–60",
  hoursLine: "Seg–sex 9h–0h · sáb 9h–16h · dom fechado",
} as const;

export const NAV_LINKS = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sinuca", label: "Sinuca" },
  { href: "#acesso-2", label: "Acesso 2" },
  { href: "#sobre", label: "Sobre" },
  { href: "#avaliacoes", label: "Avaliações" },
] as const;

export const ACCESS_STEPS = [
  {
    n: "01",
    title: "Saia pelo acesso 2",
    text: "Pelo acesso 2 da Unisinos, pegue a Avenida Unisinos em direção à BR-116.",
  },
  {
    n: "02",
    title: "Primeira à direita",
    text: "Uns 70 metros depois, a Rua Padre Luís Gonzaga Jaeger é a primeira à direita.",
  },
  {
    n: "03",
    title: "Sobe 60 metros",
    text: "Atravessa a avenida e segue uns 60 metros. Perto do Rapach Lanches e do Work + Hotel (W+H).",
  },
  {
    n: "04",
    title: "Estacionamento na porta",
    text: "Junto ao bar tem estacionamento e lava-rápido. Número 80 — o Alemão do Unipark.",
  },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: null },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(9), endMin: hm(24), label: "9h – 0h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(9), endMin: hm(24), label: "9h – 0h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(9), endMin: hm(24), label: "9h – 0h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(9), endMin: hm(24), label: "9h – 0h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(9), endMin: hm(24), label: "9h – 0h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(16), label: "9h – 16h" }],
  },
};

export const HOURS_NOTE =
  "Horário conforme listagens públicas (Restaurant Guru / Google). Confirme no WhatsApp antes de sair do campus.";
