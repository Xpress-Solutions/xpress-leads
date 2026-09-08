export const SITE = {
  name: "Churrascaria Princesa Isabel",
  shortName: "Princesinha",
  tagline: "Espeto corrido na esquina da Princesa Isabel — Santana, Porto Alegre",
  headline: "Princesinha",
  subheadline:
    "Espeto corrido na esquina da Princesa Isabel com a São Luís. Desde 1985, fila no almoço e carne no ponto.",
  phoneDisplay: "(51) 3223-3012",
  phoneTel: "+555132233012",
  whatsapp:
    "https://wa.me/5551999665641?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20do%20espeto%20corrido%20da%20Princesinha.",
  instagram: "https://www.instagram.com/churrascaria_princesinha/",
  instagramHandle: "@churrascaria_princesinha",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria+Princesa+Isabel+Rua+S%C3%A3o+Lu%C3%ADs+410+Santana+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Churrascaria%20Princesa%20Isabel%2C%20Rua%20S%C3%A3o%20Lu%C3%ADs%20410%2C%20Santana%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria+Princesa+Isabel+Rua+S%C3%A3o+Lu%C3%ADs+410+Porto+Alegre",
  address: {
    street: "Rua São Luís, 410",
    neighborhood: "Santana",
    city: "Porto Alegre",
    state: "RS",
    cep: "90620-170",
    nearby: "Esquina com a Avenida Princesa Isabel",
  },
  rating: "4,6",
  reviewsCount: "+3.100",
  founded: "1985",
  payment: "Somente dinheiro e PIX — a casa não aceita cartão.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Espeto" },
  { href: "#mesa", label: "A mesa" },
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

/** Horários do Destino POA / Destemperados (abr/2026). Instagram às vezes marca terça fechada. */
export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(11), endMin: hm(15), label: "11h – 15h" }],
  },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(11), endMin: hm(14), label: "11h – 14h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(11), endMin: hm(14), label: "11h – 14h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(11), endMin: hm(14), label: "11h – 14h" },
      { startMin: hm(19), endMin: hm(22), label: "19h – 22h" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(11), endMin: hm(14), label: "11h – 14h" },
      { startMin: hm(19), endMin: hm(22), label: "19h – 22h" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(11), endMin: hm(14), label: "11h – 14h" },
      { startMin: hm(19), endMin: hm(22), label: "19h – 22h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [
      { startMin: hm(11), endMin: hm(15), label: "11h – 15h" },
      { startMin: hm(19), endMin: hm(22), label: "19h – 22h" },
    ],
  },
};

export const HOURS_NOTE =
  "Seg–ter só almoço · qua–sáb almoço e jantar · domingo almoço. Instagram e o Google às vezes marcam terça fechada — confirme no dia.";
