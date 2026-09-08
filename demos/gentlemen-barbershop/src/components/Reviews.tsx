import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="reviews-inner">
        <div className="wrap reveal" ref={ref}>
          <p className="section-kicker">{SITE.reviewsSource}</p>
          <h2 className="section-title">Cinco estrelas. Sem meio termo.</h2>
          <div className="reviews-score">
            <div className="score-num">{SITE.rating}</div>
            <div className="score-meta">
              <div>★★★★★</div>
              <strong>
                {SITE.reviewsCount} avaliações no {SITE.reviewsSource}
              </strong>
              <p className="section-lead">Todas as notas públicas do perfil: 5.</p>
            </div>
          </div>
          <div className="rev-grid">
            {REVIEWS.map((review) => (
              <article className="rev-card" key={review.text}>
                <div>★★★★★</div>
                <p>“{review.text}”</p>
                <small>
                  {review.author} · {review.service}
                </small>
              </article>
            ))}
          </div>
          <div className="loc-actions">
            <a className="btn btn-ghost" href={SITE.booksy} target="_blank" rel="noreferrer">
              Ler no Booksy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
