export type MenuItem = {
  name: string;
  description: string;
  tag?: string;
};

export const RODIZIO: MenuItem[] = [
  {
    name: "Sopa de agnoline",
    description:
      "A abertura clássica do rodízio: caldeirinha quente, massa recheada, o primeiro prato da mesa.",
    tag: "Começa por aqui",
  },
  {
    name: "Galeto ao primo canto",
    description:
      "O prato da casa. Galeto assado, pele dourada, suculento — o motivo de atravessar o São Geraldo.",
    tag: "A casa",
  },
  {
    name: "Polenta frita",
    description:
      "Tijolo crocante por fora, macio por dentro. Acompanhamento que o Destemperados mandou não pular.",
    tag: "Marca da casa",
  },
  {
    name: "Massas do rodízio",
    description:
      "Tortéi, nhoque, lasanha, ravióli, espaguete e caneloni. Um pouco de cada, do jeito de cantina.",
    tag: "Fartura",
  },
  {
    name: "Costela suína assada",
    description: "Costelinha com pele tostada, que divide a mesa com o galeto e a pururuca.",
  },
  {
    name: "Radiche e maionese caseira",
    description:
      "Folha amarga no bowl de inox, torresmo por cima, maionese da casa — o verde que equilibra o assado.",
  },
];

export const ENTRADAS: MenuItem[] = [
  {
    name: "Salame com queijo da colônia",
    description: "O começo de cantina: tábua simples, sem firula.",
  },
  {
    name: "Pastéis de queijo",
    description: "Pastel quente para abrir o almoço enquanto o galeto chega.",
  },
  {
    name: "Prato executivo",
    description:
      "Almoço de semana no ritmo da casa: galeto ou massa, acompanhamento, sem cerimônia.",
    tag: "Almoço",
  },
];

export const HIGHLIGHTS = [
  {
    title: "O galeto",
    text: "Ao primo canto, assado na casa. Pele crocante, carne suculenta — o prato que dá nome à galeteria.",
    image: "/fotos/galeto-polenta.jpg",
    alt: "Prato da Nostro Galeto: galeto assado, polenta frita e massa no prato branco",
  },
  {
    title: "A mesa xadrez",
    text: "Toalha vermelha e branca, prato oval, radiche no inox. É a mesa que o Instagram da casa mostra.",
    image: "/fotos/mesa-xadrez.jpg",
    alt: "Mesa da Nostro Galeto com toalha xadrez, assado, massa ao pesto e radiche",
  },
  {
    title: "Massas da hora",
    text: "Espinafre, lasanha, ravióli — o rodízio não é só galeto. É cantina de bairro com massa na sequência.",
    image: "/fotos/massas.jpg",
    alt: "Prato de massas da Nostro Galeto: talharim verde e lasanha gratinada",
  },
] as const;
