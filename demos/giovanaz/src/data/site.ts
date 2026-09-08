export const SITE = {
  name: "Churrascaria Giovanaz",
  shortName: "Giovanaz",
  tagline: "Espeto corrido na Cidade Baixa — Porto Alegre",
  headline: "Giovanaz",
  kicker: "Churrascaria",
  subheadline:
    "Espeto corrido clássico ao lado da Praça Garibaldi. Fila na porta, PIX na mesa.",
  phoneDisplay: "(51) 3227-4217",
  phoneTel: "+555132274217",
  whatsapp:
    "https://wa.me/555132274217?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Giovanaz.",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria+Giovanaz+Avenida+Venâncio+Aires+10+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Churrascaria%20Giovanaz%2C%20Avenida%20Venâncio%20Aires%2010%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria+Giovanaz+Venâncio+Aires+10+Porto+Alegre",
  address: {
    street: "Av. Venâncio Aires, 10",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90040-190",
    nearby: "Ao lado da Praça Garibaldi",
  },
  rating: "4,6",
  reviewsCount: "7.962",
  payment: "Dinheiro ou PIX · sem cartão",
} as const;

export const NAV_LINKS = [
  { href: "#rodizio", label: "Rodízio" },
  { href: "#sobre", label: "A casa" },
  { href: "#galeria", label: "Fotos" },
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
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(11, 15), endMin: hm(15, 30), label: "11h15 – 15h30" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(11, 15), endMin: hm(14, 30), label: "11h15 – 14h30" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(11, 15), endMin: hm(14, 30), label: "11h15 – 14h30" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(11, 15), endMin: hm(14, 30), label: "11h15 – 14h30" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(11, 15), endMin: hm(14, 30), label: "11h15 – 14h30" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(11, 15), endMin: hm(15), label: "11h15 – 15h" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
};

export const HOURS_NOTE =
  "Horário conforme o Guia Porto Alegre. Domingo só almoço. Segunda fechado. Confirme no Google antes de sair.";

export const CUTS = [
  { name: "Maminha", note: "No ponto — e com crosta de alho quando passa" },
  { name: "Vazio", note: "O corte que a mesa pede de novo" },
  { name: "Costela", note: "De gado, espeto clássico da casa" },
  { name: "Galeto", note: "Bem assado, pele crocante" },
  { name: "Lombinho", note: "Porco no espeto" },
  { name: "Salsichão", note: "O primeiro a chegar na mesa" },
  { name: "Fraldinha", note: "Passa no corrido da casa" },
  { name: "Coração", note: "De noite e no domingo" },
] as const;

export const SIDES = [
  "Maionese caseira de batata",
  "Polenta frita crocante",
  "Cebola em conserva",
  "Arroz soltinho",
  "Alface com vinagrete",
  "Torta de sorvete",
] as const;

export const REVIEWS = [
  {
    text: "Entendi por que é espeto corrido: os garçons não param. Um atrás do outro. Maionese e polenta frita no ponto. Esperei na fila de domingo e valeu.",
    source: "Comentário público · carta.menu",
  },
  {
    text: "Casa simples, carne boa. Vazio é um espetáculo. Os garçons voam e o prato não fica vazio. Polenta crocante, maionese da casa.",
    source: "Comentário público · locais do Brasil",
  },
  {
    text: "Toalha de papel, cebola na conserva, arroz soltinho. Sem cartão — levei dinheiro e paguei no PIX. Clássico de Porto Alegre.",
    source: "Síntese · PrefPOA / Destino POA",
  },
] as const;
