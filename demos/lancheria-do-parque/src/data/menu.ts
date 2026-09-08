export type MenuItem = {
  id: string
  name: string
  description: string
  tag?: string
  category: "lanche" | "prato" | "suco" | "manha"
};

export const MENU: MenuItem[] = [
  {
    id: "xis-coracao",
    name: "Xis coração",
    tag: "O da casa",
    category: "lanche",
    description:
      "Coração de frango picadinho, queijo, ovo, milho, ervilha, salada e maionese. O xis que a cidade pede pelo nome.",
  },
  {
    id: "xis-salada",
    name: "Xis salada",
    category: "lanche",
    description:
      "O mesmo recheio generoso, com bife de hambúrguer na chapa no lugar do coração.",
  },
  {
    id: "torrada",
    name: "Torrada",
    category: "lanche",
    description:
      "O misto quente gaúcho, prensado na chapa. Completa com ovo, se o dia pedir.",
  },
  {
    id: "minuta",
    name: "À la minuta",
    tag: "Almoço",
    category: "prato",
    description:
      "O prato de sempre da Lanchera: bife, acompanhamento e o ritmo de quem veio do parque.",
  },
  {
    id: "buffet",
    name: "Buffet caseiro",
    category: "prato",
    description:
      "Arroz, feijão, carnes e saladas no balcão da entrada — comida de casa, o dia inteiro.",
  },
  {
    id: "suco-jarra",
    name: "Suco na jarra",
    tag: "Marca da casa",
    category: "suco",
    description:
      "Fruta batida na hora e servida na jarra do liquidificador. Laranja, manga, mistura — rende uns três copos.",
  },
  {
    id: "cafe",
    name: "Café e torrada",
    category: "manha",
    description:
      "Taça de café, suco e sanduíche prensado. O café da manhã de quem atravessa a Osvaldo.",
  },
  {
    id: "sobremesa",
    name: "Sagu, pudim, picolé",
    category: "prato",
    description:
      "A sobremesa da lancheria: sagu, mousse, pudim, salada de frutas e o freezer de picolé.",
  },
];
