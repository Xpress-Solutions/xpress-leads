export const SITE = {
  name: "Lanches Nova Bréscia",
  shortName: "Nova Bréscia",
  kicker: "Lanches",
  headline: "Nova Bréscia",
  subheadline: "Xis de esquina na São Pedro. Desde 1987. Sem delivery.",
  phoneDisplay: "(51) 3343-7489",
  phoneTel: "+555133437489",
  instagram: "https://www.instagram.com/lanchesnovabrescia/",
  instagramHandle: "@lanchesnovabrescia",
  maps: "https://www.google.com/maps/search/?api=1&query=Lanches+Nova+Br%C3%A9scia+Av.+S%C3%A3o+Pedro+1359+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Lanches%20Nova%20Br%C3%A9scia%2C%20Avenida%20S%C3%A3o%20Pedro%201359%2C%20S%C3%A3o%20Geraldo%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. São Pedro, 1359",
    neighborhood: "São Geraldo",
    city: "Porto Alegre",
    state: "RS",
    cep: "90230-124",
    nearby: "Esquina com a Av. Ceará",
  },
  rating: "4,6",
  reviewsCount: "3.913",
  founded: "1987",
  payments: "Débito, PIX ou dinheiro — sem crédito.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "A casa" },
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
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(18), endMin: hm(23), label: "18h – 23h" }],
  },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(11), endMin: hm(23), label: "11h – 23h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(11), endMin: hm(23), label: "11h – 23h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(11), endMin: hm(23), label: "11h – 23h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(11), endMin: hm(23), label: "11h – 23h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(11), endMin: hm(23), label: "11h – 23h" }],
  },
};

export const HOURS_NOTE =
  "Horário da casa: terça a sábado 11h–23h, domingo 18h–23h, segunda fechado. Confirme no Google se for feriado.";
