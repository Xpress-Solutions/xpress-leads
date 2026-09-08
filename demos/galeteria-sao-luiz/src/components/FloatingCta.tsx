import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingCta() {
  return (
    <div className="fab">
      <a className="fab-call" href={`tel:${SITE.phoneTel}`} aria-label="Ligar">
        ☎
      </a>
      <a
        className="fab-wa"
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
