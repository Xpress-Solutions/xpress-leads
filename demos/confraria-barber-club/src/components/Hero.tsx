import { SITE } from "../data/site";

function Mustache() {
  return (
    <svg className="mustache" viewBox="0 0 120 28" aria-hidden="true">
      <path
        fill="currentColor"
        d="M8 16c8-12 22-14 32-8 4 2 8 6 20 6s16-4 20-6c10-6 24-4 32 8-10-2-20 2-28 8-6 4-14 6-24 2-10 4-18 2-24-2-8-6-18-10-28-8Z"
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
          Club
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
