export type MenuCategory = "petiscos" | "sanduiches" | "drinks";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  featured?: boolean;
};

export const CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: "petiscos", label: "Petiscos" },
  { id: "sanduiches", label: "Sanduíches" },
  { id: "drinks", label: "Drinks" },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "abel-ferreira",
    name: "Bolinho Abel Ferreira",
    description:
      "Pernil desfiado e aipim — o salgado que lembra bolinho de bacalhau e ganha porco no recheio. Estrela da casa e petisco do Comida di Buteco.",
    price: "R$ 35",
    category: "petiscos",
    featured: true,
  },
  {
    id: "trem-bao",
    name: "Trem Bão, Tchê!",
    description:
      "Bolinho de queijo com linguiça e molho de goiabada. Minas encontra o Sul no mesmo prato.",
    price: "R$ 35",
    category: "petiscos",
    featured: true,
  },
  {
    id: "buraco-quente",
    name: "Buraco quente",
    description:
      "Clássico de boteco na mão do chef. Simples, quente, para comer na calçada olhando a Protásio.",
    price: "Consulte",
    category: "sanduiches",
    featured: true,
  },
  {
    id: "pastel",
    name: "Pastel de queijo ou cogumelo",
    description: "Massa fina, recheio generoso. O pastel de camarão também roda na casa.",
    price: "R$ 28",
    category: "petiscos",
  },
  {
    id: "aipim",
    name: "Aipim fritinho",
    description: "Porção para o meio da mesa, com a cerveja ainda suando o copo.",
    price: "R$ 28",
    category: "petiscos",
  },
  {
    id: "pernil",
    name: "Sanduíche de pernil",
    description: "Pernil suíno no pão — o favorito da mesa do Destemperados em 2025.",
    price: "R$ 38",
    category: "sanduiches",
  },
  {
    id: "frango",
    name: "Frango ao molho agridoce",
    description: "Sanduíche direto, sem firula. Combina com a conversa que não acaba.",
    price: "R$ 30",
    category: "sanduiches",
  },
  {
    id: "vegano",
    name: "Berinjela com pesto",
    description: "Berinjela, pesto, picles e rúcula. O Sotaque também é plural no prato.",
    price: "R$ 30",
    category: "sanduiches",
  },
  {
    id: "algazarra",
    name: "Algazarra",
    description: "Abacaxi tostado e melado. Drink da casa com sotaque de festa.",
    price: "R$ 33",
    category: "drinks",
  },
  {
    id: "old-dog",
    name: "Old Dog Ginger Sour",
    description: "Maracujá, hibisco e gengibre. Azedo, fresco, pede o próximo.",
    price: "R$ 28",
    category: "drinks",
  },
  {
    id: "banzeiro",
    name: "Banzeiro",
    description: "Drink autoral da carta — brasilidade no copo, como o restante da mesa.",
    price: "R$ 33",
    category: "drinks",
  },
  {
    id: "quentao",
    name: "Quentão",
    description: "Para o frio de Porto Alegre entrar e a mesa não querer ir embora.",
    price: "R$ 15",
    category: "drinks",
  },
];

export const PRICE_NOTE =
  "Preços da matéria Destemperados (ago/2025). Confirme na casa — o cardápio anda.";
