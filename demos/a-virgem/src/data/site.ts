export const SITE = {
  name: "A Virgem Bar",
  shortName: "A Virgem",
  tagline: "Pizzas autorais, tattoo e arte na Olavo Bilac.",
  identity:
    "Bar-tattoo-arte na Olavo Bilac: pizzas autorais, drinks, mesas na calçada. Grafite, plantas e estúdio de tattoo no mesmo espaço.",
  phoneDisplay: "(51) 3237-6818",
  phoneTel: "+555132376818",
  whatsapp:
    "https://wa.me/555132376818?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20reservar%20mesa%20n%27A%20Virgem.",
  instagram: "https://www.instagram.com/avirgembar/",
  instagramHandle: "@avirgembar",
  maps: "https://www.google.com/maps/search/?api=1&query=A+Virgem+Bar+Rua+Olavo+Bilac+251+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=A%20Virgem%20Bar%2C%20Rua%20Olavo%20Bilac%20251%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Olavo Bilac, 251",
    neighborhood: "Azenha / Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90040-310",
    full: "Rua Olavo Bilac, 251 — Azenha / Cidade Baixa, Porto Alegre",
  },
  rating: "4,6",
  hoursLine: "Seg–sáb a partir das 17h30 · domingo fechado",
  founded: "2010",
} as const;

export const NAV = [
  { href: "#cardapio", label: "Cardápio" },
  { href: "#bella", label: "Bella Virgem" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Onde" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const WEEKLY_HOURS: Record<Weekday, { label: string; hours: string | null }> = {
  0: { label: "Domingo", hours: null },
  1: { label: "Segunda", hours: "17h30 – 0h" },
  2: { label: "Terça", hours: "17h30 – 0h" },
  3: { label: "Quarta", hours: "17h30 – 0h" },
  4: { label: "Quinta", hours: "17h30 – 0h" },
  5: { label: "Sexta", hours: "17h30 – 0h" },
  6: { label: "Sábado", hours: "17h30 – 0h" },
};

export const HOURS_NOTE =
  "Horário público (BOABreja / Restaurant Guru / lead). No Comida di Buteco 2026 a casa também listou abertura às 18h. Confirme no Instagram.";
