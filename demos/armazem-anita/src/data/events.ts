import { images } from "@/data/images";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  day: string;
  time: string;
  image: string;
  type: "futebol" | "musica" | "happy-hour" | "especial" | "promocao";
  isToday?: boolean;
  isPlaceholder?: boolean;
}

export const events: Event[] = [
  {
    id: "grenal",
    title: "Transmissão do Grenal",
    description: "Futebol, chope e aquele clima de boteco.",
    date: "Data demonstrativa",
    day: "—",
    time: "Horário demonstrativo",
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    type: "futebol",
    isPlaceholder: true,
  },
  {
    id: "musica-ao-vivo",
    title: "Música ao vivo",
    description: "Noite com música e aquele clima de armazém de bairro.",
    date: "Data demonstrativa",
    day: "—",
    time: "Horário demonstrativo",
    image: images.evento,
    type: "musica",
    isPlaceholder: true,
  },
  {
    id: "happy-hour",
    title: "Happy Hour",
    description: "Chope gelado, petiscos e encontro entre amigos.",
    date: "Data demonstrativa",
    day: "—",
    time: "Horário demonstrativo",
    image:
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800&q=80",
    type: "happy-hour",
    isPlaceholder: true,
  },
];

export const todayHighlight: Event = {
  id: "hoje-grenal",
  title: "Transmissão do Grenal",
  description: "Futebol, chope e aquele clima de boteco no Anita.",
  date: "Hoje",
  day: "HOJE",
  time: "Horário demonstrativo",
  image:
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
  type: "futebol",
  isToday: true,
  isPlaceholder: true,
};
