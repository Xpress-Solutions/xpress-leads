export const SITE = {
  name: "Mato Bar",
  wordmark: "mato bar",
  tagline: "O primeiro bar de cervejas do Brasil com cardápio 100% vegetal.",
  headline: "mato bar",
  subheadline:
    "O primeiro bar de cervejas do Brasil com cardápio 100% vegetal.",
  phoneDisplay: "(51) 99895-2432",
  phoneTel: "+5551998952432",
  whatsapp:
    "https://wa.me/5551998952432?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20das%20torneiras%20e%20da%20mesa%20de%20hoje%20no%20Mato%20Bar.",
  instagram: "https://www.instagram.com/_matobar/",
  instagramHandle: "@_matobar",
  maps: "https://www.google.com/maps/search/?api=1&query=Mato+Bar+Rua+Francisco+Ferrer+192+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Mato%20Bar%2C%20Rua%20Francisco%20Ferrer%20192%2C%20Rio%20Branco%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "R. Francisco Ferrer, 192",
    neighborhood: "Rio Branco",
    city: "Porto Alegre",
    state: "RS",
    cep: "90420-140",
    nearby: "Perto da esquina Miguel Tostes com Cabral",
  },
  rating: "4,4",
  reviewsCount: "105",
  founded: "2024",
  brewery: "Primor da Terra",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "início" },
  { href: "#torneiras", label: "torneiras" },
  { href: "#cardapio", label: "cardápio" },
  { href: "#sobre", label: "a casa" },
  { href: "#avaliacoes", label: "falou" },
  { href: "#localizacao", label: "a ferrer" },
] as const;

export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type DaySchedule = {
  label: string;
  short: string;
  hours: string | null;
};

export const WEEKLY_HOURS: Record<Weekday, DaySchedule> = {
  0: { label: "Domingo", short: "Dom", hours: null },
  1: { label: "Segunda", short: "Seg", hours: null },
  2: { label: "Terça", short: "Ter", hours: null },
  3: { label: "Quarta", short: "Qua", hours: "18h – 0h" },
  4: { label: "Quinta", short: "Qui", hours: "18h – 0h" },
  5: { label: "Sexta", short: "Sex", hours: "18h – 0h" },
  6: { label: "Sábado", short: "Sáb", hours: "18h – 0h" },
};

export const HOURS_NOTE =
  "Qua a sáb, 18h à meia-noite. Alguns domingos abrem para feira vegana e eventos de rua. Confirme no Instagram.";
