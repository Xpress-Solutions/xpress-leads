export const SITE = {
  name: "Rock'n Beer Pub",
  shortName: "Rock'n Beer",
  headline: "Rock'n Beer",
  tagline: "O pub dos apaixonados por rock.",
  city: "Canoas",
  neighborhood: "Marechal Rondon / Vila Rosa",
  phoneDisplay: "(51) 3785-7529",
  phoneTel: "+555137857529",
  whatsapp:
    "https://wa.me/555137857529?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20do%20Rock%27n%20Beer.",
  instagram: "https://www.instagram.com/rocknbeerpubcanoas/",
  instagramHandle: "@rocknbeerpubcanoas",
  maps: "https://www.google.com/maps/search/?api=1&query=Rock+n+Beer+Sezefredo+Azambuja+Vieira+266+Canoas",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rock%20n%20Beer%20Av.%20Doutor%20Sezefredo%20Azambuja%20Vieira%20266%20Canoas&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Av. Doutor Sezefredo Azambuja Vieira, 266",
    neighborhood: "Marechal Rondon / Vila Rosa",
    city: "Canoas",
    state: "RS",
    cep: "92020-020",
    full: "Av. Doutor Sezefredo Azambuja Vieira, 266 — Marechal Rondon / Vila Rosa, Canoas",
  },
  rating: "4,6",
  reviewsCount: "386",
  priceRange: "R$ 40–120",
  hoursLine: "Ter–qui 19h–23h30 · sex–sáb 19h–1h",
  founded: "2018",
  identity:
    "Pub rock em Canoas, Sezefredo. Participante do Comida di Buteco (petisco Belo Horizonte — mini-hambúrgueres). Instagram próprio da unidade Canoas. Identidade de música + burger de concurso.",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "Belo Horizonte" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#agenda", label: "Agenda" },
  { href: "#sobre", label: "A casa" },
  { href: "#galeria", label: "Galeria" },
  { href: "#localizacao", label: "Sezefredo" },
] as const;

export const HOURS = [
  { day: "Segunda", hours: "Fechado" },
  { day: "Terça", hours: "19h – 23h30" },
  { day: "Quarta", hours: "19h – 23h30" },
  { day: "Quinta", hours: "19h – 23h30" },
  { day: "Sexta", hours: "19h – 1h" },
  { day: "Sábado", hours: "19h – 1h" },
  { day: "Domingo", hours: "Fechado" },
] as const;

export const SHOWS = [
  {
    day: "Terça a quinta",
    title: "Palco abre às 19h",
    copy: "A casa acende o teal, o pendente baixa e a Sezefredo entra no ritmo. Confirma a banda no Instagram.",
  },
  {
    day: "Sexta e sábado",
    title: "Noite longa até 1h",
    copy: "Show, pizza saindo do forno e caneca na mesa. Reserva pelo WhatsApp se for em turma.",
  },
] as const;

export const REVIEWS = [
  {
    who: "Carine · Google",
    quote: "Comida 5 · atendimento 5 · atmosfera 5. Ticket na faixa de R$ 40–60.",
    score: "5,0",
  },
  {
    who: "Ty · Google",
    quote: "Comida 5 · atendimento 5 · atmosfera 5.",
    score: "5,0",
  },
  {
    who: "O que mais citam",
    quote: "Cebolada, pizza, rolinhos, picada e cerveja gelada — o vocabulário do Google da casa.",
    score: "4,6",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/hero.jpg", alt: "Salão do Rock'n Beer com palco, logo da guitarra e mesas" },
  { src: "/fotos/interior.jpg", alt: "Interior industrial com metal corrugado e pôsteres de rock" },
  { src: "/fotos/pizza.jpg", alt: "Pizzas da casa — forno, catupiry e fatia puxando queijo" },
  { src: "/fotos/burger.jpg", alt: "Hambúrguer, batata ondulada e caneca de cerveja" },
  { src: "/fotos/design.jpg", alt: "Pôsteres, palco e paredes de container" },
  { src: "/fotos/casa.jpg", alt: "Cabine vermelha, madeira e noite na Sezefredo" },
  { src: "/fotos/salao.jpg", alt: "Salão com mesas de madeira e palco ao fundo" },
  { src: "/fotos/noite.jpg", alt: "Noite na casa — mesa, palco e público" },
] as const;
