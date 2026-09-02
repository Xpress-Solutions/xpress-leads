export type Sabor = {
  name: string;
  tag: string;
  description: string;
  note?: string;
};

export const SABORES: Sabor[] = [
  {
    name: "O Magnífico",
    tag: "Comida di Buteco 2026",
    description:
      "Pastel de concurso: massa dourada aberta com carne, brócolis e queijo — o petisco do Point no circuito 2026, tema verduras.",
    note: "Foto oficial Israh Ramos / Sabores do Sul",
  },
  {
    name: "Sabor Gaudério",
    tag: "Comida di Buteco 2024",
    description:
      "Pastel desconstruído com carne de panela, cream cheese e alho-poró frito. Receita publicada no G1 e na ficha do concurso.",
    note: "Foto oficial Israh Ramos / G1",
  },
  {
    name: "Pastéis da casa",
    tag: "O ofício do Point",
    description:
      "A casa é pastelaria: massa frita na hora, recheio generoso, ponto de rua no Rubem Berta. Peça o sabor do dia no WhatsApp.",
  },
];
