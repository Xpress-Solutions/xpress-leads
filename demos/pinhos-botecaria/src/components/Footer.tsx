import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <p className="nav-word">{SITE.wordmark}</p>
          <p>
            {SITE.name}
            <br />
            {SITE.address.full}
          </p>
        </div>
        <div>
          <p className="kicker">Contato</p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            <br />
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <br />
            <a href={SITE.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
        </div>
        <div>
          <p className="kicker">Horário</p>
          <p>{SITE.hoursLine}</p>
        </div>
      </div>
      <div className="wrap">
        <p className="foot-copy">
          Demo de site — identidade extraída da casa (pilar mostarda, letreiro
          gótico, Victor Barreto). Não é o site oficial.
        </p>
      </div>
      <a className="fab" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
    </footer>
  );
}
