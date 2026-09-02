export const SITE = {
  name: "Pinhos Botecaria Pub",
  shortName: "Pinho's",
  wordmark: "Pinho's",
  tagline: "Botecaria Pub",
  headline: "Pinho's",
  line: "Noite na Victor Barreto — petisco, chopp e música.",
  phoneDisplay: "(51) 99604-4639",
  phoneTel: "+5551996044639",
  whatsapp:
    "https://wa.me/5551996044639?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site da Pinhos Botecaria e queria reservar uma mesa.",
    ),
  facebook: "https://www.facebook.com/PinhosButecariaCanoas",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Pinhos+Botecaria+Av.+Victor+Barreto+3588+Canoas",
  mapsEmbed:
    "https://maps.google.com/maps?q=Pinhos%20Botecaria%2C%20Av.%20Victor%20Barreto%203588%2C%20Canoas&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Victor Barreto, 3588",
    extra: "Esquina com Leopoldino Castro de Matos",
    neighborhood: "Centro",
    city: "Canoas",
    state: "RS",
    cep: "92010-000",
    full: "Av. Victor Barreto, 3588 — Centro, Canoas/RS",
  },
  rating: "4,6",
  priceRange: "R$ 40–140",
  hoursLine: "Qua–qui 19h–0h · sex–sáb 19h–2h",
  identity:
    "Botecaria no Centro de Canoas, Victor Barreto. Google 4.6. No Comida di Buteco 2026 com Deliciaporo. Casa de avenida principal, noite de quarta a sábado — identidade de pub de Canoas, não extensão de POA.",
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "Deliciaporo" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#noite", label: "A noite" },
  { href: "#sobre", label: "A casa" },
  { href: "#local", label: "Onde" },
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
  2: { label: "Terça", short: "Ter", slots: null },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(19), endMin: hm(24), label: "19h – 0h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(19), endMin: hm(24), label: "19h – 0h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(19), endMin: hm(26), label: "19h – 2h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(19), endMin: hm(26), label: "19h – 2h" }],
  },
};

export const HOURS_NOTE =
  "Horário público do Comida di Buteco e do cadastro da casa. Confirme no WhatsApp se for feriado.";
