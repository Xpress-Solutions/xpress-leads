import brand from "../../brand.json";

export const BRAND = brand;

export const SITE = {
  name: brand.name,
  leadId: brand.leadId,
  headline: "Golden Bull",
  oneLiner: "A Bruscheta Golden na Cipó — noite no Passo D’Areia.",
  positioning: brand.positioning,
  identity:
    "Casa no Passo D’Areia. No Comida di Buteco 2026 com a Bruscheta Golden. Nome de marca e petisco autoral — perfil de bar de noite de bairro.",
  address: "Rua Cipó, 1264 — Passo D’Areia, Porto Alegre",
  street: "Rua Cipó, 1264",
  neighborhood: "Passo D’Areia",
  city: "Porto Alegre",
  state: "RS",
  cep: "91360-370",
  hours: "Seg–sáb 18h–0h",
  hoursNote: "Domingo fechado. Horário público da temporada Comida di Buteco 2026.",
  dish: "Bruscheta Golden",
  dishPrice: "R$ 40",
  dishCircuito: "Comida di Buteco 2026 · tema verduras",
  dishCopy:
    "O petisco da edição: pães abertos, carne desfiada, molho dourado no centro da bandeja e alecrim — a Bruscheta Golden fotografada por Israh Ramos para o circuito de Porto Alegre.",
  maps: "https://www.google.com/maps/search/?api=1&query=Golden+Bull+Rua+Cip%C3%B3+1264+Passo+D%27Areia+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Golden%20Bull%2C%20Rua%20Cip%C3%B3%201264%2C%20Passo%20D%27Areia%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  photoCredit: "Foto: Israh Ramos / Revista Sabores do Sul",
  photoSrc: "/fotos/bruscheta-golden.jpg",
} as const;

export const WEEK = [
  { day: "Segunda", hours: "18h – 0h" },
  { day: "Terça", hours: "18h – 0h" },
  { day: "Quarta", hours: "18h – 0h" },
  { day: "Quinta", hours: "18h – 0h" },
  { day: "Sexta", hours: "18h – 0h" },
  { day: "Sábado", hours: "18h – 0h" },
  { day: "Domingo", hours: "Fechado" },
] as const;
