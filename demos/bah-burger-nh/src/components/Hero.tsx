import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";

export function Hero() {
  const hours = useHours();

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/banner.jpeg"
          alt=""
        />
      </div>
      <div className="wrap hero-content">
        <p className="hero-badge">
          <i />
          {hours.open ? `${hours.headline} · ${hours.detail}` : `${hours.headline} · China 14`}
        </p>
        <h1>
          <span>BAH!</span>
          <b>BURGER</b>
        </h1>
        <p className="hero-phrase">{SITE.slogan} {SITE.phrase}</p>
        <div className="hero-actions">
          <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href="#cardapio">
            Ver cardápio
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>{SITE.reviewsCount} avaliações · {SITE.hoursLine}</span>
        </div>
      </div>
    </section>
  );
}
