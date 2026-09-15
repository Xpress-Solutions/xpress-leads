import { REVIEWS } from "../data/menu";
import { SITE } from "../data/site";

export function Reviews() {
  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <p className="section-kicker">quem sentou</p>
        <h2 className="section-title">falou da casa.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <strong>no Google</strong>
            <div>{SITE.reviewsCount} avaliações públicas</div>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.name}>
              <strong>{review.name}</strong>
              <span> · {review.source}</span>
              <p>“{review.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
