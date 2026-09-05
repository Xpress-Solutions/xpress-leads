export const SITE = {
  name: "Los Pepes Barbearia",
  shortName: "Los Pepes",
  headline: "Los Pepes",
  subheadline: "Corte, barba e sobrancelha. Casa informal — amizade, respeito e qualidade.",
  tagline: "Vem pra Los Pepes.",
  bio: "Somos uma barbearia informal. Aqui plantamos a amizade, o respeito e a qualidade. Gosta de sentir-se em casa?",
  identity:
    "Barbearia em Novo Hamburgo com nome próprio forte (Los Pepes). Agenda ativa no Booksy — corte, barba, sobrancelha. Identidade latina/masculina clara, não ‘Barbearia do Fulano’ genérica.",
  address: {
    street: "Rua Leopoldo Wasun, 149",
    neighborhood: "Centro",
    city: "Novo Hamburgo",
    state: "RS",
    cep: "93420-010",
    nearby: "Centro de Novo Hamburgo — Leopoldo Wasun, 149.",
  },
  maps:
    "https://www.google.com/maps/search/?api=1&query=Los+Pepes+Barbearia+Leopoldo+Wasun+149+Novo+Hamburgo",
  mapsEmbed:
    "https://maps.google.com/maps?q=Los%20Pepes%20Barbearia%2C%20Rua%20Leopoldo%20Wasun%20149%2C%20Novo%20Hamburgo&t=&z=17&ie=UTF8&iwloc=&output=embed",
  booksy:
    "https://booksy.com/pt-br/95621_los-pepes-barbearia_barbearias_802050_novo-hamburgo",
  instagram: "https://www.instagram.com/lospepesbarberia",
  instagramHandle: "@lospepesbarberia",
  rating: "5,0",
  reviewsCount: "207",
  hoursLine: "Seg 10h–19h · ter–sex 10h–20h · sáb 9h–13h",
  hoursNote: "Horários oficiais do Booksy. Confirme a cadeira na agenda.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#chegar", label: "Como chegar" },
] as const;

export const SERVICES = [
  { name: "Corte", price: "R$ 40", duration: "30 min", popular: true },
  { name: "Barba", price: "R$ 30", duration: "30 min", popular: true },
  { name: "Corte + Barba", price: "R$ 60", duration: "1 h", popular: true },
  { name: "Corte + Sobrancelha", price: "R$ 50", duration: "30 min", popular: false },
  { name: "Barba + Sobrancelha", price: "R$ 40", duration: "30 min", popular: false },
  { name: "Corte + Barba + Sobrancelha", price: "R$ 65", duration: "1 h", popular: true },
  { name: "Sobrancelhas na navalha", price: "R$ 10", duration: "5 min", popular: false },
  { name: "Corte + Progressiva", price: "R$ 120", duration: "1 h 30", popular: false },
  { name: "Corte + Barba + Progressiva", price: "R$ 140", duration: "2 h", popular: false },
] as const;

export const TEAM = [
  {
    name: "Rafael Garcia",
    role: "Barbeiro",
    bio: "10 anos de profissão. Focado, extrovertido e apaixonado pela profissão.",
    photo: "/fotos/rafael-garcia.jpeg",
  },
  {
    name: "Meni",
    role: "Barbeiro",
    bio: "O nome que mais volta nas avaliações — corte limpo e gente fina.",
    photo: null,
  },
  {
    name: "Ricardo",
    role: "Barbeiro",
    bio: "Barba na tesoura e no trato — a cadeira que o cliente pede de novo.",
    photo: "/fotos/ricardo.jpeg",
  },
  {
    name: "Nando",
    role: "Barbeiro",
    bio: "Corte certo, sem enrolação. Da casa, com a cara da Los Pepes.",
    photo: "/fotos/nando.jpeg",
  },
] as const;

export const REVIEWS = [
  {
    quote: "Meu barbeiro à anos.",
    author: "Luan",
    service: "Corte · Rafael Garcia",
  },
  {
    quote: "Barbeiro gente fina, corte muito bonito.",
    author: "João Pedro",
    service: "Corte + Barba · Meni",
  },
  {
    quote: "Excelente barbearia.",
    author: "Newmar",
    service: "Corte · Meni",
  },
  {
    quote: "Atendimento excelente.",
    author: "William",
    service: "Corte · Rafael Garcia",
  },
  {
    quote: "Super recomendo.",
    author: "Elisandra",
    service: "Corte · Meni",
  },
  {
    quote: "Bom atendimento e bom serviço.",
    author: "William",
    service: "Corte + Barba · Meni",
  },
] as const;

export const AMENITIES = [
  "Estacionamento",
  "Cartão de crédito",
  "Pets bem-vindos",
  "Wi-Fi",
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
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(10), endMin: hm(19), label: "10h – 19h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(10), endMin: hm(20), label: "10h – 20h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(10), endMin: hm(20), label: "10h – 20h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(10), endMin: hm(20), label: "10h – 20h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(10), endMin: hm(20), label: "10h – 20h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(13), label: "9h – 13h" }],
  },
};
