export type MenuCategory = "destaques" | "xis" | "petiscos" | "pratos" | "bebidas";

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  category: MenuCategory
  tags?: string[]
  image?: string
  featured?: boolean
  official?: boolean
};

export const CATEGORIES: { id: MenuCategory | "todos"; label: string }[] = [
  { id: "todos", label: "Tudo" },
  { id: "destaques", label: "Concurso" },
  { id: "xis", label: "Xis" },
  { id: "petiscos", label: "Petiscos" },
  { id: "pratos", label: "Pratos" },
  { id: "bebidas", label: "Chope" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "coco-crispy",
    name: "Cocó Crispy",
    description:
      "Frango empanado na farinha panko, crispy de alho-poró e molhos da casa. O petisco do Poeta no Comida di Buteco 2026.",
    price: "R$ 40",
    category: "destaques",
    tags: ["Comida di Buteco 2026", "Petisco da casa"],
    image: "/fotos/coco-crispy.png",
    featured: true,
    official: true,
  },
  {
    id: "xis-do-poeta",
    name: "Xis do Poeta",
    description: "O xis da casa — o ofício que a Andradas já conhece. Chope do lado, conversa no meio.",
    price: "Consulte",
    category: "xis",
    tags: ["Da casa"],
    image: "/fotos/xis-chope.png",
    featured: true,
    official: false,
  },
  {
    id: "petiscos",
    name: "Petiscos da calçada",
    description: "Porções para a mesa na Rua da Praia. Divide, pede outro chope, fica.",
    price: "Consulte",
    category: "petiscos",
    tags: ["Para compartilhar"],
    featured: true,
    official: false,
  },
  {
    id: "pappardelle",
    name: "Pappardelle ao molho de queijo",
    description: "Massa larga com molho de queijo, toque de shoyu e iscas de carne — prato que o Google já elogia.",
    price: "R$ 23,90",
    category: "pratos",
    tags: ["Salão"],
    official: true,
  },
  {
    id: "chope",
    name: "Chope gelado",
    description: "Caneca na medida. O primeiro verso da casa.",
    price: "Consulte",
    category: "bebidas",
    tags: ["Gelado"],
    image: "/fotos/xis-chope.png",
    featured: true,
    official: false,
  },
  {
    id: "cerveja",
    name: "Cerveja da casa",
    description: "Long neck e lata gelada para acompanhar o xis ou o Cocó.",
    price: "Consulte",
    category: "bebidas",
    official: false,
  },
];

export function itemMatchesCategory(item: MenuItem, category: MenuCategory | "todos") {
  return category === "todos" || item.category === category;
}

export function itemMatchesQuery(item: MenuItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return `${item.name} ${item.description} ${item.tags?.join(" ") ?? ""}`
    .toLowerCase()
    .includes(q);
}
