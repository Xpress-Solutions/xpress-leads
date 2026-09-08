import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <div className="foot-mark">
            <img src="/fotos/logo-oficial.jpg" alt="" width={56} height={56} />
            <div className="mark">{SITE.wordmark}</div>
          </div>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}
          </p>
          <p>de Vinhos y otras cositas más</p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#carta">Carta</a>
          <a href="#casa">A casa</a>
          <a href="#localizacao">Venâncio</a>
        </div>
        <div className="foot-social">
          <strong>Reserva</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · {SITE.address.neighborhood}, {SITE.address.city}
      </div>
    </footer>
  );
}
