export const SITE = {
  name: "Office Barber",
  handle: "officebarber",
  tagline: "Cut and shave.",
  headline: "Office Barber",
  subheadline:
    "Corte e barba na Barão do Amazonas — loja térreo, horário marcado, café no capricho.",
  phoneDisplay: "(51) 3232-4031",
  phoneTel: "+555132324031",
  whatsapp:
    "https://wa.me/555132324031?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20agendar%20na%20Office%20Barber.",
  booksy:
    "https://booksy.com/pt-br/232615_officebarber_barbearias_804125_porto-alegre",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Rua+Bar%C3%A3o+do+Amazonas+1173+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Bar%C3%A3o%20do%20Amazonas%201173%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Barão do Amazonas, 1173",
    complement: "loja térreo",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90670-004",
  },
  rating: "4,8",
  reviewsCount: "18",
  reviewsSource: "Booksy",
  founded: "EST. MMXXI",
  hoursNote: "Segunda a sábado, 9h–20h. Domingo e feriado fechado.",
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde fica" },
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
    slots: [{ startMin: hm(9), endMin: hm(20), label: "09h – 20h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "09h – 20h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "09h – 20h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "09h – 20h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "09h – 20h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "09h – 20h" }],
  },
};

export const TEAM = [
  {
    name: "Maillon Proença",
    role: "Barbeiro",
    photo: "/fotos/maillon.jpeg",
    note: "O nome que mais aparece nas avaliações do Booksy — corte masculino e cabelo + barba.",
  },
  {
    name: "Kauan Perez",
    role: "Barbeiro",
    photo: "/fotos/kauan.jpeg",
    note: "Atende corte, barba e sobrancelha. Cliente cita café e o pessoal da casa.",
  },
] as const;
