import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    name: "Jener",
    service: "Corte Navalhado",
    text: "Corte bem feito, muito cuidado e um lugar bem ventilado.",
  },
  {
    name: "Richard",
    service: "Corte Social",
    text: "Corte perfeito e ágil como sempre.",
  },
  {
    name: "Yago",
    service: "Degrade na Zero",
    text: "Melhor da região.",
  },
] as const;

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Booksy</p>
        <h2 className="section-title">Nota 5. Sem meio-termo.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações · todas 5 estrelas</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.name}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <strong>{review.name}</strong>
              <span className="rev-demo">
                {review.service} · {SITE.barber}
              </span>
            </article>
          ))}
        </div>
        <div className="menu-foot">
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ver no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
