import { SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Fab() {
  return (
    <a className="fab" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
      <WhatsAppIcon />
    </a>
  );
}
