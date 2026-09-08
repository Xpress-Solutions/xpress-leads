import brand from "../../brand.json";

export const BRAND = brand;

export const SITE = {
  name: brand.name,
  leadId: brand.leadId,
  headline: "Pepeu Barber",
  line: "Sua imagem com autenticidade e estilo.",
  tagline: "Barba, cabelo e bigode na Vila Ipiranga.",
  founded: "Since 2020",
  founder: "Vitor Hugo Pepeu",
  identity:
    "Barbearia de bairro com o nome do barbeiro. Vitor Hugo Pepeu corta na Rua Umbu — letreiro verde, bigode no logo, salão claro com skate na parede. A casa é o Pepeu, não um tema de franquia.",
  address: "Rua Umbu, 715 loja 2 — Vila Ipiranga, Porto Alegre",
  street: "Rua Umbu, 715 loja 2",
  neighborhood: "Vila Ipiranga",
  city: "Porto Alegre",
  state: "RS",
  cep: "91350-100",
  hours: "Seg 10h–19h · ter–qua 9h30–19h · qui–sex 9h30–20h · sáb 10h–17h",
  hoursNote: "Domingo fechado. Horário conforme Booksy da casa.",
  phoneDisplay: "(51) 93798-4496",
  phoneTel: "+5551937984496",
  whatsapp:
    "https://wa.me/5551937984496?text=" +
    encodeURIComponent("Olá! Vim pelo site e quero marcar horário no Pepeu Barber."),
  instagram: "https://www.instagram.com/pepeubarber/",
  instagramHandle: "@pepeubarber",
  booksy: "https://booksy.com/pt-br/276079_pepeu-barber_barbearias_804125_porto-alegre",
  maps: "https://www.google.com/maps/search/?api=1&query=Pepeu+Barber+Rua+Umbu+715+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Pepeu%20Barber%2C%20Rua%20Umbu%20715%20loja%2002%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  rating: "5,0",
  reviewsCount: 128,
  reviewsSource: "Booksy",
  lat: -30.01494286,
  lng: -51.16184715,
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#equipe", label: "Equipe" },
  { href: "#casa", label: "A casa" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Onde" },
] as const;

export const SERVICES = [
  { name: "Cabelo", price: "R$ 45", time: "35 min", note: "O corte do Pepeu, na régua." },
  { name: "Barba", price: "R$ 45", time: "30 min", note: "Contorno e acabamento." },
  { name: "Combo cabelo + barba", price: "R$ 80", time: "1h 10", note: "O mais pedido." },
  { name: "Combo + barboterapia", price: "R$ 100", time: "1h", note: "Toalha quente e ritual." },
  { name: "Máquina", price: "R$ 30", time: "15 min", note: "Rápido, limpo." },
  { name: "Sobrancelha", price: "R$ 20", time: "5 min", note: "Detalhe que fecha o visual." },
  { name: "Hidratação", price: "R$ 30", time: "+30 min", note: "Junto do corte." },
] as const;

export const TEAM = [
  {
    name: "Vitor Hugo Pepeu",
    role: "Fundador · barbeiro",
    handle: "@pepeuvhr",
    photo: "/fotos/pepeu.jpeg",
    alt: "Vitor Hugo Pepeu, fundador da Pepeu Barber",
    text: "O nome da casa é o dele. Clientes no Booksy chamam de jedi das tesouras — corte rápido, sem errar.",
  },
  {
    name: "Nicollas Martins Côco",
    role: "Barbeiro",
    handle: "@coquinho.barbe",
    photo: "/fotos/coco.jpeg",
    alt: "Nicollas Martins Côco, barbeiro da Pepeu Barber",
    text: "A outra cadeira da Umbu 715. Mesma régua, mesma galera.",
  },
] as const;

export const HOURS_ROWS = [
  { day: "Segunda", time: "10h – 19h" },
  { day: "Terça", time: "9h30 – 19h" },
  { day: "Quarta", time: "9h30 – 19h" },
  { day: "Quinta", time: "9h30 – 20h" },
  { day: "Sexta", time: "9h30 – 20h" },
  { day: "Sábado", time: "10h – 17h" },
  { day: "Domingo", time: "Fechado" },
] as const;

export const REVIEWS = [
  {
    text: "Curti o corte! Ambiente top! Galera massa demais!",
    author: "Guilherme",
    service: "Cabelo · Pepeu",
  },
  {
    text: "O jedi das tesouras.",
    author: "Will",
    service: "Cabelo · Pepeu",
  },
  {
    text: "O melhor sem dúvidas. Sempre deixando na régua.",
    author: "Igor",
    service: "Combo · Pepeu",
  },
  {
    text: "Atendimento muito profissional como sempre… recomendo muito.",
    author: "Valdelir",
    service: "Cabelo · Pepeu",
  },
  {
    text: "Excelente barbeiro, nunca vi errar!",
    author: "Leonardo",
    service: "Cabelo · Pepeu",
  },
  {
    text: "Muito bom e rápido o corte!",
    author: "Bernardo",
    service: "Cabelo · Pepeu",
  },
] as const;

export const GALLERY = [
  {
    src: "/fotos/fachada.jpeg",
    alt: "Fachada da Pepeu Barber na Rua Umbu, 715 — letreiro verde e bigode",
  },
  {
    src: "/fotos/sala.jpeg",
    alt: "Interior do salão: parede sálvia, skate na parede e cadeira de couro",
  },
  {
    src: "/fotos/rev1.jpeg",
    alt: "Salão com quadro do leão e camisa do Grêmio na parede",
  },
  {
    src: "/fotos/rev2.jpeg",
    alt: "Cadeira da Pepeu com shapes de skate na parede — inclusive o da casa",
  },
  {
    src: "/fotos/corte-tesoura.jpeg",
    alt: "Pepeu cortando com tesoura e pente vermelho",
  },
  {
    src: "/fotos/corte-3.jpeg",
    alt: "Fade na régua com o sofá de couro e o leão ao fundo",
  },
  {
    src: "/fotos/corte-perfil.jpeg",
    alt: "Corte e barba alinhados no salão da Vila Ipiranga",
  },
  {
    src: "/fotos/corte-2.jpeg",
    alt: "Skin fade com a parede verde-sálvia da casa",
  },
] as const;
