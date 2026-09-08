import { GALLERY } from "../data/reviews";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="section-kicker">Do ofício</p>
          <h2 className="section-title">O fade da casa.</h2>
          <p className="section-lead">
            Fotos reais da Bonanno no Booksy — cape listrada, cimento na parede, madeira na
            bancada. Nada de banco de imagem.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
        <a className="gallery-link" href={SITE.instagram} target="_blank" rel="noreferrer">
          Ver mais no Instagram {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
