export const SITE = {
  name: "O Barbeiro",
  tagline: "Barba e cabelo pensados e arquitetados.",
  headline: "O Barbeiro",
  subheadline: "Barba e cabelo pensados e arquitetados.",
  founded: "Mais de 50 anos de ofício",
  address: {
    street: "Rua Felizardo, 336",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90670-090",
    nearby: "Na mesma Felizardo do Boteco Vitória, da Cioccari e da Barbearia Jardim Botânico — a casa é o 336.",
  },
  maps:
    "https://www.google.com/maps/search/?api=1&query=O+Barbeiro+Rua+Felizardo+336+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=O%20Barbeiro%2C%20Rua%20Felizardo%20336%2C%20Jardim%20Bot%C3%A2nico%2C%20Porto%20Alegre&t=&z=17&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=O+Barbeiro+Rua+Felizardo+336+Porto+Alegre",
  rating: "5,0",
  reviewsCount: "19",
  hoursLine: "Seg–sex 8h–20h · sáb 9h–18h",
  identity:
    "Barbearia de família com mais de 50 anos de ofício. Discurso próprio: barba e cabelo pensados e arquitetados. Clientes citam o profissional Daniel pelo nome. Preço justo, ambiente de bairro.",
  notFloripa:
    "Não é a Barbearia O Barbeiro de Florianópolis. Quem pesquisa o nome no Google pode cair no site de Santa Catarina. Esta página é da casa da Felizardo, 336 — Jardim Botânico, Porto Alegre.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#oficio", label: "Ofício" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#chegar", label: "Como chegar" },
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
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(18), label: "9h – 18h" }],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas. Sem telefone ou WhatsApp publicado — a agenda é na cadeira, Felizardo 336.";
