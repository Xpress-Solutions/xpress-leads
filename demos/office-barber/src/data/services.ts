export type Service = {
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
};

export const SERVICES: Service[] = [
  { name: "Corte masculino", price: "R$ 60", duration: "30 min", popular: true },
  { name: "Cabelo + barba", price: "R$ 80", duration: "40 min", popular: true },
  { name: "Barba", price: "R$ 45", duration: "20 min", popular: true },
  { name: "Máquina 1 pente", price: "R$ 45", duration: "25 min" },
  { name: "Máquina + barba", price: "R$ 70", duration: "30 min" },
  { name: "Cabelo + sobrancelha", price: "R$ 70", duration: "35 min" },
  { name: "Cabelo + bigode", price: "R$ 70", duration: "30 min" },
  { name: "Contorno + barba", price: "R$ 60", duration: "30 min" },
  { name: "Máquina + sobrancelha", price: "R$ 60", duration: "20 min" },
  { name: "Máquina + bigode", price: "R$ 60", duration: "20 min" },
  { name: "Acabamento", price: "R$ 20", duration: "10 min" },
];

export const AMENITIES = [
  "Estacionamento",
  "Cartão de crédito",
  "Wi-Fi",
  "Café na casa",
] as const;
