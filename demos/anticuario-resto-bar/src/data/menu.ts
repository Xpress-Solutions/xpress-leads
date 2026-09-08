export type MenuItem = {
  id: string;
  name: string;
  description: string;
  note: string;
  category: "casa" | "para-picar" | "beber";
  image: string;
  featured?: boolean;
};

export const MENU: MenuItem[] = [
  {
    id: "chivito",
    name: "Chivito",
    description:
      "O sanduíche uruguaio que a casa carrega no nome da fome. Hagah e avaliações recentes batem: chivito nota mil.",
    note: "Peça na casa",
    category: "casa",
    image: "/fotos/chivito.jpg",
    featured: true,
  },
  {
    id: "pizza-uruguaya",
    name: "Pizza uruguaia",
    description:
      "Massa fina, corte em quadradinhos de uma bocada. A de pesto aparece o tempo todo nas reviews — é a que a mesa pede para dividir.",
    note: "Corte à xadrez",
    category: "casa",
    image: "/fotos/pizza.jpg",
    featured: true,
  },
  {
    id: "empanadas",
    name: "Empanadas al horno",
    description:
      "Pastéis de forno do quadro-negro da porta. Entrada uruguaia para abrir a noite com a cerveza.",
    note: "No forno",
    category: "para-picar",
    image: "/fotos/pratos.jpg",
    featured: true,
  },
  {
    id: "panchos",
    name: "Panchos",
    description:
      "O cachorro-quente uruguaio da casa — reviews chamam de ‘el mejor pancho de Porto Alegre’.",
    note: "Clássico do quadro",
    category: "para-picar",
    image: "/fotos/lanches.jpg",
  },
  {
    id: "tabua",
    name: "Tábua de frios",
    description: "Para a mesa que se estende: frios, queijo e conversa enquanto o violão aquece.",
    note: "Para compartilhar",
    category: "para-picar",
    image: "/fotos/comida.jpg",
  },
  {
    id: "provolone",
    name: "Provolone gratinado",
    description: "Queijo na brasa do cardápio clássico — aquele petisco que some antes da próxima rodada.",
    note: "Petisco",
    category: "para-picar",
    image: "/fotos/bruschetta.jpg",
  },
  {
    id: "cerveza",
    name: "Cerveza uruguaia",
    description:
      "Patricia e Norteña geladas, litro no balde. Também tem nacionais, vinhos e sangria em jarra.",
    note: "Patricia · Norteña",
    category: "beber",
    image: "/fotos/pizza-xadrez.jpg",
    featured: true,
  },
  {
    id: "inverno",
    name: "Sopa e quentão",
    description: "No frio de Porto Alegre a casa muda o quadro: sopa e quentão, do jeito de bodegón.",
    note: "Inverno",
    category: "casa",
    image: "/fotos/renda.jpg",
  },
];

export const HIGHLIGHTS = [
  {
    id: "chivito",
    title: "O chivito",
    text: "Sanduíche uruguaio, o motivo de muita gente atravessar a Baixa.",
    image: "/fotos/chivito.jpg",
  },
  {
    id: "pizza",
    title: "Pizza em quadradinhos",
    text: "Corte à xadrez, pesto na boca de quem volta. Uma pizza, a mesa inteira.",
    image: "/fotos/pizza.jpg",
  },
  {
    id: "salao",
    title: "O salão-antiquário",
    text: "Quadros, discos, latas, Gardel na prateleira. O nome da casa está nas paredes.",
    image: "/fotos/interior.jpg",
  },
] as const;
