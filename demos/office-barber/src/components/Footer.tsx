import { NAV_LINKS, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.jpeg" alt={SITE.name} />
          <strong>Office Barber</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.complement} — {SITE.address.neighborhood}
            <br />
            {SITE.address.city}/{SITE.address.state}
          </p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="foot-social">
          <strong>Agenda</strong>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={SITE.booksy} target="_blank" rel="noreferrer">
            Booksy officebarber
          </a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · {SITE.address.neighborhood},{" "}
        {SITE.address.city}. Identidade a partir do selo e das fotos oficiais do
        Booksy.
      </div>
    </footer>
  );
}
