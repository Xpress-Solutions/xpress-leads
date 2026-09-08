import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem já sentou</p>
        <h2 className="section-title">Mesa de rua, dono presente.</h2>
        <p className="section-lead">
          O que se lê nos guias e no Google: chopp gelado, bacalhau do Centro e preço de almoço —
          não de restaurante.
        </p>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div aria-hidden="true">★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">{review.source}</span>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
