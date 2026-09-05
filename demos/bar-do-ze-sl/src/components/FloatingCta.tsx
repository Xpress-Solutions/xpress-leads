import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingCta() {
  return (
    <div className="fab">
      <a
        className="fab-wa"
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp do Zé"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
