import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/fotos/interior.jpg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <img className="hero-badge" src="/logo.jpeg" alt="Gentlemen's BarberShop" />
        <h1>{SITE.headline}</h1>
        <p className="hero-shop">Barbershop · Floresta</p>
        <p>{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Agendar no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Abrir no Booksy
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no {SITE.reviewsSource}
          <span>{SITE.reviewsCount} avaliações · desde {SITE.founded}</span>
        </div>
      </div>
    </section>
  );
}
