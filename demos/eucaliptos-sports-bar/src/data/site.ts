export const SITE = {
  name: "Eucaliptos Sports Bar",
  shortName: "Euca",
  tagline: "Sports bar no Menino Deus — Porto Alegre/RS",
  headline: "EUCALIPTOS",
  subheadline: "Sports bar na Cerro Largo.",
  lead: "Cinco TVs, oito torneiras e petisco na mesa — no ponto do antigo estádio, em frente à Praça Memorial Eucaliptos.",
  phoneDisplay: "(51) 3239-3412",
  phoneTel: "+555132393412",
  whatsapp:
    "https://wa.me/555132393412?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Eucaliptos%20Sports%20Bar.",
  instagram: "https://www.instagram.com/eucaliptossportsbar/",
  instagramHandle: "@eucaliptossportsbar",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Eucaliptos+Sports+Bar+Rua+Barão+do+Cerro+Largo+300+Menino+Deus+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Eucaliptos%20Sports%20Bar%2C%20Rua%20Barão%20do%20Cerro%20Largo%20300%2C%20Menino%20Deus%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Eucaliptos+Sports+Bar+Cerro+Largo+300+Porto+Alegre",
  address: {
    street: "R. Barão do Cerro Largo, 300 — lojas 02 e 03",
    neighborhood: "Menino Deus",
    city: "Porto Alegre",
    state: "RS",
    cep: "90850-110",
    nearby: "Em frente à Praça Memorial Eucaliptos · Grand Park Eucaliptos",
  },
  founded: "2019",
  priceRange: "R$ 40–100",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

const EVERY_DAY: DaySchedule["slots"] = [
  { startMin: hm(17), endMin: hm(22), label: "17h – 22h" },
];

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: EVERY_DAY },
  1: { label: "Segunda", short: "Seg", slots: EVERY_DAY },
  2: { label: "Terça", short: "Ter", slots: EVERY_DAY },
  3: { label: "Quarta", short: "Qua", slots: EVERY_DAY },
  4: { label: "Quinta", short: "Qui", slots: EVERY_DAY },
  5: { label: "Sexta", short: "Sex", slots: EVERY_DAY },
  6: { label: "Sábado", short: "Sáb", slots: EVERY_DAY },
};

export const HOURS_NOTE =
  "Horário público: todos os dias, 17h–22h (JC 2024 e Comida di Buteco). Em dia de jogo grande a casa já abriu mais cedo — confirme no Instagram.";
