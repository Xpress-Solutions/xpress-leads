export const SITE = {
  name: "Bar do Nito",
  shortName: "Nito",
  tagline: "A esquina da música brasileira",
  logo: "/logo.png",
  headline: "Bar do Nito",
  subheadline:
    "Sobrado na Auxiliadora onde o palco não apaga: MPB, samba e choro desde 1992 — e feijoada com samba no sábado.",
  phoneDisplay: "(51) 3333-6221",
  phoneTel: "+555133336221",
  whatsapp:
    "https://wa.me/5551997174066?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20reservar%20mesa%20no%20Bar%20do%20Nito.",
  instagram: "https://www.instagram.com/bar_do_nito/",
  instagramHandle: "@bar_do_nito",
  facebook: "https://www.facebook.com/bardonito/",
  youtube: "https://www.youtube.com/@esquinadaculturabrasileira",
  maps: "https://www.google.com/maps/search/?api=1&query=Bar+do+Nito+Av.+Cel.+Lucas+de+Oliveira+105+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Bar%20do%20Nito%2C%20Av.%20Cel.%20Lucas%20de%20Oliveira%20105%2C%20Auxiliadora%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Bar+do+Nito+Av.+Cel.+Lucas+de+Oliveira+105+Porto+Alegre",
  address: {
    street: "Av. Cel. Lucas de Oliveira, 105",
    neighborhood: "Auxiliadora",
    city: "Porto Alegre",
    state: "RS",
    cep: "90440-011",
    nearby: "Esquina com a Rua Felipe Neri · uma quadra da 24 de Outubro · perto da Igreja Nossa Senhora Auxiliadora",
  },
  rating: "4,6",
  reviewsCount: "+1.000",
  founded: "1992",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#agenda", label: "Agenda" },
  { href: "#feijoada", label: "Feijoada" },
  { href: "#sobre", label: "A casa" },
  { href: "#mesa", label: "Mesa" },
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
    slots: [{ startMin: hm(11), endMin: hm(16), label: "11h – 16h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 00h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 00h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 00h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 00h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(11), endMin: hm(16), label: "11h – 16h" },
      { startMin: hm(18), endMin: hm(24), label: "18h – 00h" },
    ],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas (Rolê Agora e guias). A casa só abre com artista no palco — confirme a atração e a reserva no WhatsApp.";
