import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.jpg" alt={SITE.name} />
          <strong>{SITE.name}</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}
          </p>
          <p className="hero-script" style={{ fontSize: "1.6rem", margin: "8px 0 0" }}>
            {SITE.tagline}
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#servicos">Serviços</a>
          <a href="#richard">Richard</a>
          <a href="#localizacao">Onde fica</a>
          <a href={SITE.booksy} target="_blank" rel="noreferrer">
            Booksy
          </a>
        </div>
        <div className="foot-social">
          <strong>A casa</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">
            Facebook · barackthebarber
          </a>
          <a href={SITE.siteRichard} target="_blank" rel="noreferrer">
            barackbarber.com
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
