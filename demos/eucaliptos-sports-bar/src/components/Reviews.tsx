import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Lugar top, cerveja e pizzas deliciosas, atendimento top, preços justos, localização muito boa.",
    who: "C. D. R. S.",
  },
  {
    text: "Cervejas ótimas, ambiente bem arejado e atendimento excelente. Vale a pena conferir.",
    who: "L. P. D. O.",
  },
  {
    text: "Chopp gelado e pizza bem honesta. Local legal para um encontro casual com amigos.",
    who: "J. A. / D. B. M.",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Quem já sentou</p>
        <h2 className="section-title">Chope, pizza e mesa arejada.</h2>
        <p className="section-lead">
          Trechos públicos de avaliações da casa. Sem nota inventada — o placar está no Google.
        </p>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.who}>
              <div aria-hidden="true">★★★★★</div>
              <p>“{review.text}”</p>
              <span className="rev-who">{review.who} · avaliação pública</span>
            </article>
          ))}
        </div>
        <div className="loc-actions">
          <a className="btn btn-ghost" href={SITE.googleReviews} target="_blank" rel="noreferrer">
            Ver no Google
          </a>
        </div>
      </div>
    </section>
  );
}
