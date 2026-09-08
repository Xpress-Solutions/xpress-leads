export const SITE = {
  name: "Confraria Barber Club",
  shortName: "Confraria",
  tagline: "Barbearia na Cidade Baixa — Porto Alegre/RS",
  headline: "Confraria Barber Club",
  subheadline: "Corte e barba com tradição familiar na Cidade Baixa.",
  founded: "2013",
  instagram: "https://www.instagram.com/confrariabarberclub/",
  instagramHandle: "@confrariabarberclub",
  facebook: "https://www.facebook.com/confrariabarberclub",
  booksy:
    "https://booksy.com/pt-br/140510_confraria-barber-club_barbearias_804125_porto-alegre",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Confraria+Barber+Club+Rua+Jos%C3%A9+do+Patroc%C3%ADnio+378+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Confraria%20Barber%20Club%2C%20Rua%20Jos%C3%A9%20do%20Patroc%C3%ADnio%20378%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua José do Patrocínio, 378",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90050-000",
    nearby: "A poucos quarteirões da Praça Garibaldi e da Getúlio Vargas",
  },
  rating: "5,0",
  reviewsCount: "167",
  reviewsSource: "Booksy",
  googleReviews: "199",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#planos", label: "Planos" },
  { href: "#sobre", label: "A casa" },
  { href: "#equipe", label: "Equipe" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde estamos" },
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
    slots: [{ startMin: hm(14), endMin: hm(21), label: "14h – 21h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(18), label: "9h – 18h" }],
  },
};

export const HOURS_NOTE =
  "Grade da casa na Cidade Baixa: segunda só à tarde, terça a sexta até 21h. Confirme no Booksy no feriado.";
