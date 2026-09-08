export const SITE = {
  name: "Galeteria Nostro Galeto",
  shortName: "Nostro Galeto",
  kicker: "Galeteria · São Geraldo",
  headline: "Nostro Galeto",
  subheadline:
    "Galeto ao primo canto, rodízio de massas e mesa farta — a galeteria clássica da Avenida Bahia.",
  phoneDisplay: "(51) 3343-0073",
  phoneTel: "+555133430073",
  whatsapp:
    "https://wa.me/555133430073?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20a%20Nostro%20Galeto.",
  instagram: "https://www.instagram.com/nostrogaleto/",
  instagramHandle: "@nostrogaleto",
  ifood:
    "https://www.ifood.com.br/delivery/porto-alegre-rs/galeteria-nostro-galeto-sao-geraldo/ac8cc7a0-ee95-40ce-8e5d-acd214fc087d",
  maps: "https://www.google.com/maps/search/?api=1&query=Galeteria+Nostro+Galeto+Av.+Bahia+581+S%C3%A3o+Geraldo+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Galeteria%20Nostro%20Galeto%2C%20Av.%20Bahia%20581%2C%20S%C3%A3o%20Geraldo%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Galeteria+Nostro+Galeto+Av.+Bahia+581+Porto+Alegre",
  address: {
    street: "Av. Bahia, 581",
    neighborhood: "São Geraldo",
    city: "Porto Alegre",
    state: "RS",
    cep: "90240-591",
    nearby: "Quarto Distrito · Zona Norte",
  },
  rating: "4,7",
  reviewsCount: "+4.500",
  ifoodRating: "4,9",
  priceRange: "R$ 60–100",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Rodízio" },
  { href: "#sobre", label: "A casa" },
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

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(11, 30), endMin: hm(15, 30), label: "11h30 – 15h30" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(18, 30), endMin: hm(22, 30), label: "18h30 – 22h30" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(18, 30), endMin: hm(22, 30), label: "18h30 – 22h30" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(18, 30), endMin: hm(22, 30), label: "18h30 – 22h30" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14, 30), label: "11h30 – 14h30" },
      { startMin: hm(18, 30), endMin: hm(22, 30), label: "18h30 – 22h30" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(11, 30), endMin: hm(15), label: "11h30 – 15h" },
      { startMin: hm(18, 30), endMin: hm(22, 30), label: "18h30 – 22h30" },
    ],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas (Google / Restaurant Guru). Confirme pelo telefone ou Instagram.";
