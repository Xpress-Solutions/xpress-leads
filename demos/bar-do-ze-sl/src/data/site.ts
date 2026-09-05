export const SITE = {
  name: "Bar do Zé",
  city: "São Leopoldo",
  neighborhood: "Centro",
  tagline: "Mesa na praça, xis caprichado, cerveja gelada.",
  headline: "Bar do Zé",
  subheadline:
    "O xis no capricho, a mesa na praça e o horário na porta. Boteco de cidade — o Zé atende.",
  pitch:
    "O Bar do Zé já é 4.9 na Roosevelt e ainda não tem site. Uma página com o xis, a mesa na praça e o horário conta a história que o Google só resume.",
  identity:
    "Bar de praça em São Leopoldo: mesa na calçada/praça, xis caprichado, cerveja gelada. Google 4.9. Atendimento pessoal do Zé citado nos reviews. Identidade de boteco de cidade — nome do dono, ritual de praça, preço justo.",
  phoneDisplay: "(51) 99313-8239",
  phoneTel: "+5551993138239",
  whatsapp:
    "https://wa.me/5551993138239?text=Ol%C3%A1%2C%20Z%C3%A9%21%20Vim%20pelo%20site%20e%20queria%20saber%20do%20xis%20e%20da%20mesa%20na%20pra%C3%A7a.",
  maps: "https://www.google.com/maps/search/?api=1&query=Bar%20do%20Z%C3%A9%20Presidente%20Roosevelt%20323%20S%C3%A3o%20Leopoldo",
  mapsEmbed:
    "https://maps.google.com/maps?q=Bar%20do%20Z%C3%A9%2C%20Rua%20Pres.%20Roosevelt%20323%2C%20S%C3%A3o%20Leopoldo&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Bar%20do%20Z%C3%A9%20Presidente%20Roosevelt%20323%20S%C3%A3o%20Leopoldo",
  address: {
    street: "Rua Pres. Roosevelt, 323",
    neighborhood: "Centro",
    city: "São Leopoldo",
    state: "RS",
    nearby: "Mesa na praça — Centro leopoldense",
  },
  rating: "4,9",
  priceRange: "R$ 20–40",
  restaurantGuru: "https://www.restaurantguru.com.br/Bar-Do-Ze-Sao-Leopoldo",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#xis", label: "O xis" },
  { href: "#praca", label: "A praça" },
  { href: "#avaliacoes", label: "Quem vai" },
  { href: "#horario", label: "Horário" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

/** Restaurant Guru (atualizado recentemente): 18h–0h todos os dias. */
export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }],
  },
};

export const HOURS_NOTE =
  "18h–0h conforme o Restaurant Guru. Outra listagem aponta domingo fechado. Confirme no balcão ou no Google.";

export const REVIEWS = [
  {
    name: "Maria Catharina",
    source: "Google",
    text: "Cerveja sempre gelada, xis maravilhoso, tudo com preço justíssimo e o melhor atendimento da cidade! Coloque a mesa na praça e seja feliz.",
  },
  {
    name: "Eduardo Turcatto",
    source: "Google",
    text: "Atendimento do Zé sempre muito simpático. Praça muito tranquilo para colocar a mesa. Ótimo clima.",
  },
  {
    name: "Evandro Rosa Lopes",
    source: "Google",
    text: "O Bar do Zé é o bar que existia anteriormente no quiosque da praça. Quer tomar uma cerveja bem gelada, sentado na praça, curtindo a sombra das árvores, ouvindo os pássaros? Tem que ir no Bar do Zé. Outra atração do bar é o xis, saboroso, feito no capricho.",
  },
] as const;
