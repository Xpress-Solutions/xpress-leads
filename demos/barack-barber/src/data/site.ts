export const SITE = {
  name: "Barack Barber House",
  shortName: "Barack",
  tagline: "Quality above all!",
  headline: "Barack Barber House",
  subheadline:
    "Navalha, combo e hora marcada. A casa do Richard — o Professor — no Passo D'Areia, ao lado do Iguatemi.",
  booksy:
    "https://booksy.com/pt-br/126144_barack-barber-house_barbearias_804125_porto-alegre",
  instagram: "https://www.instagram.com/barackbarber/",
  instagramHandle: "@barackbarber",
  facebook: "https://www.facebook.com/barackthebarber",
  siteRichard: "https://www.barackbarber.com/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Barack+Barber+House+Avenida+dos+Prazeres+145+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Avenida%20dos%20Prazeres%20145%2C%20Passo%20D'Areia%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. dos Prazeres, 145",
    neighborhood: "Passo D'Areia",
    city: "Porto Alegre",
    state: "RS",
    cep: "91320-150",
    nearby: "Ao lado do Iguatemi · Zona Norte",
  },
  rating: "5,0",
  reviewsCount: "192",
  reviewsSource: "Booksy",
  founded: "2021",
  foundedRoman: "MMXXI",
  barber: "Richard Chagas Ferreira",
  barberAka: "o Professor",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#richard", label: "Richard" },
  { href: "#casa", label: "A casa" },
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
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(13), endMin: hm(20), label: "13h – 20h" },
    ],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(13), endMin: hm(20), label: "13h – 20h" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(13), endMin: hm(20), label: "13h – 20h" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(13), endMin: hm(20), label: "13h – 20h" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(13), endMin: hm(20), label: "13h – 20h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(9), endMin: hm(12), label: "9h – 12h" },
      { startMin: hm(13), endMin: hm(17, 40), label: "13h – 17h40" },
    ],
  },
};

export const HOURS_NOTE =
  "Horário do Booksy. Quarta a sexta existe atendimento pós-horário até 23h — combinar no Instagram.";
