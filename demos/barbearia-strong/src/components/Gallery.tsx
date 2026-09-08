import { GALLERY } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A loja e o corte</p>
        <h2 className="section-title">Dr. Flores, por dentro.</h2>
        <p className="section-lead">
          Fotos da casa e do Instagram oficial: tijolo, selo do bigode, fade e barba. Sem stock.
        </p>
        <div className="gallery-grid">
          {GALLERY.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
