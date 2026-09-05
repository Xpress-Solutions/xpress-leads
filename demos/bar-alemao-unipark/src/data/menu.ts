export type MenuCategory = "todos" | "cerveja" | "buffet" | "porcoes" | "lanches" | "inverno";

export type MenuTag = "Mais pedido" | "Da casa" | "Campus" | "Consulte" | "Inverno";

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  category: Exclude<MenuCategory, "todos">
  tags?: MenuTag[]
  image?: string
  featured?: boolean
};

export const CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: "todos", label: "Tudo" },
  { id: "cerveja", label: "Litrão" },
  { id: "buffet", label: "Buffet" },
  { id: "porcoes", label: "Porções" },
  { id: "lanches", label: "Lanches" },
  { id: "inverno", label: "Frio" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "litrao",
    name: "Litrão gelado",
    description: "A ceva do campus. Gelada, de universitário, no copo plástico da mesa.",
    price: "Consulte",
    category: "cerveja",
    tags: ["Mais pedido", "Campus"],
    image: "/fotos/litrao.png",
    featured: true,
  },
  {
    id: "cerveja-vale",
    name: "Cerveja no vale",
    description: "Reviews da casa citam ceva barata — e que aceita vale.",
    price: "Consulte",
    category: "cerveja",
    tags: ["Campus", "Consulte"],
    image: "/fotos/litrao.png",
  },
  {
    id: "buffet",
    name: "Buffet do almoço",
    description: "O mesmo teto do bar virou restaurante: buffet que segura o dia no Unipark.",
    price: "Consulte",
    category: "buffet",
    tags: ["Da casa"],
    image: "/fotos/buffet.png",
    featured: true,
  },
  {
    id: "mocoto",
    name: "Mocotó",
    description: "“Tem o mocotó bala.” Pedido que aparece nas avaliações do Google.",
    price: "Consulte",
    category: "buffet",
    tags: ["Da casa", "Consulte"],
    image: "/fotos/buffet.png",
    featured: true,
  },
  {
    id: "grelhados",
    name: "Grelhados",
    description: "Pratos no local: grelhado de bar amplo, sem frescura de restaurante.",
    price: "Consulte",
    category: "porcoes",
    tags: ["Consulte"],
    image: "/fotos/buffet.png",
  },
  {
    id: "porcoes",
    name: "Porções pra mesa",
    description: "Aperitivo pra dividir entre a aula e a sinuca.",
    price: "Consulte",
    category: "porcoes",
    tags: ["Campus"],
    image: "/fotos/litrao.png",
    featured: true,
  },
  {
    id: "fritas",
    name: "Fritas",
    description: "Acompanham o litrão. Reviews elogiam a frita da casa.",
    price: "Consulte",
    category: "porcoes",
    tags: ["Mais pedido"],
    image: "/fotos/buffet.png",
  },
  {
    id: "lanches",
    name: "Lanches",
    description: "Do tempo em que o cardápio era só lanche — ainda segura o happy hour.",
    price: "Consulte",
    category: "lanches",
    tags: ["Campus"],
    image: "/fotos/litrao.png",
  },
  {
    id: "aperitivos",
    name: "Aperitivos e lanches",
    description: "Filosofia, música e uns aperitivos — o recanto universitário raiz.",
    price: "Consulte",
    category: "lanches",
    tags: ["Consulte"],
  },
  {
    id: "quentao",
    name: "Quentão",
    description: "Nasceu no frio, quando o estacionamento ainda virava ponto. Volta no inverno.",
    price: "Consulte",
    category: "inverno",
    tags: ["Inverno", "Da casa", "Consulte"],
  },
];

export function itemMatchesCategory(item: MenuItem, category: MenuCategory) {
  if (category === "todos") return true;
  return item.category === category;
}

export function itemMatchesQuery(item: MenuItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    item.name.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.tags?.some((tag) => tag.toLowerCase().includes(q))
  );
}
