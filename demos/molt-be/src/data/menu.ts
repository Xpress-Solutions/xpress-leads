export type MenuItem = {
  name: string;
  note: string;
};

export type MenuGroup = {
  id: string;
  title: string;
  catalan: string;
  items: MenuItem[];
};

export const MENU: MenuGroup[] = [
  {
    id: "tapas",
    title: "Tapas",
    catalan: "Per començar",
    items: [
      {
        name: "Pà amb tomàquet",
        note: "Pão de fermentação natural tostado — brie e mel, jamón e figos, ou azeite.",
      },
      {
        name: "Brandada de Bacalao",
        note: "Pasta clássica de bacalhau, batata e azeite, com tostadas.",
      },
      {
        name: "Patatas bravas",
        note: "Batata com molho picante — a tapa de sempre.",
      },
      {
        name: "Berinjela em panko",
        note: "Queijo de cabra, molho de tomate e orégano.",
      },
    ],
  },
  {
    id: "croquetas",
    title: "Croquetas",
    catalan: "El petisco",
    items: [
      {
        name: "Croqueta de alho-poró",
        note: "Alho puerro — o petisco do Comida di Buteco 2026.",
      },
      {
        name: "Croqueta de bacalhau",
        note: "A clássica, crocante por fora.",
      },
      {
        name: "Croqueta de espinafre",
        note: "Espinafre salteado com uva-passa, empanada em panko.",
      },
      {
        name: "Croqueta de jamón",
        note: "O embutido catalão no formato de boteco.",
      },
    ],
  },
  {
    id: "plats",
    title: "Pratos",
    catalan: "Mar i muntanya",
    items: [
      {
        name: "Mar I Muntanya",
        note: "Frango defumado, bisque de camarão, arroz de açafrão e avelã.",
      },
      {
        name: "Arroz Nègre",
        note: "Arroz negro de frutos do mar — a versão da casa.",
      },
      {
        name: "Arroz Nègre Vegà",
        note: "Arroz negro com cogumelos e escalivada.",
      },
      {
        name: "Caldereta de Cordero",
        note: "Cordeiro, batatas, grana padano e arroz de açafrão.",
      },
      {
        name: "Escalivada",
        note: "Pimentão, berinjela e cebola assados no azeite.",
      },
    ],
  },
  {
    id: "postres",
    title: "Sobremesas e copos",
    catalan: "Per acabar",
    items: [
      {
        name: "Crema Catalana",
        note: "Creme cítrico com crosta de caramelo.",
      },
      {
        name: "Xurros Espanyols",
        note: "Churros com doce de leite.",
      },
      {
        name: "Sangria",
        note: "Tinta ou branca, com fruta — a queridinha da casa.",
      },
      {
        name: "Clara Catalana",
        note: "Cerveja com soda limonada.",
      },
      {
        name: "Rebujito / Tinto de verano",
        note: "Vinho branco com hortelã, ou tinto com laranja e soda.",
      },
    ],
  },
];
