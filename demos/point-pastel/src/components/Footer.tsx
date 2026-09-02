import { NAV_LINKS, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">{SITE.name}</div>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.neighborhood}
            </p>
            <p>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              <br />
              WhatsApp {SITE.whatsappDisplay}
            </p>
          </div>
          <div className="foot-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="foot-links">
            <a href={SITE.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              Instagram {SITE.instagramHandle}
            </a>
            <a href={SITE.delivery} target="_blank" rel="noreferrer">
              Pedir delivery
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
        <p className="foot-copy">
          Demo Xpress · Point do Pastel · Rubem Berta, Porto Alegre. Copy e
          fotos a partir de fontes públicas da casa e do Comida di Buteco.
        </p>
      </div>
    </footer>
  );
}
