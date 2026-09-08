export type Service = {
  name: string
  detail: string
  price: string
  duration: string
  highlight?: boolean
  category: "corte" | "barba" | "combo" | "extra"
};

export const SERVICES: Service[] = [
  {
    name: "Promo 1 — Barba & Cabelo",
    detail: "O combo da casa: barba, cabelo e bigode na mesma cadeira.",
    price: "R$ 90",
    duration: "1h 10min",
    highlight: true,
    category: "combo",
  },
  {
    name: "Promo 5 — Cabelo + Barba + Sobrancelha",
    detail: "Combo completo com sobrancelha na navalha.",
    price: "R$ 95",
    duration: "1h 15min",
    highlight: true,
    category: "combo",
  },
  {
    name: "Corte tradicional",
    detail: "Corte clássico da Bonanno.",
    price: "R$ 50",
    duration: "40min",
    category: "corte",
  },
  {
    name: "Corte navalhado",
    detail: "Fade ou graduação a partir da navalha.",
    price: "R$ 50",
    duration: "50min",
    category: "corte",
  },
  {
    name: "Corte sênior",
    detail: "Até dois pentes de máquina.",
    price: "R$ 40",
    duration: "30min",
    category: "corte",
  },
  {
    name: "Corte kids",
    detail: "Infantil de 0 a 6 anos.",
    price: "R$ 55",
    duration: "40min",
    category: "corte",
  },
  {
    name: "Barba tradicional",
    detail: "Toalha, navalha e o acabamento da casa.",
    price: "R$ 50",
    duration: "40min",
    category: "barba",
  },
  {
    name: "Pigmentação de barba",
    detail: "Preenche e uniformiza a barba.",
    price: "R$ 40",
    duration: "20min",
    category: "barba",
  },
  {
    name: "Promo 3 — Corte + sobrancelhas",
    detail: "Corte e sobrancelha executados com navalha.",
    price: "R$ 65",
    duration: "50min",
    category: "combo",
  },
  {
    name: "Promo 2 — Corte + progressiva",
    detail: "Corte com progressiva.",
    price: "R$ 129",
    duration: "1h 20min",
    category: "combo",
  },
  {
    name: "Promo 4 — Barba + cabelo + progressiva",
    detail: "O combo longo da casa.",
    price: "R$ 159",
    duration: "1h 45min",
    category: "combo",
  },
  {
    name: "Acabamento (pézinho)",
    detail: "Contorno rápido.",
    price: "R$ 20",
    duration: "15min",
    category: "extra",
  },
  {
    name: "Sobrancelhas",
    detail: "Na navalha.",
    price: "R$ 20",
    duration: "15min",
    category: "extra",
  },
  {
    name: "Cera nariz",
    detail: "Remoção com cera quente.",
    price: "R$ 20",
    duration: "20min",
    category: "extra",
  },
];
