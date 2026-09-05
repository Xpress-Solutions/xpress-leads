import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/bolinho-resenha.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-kicker">
          Vila Ipiranga · Av. do Forte, 1220
        </p>
        <h1>{SITE.headline}</h1>
        <p className="hero-dish">Bolinho Resenha</p>
        <p className="hero-lead">{SITE.subheadline}</p>
        <p className="hero-sub">
          Boteco elevado de avenida. Almoço às 11h, mesa até meia-noite.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir o bolinho
          </a>
          <a className="btn btn-ghost" href="#cardapio">
            Cardápio almoço e noite
          </a>
        </div>
        <div className="hero-proof">
          <span>★ {SITE.rating} no Google</span>
          <span>{SITE.reviewsCount} avaliações</span>
          <span>Campeão RS · Comida di Buteco 2026</span>
        </div>
      </div>
    </section>
  );
}
