import { REVIEWS } from "../data/reviews";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Booksy</p>
          <h2 className="section-title">Quem sentou na cadeira.</h2>
        </div>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            {SITE.reviewsCount} avaliações · 17 de 18 com cinco estrelas
            <br />
            Fonte: Booksy officebarber
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.name + review.service}>
              <div className="rev-who">
                {review.name} · {review.service} · {review.barber}
              </div>
              <p>“{review.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
