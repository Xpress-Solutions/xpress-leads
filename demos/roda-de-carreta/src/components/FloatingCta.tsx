import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingCta() {
  return (
    <div className="fab">
      <a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp">
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
