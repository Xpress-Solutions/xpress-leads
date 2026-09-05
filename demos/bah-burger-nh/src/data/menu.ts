export type MenuItem = {
  name: string;
  desc: string;
  price: string;
  photo?: string;
  tag?: string;
};

export type MenuGroup = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const MENU: MenuGroup[] = [
  {
    id: "combos",
    title: "Combos",
    items: [
      {
        name: "Combo Casal",
        desc: "2 hambúrgueres + Coca-Cola 600ml + 2 fritas individuais",
        price: "82",
        photo: "/fotos/combo-casal.jpg",
        tag: "−15%",
      },
      {
        name: "Combo Sozinho (mas feliz)",
        desc: "1 hambúrguer + fritas individual + Coca-Cola lata",
        price: "42",
        photo: "/fotos/combo-sozinho.jpg",
      },
      {
        name: "Combo Piá!",
        desc: "Pão kids, hambúrguer 110g, suco Kapo, fritas e Kinder Ovo opcional",
        price: "27",
      },
      {
        name: "Combo Família",
        desc: "4 hambúrgueres + Coca-Cola 2L + 4 fritas individuais",
        price: "162",
        photo: "/fotos/combo-familia.jpg",
      },
    ],
  },
  {
    id: "burgers",
    title: "Hambúrgueres",
    items: [
      {
        name: "Laçador!",
        desc: "Bovino 180g, mussarela, cheddar, provolone crispy, bacon, maionese verde e salada",
        price: "49",
        tag: "da casa",
      },
      {
        name: "Loco de Especial!",
        desc: "Dois bovinos 180g, mussarela, cheddar, bacon, maionese verde e salada",
        price: "45",
        photo: "/fotos/loco.jpg",
        tag: "slogan",
      },
      {
        name: "Barbaridade",
        desc: "Bovino 180g, mussarela, bacon, rúcula, tomate seco e maionese verde",
        price: "40",
        photo: "/fotos/barbaridade.jpg",
      },
      {
        name: "Tá Loco!",
        desc: "Dois bovinos 180g, duplo mussarela, duplo cheddar e duplo bacon",
        price: "48",
      },
      {
        name: "Bem TRI!",
        desc: "Bovino 180g, mussarela, cheddar, bacon, maionese verde e salada",
        price: "38",
        photo: "/fotos/bem-tri.jpg",
      },
      {
        name: "Ronca e Fuça",
        desc: "Suíno 160g, mussarela, cheddar, bacon, maionese verde e salada",
        price: "35",
      },
      {
        name: "Galo Véio",
        desc: "Frango 180g, mussarela, cheddar, bacon, maionese verde e salada",
        price: "35",
      },
      {
        name: "Bem Capaz!",
        desc: "Frango crispy recheado com provolone e mussarela, bacon, maionese verde e salada",
        price: "45",
      },
      {
        name: "Bacaxi",
        desc: "Linguiça gourmet 180g, mussarela, geleia de abacaxi, bacon, cebola roxa e tomate",
        price: "39",
      },
      {
        name: "Bah!Tchê",
        desc: "Vegetariano: mussarela, cheddar, provolone crispy, maionese verde e salada",
        price: "40",
        tag: "sem carne",
      },
    ],
  },
  {
    id: "porcoes",
    title: "Porções",
    items: [
      { name: "Batata frita", desc: "140g · serve 1", price: "9" },
      { name: "Provolone crispy", desc: "7 mini queijos fritos", price: "20" },
      { name: "Anéis de cebola", desc: "7 unidades empanadas", price: "10" },
      { name: "Polenta frita", desc: "10 unidades", price: "8" },
    ],
  },
];
