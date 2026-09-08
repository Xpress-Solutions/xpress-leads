export const SITE = {
  name: "Olivos 657",
  shortName: "Olivos",
  number: "657",
  tagline: "A porta não avisa o que tem dentro.",
  headline: "Olivos",
  subheadline:
    "Gastrobar intimista na Rua da República. Coquetelaria, vinhos de bodegas pequenas do RS e luz baixa — inspirado nos bares de Buenos Aires.",
  description:
    "Um dos pioneiros da coquetelaria em Porto Alegre. Porta discreta na Cidade Baixa, ambiente fechado, serviço de mesa. Completa 14 anos em 2026.",
  phoneDisplay: "(51) 3372-6256",
  phoneTel: "+555133726256",
  whatsapp:
    "https://wa.me/555133726256?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20reservar%20uma%20mesa%20no%20Olivos%20657.",
  instagram: "https://www.instagram.com/olivos657/",
  instagramHandle: "@olivos657",
  maps: "https://www.google.com/maps/search/?api=1&query=Olivos+657+Rua+da+Rep%C3%BAblica+657+Cidade+Baixa+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Olivos%20657%2C%20Rua%20da%20Rep%C3%BAblica%20657%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua da República, 657",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90050-321",
    nearby: "Perto do Solar Lopo Gonçalves, no coração da noite da Cidade Baixa.",
    full: "Rua da República, 657 — Cidade Baixa, Porto Alegre - RS",
  },
  rating: "4,6",
  reviewsCount: "792",
  priceRange: "R$ 60–140",
  founded: "2012",
  years: "14 anos em 2026",
  capacity: "cerca de 70 lugares",
  award: "Vencedor Bar e Boteco — Prêmio Bom Gourmet RS 2025",
  awardDrink: "Indicado Carta de Drinks — Prêmio Bom Gourmet RS 2025",
  partners: {
    bar: "Frederico Muller",
    kitchen: "Marina Tosin",
  },
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#carta", label: "Carta" },
  { href: "#casa", label: "A casa" },
  { href: "#sobre", label: "Sobre" },
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
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: { label: "Terça", short: "Ter", slots: null },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18, 30), endMin: hm(25), label: "18h30 – 1h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(18, 30), endMin: hm(25), label: "18h30 – 1h" }],
  },
};

export const HOURS_NOTE =
  "Horários conforme Bom Gourmet 2026. Fontes mais antigas ainda citam terça. Confirme no Google ou no WhatsApp da casa.";
