export const SITE = {
  name: "Ninkasi Bar",
  shortName: "Ninkasi",
  tagline: "Cerveja feita por mulher — nove torneiras na João Alfredo.",
  headline: "Ninkasi",
  kicker: "Cidade Baixa · Porto Alegre",
  phoneDisplay: "(51) 99215-0581",
  phoneTel: "+5551992150581",
  whatsapp:
    "https://wa.me/5551992150581?text=Ol%C3%A1%21%20Vim%20pelo%20site%20e%20queria%20saber%20mais%20sobre%20o%20Ninkasi%20Bar.",
  instagram: "https://www.instagram.com/ninkasi_bar_poa/",
  instagramHandle: "@ninkasi_bar_poa",
  maps: "https://www.google.com/maps/search/?api=1&query=Ninkasi+Bar+Rua+Jo%C3%A3o+Alfredo+557+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Ninkasi%20Bar%2C%20Rua%20Jo%C3%A3o%20Alfredo%20557%2C%20Cidade%20Baixa%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Rua João Alfredo, 557",
    neighborhood: "Cidade Baixa",
    city: "Porto Alegre",
    state: "RS",
    full: "Rua João Alfredo, 557 — Cidade Baixa, Porto Alegre",
  },
  hoursLead: "Ter–sáb até 2h",
  hoursNote: "Abre a partir das 17h. Confirme no Instagram em feriados.",
  since: "2021",
  taps: 9,
} as const;

export const NAV = [
  { href: "#origem", label: "Origem" },
  { href: "#torneiras", label: "Torneiras" },
  { href: "#petisco", label: "Peppa Mafiosa" },
  { href: "#casa", label: "A casa" },
  { href: "#local", label: "Onde" },
] as const;

export const HOURS = [
  { day: "Segunda", value: "Fechado" },
  { day: "Terça", value: "17h – 2h" },
  { day: "Quarta", value: "17h – 2h" },
  { day: "Quinta", value: "17h – 2h" },
  { day: "Sexta", value: "17h – 2h" },
  { day: "Sábado", value: "17h – 2h" },
  { day: "Domingo", value: "Fechado" },
] as const;

export const TAPS = [
  {
    name: "Incendiária",
    house: "Sapatista",
    style: "Red IPA",
    note: "Caramelo e lúpulo. Medalha na Copa Sul-Americana.",
  },
  {
    name: "Filipina",
    house: "Sapatista",
    style: "Double IPA",
    note: "Dourada, seca, sem aspereza. 8%.",
  },
  {
    name: "Maria da Penha",
    house: "Sapatista",
    style: "Saison com butiá",
    note: "Belga, refrescante, final seco.",
  },
  {
    name: "Pantera Negra",
    house: "Sapatista",
    style: "Imperial Stout",
    note: "Malte torrado e frutas secas.",
  },
  {
    name: "Olga",
    house: "Sapatista",
    style: "Pilsen",
    note: "Clara, leve, baixo amargor.",
  },
  {
    name: "Candace",
    house: "Sapatista",
    style: "Amber ale com café",
    note: "Caramelo e Catuaí Vermelho em cold brew.",
  },
  {
    name: "DaLuz da noite",
    house: "DaLuz",
    style: "Rotação",
    note: "Pilsen, Irish Red, APA — o que a sócia mandou no tap.",
  },
  {
    name: "Convidada",
    house: "Tap aberto",
    style: "Sazonal",
    note: "Uma torneira reservada para cervejaria convidada.",
  },
] as const;

export const WEEK = [
  { day: "Terça", event: "Casa aberta", detail: "Torneiras e mesa. Pergunte o que está pingando." },
  { day: "Quarta", event: "Pingue-pongue", detail: "Campeonato no fundo da casa." },
  { day: "Quinta", event: "Karaokê", detail: "O microfone passa. A casa canta junto." },
  { day: "Sexta", event: "Som ao vivo", detail: "Artistas mulheres. Voz e violão, banda, o que a semana pediu." },
  { day: "Sábado", event: "DJ", detail: "Até 2h na João Alfredo." },
] as const;
