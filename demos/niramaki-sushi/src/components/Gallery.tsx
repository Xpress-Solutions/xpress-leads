import { GALLERY } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">Da casa</p>
          <h2 className="section-title">O salmão que a foto mostra.</h2>
          <p className="section-lead">
            Fotos oficiais do cardápio — o barco, o selado, o hot. Nenhuma imagem de banco.
          </p>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
        <a className="btn btn-ghost" style={{ marginTop: 20 }} href={SITE.instagram} target="_blank" rel="noreferrer">
          Instagram {SITE.instagramHandle}
        </a>
      </div>
    </section>
  );
}
