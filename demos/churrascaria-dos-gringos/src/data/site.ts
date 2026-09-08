export const SITE = {
  name: "Churrascaria dos Gringos",
  shortName: "Dos Gringos",
  legalName: "Churrascaria & Pizzaria dos Gringos",
  tagline: "Rodízio clássico na Azenha — Porto Alegre/RS",
  headline: "Dos Gringos",
  subheadline: "O sabor que conquista.",
  lead: "Rodízio clássico familiar na Av. Bento Gonçalves: galeto, costela, vazio e maminha no espeto. À noite, a pizza entra junto. Nome bem-humorado, mesa sem pressa.",
  phoneDisplay: "(51) 3219-7334",
  phoneTel: "+555132197334",
  whatsapp:
    "https://wa.me/555132197334?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20sobre%20o%20rod%C3%ADzio%20da%20Churrascaria%20dos%20Gringos.",
  instagram: "https://www.instagram.com/churrascaria.dosgringos/",
  instagramHandle: "@churrascaria.dosgringos",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria%20dos%20Gringos%20Av.%20Bento%20Gon%C3%A7alves%20303%20Azenha%20Porto%20Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Churrascaria%20dos%20Gringos%2C%20Avenida%20Bento%20Gon%C3%A7alves%20303%2C%20Azenha%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria%20dos%20Gringos%20Av.%20Bento%20Gon%C3%A7alves%20303%20Porto%20Alegre",
  address: {
    street: "Av. Bento Gonçalves, 303",
    neighborhood: "Azenha",
    city: "Porto Alegre",
    state: "RS",
    cep: "90650-002",
    nearby: "No eixo da Bento, entre o Centro e a PUC. Estacionamento próprio.",
  },
  rating: "4,6",
  reviewsCount: "3.151",
  lunchPrice: "R$ 79,90",
  dinnerPrice: "R$ 89,90",
  priceNote:
    "Almoço de terça a sexta R$ 79,90. Jantar de fim de semana e feriado R$ 89,90 — valores divulgados pelo Destemperados em junho de 2026. Confirme na casa.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#rodizio", label: "Rodízio" },
  { href: "#noite", label: "À noite" },
  { href: "#sobre", label: "A casa" },
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

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(11), endMin: hm(15), label: "11h – 15h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(11), endMin: hm(14), label: "11h – 14h" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(11), endMin: hm(14), label: "11h – 14h" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(11), endMin: hm(14), label: "11h – 14h" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(11), endMin: hm(14), label: "11h – 14h" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(11), endMin: hm(15), label: "11h – 15h" },
      { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
    ],
  },
};

export const HOURS_NOTE =
  "Segunda fechada. Domingo só almoço — e costuma ter fila. Horários conforme Destemperados e listagens públicas.";

export const CORTES = [
  {
    name: "Maminha",
    note: "Maciez e ponto que o Destemperados destacou no almoço.",
  },
  {
    name: "Vazio",
    note: "O queridinho gaúcho. Passa mais de uma vez — e some.",
  },
  {
    name: "Lombinho de porco",
    note: "Quem roubou a cena na matéria: suculento, ‘só mais um pedaço’.",
  },
  {
    name: "Costela",
    note: "Clássico do espeto corrido, no ritmo do salão.",
  },
  {
    name: "Galeto",
    note: "Presença de casa familiar — o corte que o nome da mesa pede.",
  },
  {
    name: "Coraçãozinho",
    note: "Obrigatório em churrasco tradicional. Bem assado, sem discussão.",
  },
  {
    name: "Salsichão",
    note: "Mini-espeto de almoço, junto com o restante do rodízio.",
  },
] as const;

export const ACOMPANHAMENTOS = [
  "Maionese caseira",
  "Arroz soltinho",
  "Polenta frita",
  "Aipim sequinho",
  "Saladas",
  "Feijão no almoço de terça a sexta",
] as const;

export const REVIEWS = [
  {
    text: "Perguntamos aos gaúchos e a resposta foi unânime: aqui é churrasco raiz. Carne no ponto, atendimento de primeira e sobremesa que ninguém avisa — a pizza de gemada some da mesa.",
    source: "Tema recorrente no Google",
  },
  {
    text: "Lugar simples, tem onde estacionar e o custo-benefício que a Bento promete. Aceita cartão. A gente descobriu este ano — a casa já entrega isso há muito tempo.",
    source: "Tema recorrente no Google",
  },
  {
    text: "A maionese caseira chega primeiro. Depois o vazio, o coraçãozinho e o lombinho. Domingo tem fila. Tem motivo.",
    source: "Destemperados + quem almoça na Azenha",
  },
] as const;
