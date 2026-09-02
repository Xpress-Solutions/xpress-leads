import { NAV_LINKS, SITE } from "../data/site";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Mark size={44} />
          <p>
            {SITE.wordmark} — casa da {SITE.brewery}. Chope experimental e
            cardápio 100% vegetal no Rio Branco, Porto Alegre.
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
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          <span>
            {SITE.address.street} — {SITE.address.neighborhood}
          </span>
        </div>
      </div>
      <div className="wrap foot-copy">
        Demo Xpress · identidade extraída da casa · {SITE.founded}
      </div>
    </footer>
  );
}
