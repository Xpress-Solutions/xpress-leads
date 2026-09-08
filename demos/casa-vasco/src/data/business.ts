export const business = {
  name: "Casa Vasco",
  tagline: "Armazém de bebidas · bar · café",
  headline: "O casarão do Bom Fim.",
  phrase:
    "Vinho e cachaça sem pose — escolhe na bodega, senta no casarão.",
  description:
    "Numa casa de 1957 na Vasco da Gama, duas irmãs — destiladora e sommelier — reúnem mais de 120 vinhos e cerca de 70 cachaças artesanais. Armazém, gastrobar e a casinha do bairro.",
  address: {
    street: "R. Vasco da Gama, 207",
    neighborhood: "Bom Fim",
    city: "Porto Alegre",
    state: "RS",
    zip: "90420-111",
    full: "R. Vasco da Gama, 207 — Bom Fim, Porto Alegre - RS",
  },
  phone: "(51) 99261-1006",
  phoneLink: "tel:+5551992611006",
  whatsapp:
    "https://wa.me/5551992611006?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Casa%20Vasco%20e%20queria%20saber%20mais.",
  instagram: "https://www.instagram.com/casavasco207/",
  instagramHandle: "@casavasco207",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Casa+Vasco+Rua+Vasco+da+Gama+207+Bom+Fim+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Casa%20Vasco%2C%20Rua%20Vasco%20da%20Gama%20207%2C%20Bom%20Fim%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  coordinates: { lat: -30.0346, lng: -51.2105 },
  founded: "setembro de 2023",
  sisters: {
    larissa: "Larissa Teixeira — mestre destiladora, a Mana",
    carolina: "Carolina Teixeira — sommelier, a Nina",
  },
} as const;

export const hours = [
  { day: "Segunda", hours: "Fechado" },
  { day: "Terça", hours: "17h – 0h" },
  { day: "Quarta", hours: "17h – 0h" },
  { day: "Quinta", hours: "17h – 0h" },
  { day: "Sexta", hours: "17h – 0h" },
  { day: "Sábado", hours: "11h – 0h" },
  { day: "Domingo", hours: "11h – 22h" },
] as const;

export const facts = [
  { value: "120+", label: "rótulos de vinho", detail: "cerca de 25 países, sem carta — escolhe na bodega" },
  { value: "70", label: "cachaças artesanais", detail: "15 estados, do Norte ao Sul" },
  { value: "1957", label: "o casarão", detail: "120 m² revitalizados no Bom Fim" },
  { value: "2", label: "irmãs", detail: "destiladora + sommelier" },
] as const;
