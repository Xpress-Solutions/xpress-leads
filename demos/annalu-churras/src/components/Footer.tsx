import { NAV, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <b>{SITE.shortName}</b>
          <span>Churras Pub</span>
          <p>
            {SITE.street}
            <br />
            {SITE.neighborhood} · {SITE.city}
          </p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          {NAV.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="foot-links">
          <strong>Fale com a casa</strong>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`tel:${SITE.phoneTel}`}>Ligar</a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · {SITE.neighborhood}, {SITE.city}
      </div>
    </footer>
  );
}
