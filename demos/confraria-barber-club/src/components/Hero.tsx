import { SITE } from "../data/site";

function Mustache() {
  return (
    <svg className="mustache" viewBox="0 0 160 36" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 20c14-16 34-18 50-8 6 4 12 8 22 8s16-4 22-8c16-10 36-8 50 8-14-2-26 6-36 14-10 8-20 10-36 2-16 8-26 6-36-2C34 26 22 18 8 20Z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/fachada.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-mark">Cidade Baixa · desde {SITE.founded}</p>
        <h1>
          <span>Confraria</span>
          Barber
          <Mustache />
          <span>Club</span>
        </h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.booksy} target="_blank" rel="noreferrer">
            Agendar horário
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            José do Patrocínio, 378
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Booksy
          <span>{SITE.reviewsCount} avaliações · 5 estrelas</span>
        </div>
      </div>
      <div className="awning" aria-hidden="true" />
    </section>
  );
}
