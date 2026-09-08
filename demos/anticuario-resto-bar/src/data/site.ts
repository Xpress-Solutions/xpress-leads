export const SITE = {
  name: "Anticuário Restô Bar",
  shortName: "Anticuário",
  kicker: "Cidade Baixa · Porto Alegre",
  headline: "Anticuário",
  subhead: "Restô Bar",
  tagline: "Chivito, pizza em quadradinhos e cerveza uruguaia na Lima e Silva.",
  pitch:
    "Um pedaço do Uruguai na Cidade Baixa: salão de antiguidades, família no balcão e a noite começando às 18h.",
  phoneDisplay: "(51) 3225-4020",
  phoneTel: "+555132254020",
  whatsapp:
    "https://wa.me/555132254020?text=" +
    encodeURIComponent("Hola! Vi o site do Anticuário e queria saber da mesa / do chivito."),
  instagram: "https://www.instagram.com/anticuariorestobar/",
  instagramHandle: "@anticuariorestobar",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Anticuário+Restô+Bar+Rua+General+Lima+e+Silva+985+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Anticu%C3%A1rio%20Rest%C3%B4%20Bar%2C%20Rua%20General%20Lima%20e%20Silva%20985%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Anticuário+Resto+Bar+Lima+e+Silva+985+Porto+Alegre",
  address: {
    street: "Rua General Lima e Silva, 985 — loja 2",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90050-102",
    nearby: "Na Lima e Silva, um pouco antes do trecho mais agitado da Baixa.",
  },
  rating: "4,7",
  reviewsCount: "+300",
  priceRange: "R$ 40–120",
  founded: "2002",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde fica" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

/** Horários conforme Restaurant Guru (listagem pública, atualizada em 2026). */
export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 00h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: { label: "Terça", short: "Ter", slots: null },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18), endMin: hm(25), label: "18h – 01h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18), endMin: hm(25), label: "18h – 01h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18), endMin: hm(25), label: "18h – 01h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(19), endMin: hm(25), label: "19h – 01h" }],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas (Restaurant Guru / Google). Confirme no telefone ou no Instagram antes de sair.";
