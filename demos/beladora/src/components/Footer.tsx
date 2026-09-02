import { NAV, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <img src="/logo.svg" alt="Beladora" />
            <p>
              {SITE.address.full}
              <br />
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </p>
          </div>
          <nav>
            {NAV.map((link) => (
              <div key={link.href}>
                <a href={link.href}>{link.label}</a>
              </div>
            ))}
          </nav>
          <div>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
            <br />
            <a href={SITE.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <p className="foot-copy">
          © {new Date().getFullYear()} {SITE.name}. Demo de apresentação — copy do lead
          Ipanema / orla do Guaíba.
        </p>
      </div>
    </footer>
  );
}
