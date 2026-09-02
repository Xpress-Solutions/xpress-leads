import { NAV, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p className="foot-brand">Terreiro Bar Ancestral</p>
            <p>{SITE.tagline}</p>
            <p>
              {SITE.street}
              <br />
              Cidade Baixa · Porto Alegre
            </p>
          </div>
          <div className="foot-links">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="foot-links">
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </div>
        <p className="foot-copy">
          Demo Xpress · identidade extraída da casa · {SITE.founded}–2026
        </p>
      </div>
    </footer>
  );
}
