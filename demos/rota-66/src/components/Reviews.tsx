import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Sempre que vou com a família, o atendimento da equipe é excelente. O que mais se destaca é o Gustavo — e a maionese com barbecue.",
    source: "Google · dine-in na Restinga",
  },
  {
    text: "Lanche bom, casa acolhedora. É lancheria de avenida: pede, senta e resolve a fome.",
    source: "Síntese das fichas públicas (Restaurant Guru)",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem come na Nilo Wulff.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div className="stars">★★★★☆</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <p>“{review.text}”</p>
              <span>{review.source}</span>
            </article>
          ))}
        </div>
        <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
          Ver no Google
        </a>
      </div>
    </section>
  );
}
