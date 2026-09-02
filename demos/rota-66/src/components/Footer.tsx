import { NAV_LINKS, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/shield.svg" alt={SITE.name} width={56} height={68} />
          <strong>{SITE.name}</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}
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
        <div className="foot-links">
          <strong>Fale com a casa</strong>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`tel:${SITE.phoneTel}`}>Ligar</a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
          <a href={SITE.menuDigital} target="_blank" rel="noreferrer">
            Cardápio digital
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Demo Xpress · {SITE.name} · {SITE.address.neighborhood}, {SITE.address.city}
      </div>
    </footer>
  );
}
