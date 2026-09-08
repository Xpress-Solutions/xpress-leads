import { SITE } from "../data/site.ts";
import { WhatsAppIcon } from "./WhatsAppIcon.tsx";

export function FloatingWhatsApp() {
  return (
    <div className="fab">
      <a className="fab-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  );
}
