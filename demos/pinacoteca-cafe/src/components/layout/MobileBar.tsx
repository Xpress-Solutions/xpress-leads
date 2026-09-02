import { site } from "@/data/site";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-accent/20 bg-background/95 backdrop-blur md:hidden">
      <a
        href={site.whatsapp}
        className="flex flex-1 items-center justify-center py-3.5 text-xs font-semibold tracking-[0.12em] text-paper-ink uppercase bg-accent"
      >
        WhatsApp
      </a>
      <a
        href={`tel:${site.phoneTel}`}
        className="flex flex-1 items-center justify-center py-3.5 text-xs font-semibold tracking-[0.12em] text-foreground uppercase"
      >
        Ligar
      </a>
    </div>
  );
}
