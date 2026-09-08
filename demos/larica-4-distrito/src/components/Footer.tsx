import { NAV, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <span className="nav-plate">LARICA</span>
          <strong>{SITE.name}</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
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
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · Floresta, Porto Alegre. Fotos da casa: Ramiro
        Sanchez / Jornal do Comércio (dez/2022).
      </div>
    </footer>
  );
}
