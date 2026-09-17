import { REVIEWS, SITE } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Reviews() {
  return (
    <section className="relative overflow-hidden bg-[#1a3354] py-20 text-[#f4ece3] md:py-28">
      <p className="pointer-events-none absolute -top-6 right-[-4%] font-display text-[18vw] leading-none text-white/5 italic">
        {SITE.rating}
      </p>
      <div className="page-pad">
        <Reveal>
          <p className="mb-3 text-[0.7rem] tracking-[0.32em] text-[#c4a574] uppercase">Quem veste</p>
          <h2 className="font-display mb-12 max-w-2xl text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95]">
            Atendimento e gosto, na medida.
          </h2>
        </Reveal>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={index * 120}>
              <blockquote className={`${index === 1 ? "md:translate-y-8" : ""}`}>
                <span className="font-display text-6xl leading-none text-[#c4a574]/80">“</span>
                <p className="font-display -mt-6 text-2xl leading-snug italic md:text-[1.7rem]">{review.text}</p>
                <footer className="mt-6 text-[0.68rem] tracking-[0.22em] text-[#c4a574] uppercase">{review.name}</footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
