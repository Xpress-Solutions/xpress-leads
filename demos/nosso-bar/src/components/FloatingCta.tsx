import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingCta() {
  return (
    <a
      className="float-wa"
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp do Nosso Bar"
    >
      <WhatsAppIcon />
      <span>WhatsApp</span>
    </a>
  );
}
