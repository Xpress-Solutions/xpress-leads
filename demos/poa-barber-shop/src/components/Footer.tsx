import { NAV_LINKS, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="/logo.jpg" alt="" />
            <strong>{SITE.name}</strong>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.neighborhood} · {SITE.address.city}
            </p>
          </div>
          <nav className="foot-links" aria-label="Rodapé">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="foot-social">
            <a href={SITE.booksy} target="_blank" rel="noreferrer">
              Booksy
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={SITE.maps} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </div>
        </div>
        <p className="foot-copy">
          Demo Xpress · identidade extraída do Booksy e do logo oficial da Poa Barber Shop.
          Sem deploy.
        </p>
      </div>
    </footer>
  );
}
