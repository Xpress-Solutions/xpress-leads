import { REVIEWS } from "../data/menu";
import { SITE } from "../data/site";

export function Reviews() {
  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <p className="section-kicker">Quem come na Ceará</p>
        <h2 className="section-title">
          {SITE.rating} no Google · {SITE.reviewsCount} avaliações
        </h2>
        <p className="section-lead">
          Casa cheia, preparo rápido, xis e alaminuta. Tom das reviews — não copy
          inventado.
        </p>
        <div className="review-grid">
          {REVIEWS.map((review) => (
            <blockquote className="review-card" key={review.quote}>
              <p>“{review.quote}”</p>
              <span>{review.source}</span>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
