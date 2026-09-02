export type MenuItem = {
  name: string
  description: string
  note?: string
  tag?: string
};

export const MENU: MenuItem[] = [
  {
    name: "Brócolis na Rede",
    description:
      "O petisco do Barril no Comida di Buteco 2026. A casa volta ao concurso com prato de verdura — R$ 40 no circuito.",
    tag: "Comida di Buteco 2026",
  },
  {
    name: "Hambúrguer de bergamota",
    description:
      "Pão brioche, 180g de burger de costela, bergamota caramelizada, creme de gorgonzola, rúcula e maionese da casa.",
    tag: "Especial da casa",
    note: "Roteiro da Bergamota / JC",
  },
  {
    name: "14 torneiras artesanais",
    description:
      "Carta de cervejas convidadas — o forte da casa desde 2015. Chope em jarra, do jeito que o Bruno trouxe de Vancouver.",
    tag: "Carro-chefe",
  },
  {
    name: "Almoço na Wenceslau",
    description:
      "Executivo de segunda a sábado: à la minuta a partir de R$ 20, massas, peixe e opção vegetariana. Casa abre às 11h.",
  },
  {
    name: "Bruschetta Di Berga",
    description:
      "Ciabatta com carne de panela, geleia de bergamota, rúcula, creme de gorgonzola e chimichurri.",
    note: "Ficha Comida di Buteco",
  },
  {
    name: "Noite: burger, pizza e risoto",
    description:
      "À noite entram hambúrgueres, pizzas e o risoto de gorgonzola com bergamota. Tem até ceva de berga na carta.",
  },
];

export const HOUSE_MARKS = [
  { title: "Desde 2015", text: "CNPJ ativo desde 2014 na Wenceslau Escobar, 2997." },
  { title: "14 torneiras", text: "Cerveja artesanal é raiz. Drinks existem; o chope manda." },
  { title: "Balcão em U", text: "Inspiração de brew pub em Vancouver: sentar e falar com o barman." },
  { title: "Três gerações", text: "Filho pede para jantar na sexta. Deck, jardim e pátio de casa." },
] as const;
