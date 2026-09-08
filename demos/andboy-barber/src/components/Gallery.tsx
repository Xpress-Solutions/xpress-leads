import { GALLERY, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa</p>
        <h2 className="section-title">O salão, o corte, o barbeiro.</h2>
        <p className="section-lead">Fotos da própria Andboy Barber Shop — Booksy e clientes.</p>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <figure key={item.src} className={"tall" in item && item.tall ? "is-tall" : undefined}>
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
