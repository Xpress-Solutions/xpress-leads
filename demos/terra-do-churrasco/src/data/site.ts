export const SITE = {
  name: "Terra do Churrasco",
  tagline: "Tradição em churrasco gaúcho",
  headline: "Terra do Churrasco",
  subheadline: "Traga teu cusco e teu chimarrão.",
  phoneDisplay: "(51) 99630-1149",
  phoneTel: "+5551996301149",
  whatsapp:
    "https://wa.me/5551996301149?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20reservar%20mesa%20na%20Terra%20do%20Churrasco.",
  instagram: "https://www.instagram.com/terradochurrascors/",
  instagramHandle: "@terradochurrascors",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Terra+do+Churrasco+Cristiano+Fischer+1440+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Terra%20do%20Churrasco%2C%20Rua%20Professor%20Cristiano%20Fischer%201440%2C%20Jardim%20do%20Salso%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Terra+do+Churrasco+Cristiano+Fischer+1440+Porto+Alegre",
  address: {
    street: "Rua Professor Cristiano Fischer, 1440",
    neighborhood: "Jardim do Salso",
    city: "Porto Alegre",
    state: "RS",
    cep: "91410-000",
    nearby: "Corredor da Ipiranga · zona leste",
  },
  reviewsCount: "942",
  founded: "2024",
  indoor: 280,
  outdoor: 300,
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cortes", label: "Cortes" },
  { href: "#casa", label: "A casa" },
  { href: "#reservas", label: "Reservas" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde estamos" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(11, 30), endMin: hm(22), label: "11h30 – 22h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18, 30), endMin: hm(23), label: "18h30 – 23h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(11, 30), endMin: hm(23), label: "11h30 – 23h" }],
  },
};

export const HOURS_NOTE =
  "Horário da ficha do lead. Semana é jantar; sábado e domingo abrem no almoço. Segunda fechada.";
