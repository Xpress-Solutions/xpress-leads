import { SITE } from "../data/site";

const REVIEWS = [
  {
    title: "Cerveja e chope",
    text: "Quem avalia a casa no Google e no Guru volta no chope gelado e na seleção de cerveja — o copo é o motivo de ficar.",
  },
  {
    title: "Música e karaokê",
    text: "Tag pública: música ao vivo e karaokê. Palco no fundo, retratos na parede, noite que não é happy hour de escritório.",
  },
  {
    title: "Picadão na mesa",
    text: "Picada e petisco de concurso. Serviço que as reviews descrevem como rápido — mesa de grupo na Victor Barreto.",
  },
] as const;

export function Reviews() {
  return (
    <section className="section reviews" id="avaliacoes">
      <div className="wrap">
        <p className="kicker">Quem já veio</p>
        <h2 className="section-title">Nota da avenida.</h2>
        <div className="score">
          <div className="score-num">{SITE.rating}</div>
          <p className="section-lead">
            no Google. Ambiente que os guias chamam de calmo no começo da noite e
            de pub quando a banda liga. Não é review inventada: é o que está
            publicado.
          </p>
        </div>
        <div className="rev-grid">
          {REVIEWS.map((rev) => (
            <article className="rev-card" key={rev.title}>
              <p className="kicker">{rev.title}</p>
              <p>{rev.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
