import { REVIEWS, SITE } from "../data/site.ts";
import { useReveal } from "../hooks/useReveal.ts";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="kicker">Booksy</p>
          <h2 className="section-title">5,0. Na régua.</h2>
        </div>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <p>★ ★ ★ ★ ★</p>
            <span>{SITE.reviewsCount} avaliações no Booksy</span>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((item) => (
            <article key={item.author + item.text} className="rev-card">
              <strong>{item.author}</strong>
              <small>{item.service}</small>
              <p>“{item.text}”</p>
            </article>
          ))}
        </div>
        <a className="gallery-link" href={SITE.booksy} target="_blank" rel="noreferrer">
          Ler no Booksy
        </a>
      </div>
    </section>
  );
}
