import { GALLERY, SITE } from "../data/site";

export function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <p className="kicker">O salão</p>
        <h2 className="section-title">A roda está no lustre e no buffet.</h2>
        <p className="section-lead">
          Fotos da casa: galpão, invernada, espeto e a roda de verdade. Não é banco de imagem.
        </p>
        <div className="gallery-grid">
          {GALLERY.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
        <p className="price-note">
          Parte das fotos internas veio de registro de visita publicado em 2015. A fachada e a
          estátua são do acervo Wikimedia do 35 CTG. Instagram da casa:{" "}
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
