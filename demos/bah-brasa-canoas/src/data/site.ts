export const SITE = {
  name: "Bah Brasa",
  city: "Canoas",
  neighborhood: "São Luís",
  tagline: "O Bolinho do Brasa na Berto Círio.",
  identity:
    "Buteco em São Luís, Canoas. No Comida di Buteco 2026 com Bolinho do Brasa. Nome gaúcho + brasa — identidade de casa de esquina metropolitana participando do mesmo circuito de Porto Alegre.",
  hoursLabel: "Qua–sáb 18h30–23h30",
  hoursNote:
    "Horário público da edição 2026 (Sabores do Sul). Confirme no dia — a casa não tem site oficial.",
  address: {
    street: "Rua Berto Círio, 329",
    neighborhood: "São Luís",
    city: "Canoas",
    state: "RS",
    cep: "92420-030",
    full: "Rua Berto Círio, 329 — São Luís, Canoas",
  },
  maps: "https://www.google.com/maps/search/?api=1&query=Bah+Brasa+Berto+C%C3%ADrio+329+Canoas",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Berto%20C%C3%ADrio%20329%2C%20S%C3%A3o%20Lu%C3%ADs%2C%20Canoas&t=&z=16&ie=UTF8&iwloc=&output=embed",
  whatsappShare:
    "https://wa.me/?text=Bora%20pro%20Bah%20Brasa%20na%20Rua%20Berto%20C%C3%ADrio%2C%20329%20%E2%80%94%20S%C3%A3o%20Lu%C3%ADs%2C%20Canoas.%20Qua%E2%80%93s%C3%A1b%2018h30%E2%80%9323h30.",
  contest: {
    name: "Comida di Buteco 2026",
    dish: "Bolinho do Brasa",
    price: "R$ 40",
    photoCredit: "Foto: Israh Ramos / Revista Sabores do Sul",
    url: "https://revistasaboresdosul.com.br/comida-di-buteco-2026-reune-31-bares-em-porto-alegre-e-canoas/",
  },
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#bolinho", label: "O bolinho" },
  { href: "#casa", label: "A casa" },
  { href: "#localizacao", label: "Onde" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  slots: { startMin: number; endMin: number; label: string }[] | null;
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", slots: null },
  1: { label: "Segunda", slots: null },
  2: { label: "Terça", slots: null },
  3: {
    label: "Quarta",
    slots: [{ startMin: hm(18, 30), endMin: hm(23, 30), label: "18h30 – 23h30" }],
  },
  4: {
    label: "Quinta",
    slots: [{ startMin: hm(18, 30), endMin: hm(23, 30), label: "18h30 – 23h30" }],
  },
  5: {
    label: "Sexta",
    slots: [{ startMin: hm(18, 30), endMin: hm(23, 30), label: "18h30 – 23h30" }],
  },
  6: {
    label: "Sábado",
    slots: [{ startMin: hm(18, 30), endMin: hm(23, 30), label: "18h30 – 23h30" }],
  },
};
