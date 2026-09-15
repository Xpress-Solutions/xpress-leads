export type MenuItem = {
  name: string;
  note: string;
  tag?: string;
};

export const SANDWICHES: MenuItem[] = [
  {
    name: "Sanduíche de tofu",
    note: "O queridinho da casa, segundo os sócios. Tofu no pão que a cozinha assa aqui.",
    tag: "clássico",
  },
  {
    name: "Focaccia da caponata",
    note: "Abobrinha, berinjela, pimentão, cebola roxa, pasta de castanha e agrião.",
  },
  {
    name: "Baguete de portobello",
    note: "Cogumelo assado, homus, pesto de manjericão, rúcula e cebola crocante.",
  },
  {
    name: "Sanduíche de berinjela",
    note: "O que as mesas pedem de volta. Pão da casa, recheio de planta.",
  },
  {
    name: "Parmigiana",
    note: "Leitura vegetal do clássico — sem queijo de vaca, sem abrir mão da casca.",
  },
];

export const SHARE: MenuItem[] = [
  {
    name: "Bolinhas Crocantes do Mato",
    note: "O petisco do Comida di Buteco 2026. Tema verduras, tigela preta, papel laranja da casa.",
    tag: "circuito 2026",
  },
  {
    name: "Duo crocante",
    note: "Cogumelos empanados com batata rústica e molho da casa.",
  },
  {
    name: "Azeitonas empanadas",
    note: "Invenção da cozinha. Reviews pedem sem explicação.",
  },
  {
    name: "Bruschetta de tomate confit",
    note: "Pão da casa, tomate lento, azeite.",
  },
  {
    name: "Empanadas",
    note: "Massa e recheio vegetal, para o meio da mesa.",
  },
];

export const TAPS = [
  {
    name: "Kölsch",
    house: "Primor da Terra",
    spec: "IBU 22 · 5%",
    note: "Clara, reta, para abrir a noite.",
  },
  {
    name: "Vienna Lager",
    house: "Primor da Terra",
    spec: "malte âmbar",
    note: "Cor da parede mostarda atrás do balcão.",
  },
  {
    name: "Saison",
    house: "Primor da Terra",
    spec: "sazonal",
    note: "Muda com o que a terra entrega no mês.",
  },
  {
    name: "Sour caju / coco",
    house: "Primor da Terra",
    spec: "quando tem fruta",
    note: "Já teve goiaba — some quando acaba o insumo.",
  },
  {
    name: "Dry Stout",
    house: "Primor da Terra",
    spec: "escura",
    note: "Para quem senta e fica.",
  },
  {
    name: "Parceira local",
    house: "torneira convidada",
    spec: "2 das 6",
    note: "Sempre cervejaria pequena com ideia sustentável.",
  },
] as const;

export const REVIEWS = [
  {
    name: "Luiza F.",
    quote:
      "As cevas artesanais nem comento. O ambiente também super agradável — dá pra ver que tudo foi pensado com muito carinho. Os pães são perfeitos. As azeitonas empanadas então… sem explicação.",
    source: "Google",
  },
  {
    name: "Mariana F.",
    quote:
      "Recomendo o sanduíche de berinjela e o duo de cogumelo empanado com batata rústica. Ótimo lugar para curtir boa comida e tem a própria marca de cerveja.",
    source: "Google",
  },
  {
    name: "Alice C.",
    quote:
      "Já tive verdadeiras aulas de como apreciar as cervejas da casa com a Paty e o Fabiano. Amo a azeitona empanada que inventaram.",
    source: "Google",
  },
] as const;
