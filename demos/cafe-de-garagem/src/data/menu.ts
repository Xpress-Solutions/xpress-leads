export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price?: string;
  tag?: string;
};

export const MENU: MenuItem[] = [
  {
    id: "coxinha",
    name: "Coxinha de Buteco",
    description:
      "O petisco do Café de Garagem no Comida di Buteco 2026. Circuito Porto Alegre e Canoas — preço do concurso.",
    price: "R$ 40",
    tag: "Comida di Buteco 2026",
  },
  {
    id: "cafes",
    name: "Cafés",
    description:
      "Xícara na garagem. O iAvaliei cita cafés como ofício da casa — peça o do dia no balcão.",
  },
  {
    id: "lanches",
    name: "Lanches",
    description:
      "Lanche de calçada, sem pose de cafeteria. O que tem no dia é o que sai da chapa.",
  },
  {
    id: "salgados",
    name: "Salgados",
    description:
      "Salgado de café de bairro. A coxinha do concurso é a estrela; o resto pergunta no balcão.",
  },
  {
    id: "pf",
    name: "Prato feito",
    description:
      "Almoço de PF na zona norte. Casa pequena, mesa interna ou na calçada — do jeito que couber.",
  },
];
