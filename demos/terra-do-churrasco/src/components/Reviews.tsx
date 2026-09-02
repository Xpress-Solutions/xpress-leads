import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Levei a família no almoço de domingo. Criança no kids, cusco no pátio, picanha no ponto. É a casa do Salso que a gente precisava.",
  },
  {
    text: "Fiz aniversário para uns 40. Reservaram a mesa, o salão aguentou e ninguém ficou apertado. Pouca churrascaria da zona leste faz isso.",
  },
  {
    text: "A parrilla de verdade — brasero, fumaça, corte no ferro. Não é rodízio de avenida. É mesa de churrasco gaúcho.",
  },
] as const;

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quase mil vozes em pouco tempo de casa.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.reviewsCount}</div>
          <div className="score-meta">
            <div>avaliações no Google</div>
            <strong>Casa nova, 2024 — o bairro já marcou presença.</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <p>“{review.text}”</p>
              <span className="rev-demo">Texto demonstrativo · tom das reviews da casa</span>
            </article>
          ))}
        </div>
        <div className="menu-foot">
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
