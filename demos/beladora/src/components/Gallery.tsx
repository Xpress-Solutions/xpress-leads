import { GALLERY, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">A casa e a orla</p>
        <h2 className="section-title">Fotos da Beladora.</h2>
        <p className="lead">
          Fachada, espetinho da edição e o Guaíba em Ipanema. Nada de banco de imagem
          genérico.
        </p>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
        <p style={{ marginTop: 18 }}>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Mais no Instagram {SITE.instagramHandle} →
          </a>
        </p>
      </div>
    </section>
  );
}
