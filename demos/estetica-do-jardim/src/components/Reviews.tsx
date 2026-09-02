import { business } from "@/data/business";

export function Reviews() {
  return (
    <section id="avaliacoes" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs font-semibold tracking-[0.24em] text-brand uppercase">
          Google
        </p>
        <h2 className="font-display mt-3 text-4xl font-semibold text-foreground md:text-5xl">
          Melhor estética do Jardim Botânico.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Frase que já aparece nos comentários públicos. Sem depoimento inventado —
          o peso está nas {business.googleReviews} avaliações da ficha.
        </p>

        <div className="mt-12 flex flex-col gap-8 border-l-2 border-accent pl-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-7xl leading-none text-brand md:text-8xl">
              {business.googleReviews}
            </p>
            <p className="mt-2 text-sm tracking-wide text-muted uppercase">
              avaliações no Google
            </p>
          </div>
          <a
            href={business.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-wide text-accent uppercase underline-offset-4 hover:underline"
          >
            Abrir avaliações
          </a>
        </div>
      </div>
    </section>
  );
}
