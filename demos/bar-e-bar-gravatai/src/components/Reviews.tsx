import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Quem almoça aqui</p>
          <h2 className="title">4.7 no Google. Casa cheia de freguês.</h2>
          <p className="lead">
            {SITE.pitch}
          </p>
        </div>
        <div className="review-grid">
          {REVIEWS.map((review) => (
            <blockquote className="review" key={review.name}>
              <p>“{review.text}”</p>
              <footer>
                <strong>{review.name}</strong>
                <span>{review.source}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="review-note">
          Depoimentos públicos no Cardapio.menu. A nota {SITE.googleRating} é do Google.
        </p>
      </div>
    </section>
  );
}
