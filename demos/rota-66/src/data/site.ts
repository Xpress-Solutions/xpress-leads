import brand from "../../brand.json";

export const BRAND = brand;

export const SITE = {
  name: "Rota 66",
  tagline: "Lancheria na Restinga — Porto Alegre/RS",
  headline: "Rota 66",
  subheadline: "Na Nilo Wulff, o Extremo Sul entra no circuito do buteco.",
  phoneDisplay: "(51) 99216-5666",
  phoneTel: "+5551992165666",
  whatsapp:
    "https://wa.me/5551992165666?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Rota%2066%20e%20queria%20saber%20mais.",
  maps: "https://www.google.com/maps/search/?api=1&query=Rota+66+Nilo+Wulff+902+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rota%2066%2C%20Av.%20Economista%20Nilo%20Wulff%20902%2C%20Restinga%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Rota+66+lanches+Nilo+Wulff+902+Restinga+Porto+Alegre",
  menuDigital: "https://app.anota.ai/p/rota66lanches/",
  address: {
    street: "Av. Economista Nilo Wulff, 902",
    neighborhood: "Restinga",
    city: "Porto Alegre",
    state: "RS",
    cep: "91790-000",
    nearby: "Extremo Sul · corredor da Nilo Wulff",
  },
  rating: "3,8",
  reviewsCount: "431",
  priceRange: "R$ 20–40",
  hoursLabel: "Todos os dias 11h30–0h",
  identity:
    "Bar na Restinga, Extremo Sul. No Comida di Buteco 2026 com Spin Bacon. Nome de estrada, ponto de avenida e participação no concurso — identidade de casa de bairro com ambição de destino.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#spin-bacon", label: "Spin Bacon" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

const dayOpen: DaySchedule["slots"] = [
  { startMin: hm(11, 30), endMin: hm(24), label: "11h30 – 0h" },
];

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: dayOpen },
  1: { label: "Segunda", short: "Seg", slots: dayOpen },
  2: { label: "Terça", short: "Ter", slots: dayOpen },
  3: { label: "Quarta", short: "Qua", slots: dayOpen },
  4: { label: "Quinta", short: "Qui", slots: dayOpen },
  5: { label: "Sexta", short: "Sex", slots: dayOpen },
  6: { label: "Sábado", short: "Sáb", slots: dayOpen },
};

export const HOURS_NOTE =
  "Horário publicado no Comida di Buteco 2026. Confirme no WhatsApp se for feriado.";

export const MENU = [
  {
    id: "spin-bacon",
    name: "Spin Bacon",
    note: "Petisco do Comida di Buteco 2026",
    detail: "O prato da Restinga no circuito — R$ 40 na temporada do concurso.",
    price: "R$ 40",
  },
  {
    id: "lanches",
    name: "Lanches da casa",
    note: "O que a avenida pede",
    detail: "Lanche de lancheria, sem ficha de food hall.",
    price: "Balcão",
  },
  {
    id: "alaminuta",
    name: "Alaminuta",
    note: "Do almoço à noite",
    detail: "Prato feito citado nas avaliações de quem come na Nilo Wulff.",
    price: "Balcão",
  },
  {
    id: "fritas",
    name: "Fritas",
    note: "Porção de acompanhamento",
    detail: "Acompanha o lanche — e aparece nas fichas públicas da casa.",
    price: "Balcão",
  },
  {
    id: "yakisoba",
    name: "Yakisoba",
    note: "No cardápio da lancheria",
    detail: "Um dos pratos que o bairro pede quando a fome é de verdade.",
    price: "Balcão",
  },
  {
    id: "mayo-bbq",
    name: "Maionese com barbecue",
    note: "A do Gustavo",
    detail: "Quem volta com a família cita o atendimento e essa maionese.",
    price: "Da casa",
  },
] as const;
