export const SITE = {
  name: "Buteco Petiscos",
  legalName: "Bar Chopp Petiscos",
  tagline: "Almoço no Centro. Petisco de campeão.",
  headline: "Buteco Petiscos",
  subheadline:
    "Boteco de almoço na Marechal Floriano: prato feito, chopp gelado e bacalhau de concurso — no Centro Histórico desde 1996.",
  phoneDisplay: "(51) 3221-3989",
  phoneTel: "+555132213989",
  whatsapp:
    "https://wa.me/555132213989?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20do%20almo%C3%A7o%20e%20do%20Bacalhau%20do%20Popeye.",
  instagram: "https://www.instagram.com/barchopppetiscos/",
  instagramHandle: "@barchopppetiscos",
  facebook: "https://www.facebook.com/pages/Bar-Chopp-Petiscos/163458763742108",
  maps: "https://www.google.com/maps/search/?api=1&query=Buteco+Petiscos+Rua+Marechal+Floriano+Peixoto+387+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Marechal%20Floriano%20Peixoto%20387%2C%20Centro%20Hist%C3%B3rico%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Bar+Chopp+Petiscos+Rua+Marechal+Floriano+Peixoto+387+Porto+Alegre",
  address: {
    street: "R. Marechal Floriano Peixoto, 387",
    neighborhood: "Centro Histórico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90020-061",
    nearby: "Centro — entre o Mercado Público e a Praça da Alfândega",
  },
  priceRange: "R$ 20–60",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "O Popeye" },
  { href: "#mesa", label: "A mesa" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Quem veio" },
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
  0: { label: "Domingo", short: "Dom", slots: null },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(11), endMin: hm(21), label: "11h – 21h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(11), endMin: hm(21), label: "11h – 21h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(11), endMin: hm(21), label: "11h – 21h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(11), endMin: hm(21), label: "11h – 21h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(11), endMin: hm(21), label: "11h – 21h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(11), endMin: hm(18), label: "11h – 18h" }],
  },
};

export const HOURS_NOTE =
  "Horário conforme o Comida di Buteco 2026. Domingo fechado. Confirme no Google antes de sair.";

export const PETISCO_2026 = {
  name: "Bacalhau do Popeye com toque de Olívia",
  edition: "Comida di Buteco 2026",
  price: "R$ 40",
  description:
    "Bacalhau desfiado com espinafre e cubinhos de batata ao molho branco. Finalizado com castanha-do-pará e gratinado no forno. Acompanha chips de batata-doce.",
  photoCredit: "Foto: Israh Ramos / Comida di Buteco — Revista Sabores do Sul",
} as const;

export const MESA = [
  {
    title: "Almoço de Centro",
    text: "Prato feito e à la minuta para quem trabalha na Floriano e precisa sentar, comer e voltar. Casa abre às 11h — não é bar de happy hour.",
  },
  {
    title: "Bacalhau da casa",
    text: "Assinatura de anos de concurso: bolinho, Atrevido, Bah! Calhau, Vanerão Sambado e agora o Popeye. Quem pede bacalhau no Centro pede aqui.",
  },
  {
    title: "Chopp bem tirado",
    text: "Razão social é Bar Chopp Petiscos por um motivo. Reviews repetem: gelado, bem tirado, preço de boteco — não de rooftop.",
  },
] as const;

export const CASA_POINTS = [
  "No Centro Histórico desde 1996 — Bar Chopp Petiscos Ltda",
  "Campeão Comida di Buteco Porto Alegre 2019 (Atrevido), depois de dois vices",
  "De novo no circuito em 2026 com o Bacalhau do Popeye",
  "Dono na casa: Paulo Roberto cozinha e conhece a mesa pelo nome",
] as const;

export const REVIEWS = [
  {
    text: "O legítimo boteco: o proprietário está presente, conhece o cliente pelo nome e sabe o gosto de cada um. Petisco, prato e chopp bem tirado — campeão de 2019 sem pose.",
    source: "Síntese de avaliações públicas",
  },
  {
    text: "Em pleno Centro de POA dá para petiscar ou almoçar um prato básico, tudo gostoso e com preço baixo. Chopp sempre gelado.",
    source: "Síntese de avaliações públicas",
  },
  {
    text: "Melhor bolinho de bacalhau do Centro Histórico. Comida boa, serviço certo, faixa de almoço — não de restaurante.",
    source: "Síntese de avaliações públicas",
  },
] as const;
