export const SERVICES = [
  {
    name: "Corte tesoura e máquina",
    price: "R$ 45",
    duration: "30 min",
    group: "Cabelo",
  },
  {
    name: "Corte só tesoura",
    price: "R$ 45",
    duration: "30 min",
    group: "Cabelo",
  },
  {
    name: "Corte navalhado",
    price: "R$ 50",
    duration: "30 min",
    group: "Cabelo",
  },
  {
    name: "Máquina 1 pente",
    price: "R$ 35",
    duration: "15 min",
    group: "Cabelo",
  },
  {
    name: "Acabamento",
    price: "R$ 15",
    duration: "5 min",
    group: "Cabelo",
  },
  {
    name: "Barba",
    price: "R$ 45",
    duration: "30 min",
    group: "Barba",
  },
  {
    name: "Sobrancelha",
    price: "R$ 25",
    duration: "20 min",
    group: "Sobrancelha",
  },
  {
    name: "Cabelo e barba",
    price: "R$ 80",
    duration: "1h",
    group: "Combo",
  },
  {
    name: "Completo",
    detail: "Corte, barba e sobrancelha",
    price: "R$ 90",
    duration: "1h 20",
    group: "Combo",
  },
  {
    name: "Combo cabelo, barba e sobrancelha",
    price: "R$ 105",
    duration: "1h 20",
    group: "Combo",
  },
  {
    name: "Trança",
    detail: "A partir de",
    price: "R$ 90",
    duration: "1h 30",
    group: "Cabelo",
  },
  {
    name: "Pigmentação",
    price: "R$ 35",
    duration: "30 min",
    group: "Combo",
  },
  {
    name: "Clareamento / luzes",
    price: "R$ 100",
    duration: "1h 30",
    group: "Cabelo",
  },
  {
    name: "Manicure",
    price: "R$ 45",
    duration: "30 min",
    group: "Estética",
  },
  {
    name: "Pedicure",
    price: "R$ 45",
    duration: "45 min",
    group: "Estética",
  },
  {
    name: "Combo pé e mão",
    price: "R$ 75",
    duration: "1h 30",
    group: "Estética",
  },
] as const;

export const PLANS_MONTHLY = [
  { name: "Barba assinatura", price: "R$ 130", save: "R$ 30" },
  { name: "Corte assinatura", price: "R$ 140", save: "R$ 20" },
  { name: "Corte e barba", price: "R$ 240", save: "R$ 40" },
  { name: "Assinatura completa", price: "R$ 270", save: "R$ 50" },
] as const;

export const PLANS_BIWEEKLY = [
  { name: "Barba assinatura", price: "R$ 65", save: "R$ 15" },
  { name: "Corte assinatura", price: "R$ 70", save: "R$ 10" },
  { name: "Corte e barba", price: "R$ 120", save: "R$ 20" },
  { name: "Assinatura completa", price: "R$ 135", save: "R$ 25" },
] as const;

export const TEAM = [
  {
    name: "Luis Eduardo Gonçalves dos Santos",
    role: "Sócio fundador",
    photo: "/equipe/luis-eduardo.jpg",
  },
  {
    name: "Lucas Martins dos Santos",
    role: "Sócio proprietário",
    photo: "/equipe/lucas.jpg",
  },
  {
    name: "Vinícius Martins dos Santos",
    role: "Sócio proprietário",
    photo: "/equipe/vinicius.jpg",
  },
  {
    name: "Eduardo Martins dos Santos",
    role: "Sócio proprietário",
    photo: "/equipe/eduardo.jpg",
  },
  {
    name: "Mario Lillo",
    role: "Barbeiro",
    photo: "/equipe/mario.jpg",
  },
  {
    name: "Guilherme Rodrigues Barboza",
    role: "Barbeiro",
    photo: "/equipe/guilherme.jpg",
  },
  {
    name: "Rafaela",
    role: "Trança, manicure e depilação",
    photo: "/equipe/rafaela.jpg",
  },
] as const;

export const REVIEWS = [
  {
    name: "Samuel",
    staff: "Lucas Martins dos Santos",
    text: "O atendimento dos profissionais da Confraria é muito bom, o Lucas é um excelente barbeiro. Nota dez à equipe!",
  },
  {
    name: "Bruno",
    staff: "Eduardo Martins dos Santos",
    text: "Sou sempre muito bem atendido e recebido por todos, e com ótimo resultado no corte e sobrancelha.",
  },
  {
    name: "Ânderson",
    staff: "Luis Eduardo Gonçalves dos Santos",
    text: "Serviço de ótima qualidade e excelente atendimento.",
  },
  {
    name: "Samuel",
    staff: "Lucas Martins dos Santos",
    text: "Ótima barbearia, profissionais altamente qualificados.",
  },
] as const;

export const GALLERY = [
  { src: "/fotos/fachada.jpg", alt: "Equipe na calçada da José do Patrocínio, sob o toldo listrado" },
  { src: "/fotos/interior.jpg", alt: "Salão com parede de cimento queimado e cadeiras pretas" },
  { src: "/fotos/salao.jpg", alt: "Placa CONFRARIA BARBER e estação de madeira" },
  { src: "/fotos/estacao.jpg", alt: "Bancada, espelhos e pendentes pretos do salão" },
  { src: "/fotos/corte-navalhado.jpg", alt: "Corte navalhado feito na casa" },
  { src: "/fotos/tranca.jpg", alt: "Trança nagô no cimento queimado da Confraria" },
  { src: "/fotos/nago.jpg", alt: "Partes limpas de trança nagô" },
  { src: "/fotos/desenho.jpg", alt: "Desenho no fade, trabalho de tesoura e máquina" },
  { src: "/fotos/confraria.jpg", alt: "A confraria na porta, com o poste clássico atrás" },
] as const;
