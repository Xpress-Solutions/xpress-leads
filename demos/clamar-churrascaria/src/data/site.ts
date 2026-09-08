export const SITE = {
  name: "Clamar Churrascaria",
  shortName: "Clamar",
  tagline: "Churrascaria na Avenida da Azenha.",
  headline: "CLAMAR",
  subheadline:
    "Almoço e jantar no 1044 — carne no prato, porta na avenida, sem folclore de CTG.",
  phoneDisplay: "(51) 3019-6688",
  phoneTel: "+555130196688",
  whatsapp:
    "https://wa.me/555130196688?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20o%20que%20tem%20hoje%20na%20Clamar.",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Av.+da+Azenha,+1044,+Azenha,+Porto+Alegre+-+RS",
  mapsEmbed:
    "https://maps.google.com/maps?q=Avenida%20da%20Azenha%201044%2C%20Azenha%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. da Azenha, 1044",
    neighborhood: "Azenha",
    city: "Porto Alegre",
    state: "RS",
    cep: "90160-006",
    nearby: "Corredor comercial da Azenha — entre Ipiranga e José de Alencar",
  },
  founded: "2001",
  founder: "Claudemar Fernandes",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#turnos", label: "Almoço e jantar" },
  { href: "#sobre", label: "A casa" },
  { href: "#carnes", label: "Carnes" },
  { href: "#localizacao", label: "Como chegar" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

const weekdaySlots = [
  { startMin: hm(12), endMin: hm(15), label: "12h – 15h" },
  { startMin: hm(19), endMin: hm(23), label: "19h – 23h" },
];

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: null },
  1: { label: "Segunda", short: "Seg", slots: weekdaySlots },
  2: { label: "Terça", short: "Ter", slots: weekdaySlots },
  3: { label: "Quarta", short: "Qua", slots: weekdaySlots },
  4: { label: "Quinta", short: "Qui", slots: weekdaySlots },
  5: { label: "Sexta", short: "Sex", slots: weekdaySlots },
  6: { label: "Sábado", short: "Sáb", slots: weekdaySlots },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas. Confirme pelo telefone antes de sair — a casa ainda não publica cardápio online.";

export const CORTES = [
  {
    name: "Picanha",
    note: "Capa de gordura, fogo curto — o corte que a avenida pede no almoço.",
  },
  {
    name: "Costela",
    note: "Tempo de brasa, prato de jantar. Confirme se saiu no dia.",
  },
  {
    name: "Alcatra e maminha",
    note: "Cortes de salão, à la carte — sem fila de espeto de hotel.",
  },
  {
    name: "Linguiça e acompanhamentos",
    note: "Arroz, farofa, o que o Claudemar mandou para a mesa.",
  },
] as const;
