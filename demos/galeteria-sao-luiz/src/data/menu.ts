export type MenuItem = {
  id: string
  name: string
  description: string
  note: string
  image: string
};

export const HIGHLIGHTS: MenuItem[] = [
  {
    id: "galeto",
    name: "Galeto no espeto",
    description: "O prato que dá nome à casa: galeto dourado na grelha de tijolo, suculento, de almoço.",
    note: "Especialidade",
    image: "/fotos/galeto.jpg",
  },
  {
    id: "buffet",
    name: "Buffet do meio-dia",
    description: "De segunda a sexta, bufê com churrasco: arroz, feijão, massas, milanesa e salada.",
    note: "Seg–sex",
    image: "/fotos/buffet.jpg",
  },
  {
    id: "churrasco",
    name: "Carnes da grelha",
    description: "Costela, maminha, picanha, vazio, coração, salsichão e xixo — o espeto do almoço.",
    note: "No bufê",
    image: "/fotos/grelha.jpg",
  },
];

export const CUTS = [
  "Galeto",
  "Costela",
  "Maminha",
  "Picanha",
  "Vazio",
  "Coração",
  "Salsichão",
  "Xixo",
];

export const SIDES = [
  "Arroz",
  "Feijão",
  "Salada de maionese",
  "Massas",
  "Polenta",
  "Milanesa",
  "Saladas do bufê",
];

export const DAYS = [
  {
    title: "Segunda a sexta",
    kicker: "Bufê com churrasco",
    text: "O almoço de quem trabalha e de quem volta em família: carnes no espeto e acompanhamentos quentes.",
  },
  {
    title: "Sábado",
    kicker: "À la minuta",
    text: "Pratos feitos e o ritmo do fim de semana. Liga antes se quiser garantir o galeto.",
  },
];

export const REVIEWS = [
  {
    author: "Camila RZK",
    source: "Google",
    text: "Excelente custo benefício!",
  },
  {
    author: "Katyuce Escobal da Silva",
    source: "Google",
    text: "Lugar ok, limpo, calmo, comida simples e boa. Bom custo benefício!!!",
  },
  {
    author: "Restaurant Guru",
    source: "Temas das avaliações",
    text: "O que mais aparece: almoço, carne, galinha/galeto, polenta, arroz e serviço. Casa quieta de meio-dia.",
  },
];

export const GALLERY = [
  { src: "/fotos/fachada.jpg", alt: "Fachada da Galeteria São Luiz na Rua São Luís, Santana" },
  { src: "/fotos/salao.jpg", alt: "Salão de almoço com mesas de granito e buffet" },
  { src: "/fotos/galeto.jpg", alt: "Galetos assando no espeto da casa" },
  { src: "/fotos/grelha.jpg", alt: "Grelha de tijolo com espetos e placa Banricompras" },
  { src: "/fotos/buffet.jpg", alt: "Buffet com arroz, feijão, purê e milanesa" },
  { src: "/fotos/espetos.jpg", alt: "Galeto e carnes no forno rotativo" },
  { src: "/fotos/buffet-linha.jpg", alt: "Linha do buffet e saladas" },
  { src: "/fotos/saladas.jpg", alt: "Barra de saladas e marmitas para levar" },
  { src: "/fotos/brasa.jpg", alt: "Carnes e linguiça na brasa" },
];
