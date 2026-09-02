export const SITE = {
  name: "Barril Pub",
  tagline: "Boas cervejas. Bons amigos. Boas risadas.",
  headline: "Barril Pub",
  subheadline: "Boas cervejas. Bons amigos. Boas risadas.",
  kicker: "Cristal · Zona Sul · Porto Alegre",
  pitch:
    "O Barril Pub está aberto desde 2014 e de novo no Comida di Buteco, mas quem pesquisa na Wenceslau Escobar não acha o cardápio de vocês. Um site curto resolve isso.",
  about:
    "Pub e restaurante na Wenceslau Escobar desde 2015 — um pedaço de Vancouver no Cristal. Bruno Küllinger trouxe o balcão em U, a conversa com o barman e as jarras de chope artesanal. Hoje a casa serve almoço na avenida, 14 torneiras à noite e mesa de três gerações no deck.",
  phoneDisplay: "(51) 3516-2015",
  phoneTel: "+555135162015",
  whatsapp:
    "https://api.whatsapp.com/send?phone=555135162015&text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Barril%20Pub.",
  instagram: "https://www.instagram.com/barrilpub/",
  instagramHandle: "@barrilpub",
  linktree: "https://linktr.ee/barrilpub",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Barril+Pub+Wenceslau+Escobar+2997+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Barril%20Pub%2C%20Av.%20Wenceslau%20Escobar%202997%2C%20Cristal%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Wenceslau Escobar, 2997",
    neighborhood: "Cristal",
    city: "Porto Alegre",
    state: "RS",
    cep: "91900-000",
    nearby: "Esquina com a Rua Dr. Mário Totta — Zona Sul",
  },
  hoursNote:
    "Horário público da casa: segunda a sábado, das 11h à meia-noite (Jornal do Comércio e Comida di Buteco). Confirme no WhatsApp em feriados.",
  founded: "2015 (CNPJ 2014)",
  taps: 14,
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Onde fica" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", slots: null },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(11), endMin: hm(24), label: "11h – 0h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(11), endMin: hm(24), label: "11h – 0h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(11), endMin: hm(24), label: "11h – 0h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(11), endMin: hm(24), label: "11h – 0h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(11), endMin: hm(24), label: "11h – 0h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(11), endMin: hm(24), label: "11h – 0h" }],
  },
};

export const PRESS = [
  {
    quote:
      "Não somos apenas um pub, mas uma extensão do pátio de casa, onde as pessoas se sentem à vontade.",
    source: "Bruno Küllinger, dono — Jornal do Comércio, 2025",
  },
  {
    quote:
      "Cerveja artesanal é o nosso forte, foi onde iniciamos. Sempre tentamos trabalhar com boa qualidade e com custo honesto.",
    source: "Bruno Küllinger — Jornal do Comércio, 2023",
  },
  {
    quote:
      "Hoje somos um bar super família. Fomos abraçados pelo bairro.",
    source: "Bruno Küllinger — GZH, 2025",
  },
] as const;
