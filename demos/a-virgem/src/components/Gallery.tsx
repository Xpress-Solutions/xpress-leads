import { GALLERY } from "../data/gallery";

export function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <p className="kicker">Galeria</p>
        <h2 className="section-title">A casa, não o banco de imagem.</h2>
        <p className="lead">
          Fotos da própria Virgem — pátio, sala, tábua carimbada, mural e o Bella
          Virgem. Créditos: BOABreja, Destemperados/GZH, G1 e Sabores do Sul.
        </p>
        <div className="gallery-grid">
          {GALLERY.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
