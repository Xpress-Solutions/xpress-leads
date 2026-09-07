import { reviews } from "@/data/menu";
import { site } from "@/data/site";

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="text-[0.72rem] font-semibold tracking-[0.22em] text-accent uppercase">
          Quem veio
        </p>
        <div className="mt-3 flex flex-wrap items-end gap-6">
          <h2 className="font-display text-[clamp(4.5rem,16vw,8rem)] leading-[0.8] text-accent">
            {site.rating}
          </h2>
          <p className="pb-2 text-foreground/75">
            no Google · {site.reviewsCount} avaliações
            <br />
            <span className="text-sm text-muted">Textos públicos, editados só por corte.</span>
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote key={review.author} className="border border-accent/15 bg-surface p-6">
              <p className="text-sm leading-relaxed text-foreground/85">“{review.text}”</p>
              <footer className="mt-5 text-xs tracking-wide text-accent uppercase">
                {review.author} · {review.source}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
