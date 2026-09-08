export const SITE = {
  name: "Bar 44 Amarelinho",
  shortName: "Amarelinho",
  number: "44",
  tagline: "A fachada amarela da Assis Brasil.",
  headline: "Amarelinho 44",
  subheadline:
    "Almoço e jantar na zona norte. A casa amarela de Santa Maria Goretti — petisco de concurso, quadro do dia e mesa sem pose.",
  phoneDisplay: "(51) 99444-2778",
  phoneTel: "+5551994442778",
  whatsapp:
    "https://wa.me/5551994442778?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Bar%2044%20Amarelinho.",
  instagram: "https://www.instagram.com/bar_amarelinho44oficial/",
  instagramHandle: "@bar_amarelinho44oficial",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Bar+44+Amarelinho+Av.+Assis+Brasil+171+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Assis%20Brasil%20171%2C%20Santa%20Maria%20Goretti%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Bar+Amarelinho+44+Av.+Assis+Brasil+171+Porto+Alegre",
  address: {
    street: "Av. Assis Brasil, 171",
    neighborhood: "Santa Maria Goretti",
    city: "Porto Alegre",
    state: "RS",
    cep: "91030-270",
    nearby: "Corredor da Assis Brasil · zona norte",
  },
  rating: "4,6",
  reviewsCount: "83",
  priceRange: "R$ 40–60",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "Petisco 2026" },
  { href: "#mesa", label: "A mesa" },
  { href: "#sobre", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(17, 30), endMin: hm(22), label: "17h30 – 22h" }],
  },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" },
    ],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(17, 30), endMin: hm(23), label: "17h30 – 23h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14), label: "11h30 – 14h" },
      { startMin: hm(17, 30), endMin: hm(23), label: "17h30 – 23h" },
    ],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas da casa na Assis Brasil, 171. Confirme no Google ou no WhatsApp antes de sair.";
