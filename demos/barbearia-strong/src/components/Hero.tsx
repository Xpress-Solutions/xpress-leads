import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/hero.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <img className="hero-logo" src="/logo.jpg" alt="Selo Barbearia Strong — bigode branco no círculo preto" />
        <p className="hero-kicker">{SITE.kicker}</p>
        <h1>{SITE.headline}</h1>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Chama no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Dr. Flores, 327
          </a>
        </div>
        <div className="hero-proof">
          <span>Centro Histórico · Galeria Universitário · loja 3</span>
          <span>★ {SITE.rating} · {SITE.reviewsCount} avaliações</span>
        </div>
      </div>
    </section>
  );
}
