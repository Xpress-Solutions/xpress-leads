export const SITE = {
  name: "Anticuário Restô Bar",
  shortName: "Anticuário",
  tagline: "Restô-bar uruguaio na Cidade Baixa",
  headline: "Anticuário",
  subhead: "Restô Bar",
  phrase: "Chivito, cerveza uruguaya e as peças que dão nome à casa.",
  phoneDisplay: "(51) 3225-4020",
  phoneTel: "+555132254020",
  whatsapp:
    "https://wa.me/555132254020?text=Hola%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Anticu%C3%A1rio.",
  instagram: "https://www.instagram.com/anticuariorestobar/",
  instagramHandle: "@anticuariorestobar",
  facebook: "https://www.facebook.com/anticuariorestobar/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Anticu%C3%A1rio%20Rest%C3%B4%20Bar%20Rua%20General%20Lima%20e%20Silva%20985%20Porto%20Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Anticu%C3%A1rio%20Rest%C3%B4%20Bar%2C%20Rua%20General%20Lima%20e%20Silva%20985%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Anticu%C3%A1rio%20Rest%C3%B4%20Bar%20Lima%20e%20Silva%20985%20Porto%20Alegre",
  address: {
    street: "R. Gen. Lima e Silva, 985 loja 2",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    cep: "90050-102",
    nearby: "Subindo a Lima e Silva em direção à Ipiranga",
  },
  rating: "4,7",
  reviewsCount: "+300",
  founded: "2002",
  owners: "Ricardo Meghdessian e Ana Maria Bedrosian",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#casa", label: "A casa" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#musica", label: "Música" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
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
  0: { label: "Domingo", short: "Dom", slots: [{ startMin: hm(18), endMin: hm(24), label: "18h – 0h" }] },
  1: { label: "Segunda", short: "Seg", slots: null },
  2: { label: "Terça", short: "Ter", slots: null },
  3: { label: "Quarta", short: "Qua", slots: [{ startMin: hm(18), endMin: hm(25), label: "18h – 1h" }] },
  4: { label: "Quinta", short: "Qui", slots: [{ startMin: hm(18), endMin: hm(25), label: "18h – 1h" }] },
  5: { label: "Sexta", short: "Sex", slots: [{ startMin: hm(18), endMin: hm(25), label: "18h – 1h" }] },
  6: { label: "Sábado", short: "Sáb", slots: [{ startMin: hm(19), endMin: hm(25), label: "19h – 1h" }] },
};

export const HOURS_NOTE =
  "Horário conforme listagem recente do Restaurant Guru. Fontes mais antigas citam todos os dias, 18h–2h. Confirme no Google antes de sair.";

export const MENU = [
  {
    name: "Chivito",
    desc: "O sanduíche que a Cidade Baixa pede quando quer Uruguai na mesa.",
    tag: "Da casa",
    image: "/fotos/pancho.jpg",
  },
  {
    name: "Pancho de la casa",
    desc: "Pão de pancho, salsicha, mussarela, azeitona e pimentão — o petisco que já foi a Comida di Buteco.",
    tag: "Clássico",
    image: "/fotos/pancho.jpg",
  },
  {
    name: "Empanadas al horno",
    desc: "Pastel de forno uruguaio, borda trançada, sai quente.",
    tag: "Forno",
    image: "/fotos/empanadas.jpg",
  },
  {
    name: "Pizza uruguaia",
    desc: "Corte à xadrez, para comer com a mão, na tábua de madeira.",
    tag: "À xadrez",
    image: "/fotos/pizza.jpg",
  },
] as const;

export const EXTRAS = [
  "Milanesa",
  "Tábua de frios",
  "Tortilla",
  "Húngara",
  "Provolone gratinado",
  "Cerveza Patricia e Norteña",
  "Sangria na jarra",
  "Sobremesa uruguaia",
] as const;

export const REVIEWS = [
  {
    text: "Um pedacinho do Uruguai na Cidade Baixa. Super recomendo.",
    source: "Marcelo · Google / Cardapio.menu",
  },
  {
    text: "Há antiguidades e itens de coleção raros na decoração, plaquinhas e quadros com dizeres divertidos por todo o bar.",
    source: "Fernanda · Cardapio.menu",
  },
  {
    text: "Excelente lugar. O acolhimento é perfeito. A música ao vivo é ótima. Vale a pena conhecer e virar parte da família.",
    source: "Marta Tolentino · Google",
  },
] as const;
