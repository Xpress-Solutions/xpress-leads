import { CUTS, EXTRAS } from "../data/cuts";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Cuts() {
  const ref = useReveal();

  return (
    <section className="section cuts" id="cortes">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">O que reservar</p>
        <h2 className="section-title">Cortes da semana.</h2>
        <p className="section-lead">
          Prime rib, T-bone, cordeiro e contra-filé — a casa ensina o ponto no balcão. Não é
          cardápio de shopping: é o que o vizinho leva para o domingo.
        </p>

        <ol className="cut-board">
          {CUTS.map((cut, i) => (
            <li key={cut.name}>
              <span className="cut-idx">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{cut.name}</h3>
                <p>{cut.note}</p>
                <small>{cut.tip}</small>
              </div>
            </li>
          ))}
        </ol>

        <div className="extras">
          <p className="script extras-title">Além da carne</p>
          <ul>
            {EXTRAS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          Reservar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
