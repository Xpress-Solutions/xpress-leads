import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/espeto.jpg", cap: "Picanha e costela no espeto" },
  { src: "/fotos/coracao.jpg", cap: "Coração e vazio" },
  { src: "/fotos/galeto.jpg", cap: "Galeto e salsichão" },
  { src: "/fotos/brasa.jpg", cap: "Na brasa da casa" },
  { src: "/fotos/polenta.jpg", cap: "Polenta frita no inox" },
  { src: "/fotos/maionese.jpg", cap: "Maionese da Princesinha" },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A churrasqueira</p>
        <h2 className="section-title">O espeto, não o cenário.</h2>
        <p className="section-lead">
          Fotos de divulgação da casa (Eduardo Fattore / Destino POA). É isso que chega na mesa.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.cap} />
              <figcaption>{photo.cap}</figcaption>
            </figure>
          ))}
        </div>
        <p className="section-lead" style={{ marginTop: 18 }}>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle} →
          </a>
        </p>
      </div>
    </section>
  );
}
