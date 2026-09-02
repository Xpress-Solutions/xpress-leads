import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Chope bem tirado, petisco pra dividir e aquele atendimento que faz a gente se sentir em casa. Dá vontade de voltar no meio da semana.",
  },
  {
    text: "Levei a família e a mesa rendeu. Ambiente descontraído, comida boa e o clima de boteco de bairro que a gente procura.",
  },
  {
    text: "Fui numa quarta de karaokê e num sábado de feijoada. Dois motivos diferentes, o mesmo Vitória: próximo, saboroso e sem frescura.",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem conhece, recomenda.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-demo">Avaliação demonstrativa · placeholder</span>
            </article>
          ))}
        </div>
        <div className="menu-foot">
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
