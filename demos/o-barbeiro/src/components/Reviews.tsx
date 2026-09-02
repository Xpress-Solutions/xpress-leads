import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const NOTES = [
  {
    title: "O Daniel",
    text: "Nas avaliações públicas, o profissional aparece pelo nome. Casa pequena o suficiente para o barbeiro ser pessoa, não marca.",
  },
  {
    title: "Preço justo",
    text: "Clientes descrevem o valor como ótimo — ofício de bairro, não tabela de franquia.",
  },
  {
    title: "Ambiente",
    text: "A síntese das 19 notas fala em ambiente agradável e justo. Salão de rua, sem club e sem neon.",
  },
];

export function Reviews() {
  const ref = useReveal();

  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Google</p>
        <h2 className="section-title">Cinco estrelas na Felizardo.</h2>
        <div className="reviews-score">
          <div className="score-num">{SITE.rating}</div>
          <div>
            <div>★★★★★</div>
            <strong>{SITE.reviewsCount} avaliações no Google</strong>
          </div>
        </div>
        <div className="rev-grid">
          {NOTES.map((note) => (
            <article className="rev-card" key={note.title}>
              <b>{note.title}</b>
              <p>{note.text}</p>
              <span className="rev-note">Síntese de avaliações públicas</span>
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
