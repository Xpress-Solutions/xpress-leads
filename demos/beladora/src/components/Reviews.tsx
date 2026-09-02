import { REVIEWS, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">O que o Google já diz</p>
        <h2 className="section-title">A orla fala pela casa.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.reviewsCount}</div>
          <p className="lead">
            avaliações públicas no Google. Ambiente arejado, comida quente, ponto de
            Ipanema.
          </p>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((item) => (
            <article className="rev-card" key={item.author}>
              <p>“{item.quote}”</p>
              <small>
                {item.author} · {item.source}
              </small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
