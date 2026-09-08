import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/logo.jpg" alt="" />
      </div>
      <div className="wrap hero-content">
        <p className="hero-place">Av. Bento Gonçalves, 4135 · Partenon</p>
        <h1>{SITE.wordmark}</h1>
        <p className="hero-sub">{SITE.tagline}</p>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.booksy} target="_blank" rel="noreferrer">
            Agendar no Booksy
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Booksy
          <span>{SITE.reviewsCount} avaliações</span>
        </div>
      </div>
    </section>
  );
}
