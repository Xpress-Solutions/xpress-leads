import { business, reviews, reviewThemes } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="bg-weber-brand py-20 text-weber-linen md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle
          title="Quem almoça aqui já conhece"
          subtitle="Nota 4.6 no Google. Família no domingo, rotina na semana."
          light
        />

        <div className="mb-12 flex flex-col items-center gap-4 rounded-sm border border-weber-linen/15 bg-weber-brand-deep/40 p-8 text-center md:flex-row md:justify-center md:gap-8">
          <div>
            <p className="font-display text-6xl text-weber-accent">
              {business.googleRating}
            </p>
            <div className="mt-1 flex justify-center gap-0.5 text-weber-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
          </div>
          <div className="h-px w-full bg-weber-linen/15 md:h-16 md:w-px" />
          <div>
            <p className="font-display text-3xl">+{business.googleReviews}</p>
            <p className="text-sm text-weber-linen/60">avaliações no Google</p>
            <p className="mt-1 text-sm text-weber-linen/40">{business.priceRange}</p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {reviewThemes.map((theme) => (
            <span
              key={theme}
              className="rounded-sm border border-weber-linen/15 px-3 py-1.5 text-xs tracking-wide text-weber-linen/70"
            >
              {theme}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              className="rounded-sm border border-weber-linen/15 bg-weber-brand-deep/35 p-6"
            >
              <div className="mb-3 flex gap-0.5 text-sm text-weber-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-weber-linen/85 italic">
                “{review.quote}”
              </p>
              <footer className="mt-4 text-xs text-weber-linen/45">
                — {review.author} · {review.source}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href={business.googleReviewsUrl} variant="secondary" external>
            Ver no Google
          </Button>
        </div>
      </div>
    </section>
  );
}
