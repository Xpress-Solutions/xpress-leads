import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.svg" alt="" />
          <div>
            <strong>{SITE.name}</strong>
            <p>
              {SITE.address}
              <br />
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </p>
          </div>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#petisco">Pastel de vento</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#localizacao">Localização</a>
        </div>
        <div className="foot-links">
          <strong>A casa</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Demo Xpress · {SITE.name} · Partenon, Porto Alegre · identidade extraída
        de fotos e fichas públicas (2026)
      </div>
    </footer>
  );
}
