export const SITE = {
  name: "Churrascaria Roda de Carreta",
  shortName: "Roda de Carreta",
  tagline: "Espeto corrido no galpão do 35 CTG.",
  headline: "Roda de Carreta",
  subheadline:
    "Espeto corrido no galpão do 35 CTG — 16 cortes, comida campeira e invernada no palco.",
  phoneDisplay: "(51) 3336-0817",
  phoneTel: "+555133360817",
  whatsapp:
    "https://wa.me/555133360817?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20a%20Roda%20de%20Carreta.",
  instagram: "https://www.instagram.com/churrascariarodadecarreta35ctg/",
  instagramHandle: "@churrascariarodadecarreta35ctg",
  maps: "https://www.google.com/maps/search/?api=1&query=Churrascaria+Roda+de+Carreta+Avenida+Ipiranga+5300+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Churrascaria%20Roda%20de%20Carreta%2C%20Avenida%20Ipiranga%205300%2C%20Jardim%20Bot%C3%A2nico%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria+Roda+de+Carreta+Avenida+Ipiranga+5300+Porto+Alegre",
  address: {
    street: "Avenida Ipiranga, 5300",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90610-000",
    nearby: "No 35 CTG — entre o Centro de Tradições e o Bourbon Ipiranga",
  },
  rating: "4,1",
  reviewsCount: "3.325",
  founded: "1986",
  foundedNote: "1º de dezembro de 1986",
  capacity: "~500 lugares",
  cuts: 16,
  priceRange: "R$ 40–140",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Espeto" },
  { href: "#cultura", label: "Invernada" },
  { href: "#sobre", label: "A casa" },
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
    slots: [{ startMin: hm(11, 30), endMin: hm(15), label: "11h30 – 15h" }],
  },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14), label: "11h30 – 14h" },
      { startMin: hm(19, 30), endMin: hm(22), label: "19h30 – 22h" },
    ],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14), label: "11h30 – 14h" },
      { startMin: hm(19, 30), endMin: hm(22), label: "19h30 – 22h" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14), label: "11h30 – 14h" },
      { startMin: hm(19, 30), endMin: hm(22), label: "19h30 – 22h" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14), label: "11h30 – 14h" },
      { startMin: hm(19, 30), endMin: hm(22), label: "19h30 – 22h" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14), label: "11h30 – 14h" },
      { startMin: hm(19, 30), endMin: hm(22), label: "19h30 – 22h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(11, 30), endMin: hm(14), label: "11h30 – 14h" },
      { startMin: hm(19, 30), endMin: hm(22), label: "19h30 – 22h" },
    ],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas (Guia Porto Alegre / Google). Sábado de almoço às vezes aparece até 14h15. Confirme no telefone antes de ir.";

export const CUTS = [
  { name: "Picanha", note: "Inclusive com alho no espeto" },
  { name: "Maminha", note: "Corte de casa no rodízio" },
  { name: "Vazio", note: "Clássico de espeto corrido" },
  { name: "Cupim", note: "Lento na brasa" },
  { name: "Costela", note: "Assada no espeto" },
  { name: "Ovelha", note: "Entre os 16 cortes" },
  { name: "Frango", note: "E coração no espeto" },
  { name: "Linguiça", note: "Copa corrida" },
  { name: "Pão de alho", note: "Assado no espeto" },
] as const;

export const BUFFET = [
  "Arroz de carreteiro",
  "Feijão",
  "Aipim",
  "Farofa",
  "Saladas do buffet-roda",
  "Cebola frita na mesa",
] as const;

export const DESSERTS = ["Ambrosia", "Pudim de leite", "Sagu"] as const;

export const GALLERY = [
  { src: "/fotos/sala.jpg", alt: "Salão de madeira com lustres em forma de roda de carreta" },
  { src: "/fotos/danca.jpg", alt: "Invernada no palco do galpão — peões com bastão" },
  { src: "/fotos/espeto.jpg", alt: "Garçom serve costela no espeto corrido" },
  { src: "/fotos/buffet.jpg", alt: "Buffet circular no formato da roda de carreta" },
  { src: "/fotos/prendas.jpg", alt: "Prendas e peões na dança tradicionalista" },
  { src: "/fotos/picanha.jpg", alt: "Picanha no espeto" },
  { src: "/fotos/estatua.jpg", alt: "Estátua do gaúcho na fachada do 35 CTG" },
  { src: "/fotos/linguica.jpg", alt: "Linguiça e coração no espeto" },
] as const;
