import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  {
    src: "/fotos/parrilla.jpg",
    alt: "Parrillero na grelha com brasero aceso — Terra do Churrasco",
  },
  {
    src: "/fotos/patio.jpg",
    alt: "Pátio noturno sob pinheiros e lâmpadas Edison — Terra do Churrasco",
  },
  {
    src: "/fotos/externo.jpg",
    alt: "Mesas do terraço ao ar livre — Terra do Churrasco, Jardim do Salso",
  },
  {
    src: "/fotos/grelha.jpg",
    alt: "Cortes e linguiça na parrilla — Terra do Churrasco",
  },
  {
    src: "/fotos/picanha.jpg",
    alt: "Picanha fatiada na chapa de ferro — Terra do Churrasco",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa de verdade</p>
        <h2 className="section-title">Fogo, pátio e mesa.</h2>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Mais no Instagram {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
