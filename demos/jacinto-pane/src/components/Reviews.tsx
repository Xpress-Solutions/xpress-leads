import { REVIEWS, SITE } from "@/data/site";

export function Reviews() {
  return (
    <section id="avaliacoes" className="section bg-[color:var(--background)]">
      <div className="wrap">
        <p className="kicker">Quem come fala</p>
        <div className="mt-4 flex flex-wrap items-end gap-6">
          <p className="font-display text-[clamp(5rem,16vw,9rem)] leading-[0.8] text-[color:var(--brand)]">
            {SITE.rating}
          </p>
          <div className="pb-3">
            <p className="text-lg font-semibold">no Google</p>
            <p className="text-[color:var(--muted)]">
              Padaria de destinação, não diretório.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="rounded-[22px] border border-white/8 bg-[color:var(--surface)] p-6"
            >
              <blockquote className="text-[color:var(--foreground)]/88">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-[color:var(--brand)]">
                {review.name}
                <span className="ml-2 text-[color:var(--muted)]">· {review.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
