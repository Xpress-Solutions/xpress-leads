import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const QUOTES = [
  {
    text: "Seguimos a mesma ideia do Teresópolis, comida caseira, campeira, com gostinho de feita por mãe e avó.",
    cite: "Luana Benincá · JC, abr/2025",
  },
  {
    text: "As pessoas falam ‘isso tinha na casa da minha avó’ ou ‘nunca mais vi essa comida’.",
    cite: "Gabriela Ferreira · JC, abr/2025",
  },
  {
    text: "Existem lugares que servem almoço. E existem lugares que servem lembranças.",
    cite: "TVS Play · jun/2026",
  },
] as const;

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que se fala da casa</p>
        <h2 className="section-title">Comida que lembra domingo.</h2>
        <div className="score-num">{SITE.rating}</div>
        <p className="section-lead">
          Avaliação destacada {SITE.reviewsCount} na unidade Petrópolis ·
          Restaurant Guru.
        </p>
        <div className="rev-grid">
          {QUOTES.map((quote) => (
            <article className="rev-card" key={quote.cite}>
              <p>“{quote.text}”</p>
              <cite>{quote.cite}</cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
