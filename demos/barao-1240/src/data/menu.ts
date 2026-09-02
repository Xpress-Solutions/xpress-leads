export type MenuItem = {
  id: string
  name: string
  note: string
  tag?: string
};

export const MENU: MenuItem[] = [
  {
    id: "cafe",
    name: "Café",
    note: "A casa abre às 7h. Quem passa na Barão do Amazonas entra pelo café — e fica.",
    tag: "Manhã",
  },
  {
    id: "queijadas",
    name: "Queijadas",
    note: "Citadas com frequência nas avaliações públicas. Doce de cafeteria de rua.",
  },
  {
    id: "minuta",
    name: "À la minuta",
    note: "Almoço de bairro, do jeito que a placa na calçada anuncia.",
    tag: "Almoço",
  },
  {
    id: "parmegiana",
    name: "À la minuta à parmegiana",
    note: "Milanesa, molho, queijo — o prato que a casa coloca no cavalete da calçada.",
    tag: "Almoço",
  },
  {
    id: "macarronada",
    name: "Macarronada",
    note: "A placa da casa já chamou de novidade. Massa de almoço, sem cerimônia.",
  },
  {
    id: "pf",
    name: "Prato feito",
    note: "Ala minuta e PF no mesmo expediente. Ticket de bairro, R$ 20–40 no Google.",
    tag: "Almoço",
  },
];

export const SERVICES = [
  {
    id: "manha",
    title: "Café da manhã",
    text: "Porta abre às 7h. Café, mesa calma e o movimento da Barão do Amazonas.",
  },
  {
    id: "almoco",
    title: "Almoço de rua",
    text: "À la minuta, PF, parmegiana, macarronada. Comida de quem trabalha no bairro.",
  },
  {
    id: "kit",
    title: "Kit café e aniversário",
    text: "Encomenda pelo WhatsApp — sem virar mais uma rede social para alimentar.",
  },
] as const;

export const REVIEWS = [
  {
    author: "Jerusa Finatto",
    source: "Google",
    text: "A comida é ótima com preço justo e o atendimento muito bom!",
    meta: "Almoço · R$ 20–40",
  },
  {
    author: "Rafael Diehl",
    source: "Google",
    text: "Servem ala minutas e almoço prato feito, muito bom!",
    meta: "Almoço · R$ 20–40",
  },
  {
    author: "Ana Izabel Lima",
    source: "Google",
    text: "Comida boa, preço justo. Gostei!!",
    meta: "No local",
  },
] as const;
