import { SITE } from "../data/site";
import { REVIEWS } from "../data/services";
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
          <div>
            <div>★★★★★</div>
            <strong>
              {SITE.reviewsCount} avaliações no Booksy
            </strong>
            <div className="rev-meta">Guia local também cita {SITE.googleReviews} no Google</div>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={`${review.name}-${review.text}`}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <div className="rev-meta">
                {review.name} · {review.staff}
              </div>
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
