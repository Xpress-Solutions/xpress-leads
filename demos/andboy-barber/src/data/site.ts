export const SITE = {
  name: "Andboy Barber Shop",
  firstName: "Andboy",
  tagline: "A casa de um barbeiro.",
  headline: "Andboy",
  subhead: "BARBER SHOP",
  phrase: "Desde 2014 na Cruz Jobim — a cadeira do Andboy, não uma rede.",
  phoneDisplay: "(51) 98442-4111",
  phoneTel: "+5551984424111",
  whatsapp:
    "https://wa.me/5551984424111?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20agendar%20com%20o%20Andboy.",
  booksy:
    "https://booksy.com/pt-br/202979_andboy-barber-shop_barbearias_804125_porto-alegre",
  instagram: "https://www.instagram.com/andboybarber/",
  instagramHandle: "@andboybarber",
  maps: "https://www.google.com/maps/search/?api=1&query=Andboy%20Barber%20Shop%20Rua%20Cruz%20Jobim%20623%20Porto%20Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Andboy%20Barber%20Shop%2C%20Rua%20Cruz%20Jobim%20623%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Cruz Jobim, 623",
    neighborhood: "Jardim Itu",
    city: "Porto Alegre",
    state: "RS",
    cep: "91380-360",
  },
  rating: "5,0",
  reviewsCount: "176",
  founded: "2014",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#ritual", label: "Ritual" },
  { href: "#andboy", label: "O Andboy" },
  { href: "#galeria", label: "Casa" },
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
  0: { label: "Domingo", short: "Dom", slots: null },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(19), label: "9h – 19h" }],
  },
};

export const HOURS_NOTE =
  "Horários do Booksy (JSON-LD). Agenda pelo app — confirme o horário disponível.";

export const SERVICES = [
  {
    name: "Corte Cabelo",
    price: "R$ 53",
    time: "30 min",
    note: "Tesoura e máquina, no tempo do Andboy.",
  },
  {
    name: "Barba Navalha",
    price: "R$ 48",
    time: "30 min",
    note: "Toalha quente, navalhete e o ritual exclusivo da casa.",
    featured: true,
  },
  {
    name: "Corte + Barba Navalha",
    price: "R$ 101",
    time: "1h",
    note: "A cadeira completa: corte e navalha no mesmo horário.",
  },
  {
    name: "Corte Máquina",
    price: "R$ 43",
    time: "30 min",
    note: "Raspado tradicional — um pente, sem graduação.",
  },
  {
    name: "Barba Máquina",
    price: "R$ 40",
    time: "30 min",
    note: "Aparada com máquina e tesoura.",
  },
  {
    name: "Ink eyebrow",
    price: "R$ 30",
    time: "30 min",
    note: "Sobrancelha alinhada.",
  },
  {
    name: "Corte a Domicílio",
    price: "R$ 100+",
    time: "1h",
    note: "O Andboy vai até você. Uber/99 ida e volta à parte.",
  },
  {
    name: "Manutenção Prótese",
    price: "R$ 170",
    time: "2h",
    note: "Manutenção de prótese capilar.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Marcelo",
    service: "Corte Cabelo",
    text: "Melhor barbeiro assim como pessoa! Recomendo!",
  },
  {
    name: "Fábio Dias",
    service: "Corte Cabelo",
    text: "Atendimento impecável. Serviço nota dez.",
  },
  {
    name: "Guilherme",
    service: "Corte Cabelo",
    text: "Nota 10!",
  },
  {
    name: "Álisson",
    service: "Corte Cabelo",
    text: "Qualidade e atendimento nota 10000000!",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/hero.jpg", alt: "Andboy fazendo barba na navalha, no salão de tijolo", tall: true },
  { src: "/fotos/andboy-tesoura.jpg", alt: "Andboy com tesoura e cliente no espelho da casa" },
  { src: "/fotos/corte-fade.jpg", alt: "Fade recém-saído da cadeira do Andboy" },
  { src: "/fotos/posto.jpg", alt: "Posto de trabalho e corte com parte" },
  { src: "/fotos/sala.jpg", alt: "Salão: tijolo, luz quente e capa listrada" },
  { src: "/fotos/cadeira.jpg", alt: "Cadeira de couro, piso xadrez e parede de tijolo", tall: true },
  { src: "/fotos/andboy-cliente.jpg", alt: "Andboy e cliente no salão" },
  { src: "/fotos/andboy-rua.jpg", alt: "Andboy com a sacola da marca" },
] as const;
