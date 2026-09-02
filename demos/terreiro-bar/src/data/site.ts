export const SITE = {
  name: "Terreiro Bar",
  fullName: "Terreiro Bar Ancestral",
  tagline: "Meu axé brinda o seu axé.",
  headline: "Terreiro",
  subline: "Meu axé brinda o seu axé.",
  neighborhood: "Cidade Baixa — Porto Alegre",
  address: "Rua Luiz Afonso, 247 — Cidade Baixa, Porto Alegre",
  street: "Rua Luiz Afonso, 247",
  phoneDisplay: "(51) 99128-2196",
  phoneTel: "+5551991282196",
  whatsapp:
    "https://wa.me/5551991282196?text=" +
    encodeURIComponent(
      "Olá! Vim pelo site do Terreiro e queria saber da agenda e de uma mesa.",
    ),
  email: "atendimento@terreirobar.com.br",
  instagram: "https://www.instagram.com/terreiro.bar/",
  instagramHandle: "@terreiro.bar",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Terreiro+Bar+Rua+Luiz+Afonso+247+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Terreiro%20Bar%20Ancestral%2C%20Rua%20Luiz%20Afonso%20247%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hoursLead: "Qua–sáb 17h–0h · Dom 17h–22h (exceto o último domingo do mês)",
  hours: [
    { day: "Segunda", value: "Fechado" },
    { day: "Terça", value: "Fechado" },
    { day: "Quarta", value: "17h – 0h" },
    { day: "Quinta", value: "17h – 0h" },
    { day: "Sexta", value: "17h – 0h" },
    { day: "Sábado", value: "17h – 0h" },
    { day: "Domingo", value: "17h – 22h*" },
  ],
  hoursNote: "*Exceto o último domingo do mês. Qua e qui: promoção nas torneiras até 20h.",
  manifesto:
    "TERREIRO é pé no chão, é encontro e reencontro. É conversa alta, gargalhada gostosa. É sagrado e mundano. É copo cheio com conversa fiada.",
  manifestoRest:
    "Respeitamos todas as religiões, credos e crenças. Nosso requisito é ser do bem e fazer o bem. Aqui é lugar de PESSOAS — de todas as raças, etnias, gêneros e formas de amar.",
  owners: "Helena Legunes e Roger Moraes",
  founded: "Março de 2023",
  petisco: {
    name: "Porção de Axé",
    contest: "Comida di Buteco 2026",
    blurb:
      "O petisco da casa no circuito de Porto Alegre e Canoas. Quem vem pelo concurso encontra o ponto na Luiz Afonso — e o axé que sobra da porção.",
  },
  taps: [
    { name: "Dos Ventos", style: "Red Ale" },
    { name: "Da Noite", style: "Dark Lager" },
    { name: "Obá", style: "Black Coffee IPA" },
    { name: "Do Guerreiro", style: "Premium Lager" },
    { name: "Dos Rios", style: "American Pale Ale" },
    { name: "Dos Mares", style: "Weiss" },
    { name: "Das Matas", style: "IPA" },
  ],
  agenda: [
    {
      when: "Quartas e quintas",
      title: "Promoção nas torneiras",
      detail: "Até 20h, copo 450 ml pelo preço do 300 ml. Primeira quarta do mês: acarajé.",
    },
    {
      when: "Sextas e sábados",
      title: "Samba ao vivo",
      detail: "Roda a partir das 20h30. Confirme a atração no Instagram.",
    },
    {
      when: "Domingos",
      title: "Encontro até 22h",
      detail: "Casa aberta — fecha no último domingo do mês.",
    },
  ],
} as const;

export const NAV = [
  { href: "#inicio", label: "Início" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#axe", label: "Porção de Axé" },
  { href: "#torneiras", label: "Torneiras" },
  { href: "#agenda", label: "Agenda" },
  { href: "#casa", label: "A casa" },
  { href: "#local", label: "Onde" },
] as const;
