import brand from "../../brand.json";

export const SITE = {
  name: brand.name,
  tagline: "Seu lanche é aqui.",
  neighborhood: "Partenon",
  city: "Porto Alegre",
  state: "RS",
  address: "Avenida Bento Gonçalves, 1979 — Partenon",
  addressShort: "Av. Bento Gonçalves, 1979",
  cep: "90650-001",
  nearby: "Corredor da Bento, entre a PUCRS e o fluxo da Ipiranga",
  phoneDisplay: "(51) 3105-4721",
  phoneTel: "+555131054721",
  whatsapp:
    "https://wa.me/555131054721?text=" +
    encodeURIComponent("Olá! Vim pelo site e queria saber mais sobre o Nosso Bar."),
  instagram: "https://www.instagram.com/nossobarlanches/",
  instagramHandle: "@nossobarlanches",
  facebook: "https://www.facebook.com/nossobarlanches/",
  maps: "https://www.google.com/maps/search/?api=1&query=Nosso+Bar+Avenida+Bento+Gon%C3%A7alves+1979+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Nosso%20Bar%2C%20Avenida%20Bento%20Gon%C3%A7alves%201979%2C%20Partenon%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hoursShort: "Seg–qui e dom até 2h · sex–sáb até 4h",
  hoursNote:
    "Horário público da ficha Comida di Buteco e da matéria do Jornal do Comércio (2026). Confirme no balcão ou no Instagram.",
  rating: "4,4",
  reviewsCount: "+1.000",
  identity:
    "Boteco de avenida no Partenon, participante do Comida di Buteco 2026 (pastel de vento). Casa noturna de verdade: segunda a sábado até 4h, domingo até 2h. Já esteve no circuito em 2022. Identidade de boteco raiz, fora da Cidade Baixa.",
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "Pastel de vento" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#casa", label: "A casa" },
  { href: "#localizacao", label: "Onde" },
] as const;

export const HOURS = [
  { day: "Segunda", slot: "17h – 2h" },
  { day: "Terça", slot: "17h – 2h" },
  { day: "Quarta", slot: "17h – 2h" },
  { day: "Quinta", slot: "17h – 2h" },
  { day: "Sexta", slot: "17h – 4h" },
  { day: "Sábado", slot: "17h – 4h" },
  { day: "Domingo", slot: "17h – 2h" },
] as const;

export const MENU = [
  {
    name: "Pastel de Vento",
    tag: "Comida di Buteco 2026",
    price: "R$ 40",
    note: "Petisco da edição — o clique que hoje cai no guia.",
  },
  {
    name: "Xis à parmegiana",
    tag: "Viral da casa",
    price: "R$ 94,90",
    note: "Filé à milanesa, molho vermelho e queijo no pão cervejinha. Serve até quatro.",
  },
  {
    name: "Mocotó",
    tag: "Carro-chefe",
    price: "R$ 59,90",
    note: "O prato que faz gente vir de Cachoeirinha só pra buscar.",
  },
  {
    name: "Torre de lasanha",
    tag: "Invenção da Andresa",
    price: "R$ 74,90",
    note: "Cinco camadas no cilindro, puxada na mesa. Serve duas ou três.",
  },
  {
    name: "Parmegiana desconstruída",
    tag: "Vice 2022",
    price: "Petisco",
    note: "Vice-campeã do Comida di Buteco — a casa já sabe concurso.",
  },
  {
    name: "Cachorro-quente de coração",
    tag: "Porção de verdade",
    price: "Pedido",
    note: "Meio quilo de coração de frango no recheio. Aqui é tudo muito.",
  },
] as const;
