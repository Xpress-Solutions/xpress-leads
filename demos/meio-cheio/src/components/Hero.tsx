import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-photo">
        <img
          src="/fotos/fachada.jpg"
          alt="Fachada do Meio Cheio na Av. Venâncio Aires, 871: duas portas vermelho-tijolo com o copo e o traço do Athos"
          width={1232}
          height={800}
        />
      </div>
      <div className="wrap">
        <div className="hero-content">
          <p className="hero-kicker">Venâncio Aires · Cidade Baixa</p>
          <h1>{SITE.headline}</h1>
          <p className="hero-phrase">{SITE.subheadline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={SITE.instagramDm} target="_blank" rel="noreferrer">
              Reservar no Instagram
            </a>
            <a className="btn btn-ghost is-light" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
          <div className="hero-proof">
            Em frente ao Bar do Beto · {SITE.followers} no Instagram · desde {SITE.founded}
          </div>
        </div>
      </div>
    </section>
  );
}
