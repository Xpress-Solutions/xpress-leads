import { TAPS } from "../data/menu";

export function Taps() {
  return (
    <section className="section taps" id="torneiras">
      <div className="wrap">
        <p className="section-kicker">as lousas do balcão</p>
        <h2 className="section-title">o que está na torneira.</h2>
        <p className="section-lead">
          Microlotes da Primor da Terra — medalha de bronze em Blumenau, 2022.
          A lista muda com a fruta da estação. O que estava ontem pode não estar sábado.
        </p>
        <div className="tap-board">
          {TAPS.map((tap) => (
            <article className="tap" key={tap.name}>
              <h3>{tap.name}</h3>
              <span className="spec">{tap.spec}</span>
              <p>
                {tap.house} · {tap.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
