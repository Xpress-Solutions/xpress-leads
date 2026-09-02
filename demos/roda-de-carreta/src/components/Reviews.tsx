import { SITE } from "../data/site";

const REVIEWS = [
  {
    text: "A Churrascaria Roda de Carreta vai muito além da boa comida: proporciona uma verdadeira imersão na cultura gaúcha. A música ao vivo, as tradições preservadas e o ambiente acolhedor tornam o passeio especial.",
    source: "Elenilda Souza · Google",
  },
  {
    text: "Mantendo a tradição quando vamos a Porto Alegre, estivemos na Roda de Carreta — CTG 35. Carnes e acompanhamentos bem preparados e proprietários e garçons muito atenciosos.",
    source: "Visitante · Restaurant Guru",
  },
  {
    text: "Nota 4,1 em mais de três mil avaliações: a casa é referência de volume e tradição, e também ouve crítica mista de buffet e ritmo do espeto. O salão precisa responder isso com a própria vitrine.",
    source: "Leitura das avaliações públicas",
  },
];

export function Reviews() {
  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <p className="kicker">Google</p>
        <h2 className="section-title">Três mil vozes no galpão.</h2>
        <div className="score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★☆</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
            <p className="section-lead" style={{ marginTop: 8 }}>
              Nota mista — a vitrine da casa, não de terceiros.
            </p>
          </div>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((review) => (
            <article className="rev-card" key={review.source}>
              <p>“{review.text}”</p>
              <span className="rev-meta">{review.source}</span>
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
