import { SITE } from "../data/site";
import { GALLERY } from "../data/services";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">José do Patrocínio</p>
        <h2 className="section-title">A casa por dentro.</h2>
        <p className="section-lead">
          Fotos reais da Confraria: fachada, salão, corte navalhado e trança. Nada de banco
          de imagem.
        </p>
        <div className="gallery-grid">
          {GALLERY.map((photo) => (
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
