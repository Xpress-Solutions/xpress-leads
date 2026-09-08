export type MenuItem = {
  name: string
  detail: string
  price: string
  tag?: string
};

export const WINES: MenuItem[] = [
  {
    name: "Copo da casa",
    detail: "Merlot de pequeno produtor da Serra. É copo baixo de bojo — não taça com haste.",
    price: "R$ 15",
    tag: "o da casa",
  },
  {
    name: "Merlot",
    detail: "Tinto gaúcho na taça. Mesma regra: vinho local, sem cerimônia.",
    price: "R$ 26",
  },
  {
    name: "Corte de brancas",
    detail: "Uvas brancas do Rio Grande do Sul, para quem quer mais leve.",
    price: "R$ 26",
  },
  {
    name: "Tempranillo",
    detail: "Tinto na taça, ainda na faixa de quem pede a segunda.",
    price: "R$ 30",
  },
  {
    name: "Cerveja da casa",
    detail: "O mesmo preço do copo de merlot — de propósito.",
    price: "R$ 15",
  },
];

export const BITES: MenuItem[] = [
  {
    name: "Azeitonas marinadas",
    detail: "A comidinha do Nino que a GZH fotografou na abertura. Ingrediente do Estado.",
    price: "petisco",
  },
  {
    name: "Tábua de frios",
    detail: "Para dividir no recuo da calçada, com o copo no meio da mesa.",
    price: "para a mesa",
  },
  {
    name: "Azeite Amoliva",
    detail: "O azeite da Greice, de Mariana Pimentel. Também está à venda.",
    price: "à venda",
  },
];

export const CARTA_NOTE =
  "Carta pública da abertura (JC, abr/2025). Confirme rótulos do dia no Instagram — a casa gira produtor local.";
