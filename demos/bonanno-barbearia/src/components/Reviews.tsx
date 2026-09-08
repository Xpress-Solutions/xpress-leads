import { REVIEWS } from "../data/reviews";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Booksy</p>
        <h2 className="section-title">Cinco pontos. Trezentos e noventa vezes.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações · recomendado pelo Booksy</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={`${review.name}-${review.service}`}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <footer>
                <b>{review.name}</b>
                <span>{review.service}</span>
              </footer>
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
