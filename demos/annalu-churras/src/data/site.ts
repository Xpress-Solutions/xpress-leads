export const SITE = {
  name: "Annalu Churras Pub",
  shortName: "Annalu",
  headline: "Annalu",
  line: "Espeto, brasa e noite no Jardim Itu.",
  neighborhood: "Jardim Itu Sabará",
  city: "Porto Alegre",
  state: "RS",
  address: "Rua Gomes de Freitas, 421 — Jardim Itu Sabará, Porto Alegre",
  street: "Rua Gomes de Freitas, 421",
  phoneDisplay: "(51) 99585-8258",
  phoneTel: "+5551995858258",
  whatsapp:
    "https://wa.me/5551995858258?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20do%20card%C3%A1pio%20da%20Annalu.",
  maps: "https://www.google.com/maps/search/?api=1&query=Annalu+Churras+Pub+Gomes+de+Freitas+421+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Annalu%20Churras%20Pub%2C%20Rua%20Gomes%20de%20Freitas%20421%2C%20Jardim%20Itu%20Sabar%C3%A1%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hoursLabel: "Seg–sáb 18h–23h · domingo fechado",
  identity:
    "Churras pub no Jardim Itu Sabará. No Comida di Buteco 2026 com Espetinho Poro e Brasa. Nome próprio, ofício de espeto e noite de bairro residencial — identidade clara fora do Centro.",
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#poro-e-brasa", label: "Poro e Brasa" },
  { href: "#cardapio", label: "Petiscos" },
  { href: "#sobre", label: "A casa" },
  { href: "#localizacao", label: "Onde" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: null },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
};

export const HOURS_NOTE =
  "Horário da ficha do Comida di Buteco. Confirme no WhatsApp se a brasa já está acesa.";

export const DISHES = [
  {
    id: "poro-e-brasa",
    year: "2026",
    name: "Espetinho Poro e Brasa",
    contest: "Comida di Buteco 2026",
    photo: "/fotos/poro-brasa.jpg",
    alt: "Espetinho Poro e Brasa — espeto com molho rústico, batata e creme de ervas. Foto Israh Ramos / Comida di Buteco",
    lead: "O petisco da edição. Espeto na brasa, molho de tomate rústico, batata dourada e creme verde de ervas — o poró e a brasa no mesmo prato.",
    note: "Tema verduras do circuito 2026. Foto oficial de Israh Ramos, Revista Sabores do Sul.",
    price: "R$ 40 no concurso",
  },
  {
    id: "pao-gauderio",
    year: "2024",
    name: "Pão Gaudério de Carne",
    contest: "Comida di Buteco 2024",
    photo: "/fotos/pao-gauderio.jpg",
    alt: "Pão Gaudério de carne — pão d’água com fraldinha, muçarela e maionese. Foto Israh Ramos / Comida di Buteco",
    lead: "Pão d’água com cream cheese, fraldinha, muçarela, molho da casa e orégano. Fatias em volta do prato, maionese no centro.",
    note: "Receita publicada no G1 com foto de Israh Ramos. Molho especial com leite zero lactose, salsa, alho e páprica.",
    price: "Petisco da casa",
  },
] as const;
