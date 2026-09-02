export type MenuCategory =
  | "todos"
  | "cafe"
  | "padaria"
  | "lanches"
  | "pratos"
  | "petiscos"
  | "churrasquinho"
  | "chopes"
  | "cervejas"
  | "drinks"
  | "bebidas";

export type MenuTag =
  | "mais-pedido"
  | "especial-casa"
  | "para-compartilhar"
  | "novidade"
  | "happy-hour";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Exclude<MenuCategory, "todos">;
  image: string;
  tags?: MenuTag[];
  isPlaceholder?: boolean;
  isReal?: boolean;
}

export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "cafe", label: "Café" },
  { id: "padaria", label: "Padaria" },
  { id: "lanches", label: "Lanches" },
  { id: "pratos", label: "Pratos" },
  { id: "petiscos", label: "Petiscos" },
  { id: "churrasquinho", label: "Churrasquinho" },
  { id: "chopes", label: "Chopes" },
  { id: "cervejas", label: "Cervejas" },
  { id: "drinks", label: "Drinks" },
  { id: "bebidas", label: "Bebidas" },
];

export const tagLabels: Record<MenuTag, string> = {
  "mais-pedido": "Mais pedido",
  "especial-casa": "Especial da casa",
  "para-compartilhar": "Para compartilhar",
  novidade: "Novidade",
  "happy-hour": "Happy Hour",
};

export const menuItems: MenuItem[] = [
  {
    id: "chopp-brahma",
    name: "Chopp Brahma 500ml",
    description: "Chope Brahma servido bem gelado.",
    price: "R$ --,--",
    category: "chopes",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
    tags: ["mais-pedido", "happy-hour"],
    isReal: true,
  },
  {
    id: "cafe-leite",
    name: "Café com Leite",
    description: "O clássico para começar o dia no Anita.",
    price: "R$ --,--",
    category: "cafe",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    tags: ["mais-pedido"],
    isReal: true,
  },
  {
    id: "placeholder-pao",
    name: "Item demonstrativo — Padaria",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "padaria",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    isPlaceholder: true,
  },
  {
    id: "placeholder-lanche",
    name: "Item demonstrativo — Lanche",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "lanches",
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80",
    isPlaceholder: true,
  },
  {
    id: "placeholder-prato",
    name: "Item demonstrativo — Prato",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "pratos",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    isPlaceholder: true,
  },
  {
    id: "placeholder-petisco",
    name: "Item demonstrativo — Petisco",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "petiscos",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&q=80",
    tags: ["para-compartilhar"],
    isPlaceholder: true,
  },
  {
    id: "placeholder-churrasco",
    name: "Item demonstrativo — Churrasquinho",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "churrasquinho",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80",
    tags: ["especial-casa"],
    isPlaceholder: true,
  },
  {
    id: "placeholder-cerveja",
    name: "Item demonstrativo — Cerveja",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "cervejas",
    image:
      "https://images.unsplash.com/photo-1608270586200-24e23f4c8d0b?w=600&q=80",
    isPlaceholder: true,
  },
  {
    id: "placeholder-drink",
    name: "Item demonstrativo — Drink",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "drinks",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
    tags: ["novidade"],
    isPlaceholder: true,
  },
  {
    id: "placeholder-bebida",
    name: "Item demonstrativo — Bebida",
    description: "Placeholder visual para demonstração do cardápio.",
    price: "Preço demonstrativo",
    category: "bebidas",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66fbf34efa?w=600&q=80",
    isPlaceholder: true,
  },
];

export const featuredItems = menuItems.filter(
  (item) => item.isReal || item.tags?.includes("mais-pedido"),
);
