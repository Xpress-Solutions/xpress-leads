import { SITE } from "@/data/site";

export function MobileBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[color:var(--line)] bg-[color:var(--background)]/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn btn-accent flex-1"
        >
          WhatsApp
        </a>
        <a href={`tel:${SITE.phoneTel}`} className="btn btn-ghost flex-1">
          Ligar
        </a>
      </div>
    </div>
  );
}
