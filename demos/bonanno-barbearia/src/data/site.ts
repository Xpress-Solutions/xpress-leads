export const SITE = {
  name: "Bonanno Barbearia & Confraria",
  shortName: "Bonanno",
  tagline: "Barbearia & Confraria",
  headline: "Bonanno",
  subheadline:
    "Corte, barba e a cadeira de sempre. Desde 2018 na Bispo Scalabrini, Jardim Itu.",
  phoneDisplay: "(51) 98919-2838",
  phoneTel: "+5551989192838",
  whatsapp:
    "https://wa.me/5551989192838?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20agendar%20na%20Bonanno.",
  booksy:
    "https://booksy.com/pt-br/21076_bonanno-barbearia-confraria_barbearias_804125_porto-alegre",
  instagram: "https://www.instagram.com/bonannobarbearia",
  instagramHandle: "@bonannobarbearia",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Bonanno+Barbearia+Av.+Bispo+Scalabrini+380+Jardim+Itu+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Bispo%20Scalabrini%20380%20Loja%201%2C%20Jardim%20Itu%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Bispo Scalabrini, 380 loja 1",
    neighborhood: "Jardim Itu",
    city: "Porto Alegre",
    state: "RS",
    cep: "91225-120",
  },
  rating: "5,0",
  reviewsCount: "390",
  founded: "2018",
  owner: "Bruno Galante Rodrigues",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#confraria", label: "Confraria" },
  { href: "#galeria", label: "Cortes" },
  { href: "#avaliacoes", label: "Avaliações" },
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
    slots: [{ startMin: hm(14), endMin: hm(20, 15), label: "14h – 20h15" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(10), endMin: hm(20, 15), label: "10h – 20h15" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(10), endMin: hm(20, 15), label: "10h – 20h15" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(10), endMin: hm(20, 15), label: "10h – 20h15" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(10), endMin: hm(20, 15), label: "10h – 20h15" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(17, 15), label: "9h – 17h15" }],
  },
};

export const HOURS_NOTE =
  "Horário conforme o Booksy da casa. Confirme no WhatsApp se for feriado.";
