import brand from "../../brand.json";

export const BRAND = brand;

export const SITE = {
  name: "Snack Bar do Barba",
  shortName: "Do Barba",
  headline: "Snack Bar do Barba",
  oneLiner: "Feijoca Crocante na Ângelo Crivellaro.",
  identity:
    "Snack bar no Jardim do Salso. Nome de dono + petisco de feijoada em formato de boteco — identidade pessoal clara.",
  phoneDisplay: "(51) 98205-3540",
  phoneTel: "+5551982053540",
  whatsapp:
    "https://wa.me/5551982053540?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Snack%20Bar%20do%20Barba.",
  maps: "https://www.google.com/maps/search/?api=1&query=Snack+Bar+do+Barba+Rua+Angelo+Crivellaro+540+Jardim+do+Salso+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Snack%20Bar%20do%20Barba%2C%20Rua%20%C3%82ngelo%20Crivellaro%20540%2C%20Jardim%20do%20Salso%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Ângelo Crivellaro, 540",
    neighborhood: "Jardim do Salso",
    city: "Porto Alegre",
    state: "RS",
    full: "Rua Ângelo Crivellaro, 540 — Jardim do Salso, Porto Alegre",
  },
  hoursNote:
    "Horários da ficha oficial do Comida di Buteco. Segunda não consta — confirme no WhatsApp.",
} as const;

export const HOURS = [
  { day: "Segunda", time: "Confirmar" },
  { day: "Terça", time: "18h – 00h" },
  { day: "Quarta", time: "18h – 00h" },
  { day: "Quinta", time: "18h – 00h" },
  { day: "Sexta", time: "18h – 01h" },
  { day: "Sábado", time: "18h – 01h" },
  { day: "Domingo", time: "18h – 00h" },
] as const;

export const PETISCOS = [
  {
    year: "2026",
    name: "Feijoca Crocante",
    text: "O petisco da edição no Comida di Buteco: feijoada em formato de snack, casca dourada, o prato que leva o Barba ao concurso.",
    source: "Revista Sabores do Sul · foto Israh Ramos",
  },
  {
    year: "2025",
    name: "Deixa falar",
    text: "Bolinhos de carne de língua desfiada com queijo parmesão. Acompanha geleia caseira de abacaxi com pimenta.",
    source: "Ficha oficial Comida di Buteco",
  },
  {
    year: "2024",
    name: "Moda do Sul",
    text: "Coração temperado e frito na chapa até dourar, catupiry, cheddar e muçarela. Batatas rústicas e anéis de cebola.",
    source: "G1 · Divulgação/Comida di Buteco — Israh Ramos",
  },
] as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "Feijoca" },
  { href: "#casa", label: "A casa" },
  { href: "#edicoes", label: "Edições" },
  { href: "#local", label: "Onde fica" },
] as const;
