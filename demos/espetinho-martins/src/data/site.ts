export const SITE = {
  name: "Espetinho Bar do Martins",
  shortName: "Martins",
  headline: "Martins",
  line: "Espetinho Bar",
  tagline: "O Kachurrasco da Circular. Espeto de esquina na Vila Jardim.",
  neighborhood: "Vila Jardim",
  city: "Porto Alegre",
  state: "RS",
  address: "Av. Circular, 593 — Vila Jardim, Porto Alegre",
  street: "Av. Circular, 593",
  cep: "91320-180",
  phoneDisplay: "(51) 99426-1019",
  phoneTel: "+5551994261019",
  whatsapp:
    "https://wa.me/5551994261019?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20o%20card%C3%A1pio%20de%20espetos%20do%20Martins.",
  instagram: "https://www.instagram.com/espetinhobardomartins/",
  instagramHandle: "@espetinhobardomartins",
  maps: "https://www.google.com/maps/search/?api=1&query=Espetinho+Bar+do+Martins+Av+Circular+593+Vila+Jardim+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Circular%20593%2C%20Vila%20Jardim%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hoursLabel: "Seg–sáb 18h–0h · domingo fechado",
  identity:
    "Espetinho na Vila Jardim. No Comida di Buteco 2026 com Kachurrasco. Nome do dono + ofício de espeto — identidade clássica de boteco de esquina.",
  pitch:
    "O Martins está no Comida di Buteco com o Kachurrasco e ainda não tem site. Uma página com os espetos na Circular resolve.",
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#kachurrasco", label: "Kachurrasco" },
  { href: "#cardapio", label: "Espetos" },
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
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
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
  "Horário da ficha do Comida di Buteco. Confirme no WhatsApp se o espeto já está no fogo.";

export const ESPETOS = [
  {
    id: "kachurrasco",
    name: "Kachurrasco",
    note: "Petisco oficial do Comida di Buteco 2026. Pão alongado, carne de espeto e molho verde da casa.",
    price: "R$ 40 no concurso",
    official: true,
  },
  {
    id: "carne",
    name: "Espeto de carne",
    note: "O ofício da casa. Pede no balcão.",
    price: "Consulte",
    official: false,
  },
  {
    id: "frango",
    name: "Espeto de frango",
    note: "Noite de esquina, espeto no ponto.",
    price: "Consulte",
    official: false,
  },
  {
    id: "coracao",
    name: "Coração",
    note: "Clássico de espetinho de rua.",
    price: "Consulte",
    official: false,
  },
  {
    id: "linguica",
    name: "Linguiça",
    note: "Pra acompanhar o primeiro copo.",
    price: "Consulte",
    official: false,
  },
  {
    id: "queijo",
    name: "Queijo coalho",
    note: "Na brasa, com o molho da casa.",
    price: "Consulte",
    official: false,
  },
  {
    id: "medalhao",
    name: "Medalhão",
    note: "Quando a fome é de verdade.",
    price: "Consulte",
    official: false,
  },
  {
    id: "misto",
    name: "Misto da noite",
    note: "Monta com o Martins no WhatsApp.",
    price: "Consulte",
    official: false,
  },
] as const;
