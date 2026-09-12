export const SITE = {
  name: "Marmoraria Cappellari & Radin",
  shortName: "Cappellari & Radin",
  tradeName: "Art Pedras",
  legalName: "ART PEDRAS RADIN LTDA",
  headline: "Cappellari & Radin",
  line: "Mármore, granito, basalto e ardósia na Ipiranga 8621.",
  phoneDisplay: "(51) 3225-3535",
  phoneTel: "+555132253535",
  whatsapp:
    "https://wa.me/555132253535?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Cappellari%20%26%20Radin%20e%20quero%20or%C3%A7amento%20de%20pedra.",
  maps: "https://www.google.com/maps/search/?api=1&query=Marmoraria+Cappellari+e+Radin+Avenida+Ipiranga+8621+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Avenida%20Ipiranga%208621%2C%20Jardim%20Bot%C3%A2nico%2C%20Porto%20Alegre&t=&z=16&ie=UTF8&iwloc=&output=embed",
  address: {
    street: "Avenida Ipiranga, 8621 — térreo",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    cep: "91530-001",
  },
  founded: "2003",
  hours: "Horário comercial — fale com a casa no balcão.",
  cnpj: "06.270.798/0001-78",
} as const;

export const NAV = [
  { href: "#pedras", label: "Pedras" },
  { href: "#obras", label: "Obras" },
  { href: "#casa", label: "A casa" },
  { href: "#patio", label: "O pátio" },
] as const;

export const STONES = [
  {
    id: "marmore",
    name: "Mármore",
    tone: "nacional e importado",
    note: "Chapa polida para bancada, piso e parede. Veio frio, não laminado de revista.",
    texture: "marble",
  },
  {
    id: "granito",
    name: "Granito",
    tone: "nacional e importado",
    note: "Pátio de obra: mica, fundo escuro, resistência de pia e escada.",
    texture: "granite",
  },
  {
    id: "tear",
    name: "Tear",
    tone: "corte de bloco",
    note: "Pedra de tear — a chapa como sai da serra, para quem escolhe no pátio.",
    texture: "tear",
  },
  {
    id: "basalto",
    name: "Basalto",
    tone: "vulcânico gaúcho",
    note: "Serrado, bruto ou ferrugem. Piso, soleira e o cinza que é desta terra.",
    texture: "basalt",
  },
  {
    id: "caxambu",
    name: "Caxambu",
    tone: "quartzito de revestimento",
    note: "Filete e placa para fachada, muro e área molhada — pedra de catálogo sulista.",
    texture: "caxambu",
  },
  {
    id: "ardosia",
    name: "Ardósia",
    tone: "fosca, em placa",
    note: "Cinza, verde e grafite. Degrau, pingadeiro e parede que não pede brilho.",
    texture: "slate",
  },
] as const;

export const WORKS = [
  {
    name: "Escadas",
    copy: "Degrau, espelho e corrimão em granito ou mármore. Medida da obra, não kit pronto.",
  },
  {
    name: "Bancadas e mesas",
    copy: "Pia, ilha e mesa de mármore. A chapa escolhida no pátio, cortada na casa.",
  },
  {
    name: "Lareiras",
    copy: "Revestimento de lareira em pedra decorativa, basalto ou Caxambu.",
  },
  {
    name: "Banheiras e molhado",
    copy: "Nicho, soleira e cubas. Pedra que aguenta água — ardósia, granito, mármore.",
  },
] as const;
