import { images } from "@/data/images";

export const galleryImages = [
  {
    src: images.fachada,
    alt: "Fachada do Armazém Anita com mesas na calçada e toldo laranja",
    span: "col-span-2 row-span-2",
    isReal: true,
  },
  {
    src: images.evento,
    alt: "Evento de música ao vivo no Armazém Anita — arte promocional",
    span: "col-span-1 row-span-1",
    isReal: true,
  },
  {
    src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80",
    alt: "Chope gelado — demonstrativo",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80",
    alt: "Churrasquinho — demonstrativo",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
    alt: "Café com leite — demonstrativo",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80",
    alt: "Música ao vivo — demonstrativo",
    span: "col-span-2 row-span-1",
  },
] as const;
