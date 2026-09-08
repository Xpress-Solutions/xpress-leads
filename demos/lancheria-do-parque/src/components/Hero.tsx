import { SITE } from "../data/site";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/toldo.jpg" alt="" />
      </div>
      <div className="wrap hero-content">
        <div className="hero-topline">
          <img
            className="hero-logo"
            src="/logo.png"
            width={1024}
            height={1024}
            alt="Lancheria do Parque"
          />
          <p className="hero-awning">Toldo vermelho · Bom Fim</p>
        </div>
        <h1 className="hero-title">
          <span className="hero-title-a">A</span>
          <span className="hero-title-name">Lanchera</span>
        </h1>
        <p className="hero-legal">Lancheria do Parque</p>
        <p className="hero-lead">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
        <div className="hero-proof">
          ★ {SITE.rating} no Google
          <span>desde {SITE.founded} · em frente à Redenção</span>
        </div>
      </div>
    </section>
  );
}
