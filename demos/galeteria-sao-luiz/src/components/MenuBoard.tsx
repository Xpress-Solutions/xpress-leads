import { CUTS, DAYS, SIDES } from "../data/menu";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function MenuBoard() {
  const ref = useReveal();

  return (
    <section className="section menu" id="cardapio">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O almoço</p>
          <h2 className="section-title">Bufê na semana. À la minuta no sábado.</h2>
          <p className="section-lead">
            {SITE.pitch} Cortes e acompanhamentos conforme o Hagah e o cardápio da casa — confirme o
            que tem hoje no telefone.
          </p>
        </div>
        <div className="board">
          {DAYS.map((day) => (
            <article className="board-card" key={day.title}>
              <p className="section-kicker">{day.kicker}</p>
              <h3>{day.title}</h3>
              <p>{day.text}</p>
            </article>
          ))}
        </div>
        <div className="chips" aria-label="Cortes da casa">
          {CUTS.map((cut) => (
            <span className="chip is-brand" key={cut}>
              {cut}
            </span>
          ))}
          {SIDES.map((side) => (
            <span className="chip" key={side}>
              {side}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
