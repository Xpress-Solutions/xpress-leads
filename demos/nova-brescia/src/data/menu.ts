export type MenuItem = {
  id: string;
  name: string;
  description: string;
  tag?: string;
  image?: string;
};

export const XIS: MenuItem[] = [
  {
    id: "coracao",
    name: "Xis coração",
    description: "O mais pedido da casa. Coração na chapa, queijo e a montagem de sempre.",
    tag: "Mais pedido",
    image: "/fotos/xis-coracao.jpg",
  },
  {
    id: "completo",
    name: "Xis completo",
    description: "Bacon, carne bovina e o combo que o Sérgio chama de completo.",
    tag: "Mais pedido",
    image: "/fotos/xis-prato.jpg",
  },
  {
    id: "salada",
    name: "Xis salada",
    description: "Carro-chefe clássico. Único que já sai com milho e ervilha — os outros, só se pedir.",
    image: "/fotos/xis-corte.jpg",
  },
  {
    id: "file",
    name: "Xis filé",
    description: "Filé na chapa, queijo derretido, ovo e a maionese caseira.",
    image: "/fotos/xis-maos.jpg",
  },
  {
    id: "frango",
    name: "Xis frango",
    description: "Um dos três carros-chefe, junto com salada e coração.",
  },
  {
    id: "calabresa",
    name: "Xis calabresa",
    description: "Calabresa na chapa. Sérgio cita carne e calabresa entre os mais pedidos.",
  },
  {
    id: "bacon",
    name: "Xis bacon",
    description: "Quem volta na casa muitas vezes pede o de bacon.",
  },
  {
    id: "california",
    name: "Xis Califórnia",
    description: "O ousado: figo em calda na montagem. Já pesou 1,3 kg na balança.",
    tag: "1,3 kg",
  },
];

export const OUTROS: MenuItem[] = [
  {
    id: "bauru",
    name: "Bauru",
    description: "No cardápio desde o começo, ao lado do xis.",
  },
  {
    id: "dog",
    name: "Cachorro-quente",
    description: "O outro clássico da lancheria — sem firula.",
  },
  {
    id: "torrada",
    name: "Torrada",
    description: "Com o mesmo queijo de 6 a 12 fatias que sobe no xis.",
  },
  {
    id: "batata",
    name: "Batata frita",
    description: "Sequinha, no ponto. Mergulha na maionese caseira do potinho.",
  },
];
