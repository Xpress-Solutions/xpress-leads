import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Sinuca() {
  const ref = useReveal();

  return (
    <section className="section sinuca" id="sinuca">
      <div className="wrap sinuca-grid reveal" ref={ref}>
        <div className="sinuca-copy">
          <p className="section-kicker">As três mesas</p>
          <h2 className="section-title">Sinuca a R$ 1.</h2>
          <p className="section-lead">
            Três mesas no salão amplo. A partida é um real — documentado na matéria da casa.
            Depois da aula, antes da banda, no meio do litrão.
          </p>
          <ul className="sinuca-points">
            <li>
              <strong>3 mesas</strong>
              <span>Salão largo, sem fila de clube.</span>
            </li>
            <li>
              <strong>R$ 1 a partida</strong>
              <span>Preço de campus, não de pub.</span>
            </li>
            <li>
              <strong>Espaço pra banda</strong>
              <span>O mesmo pátio já recebeu calourada da Unisinos.</span>
            </li>
          </ul>
          <a className="btn btn-felt" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Perguntar se tem mesa
          </a>
        </div>
        <figure className="sinuca-photo">
          <img src="/fotos/sinuca.png" alt="Mesas de sinuca no salão amplo do Alemão Unipark" />
          <figcaption>Salão de sinuca · atmosfera da casa</figcaption>
        </figure>
      </div>
    </section>
  );
}
