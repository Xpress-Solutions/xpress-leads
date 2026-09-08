export const SITE = {
  name: "Poa Barber Shop",
  wordmark: "POA",
  tagline: "Barber Shop",
  headline: "O corte da cidade, na Bento.",
  subheadline:
    "Barbearia de avenida no Partenon. Fade, barba, platinado e o combo que o bairro já conhece — R$ 80.",
  booksy:
    "https://booksy.com/pt-br/21012_poa-barber-shop_barbearias_804125_porto-alegre",
  instagram: "https://www.instagram.com/poabarbershop/",
  instagramHandle: "@poabarbershop",
  facebook: "https://www.facebook.com/poabarbershop/",
  maps: "https://www.google.com/maps/search/?api=1&query=Av.+Bento+Gonçalves+4135+Partenon+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Bento%20Gon%C3%A7alves%204135%2C%20Partenon%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Bento Gonçalves, 4135",
    neighborhood: "Partenon",
    city: "Porto Alegre",
    state: "RS",
    cep: "90650-003",
    full: "Av. Bento Gonçalves, 4135 — Partenon, Porto Alegre - RS",
  },
  coordinates: { lat: -30.0623337, lng: -51.17476266 },
  rating: "5,0",
  ratingValue: 5,
  reviewsCount: "305",
  priceRange: "R$ 15–300",
  hoursLine: "Seg–sex 9h–20h · sáb 9h–17h",
  description:
    "Local especializado em barba, cabelo, sobrancelha, relaxamento, progressiva e platinado, com ambiente climatizado, TV a cabo, Wi-fi e tatuagem — conforto e entretenimento na Bento.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#casa", label: "A casa" },
  { href: "#equipe", label: "Equipe" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "A Bento" },
] as const;

export const SERVICES = [
  { name: "Corte", price: "R$ 55", time: "45 min", note: "O clássico da casa" },
  { name: "Barba completa", price: "R$ 40", time: "30 min", note: "Contorno e navalha" },
  { name: "Corte + Barba", price: "R$ 80", time: "1h", note: "O combo da avenida", featured: true },
  { name: "Corte + barba + sobrancelha", price: "R$ 90", time: "1h", note: "O pacote fechado" },
  { name: "Corte infantil", price: "R$ 55", time: "45 min", note: "Área kids no salão" },
  { name: "Corte + sobrancelha", price: "R$ 65", time: "50 min", note: "Linha e design" },
  { name: "Platinado", price: "R$ 155", time: "4h", note: "Descoloração completa" },
  { name: "Luzes platinadas", price: "R$ 130", time: "2h 45", note: "Mechas frias" },
  { name: "Progressiva", price: "R$ 100", time: "1h 30", note: "Alisamento" },
  { name: "Sobrancelhas", price: "R$ 15", time: "10 min", note: "Acabamento rápido" },
] as const;

export const PERKS = [
  { title: "Estacionamento", text: "Ponto de avenida, vaga na Bento." },
  { title: "Área infantil", text: "Corte de R$ 55 também pra gurizada." },
  { title: "Pets", text: "Cachorro entra. Sem drama." },
  { title: "Wi-fi e TV", text: "Climatizado, cabo e tempo de espera." },
  { title: "Tatuagem", text: "Mais que cadeira: a casa entretém." },
  { title: "La Poa", text: "Moletom, camisa e boné no mesmo balcão." },
] as const;

export const TEAM = [
  {
    name: "Lucas Elias",
    photo: "/fotos/lucas.png",
    role: "Barbeiro",
  },
  {
    name: "Anderson Santos",
    photo: "/fotos/anderson.jpg",
    role: "Barbeiro",
  },
  {
    name: "Antônio Rodrigues",
    photo: "/fotos/antonio.jpg",
    role: "Barbeiro e foto",
  },
  {
    name: "Vitor Trindade",
    photo: "/fotos/vitor.jpg",
    role: "Barbeiro",
  },
  {
    name: "Diego Antunes",
    photo: "/fotos/diego.jpg",
    role: "Barbeiro",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/interior.jpg", alt: "Corte infantil no interior de tijolo da Poa Barber Shop", wide: true },
  { src: "/fotos/diego.jpg", alt: "Diego Antunes no salão — tijolo aparente e azulejo branco" },
  { src: "/fotos/anderson.jpg", alt: "Anderson Santos — fade e barba com a Bento ao fundo" },
  { src: "/fotos/corte-fade.jpg", alt: "Fade com top volumoso" },
  { src: "/fotos/corte-platinado.jpg", alt: "Corte platinado com fade" },
  { src: "/fotos/corte-color.jpg", alt: "Corte com mechas magenta e azul" },
  { src: "/fotos/corte-linha.jpg", alt: "Fade infantil com linha" },
] as const;

export const REVIEWS = [
  {
    name: "Igor",
    text: "Como sempre, cinco estrelas.",
    service: "Corte + Barba · Vitor Trindade",
  },
  {
    name: "André",
    text: "Só corte neste salão — os guri são fera.",
    service: "Corte · Diego Antunes",
  },
  {
    name: "Luiz Cláudio",
    text: "O Antônio sempre muito atencioso e competente, além de ser pontual. Recomendo!",
    service: "Corte · Antônio Rodrigues",
  },
  {
    name: "Rodrigo",
    text: "Sempre perfeito.",
    service: "Corte + Barba · Lucas Elias",
  },
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
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(9), endMin: hm(17), label: "9h – 17h" }],
  },
};

export const HOURS_NOTE = "Horário conforme o Booksy da casa. Confirme na hora de agendar.";
