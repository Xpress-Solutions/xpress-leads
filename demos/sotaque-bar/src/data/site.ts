export const SITE = {
  name: "Sotaque Bar",
  shortName: "Sotaque",
  tagline: "Um bar plural.",
  headline: "SOTAQUE",
  subheadline:
    "Pé-direito alto, janelões na calçada e chef na cozinha. A esquina da Protásio com a João Guimarães.",
  phoneDisplay: "(51) 3061-3646",
  phoneTel: "+555130613646",
  whatsapp:
    "https://wa.me/555130613646?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Sotaque%20Bar.",
  instagram: "https://www.instagram.com/sotaquebar/",
  instagramHandle: "@sotaquebar",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Sotaque+Bar+Av.+Protásio+Alves+699+Rio+Branco+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Sotaque%20Bar%2C%20Av.%20Prot%C3%A1sio%20Alves%20699%2C%20Rio%20Branco%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Sotaque+Bar+Av.+Protásio+Alves+699+Porto+Alegre",
  address: {
    street: "Av. Protásio Alves, 699",
    neighborhood: "Rio Branco",
    city: "Porto Alegre",
    state: "RS",
    cep: "90410-000",
    nearby: "Esquina com a Rua João Guimarães",
  },
  rating: "4,5",
  founded: "2022",
  priceRange: "R$ 40–100",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Janelões" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

const night = [{ startMin: hm(18), endMin: hm(23, 30), label: "18h – 23h30" }];

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(11, 30), endMin: hm(17), label: "11h30 – 17h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: { label: "Terça", short: "Ter", slots: night },
  3: { label: "Quarta", short: "Qua", slots: night },
  4: { label: "Quinta", short: "Qui", slots: night },
  5: { label: "Sexta", short: "Sex", slots: night },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(11, 30), endMin: hm(23, 30), label: "11h30 – 23h30" }],
  },
};

export const HOURS_NOTE =
  "Horários da bio do @sotaquebar. Almoço sáb/dom 11h30–16h. Confirme no Instagram ou no balcão.";
