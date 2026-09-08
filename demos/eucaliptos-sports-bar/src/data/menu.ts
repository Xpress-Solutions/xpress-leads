export type MenuItem = {
  id: string
  name: string
  description: string
  category: "hamburguer" | "petisco" | "chope"
  tag?: string
};

export const MENU: MenuItem[] = [
  {
    id: "artilheiro",
    name: "Artilheiro",
    description: "Hambúrguer com queijo prato e bacon — o clássico de jogo da casa.",
    category: "hamburguer",
    tag: "GZH",
  },
  {
    id: "golaco",
    name: "Golaço",
    description: "Queijo brie, rúcula e molho de mostarda. Nome de gol, mesa de sports bar.",
    category: "hamburguer",
    tag: "GZH",
  },
  {
    id: "canarinho",
    name: "Canarinho",
    description: "Pão verde e amarelo, bacon, cheddar e maionese verde — nasceu na Copa.",
    category: "hamburguer",
  },
  {
    id: "mexicano",
    name: "Mexicano",
    description:
      "Croquete de costela recheado com queijo brie, chimichurri do lado. Petisco do Comida di Buteco.",
    category: "petisco",
    tag: "Comida di Buteco",
  },
  {
    id: "porcoes",
    name: "Porções de boteco",
    description: "Linguiça, batata frita, polenta, anéis de cebola e mandioquinha para a mesa.",
    category: "petisco",
  },
  {
    id: "pizza",
    name: "Pizza",
    description: "Pedido recorrente nas avaliações da casa — fatia no intervalo do segundo tempo.",
    category: "petisco",
  },
  {
    id: "coromberk",
    name: "Coromberk Bier",
    description: "Três das oito torneiras são da marca própria dos irmãos Coromberk.",
    category: "chope",
    tag: "Casa",
  },
  {
    id: "torneiras",
    name: "Oito torneiras",
    description: "Chope artesanal da casa e de cervejarias parceiras do Rio Grande do Sul.",
    category: "chope",
  },
];

export const CATEGORIES = [
  { id: "hamburguer", label: "Hambúrgueres" },
  { id: "petisco", label: "Petiscos" },
  { id: "chope", label: "Chope" },
] as const;
