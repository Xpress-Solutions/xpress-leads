export const SITE = {
  name: "Fogão Campeiro Petrópolis",
  shortName: "Fogão Campeiro",
  headline: "Fogão Campeiro",
  subheadline: "A melhor comida campeira e caseira.",
  tagline: "Almoço no casarão de 1950 — Petrópolis, Porto Alegre",
  phoneDisplay: "(51) 3022-4942",
  phoneTel: "+555130224942",
  whatsapp:
    "https://wa.me/555130224942?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20do%20almo%C3%A7o%20de%20hoje%20no%20Fog%C3%A3o%20Campeiro%20Petr%C3%B3polis.",
  instagram: "https://www.instagram.com/fogaocampeiropetropolis/",
  instagramHandle: "@fogaocampeiropetropolis",
  maps: "https://www.google.com/maps/search/?api=1&query=Fog%C3%A3o%20Campeiro%20Petr%C3%B3polis%20Av.%20Lageado%201265%20Porto%20Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Fog%C3%A3o%20Campeiro%20Petr%C3%B3polis%2C%20Av.%20Lageado%201265%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Lageado, 1265",
    neighborhood: "Petrópolis",
    city: "Porto Alegre",
    state: "RS",
    cep: "90460-110",
    nearby: "No casarão: suba as escadas do 1265.",
  },
  rating: "4,9",
  reviewsCount: "no Google",
  priceWeekday: "R$ 40",
  priceWeekend: "R$ 50",
  priceKgWeekday: "R$ 94,90",
  priceKgWeekend: "R$ 99,90",
  priceNote: "Valores publicados pelo JC em abril de 2025. Confirme no salão ou no Instagram.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#buffet", label: "Buffet" },
  { href: "#sobre", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Onde" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

const lunch = [{ startMin: hm(11), endMin: hm(14, 45), label: "11h – 14h45" }];

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: null },
  1: { label: "Segunda", short: "Seg", slots: lunch },
  2: { label: "Terça", short: "Ter", slots: lunch },
  3: { label: "Quarta", short: "Qua", slots: lunch },
  4: { label: "Quinta", short: "Qui", slots: lunch },
  5: { label: "Sexta", short: "Sex", slots: lunch },
  6: { label: "Sábado", short: "Sáb", slots: lunch },
};

export const HOURS_NOTE = "Segunda a sábado, só almoço. Domingo fechado.";

export const BUFFET = [
  {
    name: "Feijoada",
    note: "Todos os dias no balcão.",
    detail: "Carro-chefe da casa, ao lado da carne de panela.",
  },
  {
    name: "Carne de panela",
    note: "Todos os dias no balcão.",
    detail: "Molho de avó, o outro destaque fixo do buffet.",
  },
  {
    name: "Carreteiro de charque",
    note: "Culinária gaúcha no giro.",
    detail: "Arroz de charque como a lousa promete: campeira e caseira.",
  },
  {
    name: "Lasanha de abacaxi",
    note: "Sexta-feira.",
    detail: "Sobremesa que a filial do Petrópolis adotou de cara.",
  },
] as const;

export const QUICK = [
  { title: "Só almoço", text: "Seg–sáb · 11h às 14h45" },
  { title: "Buffet + quilo", text: "Livre ou por peso, no salão" },
  { title: "Casarão 1950", text: "Av. Lageado, 1265" },
  { title: "2ª geração", text: "Luana Benincá na filial" },
] as const;
