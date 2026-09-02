export const SITE = {
  name: "Boteco Vitória",
  shortName: "Vitória",
  tagline: "Bar no Jardim Botânico — Porto Alegre/RS",
  headline: "O melhor para os melhores.",
  subheadline: "Seu boteco no Jardim Botânico.",
  phoneDisplay: "(51) 3015-1291",
  phoneTel: "+555130151291",
  whatsapp:
    "https://wa.me/555130151291?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Boteco%20Vit%C3%B3ria.",
  instagram: "https://www.instagram.com/botecovitoria/",
  instagramHandle: "@botecovitoria",
  facebookSearch:
    "https://www.google.com/search?q=Boteco+Vit%C3%B3ria+POA+Facebook",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Boteco+Vit%C3%B3ria+R.+Felizardo+445+Jardim+Bot%C3%A2nico+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Boteco%20Vit%C3%B3ria%2C%20Rua%20Felizardo%20445%2C%20Jardim%20Bot%C3%A2nico%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  googleReviews:
    "https://www.google.com/maps/search/?api=1&query=Boteco+Vit%C3%B3ria+R.+Felizardo+445+Porto+Alegre",
  address: {
    street: "R. Felizardo, 445",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    cep: "90160-092",
    nearby: "Próximo ao Bourbon Ipiranga",
  },
  rating: "4,7",
  reviewsCount: "+2.600",
  priceRange: "R$ 40–140",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/cardapio", label: "Cardápio" },
  { href: "/#destaques", label: "Destaques" },
  { href: "/#eventos", label: "Eventos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#avaliacoes", label: "Avaliações" },
  { href: "/#localizacao", label: "Localização" },
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
  1: { label: "Segunda", short: "Seg", slots: null },
  2: {
    label: "Terça",
    short: "Ter",
    slots: [{ startMin: hm(17), endMin: hm(25), label: "17h – 01h" }],
  },
  3: {
    label: "Quarta",
    short: "Qua",
    slots: [{ startMin: hm(17), endMin: hm(25), label: "17h – 01h" }],
  },
  4: {
    label: "Quinta",
    short: "Qui",
    slots: [{ startMin: hm(17), endMin: hm(25), label: "17h – 01h" }],
  },
  5: {
    label: "Sexta",
    short: "Sex",
    slots: [{ startMin: hm(17), endMin: hm(25), label: "17h – 01h" }],
  },
  6: {
    label: "Sábado",
    short: "Sáb",
    slots: [{ startMin: hm(12), endMin: hm(25), label: "12h – 01h" }],
  },
};

export const HOURS_NOTE =
  "Horários conforme listagens públicas. Algumas fontes também apontam almoço de terça a sexta. Confirme no Google.";
