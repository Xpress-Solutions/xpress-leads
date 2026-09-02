import { business } from "@/data/business";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-brand-deep"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/garden-canopy.svg"
          alt=""
          className="canopy-motion h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/55 to-brand-deep/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-28 pt-32 md:px-6 md:pb-24 md:pt-40">
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-ipe uppercase">
            Jardim Botânico · Porto Alegre
          </p>
          <h1 className="font-display text-5xl leading-[0.95] font-semibold text-surface sm:text-6xl md:text-7xl lg:text-[5.4rem]">
            {business.headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-surface/80 md:text-xl">
            {business.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-ipe"
            >
              Pedir horário
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-surface/40 px-6 py-3 text-sm font-semibold tracking-wide text-surface uppercase transition hover:border-ipe hover:text-ipe"
            >
              Como chegar
            </a>
          </div>

          <p className="mt-8 text-sm text-surface/65">
            ★ {business.googleReviews} avaliações no Google · a estética do Jardim
          </p>
        </div>
      </div>
    </section>
  );
}
