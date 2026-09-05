import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <div className="section-head reveal" ref={ref}>
          <p className="section-kicker">Quem sentou</p>
          <h2 className="section-title">
            ★ {SITE.rating} · {SITE.reviewsCount} avaliações
          </h2>
          <p className="section-lead">Notas reais do Booksy. Sem filtro de agência.</p>
        </div>
        <div className="review-grid">
          {REVIEWS.map((review) => (
            <blockquote key={`${review.author}-${review.quote}`} className="review-card">
              <p>“{review.quote}”</p>
              <footer>
                <strong>{review.author}</strong>
                <span>{review.service}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
