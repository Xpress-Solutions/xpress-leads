export type Service = {
  name: string
  price: number
  duration: string
  combo?: boolean
  highlight?: boolean
};

export const COMBOS: Service[] = [
  {
    name: "Combo Degrade + Barba + Sobrancelha",
    price: 60,
    duration: "45 min",
    combo: true,
    highlight: true,
  },
  {
    name: "Combo Corte Social + Barba",
    price: 45,
    duration: "40 min",
    combo: true,
  },
  {
    name: "Máquina + Barba",
    price: 30,
    duration: "35 min",
    combo: true,
  },
];

export const CUTS: Service[] = [
  { name: "Corte Degrade na Zero", price: 40, duration: "30 min" },
  { name: "Corte Navalhado", price: 45, duration: "35 min" },
  { name: "Corte Social (máquina e tesoura)", price: 25, duration: "20 min" },
  { name: "Corte Infantil", price: 35, duration: "30 min" },
  { name: "Corte Máquina", price: 20, duration: "15 min" },
  { name: "Barba", price: 20, duration: "20 min" },
  { name: "Sobrancelha", price: 8, duration: "5 min" },
];
