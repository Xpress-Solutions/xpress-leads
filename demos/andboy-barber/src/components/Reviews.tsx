import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Booksy</p>
        <h2 className="section-title">Quem senta, volta.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Booksy</strong>
            <span>Quase todas cinco estrelas. O funcionário nas reviews é sempre o Andboy.</span>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.name + review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <cite>
                {review.name} · {review.service} · Andboy
              </cite>
            </article>
          ))}
        </div>
        <div className="section-foot">
          <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
            Ler no Booksy
          </a>
        </div>
      </div>
    </section>
  );
}
