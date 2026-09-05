export const SITE = {
  name: "Resenha Gourmet",
  shortName: "Resenha",
  tagline: "Boteco elevado na Av. do Forte — Vila Ipiranga",
  headline: "Resenha Gourmet",
  subheadline:
    "O Bolinho Resenha — campeão do Comida di Buteco 2026 no Rio Grande do Sul.",
  identity:
    "Casa na Vila Ipiranga. No Comida di Buteco 2026 com Bolinho Resenha. Nome de 'resenha' (encontro) + gourmet — posicionamento de boteco elevado de avenida.",
  pitch:
    "A Resenha Gourmet está no Comida di Buteco e o bolinho ainda não tem página. Um site na Av. do Forte resolve.",
  approach: "Chegue pelo Bolinho Resenha.",
  hoursLabel: "Seg–sáb 11h–0h",
  phoneDisplay: "(51) 3273-5192",
  phoneTel: "+555132735192",
  whatsapp:
    "https://wa.me/555132735192?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20do%20Bolinho%20Resenha.",
  instagram: "https://www.instagram.com/resenhagourmett/",
  instagramHandle: "@resenhagourmett",
  maps: "https://www.google.com/maps/search/?api=1&query=Resenha+Gourmet+Av+do+Forte+1220+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Resenha%20Gourmet%2C%20Av.%20do%20Forte%201220%2C%20Vila%20Ipiranga%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Resenha+Gourmet+Av+do+Forte+1220+Porto+Alegre",
  address: {
    street: "Av. do Forte, 1220",
    neighborhood: "Vila Ipiranga",
    city: "Porto Alegre",
    state: "RS",
    cep: "91360-001",
    nearby: "Zona Norte · em frente ao movimento da avenida",
  },
  rating: "4,8",
  reviewsCount: "118",
  priceRange: "R$ 20–40",
  photoCredit: "Foto do Bolinho Resenha: Israh Ramos / Revista Sabores do Sul",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#bolinho", label: "Bolinho Resenha" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#sobre", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "Localização" },
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

export const HOURS_NOTE =
  "Horário da casa nas listagens do concurso: segunda a sábado, 11h à meia-noite. O Google às vezes marca o sábado a partir das 16h — confirme no salão.";
