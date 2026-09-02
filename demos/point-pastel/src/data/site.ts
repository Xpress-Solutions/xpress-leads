export const SITE = {
  name: "Point do Pastel",
  shortName: "Point",
  neighborhood: "Rubem Berta",
  city: "Porto Alegre",
  state: "RS",
  headline: "Point do Pastel",
  subheadline: "O Magnífico no Rubem Berta.",
  pitch:
    "Casa de pastel no Rubem Berta. No Comida di Buteco 2026 com O Magnífico — ofício de pastel, não bar genérico.",
  phoneDisplay: "(51) 3368-2830",
  phoneTel: "+555133682830",
  whatsappDisplay: "(51) 98501-6026",
  whatsapp:
    "https://wa.me/5551985016026?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20pedir%20no%20Point%20do%20Pastel.",
  instagram: "https://www.instagram.com/pointdopastelpoa/",
  instagramHandle: "@pointdopastelpoa",
  facebook: "https://www.facebook.com/pointdopastelpoa/",
  delivery: "https://pedir.delivery/pointdopastel",
  maps: "https://www.google.com/maps/search/?api=1&query=Point+do+Pastel+Maria+Augusta+Generoso+Estrela+1070+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Maria%20Augusta%20Generoso%20Estrela%201070%2C%20Rubem%20Berta%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Maria Augusta Generoso Estrela, 1070",
    neighborhood: "Rubem Berta · Parque Santa Fé",
    city: "Porto Alegre",
    state: "RS",
    nearby: "Zona Norte de Porto Alegre",
  },
  hoursLabel: "Ter–dom 18h30–0h",
  facebookRecommend: "98% recomendam no Facebook",
  facebookFollowers: "2,6 mil",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#magnifico", label: "O Magnífico" },
  { href: "#sabores", label: "Sabores" },
  { href: "#a-casa", label: "A casa" },
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
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(18, 30), endMin: hm(24), label: "18h30 – 0h" }],
  },
};

export const HOURS_NOTE =
  "Horário conforme Comida di Buteco e a página da casa: terça a domingo, das 18h30 à meia-noite. Segunda fechado.";
