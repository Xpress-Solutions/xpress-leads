import { SANDUBA, SITE } from "../data/site";

export function Sanduba() {
  return (
    <section className="section sanduba" id="sanduba">
      <div className="wrap sanduba-grid">
        <figure className="sanduba-photo">
          <img
            src="/fotos/sanduba.jpg"
            alt="Sanduíche de baguete grelhada do Arvo, com queijo derretido e o neon amarelo do balcão ao fundo"
          />
          <figcaption>{SANDUBA.contest}</figcaption>
        </figure>
        <div className="sanduba-copy">
          <p className="kicker">O petisco</p>
          <p className="contest">{SANDUBA.contest}</p>
          <h2 className="section-title">{SANDUBA.name}</h2>
          <p className="lead">{SANDUBA.description}</p>
          <p className="lead" style={{ marginTop: 16 }}>
            O concurso já fez a propaganda. Aqui o sanduba tem endereço: a parrilla da Fernando
            Machado.
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
