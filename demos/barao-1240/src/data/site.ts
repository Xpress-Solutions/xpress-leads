export const SITE = {
  name: "Barão 1240",
  shortName: "Barão",
  number: "1240",
  kicker: "Cafeteria · Restaurante · Jardim Botânico",
  headline: "Barão 1240",
  line: "Café da manhã ao almoço de bairro, na Barão do Amazonas.",
  identity:
    "Cafeteria-restaurante de rua: café da manhã ao fim da tarde. Entre as 31 melhores cafeterias de Porto Alegre no Restaurant Guru. Atmosfera calma, atendimento elogiado, ponto fixo na via comercial do Jardim Botânico.",
  phoneDisplay: "(51) 3533-1240",
  phoneTel: "+555135331240",
  whatsapp:
    "https://wa.me/555135331240?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20o%20que%20tem%20hoje%20no%20Bar%C3%A3o%201240.",
  instagram: "https://www.instagram.com/barao1240/",
  instagramHandle: "@barao1240",
  maps: "https://www.google.com/maps/search/?api=1&query=Bar%C3%A3o%201240%20Rua%20Bar%C3%A3o%20do%20Amazonas%201240%20Porto%20Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Bar%C3%A3o%201240%2C%20Rua%20Bar%C3%A3o%20do%20Amazonas%201240%2C%20Jardim%20Bot%C3%A2nico%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Bar%C3%A3o%201240%20Rua%20Bar%C3%A3o%20do%20Amazonas%20Porto%20Alegre",
  address: {
    street: "Rua Barão do Amazonas, 1240",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90670-001",
    nearby: "Na principal via comercial do bairro",
  },
  rating: "4,6",
  reviewsCount: "162",
  priceRange: "R$ 20–40",
  hoursLabel: "Seg–sáb 7h–18h30 · domingo fechado",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#hoje", label: "Hoje" },
  { href: "#cardapio", label: "O que serve" },
  { href: "#encomenda", label: "Encomenda" },
  { href: "#sobre", label: "A casa" },
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

const DAYTIME = [{ startMin: hm(7), endMin: hm(18, 30), label: "7h – 18h30" }];

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: null },
  1: { label: "Segunda", short: "Seg", slots: DAYTIME },
  2: { label: "Terça", short: "Ter", slots: DAYTIME },
  3: { label: "Quarta", short: "Qua", slots: DAYTIME },
  4: { label: "Quinta", short: "Qui", slots: DAYTIME },
  5: { label: "Sexta", short: "Sex", slots: DAYTIME },
  6: { label: "Sábado", short: "Sáb", slots: DAYTIME },
};

export const HOURS_NOTE =
  "Horário público: segunda a sábado, 7h–18h30. Domingo fechado. Confirme o expediente do dia no WhatsApp.";
