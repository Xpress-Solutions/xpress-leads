import { PETISCOS } from "../data/site";

export function Edicoes() {
  return (
    <section className="section edicoes" id="edicoes">
      <div className="wrap">
        <p className="kicker">No concurso</p>
        <h2 className="section-title">Três edições, três petiscos.</h2>
        <p className="lead">
          Copy da casa, sem lorem: só o que o Comida di Buteco e a imprensa já publicaram sobre o
          Barba.
        </p>
        <div className="ed-grid">
          {PETISCOS.map((item) => (
            <article className="ed-card" key={item.year}>
              <span className="year">{item.year}</span>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <small>{item.source}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
