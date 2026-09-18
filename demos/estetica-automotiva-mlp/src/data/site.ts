export const SITE = {
  name: "MLP",
  fullName: "Estética Automotiva MLP",
  tagline: "Chapeação e pintura automotiva.",
  line: "Estética automotiva na Rua Guilherme Alves — preservar a originalidade do carro, com rapidez e acabamento limpo.",
  phoneDisplay: "(51) 99182-7797",
  phoneTel: "+5551991827797",
  landlineDisplay: "(51) 3023-6445",
  landlineAltDisplay: "(51) 3023-6425",
  landlineTel: "+555130236445",
  whatsapp:
    "https://wa.me/5551991827797?text=Gostaria%20de%20fazer%20um%20or%C3%A7amento...",
  instagram: "https://www.instagram.com/esteticaautomotivamlp/",
  instagramHandle: "@esteticaautomotivamlp",
  maps: "https://www.google.com/maps/search/?api=1&query=Rua+Guilherme+Alves+299+Porto+Alegre",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5459996394966!2d-51.18826472285932!3d-30.04988013153148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197819435dc1d3%3A0xad2781f2d62e1d12!2sR.%20Guilherme%20Alves%2C%20299%20-%20Petr%C3%B3polis%2C%20Porto%20Alegre%20-%20RS%2C%2090670-094!5e0!3m2!1spt-BR!2sbr!4v1748627451146!5m2!1spt-BR!2sbr",
  address: {
    street: "Rua Guilherme Alves, 299",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    full: "Rua Guilherme Alves, 299 — Jardim Botânico, Porto Alegre/RS",
  },
  since: "2001",
} as const;

export const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#oficina", label: "Oficina" },
  { href: "#onde", label: "Onde" },
] as const;

export type NavHref = (typeof NAV)[number]["href"];

export const TICKER = [
  "Martelinho de ouro",
  "Espelhamento",
  "Para-choque",
  "Pintura",
  "Polimento",
  "Guilherme Alves 299",
] as const;

export const SERVICES = [
  {
    src: "/fotos/servico-martelinho.jpg",
    title: "Martelinho de ouro",
    note: "Amassados sem pintura, quando a chapa ainda permite. Menos lixa, mais originalidade.",
    radius: "2.8rem 0.8rem 2.8rem 0.8rem",
  },
  {
    src: "/fotos/servico-espelhamento.jpg",
    title: "Espelhamento automotivo",
    note: "Brilho profundo na pintura — o carro sai com a lataria viva, não opaca.",
    radius: "0.9rem 3.2rem 0.9rem 3.2rem",
  },
  {
    src: "/fotos/servico-parachoque.jpg",
    title: "Recuperação de para-choque",
    note: "Quebrou, ralou, soltou. Recupera em vez de trocar a peça inteira.",
    radius: "3.4rem 3.4rem 0.7rem 0.7rem",
  },
  {
    src: "/fotos/servico-pintura.jpg",
    title: "Pintura automotiva",
    note: "Correto de cor, cabine e verniz. O acabamento que o olho pega de longe.",
    radius: "1.1rem 1.1rem 3.6rem 3.6rem",
  },
  {
    src: "/fotos/servico-polimento.jpg",
    title: "Polimento automotivo",
    note: "Riscos leves, oxidação e perda de brilho. Volta o espelho da lataria.",
    radius: "50% 1.2rem 50% 1.2rem",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/galeria-1.jpeg", alt: "Lataria em recuperação na MLP" },
  { src: "/fotos/galeria-2.jpeg", alt: "Detalhe de pintura na oficina" },
  { src: "/fotos/galeria-3.jpeg", alt: "Serviço de chapeação MLP" },
  { src: "/fotos/galeria-5.jpeg", alt: "Trabalho de funilaria MLP" },
  { src: "/fotos/galeria-6.jpeg", alt: "Peça em preparação" },
  { src: "/fotos/galeria-7.jpeg", alt: "Carro na rua Guilherme Alves" },
] as const;
