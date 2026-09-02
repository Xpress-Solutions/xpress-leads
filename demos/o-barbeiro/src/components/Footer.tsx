import { NAV_LINKS, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <strong>{SITE.name}</strong>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.neighborhood}, {SITE.address.city} — {SITE.address.state}
            </p>
          </div>
          <div className="foot-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <p>{SITE.hoursLine}</p>
            <p>Domingo fechado</p>
            <a href={SITE.maps} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </div>
        </div>
        <p className="foot-copy">
          Demo Xpress · O Barbeiro — Jardim Botânico. Não confundir com obarbeiro.com.br
          (Florianópolis).
        </p>
      </div>
    </footer>
  );
}
