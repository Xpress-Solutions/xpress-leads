export const SITE = {
  name: "Lancheria do Parque",
  nickname: "A Lanchera",
  tagline: "Em frente à Redenção — Bom Fim, Porto Alegre",
  headline: "A Lanchera",
  subheadline:
    "Suco na jarra, xis coração e à la minuta. Desde 1982 no toldo vermelho da Osvaldo Aranha, 1086.",
  phoneDisplay: "(51) 3311-8321",
  phoneTel: "+555133118321",
  whatsapp:
    "https://wa.me/555133118321?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20a%20Lancheria%20do%20Parque.",
  instagram: "https://www.instagram.com/lancheriadoparqueoficial/",
  instagramHandle: "@lancheriadoparqueoficial",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Lancheria+do+Parque+Av.+Osvaldo+Aranha+1086+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Lancheria%20do%20Parque%2C%20Avenida%20Osvaldo%20Aranha%201086%2C%20Bom%20Fim%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Lancheria+do+Parque+Osvaldo+Aranha+1086+Porto+Alegre",
  address: {
    street: "Av. Osvaldo Aranha, 1086",
    neighborhood: "Bom Fim",
    city: "Porto Alegre",
    state: "RS",
    cep: "90035-191",
    nearby: "Em frente ao Parque Farroupilha — a Redenção",
  },
  rating: "4,7",
  founded: "1982",
  foundedNote: "maio de 1982",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#suco", label: "Suco na jarra" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#localizacao", label: "O 1086" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string
  short: string
  slots: { startMin: number; endMin: number; label: string }[] | null
};

const hm = (h: number, m = 0) => h * 60 + m;

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: {
    label: "Domingo",
    short: "Dom",
    slots: [{ startMin: hm(6), endMin: hm(22), label: "6h – 22h" }],
  },
  1: {
    label: "Segunda",
    short: "Seg",
    slots: [{ startMin: hm(6), endMin: hm(23, 45), label: "6h – 23h45" }],
  },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(6), endMin: hm(23, 45), label: "6h – 23h45" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(6), endMin: hm(23, 45), label: "6h – 23h45" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(6), endMin: hm(23, 45), label: "6h – 23h45" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(6), endMin: hm(23, 45), label: "6h – 23h45" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(6), endMin: hm(23, 45), label: "6h – 23h45" }],
  },
};

export const HOURS_NOTE =
  "Horários conforme Destino POA e Restaurant Guru. Algumas listagens fecham o domingo às 21h30. Confirme no Google antes de vir.";
