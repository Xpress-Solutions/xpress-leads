export const SITE = {
  name: "Poeta Bar",
  shortName: "Poeta",
  tagline: "Chope · Xis · Vanguarda",
  headline: "Poeta",
  subheadline: "Chope, xis e vanguarda na Rua da Praia. O Centro Histórico no copo — todos os dias.",
  phoneDisplay: "(51) 98902-5645",
  phoneTel: "+5551989025645",
  whatsapp:
    "https://wa.me/5551989025645?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Poeta%20Bar.",
  instagram: "https://www.instagram.com/poetabarbr/",
  instagramHandle: "@poetabarbr",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Poeta+Bar+Rua+dos+Andradas+777+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Poeta%20Bar%2C%20Rua%20dos%20Andradas%20777%2C%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Poeta+Bar+Rua+dos+Andradas+Porto+Alegre",
  address: {
    street: "Rua dos Andradas, 777",
    unit: "Loja 783",
    neighborhood: "Centro Histórico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90020-003",
    nearby: "Rua da Praia · perto da Casa de Cultura Mario Quintana e do Acervo Elis Regina",
  },
  rating: "4,6",
  reviewsCount: "+150",
  priceRange: "R$ 20–40",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#coco-crispy", label: "Cocó Crispy" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde fica" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[]
};

const hm = (h: number, m = 0) => h * 60 + m;

const DAY: DaySchedule["slots"] = [
  { startMin: hm(11), endMin: hm(22, 30), label: "11h – 22h30" },
];

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: DAY },
  1: { label: "Segunda", short: "Seg", slots: DAY },
  2: { label: "Terça", short: "Ter", slots: DAY },
  3: { label: "Quarta", short: "Qua", slots: DAY },
  4: { label: "Quinta", short: "Qui", slots: DAY },
  5: { label: "Sexta", short: "Sex", slots: DAY },
  6: { label: "Sábado", short: "Sáb", slots: DAY },
};

export const HOURS_NOTE =
  "Horário do Comida di Buteco 2026: todos os dias, 11h–22h30. O Instagram às vezes lista até 23h — confirme no WhatsApp.";
