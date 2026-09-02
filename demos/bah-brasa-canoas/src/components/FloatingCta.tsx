import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingCta() {
  return (
    <div className="fab">
      <a
        href={SITE.whatsappShare}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar a mesa no WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
