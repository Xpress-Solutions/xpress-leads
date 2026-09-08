export const SITE = {
  name: "Meio Cheio",
  wordmark: "meio cheio",
  tagline: "Bar de vinho sem frescura — Cidade Baixa, Porto Alegre",
  headline: "meio cheio",
  subheadline: "Basta gostar de vinho.",
  instagram: "https://www.instagram.com/meio.cheio.poa/",
  instagramHandle: "@meio.cheio.poa",
  instagramDm:
    "https://ig.me/m/meio.cheio.poa",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Meio+Cheio+Av.+Ven%C3%A2ncio+Aires+871+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Ven%C3%A2ncio%20Aires%20871%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Venâncio Aires, 871",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90040-193",
    nearby: "Em frente ao Bar do Beto · entre a Cidade Baixa e o Bom Fim · pertinho da Redenção",
  },
  rating: "4,6",
  reviewsCount: "Google",
  priceRange: "R$ 15–30 a taça",
  founded: "2025",
  followers: "~11 mil",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#carta", label: "Carta" },
  { href: "#casa", label: "A casa" },
  { href: "#sobre", label: "Sobre" },
  { href: "#localizacao", label: "Venâncio" },
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
    slots: [{ startMin: hm(17), endMin: hm(22), label: "17h – 22h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: { label: "Terça", short: "Ter", slots: null },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
};

export const HOURS_NOTE =
  "Segunda e terça: confirmar nos stories do dia. Reserva pela DM do Instagram.";
