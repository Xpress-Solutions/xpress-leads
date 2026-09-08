import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem já sentou</p>
        <h2 className="section-title">Falam do Anderson. Falam da casa.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações em guias e Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
            </article>
          ))}
        </div>
        <div className="loc-actions">
          <a className="btn btn-dark" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
