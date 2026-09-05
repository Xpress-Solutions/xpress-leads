import { SITE } from "../data/site";
import { useHours } from "../hooks/useHours";

export function Hero() {
  const hours = useHours();

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" aria-hidden="true">
        <img src="/fotos/sala.jpeg" alt="" />
      </div>
      <div className="wrap hero-content">
        <img className="hero-mark" src="/logo.jpeg" alt="Los Pepes Barbearia" width={180} height={180} />
        <p className="hero-kicker">Barbearia · Centro de Novo Hamburgo</p>
        <h1>{SITE.headline}</h1>
        <p className="hero-sub">{SITE.subheadline}</p>
        <div className="hero-actions">
          <a className="btn btn-accent" href={SITE.booksy} target="_blank" rel="noreferrer">
            Agendar horário
          </a>
          <a className="btn btn-ghost" href="#servicos">
            Ver serviços
          </a>
        </div>
        <div className="hero-proof">
          <span className={`hours-pill ${hours.open ? "is-open" : ""}`}>
            <i />
            {hours.headline} · {hours.detail}
          </span>
          <span>
            ★ {SITE.rating} · {SITE.reviewsCount} avaliações
          </span>
        </div>
      </div>
    </section>
  );
}
