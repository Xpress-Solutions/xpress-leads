export const SITE = {
  name: "Inca Bar de Cervejas",
  shortName: "Inca",
  legalName: "Inca Cervejas Y Tapas",
  tagline: "Cervejas e tapas andinas na Boa Vista.",
  headline: "INCA",
  subheadline: "Cervejas e tapas andinas na Boa Vista.",
  phoneDisplay: "(51) 99847-4113",
  phoneTel: "+5551998474113",
  landlineDisplay: "(51) 3435-2038",
  landlineTel: "+555134352038",
  whatsapp:
    "https://wa.me/5551998474113?text=" +
    encodeURIComponent("Olá! Vim pelo site e queria saber das torneiras e da Croqueta Andina."),
  instagram: "https://www.instagram.com/inca_cervejas/",
  instagramHandle: "@inca_cervejas",
  maps: "https://www.google.com/maps/search/?api=1&query=Inca+Bar+de+Cervejas+Inácio+Vasconcelos+69+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Inca%20Bar%20de%20Cervejas%2C%20Avenida%20In%C3%A1cio%20Vasconcelos%2069%2C%20Boa%20Vista%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Inácio Vasconcelos, 69",
    neighborhood: "Boa Vista",
    city: "Porto Alegre",
    state: "RS",
    cep: "90480-160",
    nearby: "Casarão de esquina no bairro — perto da Plínio Brasil Milano e do Zaffari Higienópolis",
  },
  hoursLine: "Ter–sáb 17h30–22h30",
  founded: "2018",
  taps: "cerca de 20 torneiras",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/#torneiras", label: "Torneiras" },
  { href: "/#croqueta", label: "Croqueta Andina" },
  { href: "/cardapio", label: "Tapas" },
  { href: "/#casa", label: "A casa" },
  { href: "/#localizacao", label: "Onde" },
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
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(17, 30), endMin: hm(22, 30), label: "17h30 – 22h30" }],
  },
};

export const HOURS_NOTE =
  "Horário da ficha do Comida di Buteco 2026 e da pesquisa do lead. Algumas listagens antigas apontam até 23h30 — confirme no WhatsApp.";
