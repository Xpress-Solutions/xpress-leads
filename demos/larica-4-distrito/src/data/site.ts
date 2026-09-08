export const SITE = {
  name: "Larica 4º Distrito",
  shortName: "Larica",
  headline: "LARICA",
  subhead: "4º DISTRITO",
  tagline: "Saiu da festa. Bateu a fome. É aqui.",
  lead: "Xis na chapa, pastel de carne de panela e petisco pra matar a larica na esquina da Santos Dumont.",
  phoneDisplay: "(51) 3015-8835",
  phoneTel: "+555130158835",
  whatsapp:
    "https://wa.me/555130158835?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20pedir%20na%20Larica.",
  instagram: "https://www.instagram.com/larica4distrito/",
  instagramHandle: "@larica4distrito",
  maps: "https://www.google.com/maps/search/?api=1&query=Larica+4+Distrito+Av.+Santos+Dumont+710+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Santos%20Dumont%20710%2C%20Floresta%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Santos Dumont, 710",
    neighborhood: "Floresta",
    city: "Porto Alegre",
    state: "RS",
    nearby: "Esquina com a Rua Álvaro Chaves — 4º Distrito",
  },
} as const;

export const NAV = [
  { href: "#cardapio", label: "O que pedir" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Onde" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  hours: string | null;
};

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", hours: "17h30 – 22h" },
  1: { label: "Segunda", short: "Seg", hours: null },
  2: { label: "Terça", short: "Ter", hours: null },
  3: { label: "Quarta", short: "Qua", hours: "17h30 – 22h" },
  4: { label: "Quinta", short: "Qui", hours: "17h30 – 0h" },
  5: { label: "Sexta", short: "Sex", hours: "14h – 0h" },
  6: { label: "Sábado", short: "Sáb", hours: "17h30 – 0h" },
};

export const DAYS: Weekday[] = [0, 1, 2, 3, 4, 5, 6];

export const HOURS_NOTE =
  "Horário público do Comida di Buteco. A casa já disse que de quinta a sábado fecha quando o movimento acaba — confirma no WhatsApp.";
