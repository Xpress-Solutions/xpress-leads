export const SITE = {
  name: "Mania do Gaúcho II",
  shortName: "Mania do Gaúcho",
  kicker: "Casa de Carnes",
  since: "Desde 1978",
  headline: "Mania do Gaúcho II",
  tagline: "Cortes da semana na Felizardo — o açougue que monta o churrasco de domingo.",
  phoneDisplay: "(51) 3332-9849",
  phoneTel: "+555133329849",
  phonesShop: [
    { display: "(51) 3333-6646", tel: "+555133336646" },
    { display: "(51) 3012-6646", tel: "+555130126646" },
  ],
  whatsapp:
    "https://wa.me/555133329849?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20reservar%20cortes%20para%20o%20churrasco.",
  email: "maicon7012@hotmail.com",
  facebook: "https://www.facebook.com/casadecarnesmaniadogaucho2/",
  facebookHandle: "casadecarnesmaniadogaucho2",
  maps: "https://www.google.com/maps/search/?api=1&query=Mania+do+Ga%C3%BAcho+II+Rua+Felizardo+465+Jardim+Bot%C3%A2nico+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Felizardo%20465%2C%20Jardim%20Bot%C3%A2nico%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Felizardo, 465",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90690-200",
  },
  hoursLine: "Seg–sex 8h–13h e 15h–20h · sáb 8h–20h · dom 8h–13h",
  recommend: "92% recomendam no Facebook",
  reviewsCount: "30 avaliações",
  founded: "21 de novembro de 1978",
  cnpj: "89.544.217/0001-76",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cortes", label: "Cortes" },
  { href: "#sobre", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Onde estamos" },
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
    slots: [{ startMin: hm(8), endMin: hm(13), label: "8h – 13h" }],
  },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [
      { startMin: hm(8), endMin: hm(13), label: "8h – 13h" },
      { startMin: hm(15), endMin: hm(20), label: "15h – 20h" },
    ],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [
      { startMin: hm(8), endMin: hm(13), label: "8h – 13h" },
      { startMin: hm(15), endMin: hm(20), label: "15h – 20h" },
    ],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [
      { startMin: hm(8), endMin: hm(13), label: "8h – 13h" },
      { startMin: hm(15), endMin: hm(20), label: "15h – 20h" },
    ],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [
      { startMin: hm(8), endMin: hm(13), label: "8h – 13h" },
      { startMin: hm(15), endMin: hm(20), label: "15h – 20h" },
    ],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [
      { startMin: hm(8), endMin: hm(13), label: "8h – 13h" },
      { startMin: hm(15), endMin: hm(20), label: "15h – 20h" },
    ],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
};

export const HOURS_NOTE =
  "Horário conferido nas listagens públicas (Google / Felizardo). No domingo a casa fecha cedo — reserve o corte no sábado.";
