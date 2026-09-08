import { GALLERY, SITE } from "../data/site.ts";
import { useReveal } from "../hooks/useReveal.ts";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="kicker">Do salão</p>
          <h2 className="section-title">A Umbu 715 por dentro.</h2>
          <p className="lead">
            Fotos da casa no Booksy e nas avaliações — fachada, cadeira, fade e a galera.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
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
