import { REVIEWS, SITE } from "../data/site.ts";

export function Reviews() {
  return (
    <section className="section" id="avaliacoes">
      <div className="wrap">
        <p className="kicker">Google</p>
        <h2 className="section-title">Quem corta, volta.</h2>
        <div className="score">
          <div className="score-num">{SITE.reviewsCount}</div>
          <div>
            <div>★★★★★</div>
            <strong>avaliações no Google</strong>
            <p className="lead">Listagens públicas falam em serviço, atendimento e casa acolhedora.</p>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span>{review.source}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
