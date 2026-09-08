export const SITE = {
  name: "Galeteria São Luiz",
  legalName: "Churrascaria e Galeteria São Luiz",
  shortName: "São Luiz",
  tagline: "Almoço de família em Santana desde 1988.",
  headline: "Galeteria São Luiz",
  subheadline:
    "Comida caseira de verdade: galeto no espeto, carnes da grelha e o buffet do meio-dia. Casa de Santana desde 1988.",
  pitch:
    "Bem-vindo à Churrascaria e Galeteria São Luiz, onde a verdadeira comida caseira ganha sabor e tradição. Galeto, carnes suculentas e pratos quentinhos — o toque de casa, no almoço.",
  phoneDisplay: "(51) 3223-6757",
  phoneTel: "+555132236757",
  whatsapp:
    "https://wa.me/555132236757?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20sobre%20o%20almo%C3%A7o%20da%20Galeteria%20S%C3%A3o%20Luiz.",
  instagram: "https://www.instagram.com/galeteriasaoluiz_poa/",
  instagramHandle: "@galeteriasaoluiz_poa",
  cardapioWeb: "https://app.cardapioweb.com/churrascaria_e_galeteria_sao_luis",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Galeteria+S%C3%A3o+Luiz+Rua+S%C3%A3o+Lu%C3%ADs+844+Santana+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20S%C3%A3o%20Lu%C3%ADs%20844%20loja%206%2C%20Santana%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Churrascaria+Galeteria+Sao+Luiz+Rua+Sao+Luis+844+Porto+Alegre",
  address: {
    street: "Rua São Luís, 844 loja 6",
    neighborhood: "Santana",
    city: "Porto Alegre",
    state: "RS",
    cep: "90620-170",
    nearby: "No miolo de Santana, na própria Rua São Luís.",
  },
  founded: "1988",
  rating: "4,0",
  reviewsCount: "238",
  priceRange: "R$ 20–40",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "O almoço" },
  { href: "#casa", label: "A casa" },
  { href: "#sobre", label: "Desde 1988" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Onde estamos" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: [{ startMin: hm(10, 30), endMin: hm(14, 30), label: "10h30 – 14h30" }] },
  1: { label: "Segunda", short: "Seg", slots: [{ startMin: hm(10, 30), endMin: hm(14, 30), label: "10h30 – 14h30" }] },
  2: { label: "Terça", short: "Ter", slots: [{ startMin: hm(10, 30), endMin: hm(14, 30), label: "10h30 – 14h30" }] },
  3: { label: "Quarta", short: "Qua", slots: [{ startMin: hm(10, 30), endMin: hm(14, 30), label: "10h30 – 14h30" }] },
  4: { label: "Quinta", short: "Qui", slots: [{ startMin: hm(10, 30), endMin: hm(14, 30), label: "10h30 – 14h30" }] },
  5: { label: "Sexta", short: "Sex", slots: [{ startMin: hm(10, 30), endMin: hm(14, 30), label: "10h30 – 14h30" }] },
  6: { label: "Sábado", short: "Sáb", slots: [{ startMin: hm(10, 30), endMin: hm(14, 30), label: "10h30 – 14h30" }] },
};

export const HOURS_NOTE =
  "Almoço 10h30–14h30 conforme listagens públicas (Restaurant Guru / Google). Seg–sex: bufê com churrasco. Sábado: à la minuta. Confirme no (51) 3223-6757.";
