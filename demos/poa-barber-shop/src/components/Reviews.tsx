import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Booksy</p>
        <h2 className="section-title">Cinco estrelas, como sempre.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Booksy</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-meta">
                {review.name} · {review.service}
              </span>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 22 }}>
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ler no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
