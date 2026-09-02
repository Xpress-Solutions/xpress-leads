import brand from "../../brand.json";

export const BRAND = brand;

export const SITE = {
  name: brand.name,
  shout: "Masah!",
  headline: "Masah!",
  line: "Jogo na TV. Farroupilha na mesa.",
  identity: brand.positioning,
  phoneDisplay: "(51) 99920-0521",
  phoneTel: "+5551999200521",
  whatsapp:
    "https://wa.me/5551999200521?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site do Masah! e queria saber os jogos da semana e o Farroupilha.",
    ),
  maps:
    "https://www.google.com/maps/search/?api=1&query=Masah+Sports+Bar+Farroupilha+3833+Canoas",
  mapsEmbed:
    "https://maps.google.com/maps?q=Masah%20Sports%20Bar%2C%20Av.%20Farroupilha%203833%2C%20Canoas&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Farroupilha, 3833 — Loja 03",
    place: "Cosmopolitan Urban Mall",
    neighborhood: "Marechal Rondon",
    city: "Canoas",
    state: "RS",
    cep: "92020-475",
  },
  rating: "4,5",
  hoursLead: "Ter–sex 18h–23h30 · sáb 18h–23h30 · dom 11h30–16h",
  photoCredit: "Petisco O Laçador — Comida di Buteco / Israh Ramos, 2024",
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#jogos", label: "Jogos" },
  { href: "#farroupilha", label: "Farroupilha" },
  { href: "#cardapio", label: "Mesa" },
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
  0: { label: "Domingo", slots: [{ startMin: hm(11, 30), endMin: hm(16), label: "11h30 – 16h" }] },
  1: { label: "Segunda", slots: null },
  2: { label: "Terça", slots: [{ startMin: hm(18), endMin: hm(23, 30), label: "18h – 23h30" }] },
  3: { label: "Quarta", slots: [{ startMin: hm(18), endMin: hm(23, 30), label: "18h – 23h30" }] },
  4: { label: "Quinta", slots: [{ startMin: hm(18), endMin: hm(23, 30), label: "18h – 23h30" }] },
  5: { label: "Sexta", slots: [{ startMin: hm(18), endMin: hm(23, 30), label: "18h – 23h30" }] },
  6: { label: "Sábado", slots: [{ startMin: hm(18), endMin: hm(23, 30), label: "18h – 23h30" }] },
};

export const MENU = [
  {
    name: "Farroupilha",
    tag: "Comida di Buteco",
    text: "Ciabatta com pasta de alho, iscas de entrecôte grelhadas, queijo, sweet chilli Masah e crispy de alho-poró.",
  },
  {
    name: "O Laçador",
    tag: "Edição 2024",
    text: "Bolinho de batata empanado, carne, frango, queijos e o molho chipotle-páprica da casa.",
  },
  {
    name: "Entrecôte e bifes",
    tag: "Grelha",
    text: "A mesa pede carne: reviews falam de bife suculento, frita e cebolada.",
  },
  {
    name: "Chopp gelado",
    tag: "Copa",
    text: "Pra acompanhar o jogo. A casa avisa a escalação da semana no WhatsApp.",
  },
] as const;
