import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Atendimento que faz voltar, cerveja geladíssima e ambiente gostoso no Centro.",
    note: "Síntese de avaliação no Google",
  },
  {
    text: "Ambiente, comida e gente simpática — o tipo de mesa que rende na Andradas.",
    note: "Síntese de avaliação no Google",
  },
  {
    text: "Pappardelle ao molho de queijo com iscas de carne: prato que o salão já tem fã.",
    note: "Síntese de avaliação no Google",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem senta, recomenda.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">{review.note}</span>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 22 }}>
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
