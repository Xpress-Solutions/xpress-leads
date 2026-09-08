import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const REVIEWS = [
  {
    text: "Ambiente bonito, Trem Bão Tchê! maravilhoso, drinks autorais e chopp IPA. Cachaças da casa mereciam ir embora na sacola.",
    source: "Tema de avaliação pública",
  },
  {
    text: "Comida gostosa, preço justo, funcionários queridos. Cocadinha maluca no copo. Em dia de Grêmio, Inter ou Palmeiras, chopp em dobro.",
    source: "Tema de avaliação pública",
  },
  {
    text: "Lugar especial, simples, aconchegante. Comida de boteco sem firula — a combinação que a Protásio pedia.",
    source: "Tema de avaliação pública",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Quem senta, volta.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div className="score-meta">
            <div>★★★★★</div>
            <strong>no Google · listagens públicas</strong>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.text}>
              <div>★★★★★</div>
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
