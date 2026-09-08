export const SITE = {
  name: "Gentlemen's BarberShop",
  shortName: "Gentlemen's",
  tagline: "Barbearia na Floresta — Porto Alegre",
  headline: "Gentlemen's",
  subheadline:
    "Desde 2014 na Félix da Cunha. O Tiago na tesoura, xadrez no chão e sonzera no ar — público masculino, sem fila de template.",
  phoneDisplay: "(51) 99691-1233",
  phoneTel: "+5551996911233",
  whatsapp:
    "https://wa.me/5551996911233?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20agendar%20na%20Gentlemen%27s.",
  instagram: "https://www.instagram.com/gentlemen.s_barbershop/",
  instagramHandle: "@gentlemen.s_barbershop",
  booksy:
    "https://booksy.com/pt-br/102793_gentlemen-s-barbershop_barbearias_804125_porto-alegre",
  maps: "https://www.google.com/maps/search/?api=1&query=Gentlemen%27s%20BarberShop%20Rua%20F%C3%A9lix%20da%20Cunha%20657%20Floresta%20Porto%20Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Gentlemen%27s%20BarberShop%2C%20Rua%20F%C3%A9lix%20da%20Cunha%20657%2C%20Floresta%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Félix da Cunha, 657",
    neighborhood: "Floresta",
    city: "Porto Alegre",
    state: "RS",
    cep: "90570-001",
    nearby: "Entre Moinhos e o Quarto Distrito — na mesma rua do movimento da Félix.",
  },
  rating: "5,0",
  reviewsCount: "47",
  reviewsSource: "Booksy",
  founded: "2014",
  priceRange: "R$ 30–90",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#tiago", label: "O Tiago" },
  { href: "#casa", label: "A casa" },
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
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(9), endMin: hm(21), label: "9h – 21h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(13), label: "9h – 13h" }],
  },
};

export const HOURS_NOTE =
  "Horário conforme Booksy e listagens públicas. Confirme no WhatsApp ou no Instagram antes de sair.";

export const TEAM = [
  {
    name: "Tiago B. Gonçalves",
    role: "Barbeiro · dono da cadeira",
    photo: "/fotos/tiago.jpg",
    bio: "O nome que aparece em quase toda avaliação da casa. Tesoura, degradê e conversa — quem volta, volta no Tiago.",
  },
] as const;

export const REVIEWS = [
  {
    author: "Frederico",
    service: "Corte máquina e tesoura",
    text: "Excelente. Melhor corte de cabelo de POA. Sempre acerta.",
  },
  {
    author: "Eduardo",
    service: "Corte máquina e tesoura",
    text: "Mestre na tesoura e gente finíssima.",
  },
  {
    author: "Cliente · Locais do Brasil",
    service: "Barba e cabelo",
    text: "É um momento especial ir fazer a manutenção da barba e cabelo com o Tiagão. O Hômi é bom no que faz — e junto com isso é só sonzera que rola na barbearia.",
  },
] as const;
