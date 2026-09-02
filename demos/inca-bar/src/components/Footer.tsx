import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Mark className="foot-mark" />
          <strong>{SITE.name}</strong>
          <p>
            {SITE.legalName}
            <br />
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} · {SITE.address.city}
          </p>
        </div>
        <div>
          <strong>No site</strong>
          <Link to="/#torneiras">Torneiras</Link>
          <Link to="/cardapio">Tapas</Link>
          <Link to="/#localizacao">Como chegar</Link>
        </div>
        <div>
          <strong>Fale com a casa</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp {SITE.phoneDisplay}
          </a>
          <a href={`tel:${SITE.landlineTel}`}>Fixo {SITE.landlineDisplay}</a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · {SITE.address.neighborhood}, {SITE.address.city}
      </div>
    </footer>
  );
}
