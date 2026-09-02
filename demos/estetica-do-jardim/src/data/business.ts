import brand from "../../brand.json";

export const identity = brand;

export const business = {
  name: brand.name,
  leadId: brand.leadId,
  neighborhood: "Jardim Botânico",
  city: "Porto Alegre",
  state: "RS",
  headline: "Estética do Jardim",
  tagline: "A clínica do bairro — não o tema de festa.",
  description:
    "Clínica e salão de estética de rua no Jardim Botânico. A vizinhança já chama de ‘a estética Jardim’. Quem pesquisa o nome hoje ainda mistura vocês com festa infantil: esta página deixa claro quem é a casa.",
  address: {
    street: "Rua La Plata, 699",
    neighborhood: "Jardim Botânico",
    city: "Porto Alegre",
    state: "RS",
    zip: "90670-040",
    full: "Rua La Plata, 699 — Jardim Botânico, Porto Alegre - RS",
    secondary: "Também associada à Rua Buenos Aires, 205 — mesmo bairro, ponto de calçada.",
    landmark: "Em frente ao antigo Gecepel, na La Plata — o prédio da esquina que o bairro já aponta como ‘a estética Jardim’.",
  },
  googleReviews: 94,
  mapsQuery: "Estética do Jardim Rua La Plata 699 Porto Alegre",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Est%C3%A9tica+do+Jardim+Rua+La+Plata+699+Porto+Alegre",
  mapsEmbed:
    "https://maps.google.com/maps?q=Est%C3%A9tica%20do%20Jardim%20Rua%20La%20Plata%20699%20Porto%20Alegre&output=embed",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Est%C3%A9tica+do+Jardim+Porto+Alegre+Jardim+Bot%C3%A2nico",
  /** Número público incompleto nos diretórios — CTA aponta para a ficha no Google. */
  agendaNote:
    "A agenda é por WhatsApp e telefone da recepção. O número completo não está estável nos diretórios; o botão abre a ficha pública no Google para ligar ou mandar mensagem.",
  whatsappShare:
    "https://wa.me/?text=Ol%C3%A1%21%20Quero%20agendar%20na%20Est%C3%A9tica%20do%20Jardim%2C%20Rua%20La%20Plata%20699%20%E2%80%94%20Jardim%20Bot%C3%A2nico.",
} as const;

export const treatments = [
  {
    name: "Facial",
    line: "Limpeza e cuidado de pele no ritmo de quem volta no mês seguinte.",
  },
  {
    name: "Corporal",
    line: "Tratamentos de estética de bairro — corpo, sem catálogo de shopping.",
  },
  {
    name: "Depilação",
    line: "O horário de sempre, sem depender de feed para achar a casa.",
  },
  {
    name: "Sobrancelhas",
    line: "Design e manutenção: o detalhe que a cliente do Jardim já conhece.",
  },
  {
    name: "Cabelo e unhas",
    line: "Salão junto da clínica — uma visita, o cuidado inteiro.",
  },
  {
    name: "Equipe",
    line: "Profissionais da casa. Antes e depois na conversa, não em anúncio.",
  },
] as const;
