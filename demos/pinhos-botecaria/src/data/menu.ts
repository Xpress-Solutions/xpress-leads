export type MenuItem = {
  name: string;
  desc: string;
  tag?: string;
  note?: string;
};

export type MenuGroup = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const FEATURED = {
  edition: "Comida di Buteco 2026",
  name: "Deliciaporo",
  also: "Delícia Poró",
  price: "R$ 40",
  desc: "Massa de minipizza recheada com molho cremoso de frango e alho-poró. O petisco da edição — tema verduras — servido na Victor Barreto.",
  photo: "/fotos/deliciaporo.jpg",
  photoAlt:
    "Deliciaporo da Pinhos: massa crocante em forma de flor, frango, alho-poró e molhos da casa. Foto Israh Ramos / Comida di Buteco.",
} as const;

export const MENU: MenuGroup[] = [
  {
    id: "petiscos",
    title: "Pra mesa",
    items: [
      {
        name: "Deliciaporo",
        desc: "Mini-pizza de frango e alho-poró. Petisco da edição 2026.",
        tag: "Concurso",
      },
      {
        name: "Picadão",
        desc: "Porção pra dividir — o pedido que o Google e o Guru apontam como o da casa.",
        tag: "Casa",
      },
      {
        name: "Batata rústica",
        desc: "Acompanha o chope. Crocante, pra ir passando enquanto a banda afina.",
      },
      {
        name: "Filé de frango empanado",
        desc: "Petisco de pub, sem firula. Molho da casa.",
      },
      {
        name: "Hambúrguer com fritas",
        desc: "Clássico de avenida. Come e continua a noite.",
      },
      {
        name: "Bomba de sabores",
        desc: "Pães recheados de calabresa e carne desfiada, geleia de abacaxi com pimenta e maionese da casa.",
        tag: "2024",
        note: "Petisco do Comida di Buteco 2024.",
      },
      {
        name: "Trio Bom",
        desc: "Carne com hortelã e chimichurri, molho de cebola caramelada e maionese de bacon.",
        note: "Petisco da edição 2024 documentado no G1.",
      },
    ],
  },
  {
    id: "bebidas",
    title: "Pra gelar",
    items: [
      {
        name: "Chopp pilsen",
        desc: "O copo da noite. A casa vive de chope gelado e mesa cheia.",
        tag: "Chopp",
      },
      {
        name: "Original 600 ml",
        desc: "Garrafa pra mesa. Sem pressa.",
      },
      {
        name: "Heineken",
        desc: "Na mesa e no balde, como nas fotos da própria casa.",
      },
      {
        name: "Moscow Mule",
        desc: "Drink que o público cita junto com o chope.",
      },
      {
        name: "Mojito",
        desc: "Hortelã e gelo. Noite longa de sexta.",
      },
      {
        name: "Bloody Mary",
        desc: "Pro paladar que pede picância no copo.",
      },
    ],
  },
];
