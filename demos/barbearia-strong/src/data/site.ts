export const SITE = {
  name: "Barbearia Strong",
  shortName: "Strong",
  tagline: "A melhor experiência do centro de Porto Alegre.",
  headline: "STRONG",
  kicker: "Barbearia",
  subheadline: "A melhor experiência do centro de Porto Alegre.",
  phoneDisplay: "(51) 99955-1604",
  phoneTel: "+5551999551604",
  whatsapp:
    "https://wa.me/5551999551604?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20quero%20marcar%20hor%C3%A1rio%20na%20Barbearia%20Strong.",
  instagram: "https://www.instagram.com/barbeariastrongpoa/",
  instagramHandle: "@barbeariastrongpoa",
  maps: "https://www.google.com/maps/search/?api=1&query=Barbearia+Strong+Rua+Dr.+Flores+327+loja+3+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rua%20Dr.%20Flores%20327%20Centro%20Hist%C3%B3rico%20Porto%20Alegre&t=&z=17&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Barbearia+Strong+Rua+Dr.+Flores+327+Porto+Alegre",
  address: {
    street: "Rua Dr. Flores, 327 — loja 3",
    extra: "Galeria Universitário",
    neighborhood: "Centro Histórico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90020-121",
    nearby: "A poucos passos da estação Mercado do Trensurb",
  },
  rating: "5,0",
  reviewsCount: "+80",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#galeria", label: "Galeria" },
  { href: "#sobre", label: "Sobre" },
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
  0: { label: "Domingo", short: "Dom", slots: null },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(9), endMin: hm(20), label: "9h – 20h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(8), endMin: hm(20), label: "8h – 20h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(8), endMin: hm(18), label: "8h – 18h" }],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas (Google / guias). Confirme no WhatsApp antes de cruzar o Centro.";

export const SERVICES = [
  {
    name: "Corte",
    text: "Fade, tesoura, clássico ou o corte do centro: na régua, no tempo de quem tem expediente.",
  },
  {
    name: "Barba",
    text: "Navalha, contorno e o acabamento que o Anderson trata como parte do corte — não como extra.",
  },
  {
    name: "Corte + barba",
    text: "O combo da casa. Quem fecha fidelidade no Instagram já conhece o ritmo: uma vez por semana.",
  },
  {
    name: "Sobrancelha e sidecut",
    text: "Acabamento masculino e sidecut feminino — review da casa cita os dois no mesmo salão.",
  },
] as const;

export const PACKAGES = [
  {
    name: "Fidelidade corte",
    price: "R$ 180",
    detail: "1 corte por semana, 8 semanas. Uso individual, com horário marcado.",
  },
  {
    name: "Fidelidade corte + barba",
    price: "R$ 380",
    detail: "1 corte + barba por semana, 8 semanas. Não acumula se perder a semana.",
  },
] as const;

export const TEAM = [
  {
    name: "Anderson",
    role: "Dono e barbeiro",
    text: "Ex-atleta profissional, dono da Strong. Reviews do Centro citam ele pelo nome: corte, barba e autoestima.",
  },
  {
    name: "A gurizada",
    role: "Equipe da Dr. Flores",
    text: "Cliente fala em guris finos, ambiente de amigos e serviço rápido quando o relógio aperta.",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/hero.jpg", alt: "Logo Strong na parede de tijolo e fade platinado" },
  { src: "/fotos/interior.jpg", alt: "Anderson finalizando corte na loja da Dr. Flores" },
  { src: "/fotos/fade.jpg", alt: "Fade e barba na régua, capa preta da Strong" },
  { src: "/fotos/barba.jpg", alt: "Barba branca alinhada na cadeira da Strong" },
  { src: "/fotos/moderno.jpg", alt: "Taper fade e textura — corte contemporâneo da casa" },
] as const;

export const REVIEWS = [
  {
    text: "Sem dúvidas a melhor barbearia do Centro de Porto Alegre. O Anderson é um profissional incrível. Sabe muito bem realizar cortes e barbas e faz aumentar nossa autoestima.",
  },
  {
    text: "Ótimo lugar, simples e aconchegante. Já sou cliente há quase um ano. Barbeiros muito simpáticos.",
  },
  {
    text: "Melhor barbearia de Porto — ambiente familiar e de amigos, gente fina, humilde e serviço excelente. Parabéns aos guris, cortam muito todos.",
  },
] as const;
