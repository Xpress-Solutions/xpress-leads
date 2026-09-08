import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const PHOTOS = [
  { src: "/fotos/corte-fade.jpg", alt: "Fade e tesoura no topo, ainda na capa" },
  { src: "/fotos/navalha.jpg", alt: "Navalha aberta, tigela de espuma e set de barbear" },
  { src: "/fotos/corte-pompadour.jpg", alt: "Pompadour e linha de barba na cadeira de couro" },
  { src: "/fotos/familia-1.jpg", alt: "Corte infantil com risca — cliente da casa" },
  { src: "/fotos/richard-retrato.jpg", alt: "Richard Chagas Ferreira" },
  { src: "/fotos/familia-2.jpg", alt: "Criança sorrindo na cadeira da Barack" },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Galeria</p>
        <h2 className="section-title">O ofício, não stock.</h2>
        <p className="section-lead">
          Cortes da casa, a navalha do Wix do Richard e quem volta com a família.
        </p>
        <div className="gallery-grid">
          {PHOTOS.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Mais no Instagram {SITE.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
