import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
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
        <div>
          <strong>No site</strong>
          <p>
            <a href="#petisco">Feijoca</a>
            <br />
            <a href="#casa">A casa</a>
            <br />
            <a href="#local">Onde fica</a>
          </p>
        </div>
        <div>
          <strong>Fale com a casa</strong>
          <p>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <br />
            <a href={SITE.maps} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </p>
        </div>
      </div>
      <div className="wrap foot-copy">
        Demo de apresentação · {SITE.name} · {SITE.address.neighborhood}, {SITE.address.city}
      </div>
    </footer>
  );
}
