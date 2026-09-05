export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  tag?: string;
  photo?: string;
};

export const MENU: MenuItem[] = [
  {
    id: "tesouro",
    name: "Tesouro de Molho",
    desc: "Petisco da casa no Comida di Buteco 2026: lanche tostado em cubos, molho de tomate grosso e salsinha. R$ 40 no circuito.",
    price: "R$ 40",
    tag: "Comida di Buteco 2026",
    photo: "/fotos/tesouro.jpg",
  },
  {
    id: "xis",
    name: "Xis da Ceará",
    desc: "O xis da avenida — prensado na chapa. Reviews pedem o da casa com mostarda forte e Fruki de garrafa.",
    price: "Pedir",
    tag: "Mais pedido",
    photo: "/fotos/xis.jpg",
  },
  {
    id: "alaminuta",
    name: "Alaminuta",
    desc: "Arroz, frita, ovo, carne e feijão. Almoço de fluxo: sai rápido mesmo com a casa cheia.",
    price: "Pedir",
    photo: "/fotos/prato.jpg",
  },
  {
    id: "frita",
    name: "Frita",
    desc: "Porção de batata da chapa — o acompanhamento que aparece em quase toda mesa da Ceará.",
    price: "Pedir",
  },
  {
    id: "minuta",
    name: "Bife de minuta",
    desc: "Clássico de lanchonete de avenida. Quem almoça no São João pede minuta; quem passa de noite pede xis.",
    price: "Pedir",
  },
  {
    id: "cafe",
    name: "Café com pão",
    desc: "Pão na chapa e café com leite — o começo do turno, antes do Tesouro e do xis.",
    price: "Pedir",
  },
];

export const REVIEWS = [
  {
    quote:
      "Um dos melhores xis da região. A Fruki de garrafa de vidro e a mostarda forte são o diferencial.",
    source: "Google",
  },
  {
    quote:
      "Alaminuta e X muito bons. Ótimo atendimento. O preparo, mesmo no movimento, é bem rápido.",
    source: "Google",
  },
  {
    quote: "Atmosfera caseira, atendimento fino e nota 4,8. Lanche de avenida, sem pose.",
    source: "Google · 4,8",
  },
] as const;
