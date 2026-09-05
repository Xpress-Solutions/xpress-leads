import { REVIEWS, SITE } from "@/data/site";

export function Reviews() {
  return (
    <section id="avaliacoes" className="section bg-[color:var(--ink)] text-[#fff8f0]">
      <div className="wrap">
        <p className="kicker mb-4 !text-[#ffd28a]">
          <span className="h-px w-8 bg-[#ffd28a]" />
          Google
        </p>
        <h2 className="font-display text-[clamp(2.4rem,6vw,4.2rem)] leading-[0.92] uppercase">
          {SITE.rating} · {SITE.reviewsCount} avaliações
        </h2>
        <p className="mt-3 max-w-xl text-[#fff8f0]/70">
          A nota já está na Dorival. O que falta é a página com café da manhã e
          horário.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <blockquote
              key={review.name}
              className="rounded-[22px] border border-white/10 bg-white/5 px-6 py-6"
            >
              <p className="text-[#ffd28a]">★★★★★</p>
              <p className="mt-3 text-[#fff8f0]/88">“{review.text}”</p>
              <footer className="mt-4 text-sm text-[#fff8f0]/50">
                {review.name} · {review.source}
              </footer>
            </blockquote>
          ))}
        </div>

        <a
          className="btn btn-ghost mt-10 !border-[#fff8f0]/30 !text-[#fff8f0]"
          href={SITE.googleReviews}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no Google
        </a>
      </div>
    </section>
  );
}
