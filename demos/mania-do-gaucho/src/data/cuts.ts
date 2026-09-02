export type Cut = {
  name: string;
  note: string;
  tip: string;
};

export const CUTS: Cut[] = [
  {
    name: "Prime rib",
    note: "Peça inteira ou fatiada no ponto que você pedir.",
    tip: "Reserva de fim de semana — o balcão costuma girar rápido no sábado.",
  },
  {
    name: "T-bone",
    note: "O clássico do espeto: contra e filé no mesmo osso.",
    tip: "Peça a espessura no balcão. O açougueiro marca o ponto com você.",
  },
  {
    name: "T-bone de cordeiro",
    note: "Ovelha da linha especial — não é corte de supermercado.",
    tip: "Encomende com antecedência se for mesa grande.",
  },
  {
    name: "Contra-filé",
    note: "O corte de todo domingo gaúcho. Fresco, não congelado de prateleira.",
    tip: "Vai bem no sal grosso e no fogo alto. Pergunta a peça do dia.",
  },
  {
    name: "Costela",
    note: "Peça para assar lento — a que aparece na grelha dos posts da casa.",
    tip: "Sábado de manhã é o horário de quem não quer ficar sem.",
  },
  {
    name: "Porco, frango e peixe",
    note: "Linha completa além do gado: o Facebook da casa lista tudo no balcão.",
    tip: "Bom para montar um espeto misto sem sair da Felizardo.",
  },
];

export const EXTRAS = [
  "Vinhos para a mesa",
  "Cervejas artesanais",
  "Temperos e molhos",
  "Pão de alho e acompanhamento",
  "Acessórios de churrasco",
  "Tele-entrega e evento",
] as const;
