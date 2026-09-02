export const SITE = {
  name: "El Farol",
  fullName: "El Farol Porteño",
  tagline: "Buteco porteño · Rio Branco",
  headline: "El Farol",
  line: "Empanadas, fernet e milonga de quinta — a casa argentina da Mariante desde 2009.",
  phoneDisplay: "(51) 99447-9447",
  phoneTel: "+5551994479447",
  landlineDisplay: "(51) 3237-2229",
  landlineTel: "+555132372229",
  whatsapp:
    "https://wa.me/5551994479447?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20El%20Farol%20e%20queria%20reservar%20uma%20mesa.",
  instagram: "https://www.instagram.com/elfarol855/",
  instagramHandle: "@elfarol855",
  maps: "https://www.google.com/maps/search/?api=1&query=El+Farol+Rua+Mariante+855+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=El%20Farol%2C%20Rua%20Mariante%20855%2C%20Rio%20Branco%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua Mariante, 855",
    neighborhood: "Rio Branco",
    city: "Porto Alegre",
    state: "RS",
    full: "Rua Mariante, 855 — Rio Branco, Porto Alegre/RS",
  },
  hours: "Ter–dom 18h30–0h · segunda fechado",
  hoursNote: "Horário conforme Comida di Buteco e o Jornal do Comércio. Confirme no WhatsApp antes de vir.",
  founded: "2009",
  owner: "Alfredo Navarro",
  identity:
    "Restaurante argentino na Mariante desde 2009, do uruguaio-argentino Alfredo Navarro. Empanadas, milanesas, entrecot, fernet e milonga de tango às quintas. Ponto da comunidade platina em Porto Alegre.",
} as const;

export const NAV = [
  { href: "#casa", label: "A casa" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#milonga", label: "Milonga" },
  { href: "#galeria", label: "Galeria" },
  { href: "#onde", label: "Onde" },
] as const;

export const HOURS = [
  { day: "Segunda", time: "Fechado" },
  { day: "Terça", time: "18h30 – 0h" },
  { day: "Quarta", time: "18h30 – 0h" },
  { day: "Quinta", time: "18h30 – 0h · milonga" },
  { day: "Sexta", time: "18h30 – 0h" },
  { day: "Sábado", time: "18h30 – 0h" },
  { day: "Domingo", time: "18h30 – 0h" },
] as const;

export const MENU = [
  {
    name: "Empanadas",
    desc: "Massa caseira, carne cortada na faca ou presunto e queijo. Chimichurri e tártaro na mesa.",
    photo: "/fotos/empanadas.jpg",
    tag: "O mais pedido",
  },
  {
    name: "Sanduíche Del 10",
    desc: "Petisco do Comida di Buteco 2026. A casa no circuito — o clique fica aqui, não no guia.",
    photo: "/fotos/sanduiche-del-10.jpg",
    tag: "CDB 2026",
  },
  {
    name: "Milanesa & entrecot",
    desc: "Milanesa napolitana, entrecot com chimichurri, iscas com gorgonzola. Prato de bodegón, não de steakhouses.",
    photo: "/fotos/petisco.jpg",
    tag: "Parrilla",
  },
  {
    name: "Fernet Cola",
    desc: "Referência do bitter em Porto Alegre — na garrafa de Fernet Branca cortada ao meio, do jeito raiz.",
    photo: "/fotos/ambiente.jpg",
    tag: "Da casa",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/hero.jpg", alt: "Fachada noturna do El Farol Porteño na Mariante, com letreiro e mesas na grade" },
  { src: "/fotos/interior.jpg", alt: "Salão com mural de tango, Caminito e toalhas xadrez" },
  { src: "/fotos/caminito.jpg", alt: "Mural do Caminito e silhueta de casal dançando tango" },
  { src: "/fotos/tango.jpg", alt: "Canto do salão com bandeiras, flâmulas e farol aceso" },
  { src: "/fotos/ambiente.jpg", alt: "Interior verde-floresta com lousa da noite de tango" },
  { src: "/fotos/empanadas.jpg", alt: "Empanada argentina do El Farol com chimichurri" },
  { src: "/fotos/sanduiche-del-10.jpg", alt: "Sanduíche Del 10, petisco do Comida di Buteco 2026" },
  { src: "/fotos/cardapio-impresso.jpg", alt: "Cardápio impresso El Farol Buteco Porteño" },
] as const;
