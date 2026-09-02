import { business } from "@/data/business";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-accent py-20 md:py-28">
      <div
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand/25"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-display text-4xl font-semibold text-white md:text-6xl">
          Quem pesquisa o nome encontra a clínica — não a festa.
        </h2>
        <p className="mt-6 text-lg text-white/90">
          Tratamentos, equipe e o WhatsApp de agenda numa página que é desta
          casa, no Jardim Botânico.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-brand-deep px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-brand"
          >
            Pedir horário
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-white/50 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition hover:bg-white hover:text-accent"
          >
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
