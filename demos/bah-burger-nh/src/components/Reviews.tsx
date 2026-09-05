import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">Quem já comeu</p>
          <h2 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
            A estrela é o hambúrguer.
          </h2>
          <div className="score">
            <b>{SITE.rating}</b>
            <div>
              ★★★★★
              <br />
              {SITE.reviewsCount} avaliações no Google
            </div>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.name}>
              <strong>{review.name}</strong> · {review.source}
              <p>“{review.text}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
