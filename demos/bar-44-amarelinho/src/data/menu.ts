export type MenuItem = {
  id: string
  name: string
  description: string
  note: string
  image: string
  tag?: string
};

export const LUNCH_BOARD = [
  { name: "Carreteiro", source: "Quadro-negro na calçada" },
  { name: "Bife acebolado", source: "Quadro-negro na calçada" },
  { name: "Costelinha de porco", source: "Quadro-negro na calçada" },
] as const;

export const MENU: MenuItem[] = [
  {
    id: "charutinhos",
    name: "Charutinhos Jalapeños",
    description:
      "O petisco do Comida di Buteco 2026. Crocante, com molhos da casa — o prato que o concurso mandou para a Assis Brasil.",
    note: "Edição 2026 · R$ 40 no período do concurso",
    image: "/fotos/charutinhos.jpg",
    tag: "Comida di Buteco 2026",
  },
  {
    id: "schnitzel",
    name: "Schnitzel de lombinho suíno",
    description:
      "Lombinho crocante citado nas avaliações da casa. Prato de almoço que o pessoal da zona norte pede de novo.",
    note: "Pedido recorrente no Google",
    image: "/fotos/milanesa.jpg",
    tag: "Almoço",
  },
  {
    id: "almondegas",
    name: "Almôndegas com macarrão ao sugo",
    description:
      "Almôndegas recheadas com queijo e massa ao sugo — comida de casa, do jeito que o Amarelinho serve de dia.",
    note: "Citado em avaliação pública",
    image: "/fotos/almondegas.jpg",
    tag: "Caseiro",
  },
  {
    id: "capeletti",
    name: "Capeletti da casa",
    description:
      "Caldo dourado e massa recheada. O almoço de corredor que segura a mesa antes do expediente da noite.",
    note: "Registro fotográfico da casa",
    image: "/fotos/capeletti.jpg",
    tag: "Almoço",
  },
];

export const REVIEWS = [
  {
    author: "Elizabete",
    text: "Maravilhoso! Especial! Original! Genuíno. Recomendou o schnitzel de lombinho suíno crocante — e veio com a família.",
    source: "Google",
  },
  {
    author: "Rafael",
    text: "Muito bom, recomendado. Comida, atendimento e atmosfera no máximo.",
    source: "Google",
  },
  {
    author: "Gustavo",
    text: "Ótima comida. Do jeito que boteco de almoço e jantar tem que ser: sem firula, com prato cheio.",
    source: "Google",
  },
] as const;
