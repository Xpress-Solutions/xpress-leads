export type MenuItem = {
  id: string;
  name: string;
  description: string;
  note: string;
  source: string;
};

export const MENU: MenuItem[] = [
  {
    id: "festa-na-chapa",
    name: "Festa na chapa",
    description:
      "Pães de xis dourados e crocantes na chapa, molho da casa, tomate, cebola, bacon, milho, queijo e mix de ervas. Fecha com brigadeiro caseiro e granulado.",
    note: "Petisco do Comida di Buteco",
    source: "Comida di Buteco",
  },
  {
    id: "pastel-panela",
    name: "Pastel de carne de panela",
    description:
      "Massa artesanal, recheio bem temperado — o carro-chefe que o Destemperados mandou ir só pra provar. Acompanha a maionese da avó.",
    note: "Carro-chefe da casa",
    source: "Destemperados",
  },
  {
    id: "xis",
    name: "Xis da chapa",
    description:
      "Lanche clássico pra matar a larica de quem sai da festa. Receita de família: a carne de panela veio do pai.",
    note: "Pra madrugada",
    source: "Jornal do Comércio",
  },
  {
    id: "porcoes",
    name: "Fritas, polenta e petisco",
    description:
      "Porções que todo mundo pede quando a fome é coletiva: batata frita, polenta e o que estiver saindo da chapa.",
    note: "Pra mesa",
    source: "Destemperados",
  },
];

export const PRESS = [
  {
    outlet: "Destemperados / GZH",
    quote:
      "Novidade no 4º Distrito, o Larica reúne lanches e petiscos que todo mundo ama. O carro-chefe é o pastel de massa artesanal recheado com carne de panela. Vale ir só para provar a receita.",
    url: "https://gauchazh.clicrbs.com.br/destemperados/experiencias/porto-alegre/noticia/2023/01/dos-classicos-as-novidades-descubra-lugares-para-curtir-o-4a-distrito-em-todos-os-momentos-do-dia-clcv1ita1003r0181v34oc6to.html",
  },
  {
    outlet: "Jornal do Comércio",
    quote:
      "Queremos ser esse espaço que a galera vem quando não tem mais nada aberto para comer, quando sai da festa com fome e só quer comer um xis de qualidade — é para matar a larica.",
    url: "https://www.jornaldocomercio.com/ge2/noticias/2022/12/875564-operacao-focada-em-lanches-classicos-para-a-madrugada-abre-no-quarto-distrito.html",
  },
] as const;
