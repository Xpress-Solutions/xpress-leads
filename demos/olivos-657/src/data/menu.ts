export type MenuKind = "drink" | "prato" | "vinho";

export type MenuItem = {
  id: string;
  kind: MenuKind;
  name: string;
  description: string;
  note?: string;
  featured?: boolean;
};

export const drinks: MenuItem[] = [
  {
    id: "cajueiro",
    kind: "drink",
    name: "Cajueiro",
    description:
      "Cachaça envelhecida, caju, água de coco, licor de baunilha, mel, cumaru e limão Tahiti — clarificado com leite.",
    note: "Destaque Bom Gourmet",
    featured: true,
  },
  {
    id: "negroni",
    kind: "drink",
    name: "Negroni da casa",
    description:
      "O clássico envelhecido em barril de bálsamo. Amargo, baixo, do jeito que a carta gosta.",
    note: "Assinatura",
    featured: true,
  },
  {
    id: "vista-roma",
    kind: "drink",
    name: "Uma Vista Para Roma",
    description: "Campari, vermute seco, limão, açúcar e soda.",
  },
  {
    id: "caldi-canha",
    kind: "drink",
    name: "Caldi Canha",
    description: "Blend de cachaças, xarope de cola, limão, clara e sálvia.",
  },
  {
    id: "spanish-steps",
    kind: "drink",
    name: "Spanish Steps",
    description: "Gin, Campari, vinho do porto e licor de café.",
  },
  {
    id: "classicos",
    kind: "drink",
    name: "Os clássicos",
    description:
      "Paper Plane, Penicillin, Macunaíma, Bee’s Knees, Fanciulli — e o que a Jey montar no balcão, se o clássico não estiver na carta.",
  },
];

export const plates: MenuItem[] = [
  {
    id: "tartare",
    kind: "prato",
    name: "Steak tartare",
    description: "Comida de restaurante no ritmo do bar. Para dividir sem pressa.",
    featured: true,
  },
  {
    id: "lula",
    kind: "prato",
    name: "Lula ao limone",
    description: "Leve, ácido, do tamanho da mesa de dois.",
    featured: true,
  },
  {
    id: "camarao",
    kind: "prato",
    name: "Camarão na moranga",
    description: "Conforto da chef Marina Tosin — o prato que segura a noite.",
    featured: true,
  },
  {
    id: "olivas",
    kind: "prato",
    name: "Olivas",
    description:
      "Azeitonas recheadas da casa. Peça pelo nome: é o sobrenome da porta.",
  },
  {
    id: "francesinha",
    kind: "prato",
    name: "Francesinha",
    description:
      "Releitura do clássico do Porto: carne, linguiça, presunto, queijo gratinado, ovo e molho de pimenta e cerveja.",
  },
];

export const winesNote =
  "A carta privilegia bodegas pequenas do Rio Grande do Sul — o recorte menos comentado da casa. Se você só conhece os rótulos grandes do estado, peça uma indicação.";
