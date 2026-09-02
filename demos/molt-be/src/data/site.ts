export const SITE = {
  name: "Molt Be",
  nameMark: "Molt Be.",
  catalan: "Molt bé",
  tagline: "Muito bom, em catalão.",
  headline: "Molt Be.",
  subheadline: "Casa catalã no jardim da Winge — Tristeza.",
  phoneDisplay: "(51) 99492-8290",
  phoneTel: "+5551994928290",
  whatsapp:
    "https://wa.me/5551994928290?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20reservar%20mesa%20no%20Molt%20Be.",
  instagram: "https://www.instagram.com/moltbezonasul/",
  instagramHandle: "@moltbezonasul",
  email: "moltbezonasul@gmail.com",
  maps: "https://www.google.com/maps/search/?api=1&query=Molt%20Be%20Mario%20Totta%20963%20Porto%20Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Molt%20Be%2C%20Rua%20Doutor%20M%C3%A1rio%20Totta%20963%2C%20Tristeza%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Doutor Mário Totta, 963",
    complement: "Entrada da Floricultura Winge",
    neighborhood: "Tristeza",
    city: "Porto Alegre",
    state: "RS",
    cep: "91920-130",
    full: "Rua Doutor Mário Totta, 963 — Floricultura Winge, Tristeza, Porto Alegre",
  },
} as const;

export const HOURS = [
  { day: "Segunda", hours: "Fechado" },
  { day: "Terça", hours: "Fechado" },
  { day: "Quarta", hours: "12h – 15h" },
  { day: "Quinta", hours: "12h – 22h" },
  { day: "Sexta", hours: "12h – 22h" },
  { day: "Sábado", hours: "11h – 22h" },
  { day: "Domingo", hours: "11h – 18h30" },
] as const;

export const HOURS_NOTE =
  "Horários públicos (Destino POA / assessoria). Na temporada do Comida di Buteco a ficha cita todos os dias — confirme no WhatsApp.";

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "A croqueta" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#onde", label: "Onde" },
] as const;
