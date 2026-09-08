import { GALLERY } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Fachada, salão, prato</p>
        <h2 className="section-title">A São Luiz como ela é.</h2>
        <p className="section-lead">
          Fotos públicas da casa — Restaurant Guru e o cardápio oficial. O dia a dia também está no
          Instagram {SITE.instagramHandle}.
        </p>
        <div className="gallery-grid">
          {GALLERY.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Ver {SITE.instagramHandle} →
        </a>
      </div>
    </section>
  );
}
