export type MenuItem = {
  name: string;
  blurb: string;
  tag?: string;
};

export const MENU: MenuItem[] = [
  {
    name: "Pizza A Virgem",
    blurb: "A clássica da casa — a que o guia pede pelo nome.",
    tag: "A pedida",
  },
  {
    name: "Pizza de filé mignon",
    blurb: "A que volta no Wanderlog e nas mesas da calçada.",
    tag: "Calçada",
  },
  {
    name: "Escondidinho de filé",
    blurb: "Purê de mandioquinha, filé-mignon, cogumelos e cebola.",
  },
  {
    name: "A Virgem Baiana",
    blurb: "Escondidinho de camarão no dendê, pimentões e leite de coco.",
  },
  {
    name: "Bruschetta da Nonna",
    blurb: "Pão assado, carne de panela, parmesão e manjericão.",
  },
  {
    name: "A Virgem naqueles dias",
    blurb: "Vodca, morango, maracujá, gengibre e pimenta. Tem sem álcool.",
    tag: "Drink",
  },
];

export const BELLA = {
  name: "Bella Virgem",
  edition: "Comida di Buteco 2026",
  blurb:
    "Refogado de espinafre com molho três queijos. Acompanha tirinhas de pão com azeite e ervas finas.",
  photo: "/fotos/bella-virgem.jpg",
} as const;
