import { CUTS, SIDES } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Rodizio() {
  const ref = useReveal();

  return (
    <section className="section rodizio" id="rodizio">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que passa na mesa</p>
        <h2 className="section-title">O espeto não para.</h2>
        <p className="section-lead">
          Rodízio clássico de Cidade Baixa: cortes de casa, sem pose de picanha de vitrine.
          Assim que senta, o corrido começa.
        </p>
        <div className="cut-grid">
          {CUTS.map((cut, i) => (
            <article className="cut" key={cut.name}>
              <i>{String(i + 1).padStart(2, "0")}</i>
              <div>
                <b>{cut.name}</b>
                <span>{cut.note}</span>
              </div>
            </article>
          ))}
        </div>
        <ul className="sides">
          {SIDES.map((side) => (
            <li key={side}>{side}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
