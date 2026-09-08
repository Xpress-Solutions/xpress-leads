import { GALLERY, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Do salão</p>
          <h2 className="section-title">Fade, linha e platinado.</h2>
          <p className="section-lead">
            Fotos reais da Poa Barber no Booksy — tesoura, cor e o interior de tijolo.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
        <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer" style={{ marginTop: 18 }}>
          {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
