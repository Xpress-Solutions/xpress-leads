export type MenuItem = {
  name: string;
  desc: string;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  lead: string;
  items: MenuItem[];
};

export const MENU: MenuSection[] = [
  {
    id: "concurso",
    title: "Comida di Buteco 2026",
    lead: "O petisco da casa nesta edição — R$ 40 no circuito, conforme o concurso.",
    items: [
      {
        name: "Croqueta Andina",
        desc: "Croquetes de milho recheados com alho-poró, provolone e muçarela. Três molhos: maionese com coentro, sweet chilli e mostarda com mel.",
        note: "Ficha oficial do concurso",
      },
    ],
  },
  {
    id: "tapas",
    title: "Tapas y petiscos",
    lead: "Toque peruano no casarão — o que a casa e os frequentadores citam de verdade.",
    items: [
      {
        name: "Milho tostado",
        desc: "Cancha andina que chega com o pint — o mimo da casa, não um extra de cardápio gourmet.",
      },
      {
        name: "Mandioca frita",
        desc: "Porção crocante com o molho verde da casa. Pedido recorrente nas avaliações.",
      },
      {
        name: "Tequeños rellenos",
        desc: "Rolinhos fritos de mussarela com gorgonzola ou calabresa com mussarela. Já saiu no Festival Bar em Bar.",
      },
      {
        name: "Pancho",
        desc: "O cachorro-quente da casa — salsicha à moda alemã, do tamanho de acompanhar um pint.",
      },
    ],
  },
  {
    id: "mesa",
    title: "Para a mesa",
    lead: "Pizza, risoto e o que pede grupo no salão ou no pátio.",
    items: [
      {
        name: "Pizzas da casa",
        desc: "Carta enxuta, feita para dividir com a régua de cervejas — não é pizzaria de esquina.",
      },
      {
        name: "Risoto",
        desc: "Prato quente do cardápio curto. Confirme o sabor do dia no balcão.",
      },
      {
        name: "Churrasco no pátio",
        desc: "O quintal reserva para assar com o grupo. Combinar antes pelo WhatsApp.",
      },
    ],
  },
  {
    id: "torneiras",
    title: "Nas torneiras",
    lead: "Tap list rotativo — escolas alemã, americana, belga e inglesa, com peso em rótulos gaúchos.",
    items: [
      {
        name: "Régua de cervejas",
        desc: "Flight para provar estilos lado a lado. A lousa do balcão manda no que está pingando hoje.",
      },
      {
        name: "Happy hour",
        desc: "Pint pelo preço de half pint, em geral até as 21h — confirme no salão.",
      },
      {
        name: "Espumante na linha",
        desc: "Além das ~19 torneiras de cerveja, uma linha de espumante.",
      },
    ],
  },
];
