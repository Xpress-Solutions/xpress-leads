export const SITE = {
  name: "Gringo’s Lanches",
  shortName: "Gringo’s",
  headline: "Gringo’s",
  subheadline: "Tesouro de Molho — lanche de avenida no São João.",
  identity:
    "Lanchonete no São João. No Comida di Buteco 2026 com Tesouro de Molho. Nome Gringo’s — marca pessoal de lanche de avenida.",
  pitch:
    "A Gringo’s está no Comida di Buteco e ainda pede-se pelo telefone. Um site com o Tesouro de Molho e o cardápio na Ceará resolve.",
  neighborhood: "São João",
  city: "Porto Alegre",
  address: "Av. Ceará, 823 — São João, Porto Alegre",
  street: "Av. Ceará, 823",
  cep: "90240-511",
  hoursLead: "Seg–sáb (horários variados)",
  phoneDisplay: "(51) 3519-1878",
  phoneTel: "+555135191878",
  whatsappNumber: "5551997129632",
  instagram: "https://www.instagram.com/gringos_lanches_/",
  instagramHandle: "@gringos_lanches_",
  maps: "https://www.google.com/maps/search/?api=1&query=Gringo+Lanches+Av+Cear%C3%A1+823+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Av.%20Cear%C3%A1%2C%20823%2C%20S%C3%A3o%20Jo%C3%A3o%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  rating: "4,8",
  reviewsCount: "390",
  priceRange: "R$ 20–40",
} as const;

export const whatsappUrl = (text: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const WA_DEFAULT = whatsappUrl(
  "Olá, Gringo’s! Vim pelo site e quero pedir — Tesouro de Molho e o cardápio da Ceará.",
);

export const WA_TESOURO = whatsappUrl(
  "Olá, Gringo’s! Quero o Tesouro de Molho (Comida di Buteco 2026).",
);

export const HOURS = [
  { day: "Segunda", hours: "11h – 22h30" },
  { day: "Terça", hours: "11h – 22h30" },
  { day: "Quarta", hours: "11h – 22h30" },
  { day: "Quinta", hours: "11h – 22h30" },
  { day: "Sexta", hours: "11h – 22h30" },
  { day: "Sábado", hours: "11h – 14h30" },
  { day: "Domingo", hours: "Fechado" },
] as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#tesouro", label: "Tesouro" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#pedido", label: "Pedir" },
  { href: "#onde", label: "Onde" },
] as const;
