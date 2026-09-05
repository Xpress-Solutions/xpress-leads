import { business } from "@/data/business";

export function MobileBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-weber-accent/30 bg-weber-surface/95 p-3 shadow-[0_-4px_20px_rgba(42,22,24,0.12)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={business.phoneLink}
          className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-weber-brand py-3 text-sm font-bold tracking-wide text-weber-surface uppercase transition-transform active:scale-95"
        >
          Ligar
        </a>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-weber-ink py-3 text-sm font-bold tracking-wide text-weber-linen uppercase transition-transform active:scale-95"
        >
          Como chegar
        </a>
      </div>
    </div>
  );
}
