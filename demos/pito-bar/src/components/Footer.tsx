import { SITE } from "../data/site.ts";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="foot-word">{SITE.wordmark}</div>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
            </p>
          </div>
          <div>
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
            <br />
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </div>
          <div>
            <a href="#petisco">Tábua campeira</a>
            <br />
            <a href="#local">Como chegar</a>
          </div>
        </div>
        <p className="foot-copy">
          Demo Xpress · fotos da esquina via GZH / Sabores do Sul · {SITE.name} desde {SITE.founded}.
        </p>
      </div>
    </footer>
  );
}
