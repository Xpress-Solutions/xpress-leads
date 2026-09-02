import { REVIEWS } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem senta, volta.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>
              {SITE.reviewsCount} avaliações · ticket {SITE.priceRange}
            </strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.author}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <footer>
                {review.author} · {review.source}
                <br />
                {review.meta}
              </footer>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 22 }}>
          <a className="btn btn-ghost dark" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
