import brand from "../../brand.json";

export const BRAND = brand;

export const SITE = {
  name: brand.name,
  shortName: "Arvo",
  tagline: "Bar e parrilla no Centro Histórico — Porto Alegre",
  headline: "ARVO",
  subheadline: "O Melhor Sanduba do Mundo na Fernando Machado.",
  phoneDisplay: "(51) 98010-1187",
  phoneTel: "+5551980101187",
  whatsapp:
    "https://wa.me/5551980101187?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Arvo%20Bar.",
  instagram: "https://www.instagram.com/arvobar/",
  instagramHandle: "@arvobar",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Arvo+Bar+Coronel+Fernando+Machado+1200+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Arvo%20Bar%2C%20Rua%20Coronel%20Fernando%20Machado%201200%2C%20Centro%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "R. Coronel Fernando Machado, 1200",
    neighborhood: "Centro Histórico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90010-320",
    nearby: "Esquina com a Coronel Genuíno — antiga rua do Arvoredo",
    full: "Coronel Fernando Machado, 1200 — Centro, Porto Alegre",
  },
  rating: "4,7",
  reviewsCount: "39",
  hoursLead: "Ter–dom 18h–0h",
  identity: brand.positioning,
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sanduba", label: "Sanduba" },
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
    slots: [{ startMin: hm(16), endMin: hm(24), label: "16h – 0h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
};

export const HOURS_NOTE =
  "Terça a domingo, das 18h à meia-noite (lead). Listagens também apontam domingo a partir das 16h. Confirme no WhatsApp.";

export const SANDUBA = {
  name: "O Melhor Sanduba do Mundo",
  contest: "Comida di Buteco 2026",
  description:
    "Baguete crocante com dois recheios: entrecôte assado na brasa de um lado e queijo coalho braseado do outro. Maionese da casa, rúcula, agrião, cebola roxa crocante, tomate confitado e muçarela gratinada.",
};

export const OFICIO = [
  {
    title: "Sanduba",
    text: "Carro-chefe desde a abertura: carne na parrilla, pão grelhado, queijo que puxa fio.",
  },
  {
    title: "Parrilla",
    text: "Lenha à vista. Linguiça, picanha, assado de tira e espetinho feitos na frente.",
  },
  {
    title: "A rua",
    text: "Mesas na calçada, samba de domingo e a Fernando Machado inteira na porta.",
  },
] as const;
