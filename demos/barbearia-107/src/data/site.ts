export const SITE = {
  name: "Barbearia 107",
  shortName: "107",
  tagline: "Barro Vermelho · Gravataí",
  headline: "107",
  subheadline:
    "Corte, combo e a cadeira do Fabricio — Barro Vermelho, Gravataí. A marca é 107.",
  phoneDisplay: "(51) 98203-7095",
  phoneTel: "+5551982037095",
  whatsapp:
    "https://wa.me/5551982037095?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20107%20e%20quero%20agendar%20um%20hor%C3%A1rio.",
  instagram: "https://www.instagram.com/bar_bearia107/",
  instagramHandle: "@bar_bearia107",
  booksy: "https://booksy.com/pt-br/214693_barbearia-107_barbearias_799807_gravatai",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Barbearia%20107%20Estrada%20Cavalhada%20Barro%20Vermelho%20571%20Gravata%C3%AD",
  mapsEmbed:
    "https://maps.google.com/maps?q=Estrada%20Cavalhada%20Barro%20Vermelho%20571%2C%20Gravata%C3%AD&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Estrada Cavalhada Barro Vermelho, 571",
    neighborhood: "Barro Vermelho",
    city: "Gravataí",
    state: "RS",
    cep: "94060-610",
  },
  rating: "5,0",
  reviewsCount: "46",
  barber: "Fabricio Brasil",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#combos", label: "Combos" },
  { href: "#fabricio", label: "Fabricio" },
  { href: "#cortes", label: "Cortes" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde fica" },
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
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(14), endMin: hm(20), label: "14h – 20h" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(14), endMin: hm(20), label: "14h – 20h" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(14), endMin: hm(20), label: "14h – 20h" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(14), endMin: hm(20), label: "14h – 20h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(14), endMin: hm(18), label: "14h – 18h" },
    ],
  },
};

export const HOURS_NOTE =
  "Horários do Booksy. Almoço 12h–14h. Domingo e segunda fechado. Confirme no WhatsApp.";
