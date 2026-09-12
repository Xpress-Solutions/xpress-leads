import { SITE } from "../data/site.ts";

export function FloatingCta() {
  return (
    <a className="btn float-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer">
      WhatsApp
    </a>
  );
}
