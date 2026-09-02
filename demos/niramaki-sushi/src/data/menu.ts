export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
};

export const MENU: MenuItem[] = [
  {
    id: "combo-nira",
    name: "Combo NIRA",
    description: "56 peças da casa — o combinado que leva o nome do Niramaki.",
    price: "consultar",
    category: "Combos",
    image: "/fotos/prato-1.jpeg",
    featured: true,
  },
  {
    id: "combo-salmao-56",
    name: "Combo salmão · 56 peças",
    description: "Salmão em fatia generosa, do jeito que a avaliação do bairro descreve.",
    price: "R$ 214,99",
    category: "Combos",
    image: "/fotos/prato-4.jpeg",
    featured: true,
  },
  {
    id: "combo-hot",
    name: "Combo HOT · 16 peças",
    description: "4 hot especial, 4 hot poró, 4 hot palha e 4 hot filadélfia.",
    price: "R$ 49,99",
    category: "HOT",
    image: "/fotos/prato-2.jpeg",
    featured: true,
  },
  {
    id: "sashimi-salmao",
    name: "Sashimi de salmão · 6 un.",
    description: "Fatia limpa, peça grande — o que o Niramaki entrega de verdade.",
    price: "R$ 29,99",
    category: "Sashimis",
    image: "/fotos/prato-5.png",
  },
  {
    id: "sashimi-selado",
    name: "Sashimi salmão selado · 6 un.",
    description: "Selado na chapa, ainda no ponto do peixe.",
    price: "consultar",
    category: "Sashimis",
    image: "/fotos/prato-5.png",
  },
  {
    id: "sashimi-gorgonzola",
    name: "Sashimi gorgonzola · 6 un.",
    description: "Salmão selado com gorgonzola.",
    price: "R$ 34,99",
    category: "Sashimis",
    image: "/fotos/prato-3.jpeg",
  },
  {
    id: "combo-salmao-34",
    name: "Combo salmão · 34 peças",
    description: "Combinado de salmão para a mesa de duas.",
    price: "R$ 159,99",
    category: "Combos",
    image: "/fotos/prato-1.jpeg",
  },
  {
    id: "combo-mix",
    name: "Combo mix · 56 peças",
    description: "Misto da casa para dividir sem negociar o último uramaki.",
    price: "R$ 169,99",
    category: "Combos",
    image: "/fotos/prato-4.jpeg",
  },
  {
    id: "bento-salmao",
    name: "Bentô salmão palha",
    description: "Refeição montada: salmão, palha e acompanhamento.",
    price: "R$ 84,99",
    category: "Bentô",
    image: "/fotos/prato-6.png",
  },
  {
    id: "combo-namorados",
    name: "Combo namorados",
    description: "Mesa para dois — o pedido grande da Barão.",
    price: "R$ 329,99",
    category: "Combos",
    image: "/fotos/prato-7.png",
  },
];

export const GALLERY = [
  { src: "/fotos/prato-4.jpeg", alt: "Barco de sushi do Niramaki com salmão, hot e sashimi" },
  { src: "/fotos/prato-1.jpeg", alt: "Combinado generoso de salmão sobre esteira" },
  { src: "/fotos/prato-5.png", alt: "Salmão selado da casa" },
  { src: "/fotos/prato-2.jpeg", alt: "Uramaki de salmão com palha e cream cheese" },
  { src: "/fotos/prato-3.jpeg", alt: "Peças de salmão com cebolinha e cream cheese" },
  { src: "/fotos/prato-8.png", alt: "Peça do cardápio oficial Niramaki" },
] as const;

export const REVIEWS = [
  {
    text: "Ambiente muito agradável, peças grandes com muito salmão, melhor sushi de Porto Alegre, atendimento impecável e os drinks maravilhosos. Qualidade e preço justo.",
    source: "Locais do Brasil",
  },
  {
    text: "Sempre peço pelo iFood. É muito gostoso — na minha opinião um dos melhores de POA. Dá de 10 a zero em muitos caríssimos.",
    source: "Locais do Brasil",
  },
  {
    text: "Melhor sushi que já comi. Nota mil.",
    source: "Locais do Brasil",
  },
] as const;
