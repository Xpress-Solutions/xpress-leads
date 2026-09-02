import { business } from "@/data/business";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand/10 bg-surface/95 p-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-full bg-accent py-3 text-sm font-bold tracking-wide text-white uppercase"
        >
          Pedir horário
        </a>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-full bg-brand py-3 text-sm font-bold tracking-wide text-surface uppercase"
        >
          Mapa
        </a>
      </div>
    </div>
  );
}
