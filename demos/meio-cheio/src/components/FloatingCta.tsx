import { SITE } from "../data/site";
import { GlassMark } from "./Marks";

export function FloatingCta() {
  return (
    <div className="fab">
      <a href={SITE.instagramDm} target="_blank" rel="noreferrer">
        <GlassMark className="fab-mark" decorative />
        <span>Reservar no DM</span>
      </a>
    </div>
  );
}
