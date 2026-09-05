export type DayPart = "almoco" | "noite" | "mesa";

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  part: DayPart
  featured?: boolean
  official?: boolean
};

export const DAY_PARTS: { id: DayPart; label: string; hours: string }[] = [
  { id: "almoco", label: "Almoço", hours: "A partir das 11h" },
  { id: "mesa", label: "Mesa & petisco", hours: "O dia inteiro" },
  { id: "noite", label: "Noite", hours: "Até meia-noite" },
];

export const MENU: MenuItem[] = [
  {
    id: "bolinho-resenha",
    name: "Bolinho Resenha",
    description:
      "Bolinho de verduras com bacon e queijo, maionese da casa e chimichurri. O petisco do Comida di Buteco 2026 — campeão do Rio Grande do Sul.",
    price: "R$ 40",
    part: "mesa",
    featured: true,
    official: true,
  },
  {
    id: "executivo",
    name: "Almoço na avenida",
    description:
      "Prato do dia para quem para na Av. do Forte ao meio-dia. Comida de verdade, sem fila de shopping.",
    price: "Consulte",
    part: "almoco",
  },
  {
    id: "verduras",
    name: "Salada da casa",
    description:
      "Verdura fresca no prato — o mesmo espírito que levou o bolinho ao concurso.",
    price: "Consulte",
    part: "almoco",
  },
  {
    id: "batata",
    name: "Batata frita da casa",
    description:
      "Porção que aparece nas fotos da casa. Crocante, para a mesa compartilhada.",
    price: "Consulte",
    part: "mesa",
  },
  {
    id: "petiscos",
    name: "Petiscos da Resenha",
    description:
      "Porções para dividir: carne, queijo e o que estiver saindo da cozinha. Preço de boteco, execução gourmet.",
    price: "Consulte",
    part: "mesa",
  },
  {
    id: "noite-mesa",
    name: "Mesa da noite",
    description:
      "A resenha de verdade: petisco, cerveja gelada e a avenida lá fora até 0h.",
    price: "Consulte",
    part: "noite",
  },
  {
    id: "cerveja",
    name: "Cerveja bem gelada",
    description:
      "O que as avaliações repetem. Chope e long neck para acompanhar o bolinho.",
    price: "Consulte",
    part: "noite",
  },
  {
    id: "sem-alcool",
    name: "Sem álcool",
    description: "Refri, suco e água para o almoço de terça ou a mesa de sábado.",
    price: "Consulte",
    part: "almoco",
  },
];

export const MENU_NOTE =
  "O Bolinho Resenha saiu a R$ 40 na temporada do Comida di Buteco 2026. Demais itens são o ritmo da casa (almoço / noite) a partir de listagens públicas — confirme preço no salão.";
