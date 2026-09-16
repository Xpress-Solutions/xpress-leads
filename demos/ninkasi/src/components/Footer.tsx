import { NAV, SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <p className="nav-logo">
              <img src="/mark.svg" alt="" />
              {SITE.name}
            </p>
            <p>
              {SITE.address.full}. Parceria Sapatista e DaLuz desde {SITE.since}.
            </p>
          </div>
          <div>
            {NAV.map((item) => (
              <div key={item.href}>
                <a href={item.href}>{item.label}</a>
              </div>
            ))}
          </div>
          <div>
            <div>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp {SITE.phoneDisplay}
              </a>
            </div>
            <div>
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
            </div>
            <div>
              <a href={SITE.maps} target="_blank" rel="noreferrer">
                Como chegar
              </a>
            </div>
          </div>
        </div>
        <p className="foot-copy">
          Demo Xpress · identidade extraída da fachada, do mural de Ana Scarcelli e da
          marca Sapatista. Não é o site oficial da casa.
        </p>
      </div>
    </footer>
  );
}
