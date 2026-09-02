import { GALLERY } from "../data/site.ts";

export function Gallery() {
  return (
    <section className="section" id="galeria">
      <div className="wrap">
        <p className="kicker">Atmosfera</p>
        <h2 className="section-title">Sala, tesoura, jardim.</h2>
        <p className="lead">
          A reforma da sala e o dossel que dá nome ao bairro. Sem stock de cadeira branca.
        </p>
        <div className="gal-grid">
          {GALLERY.map((item) => (
            <figure key={item.src}>
              <img src={item.src} alt={item.alt} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
