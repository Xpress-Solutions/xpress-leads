import { TAPS } from "../data/site";

export function Torneiras() {
  return (
    <section className="section taps" id="torneiras">
      <div className="wrap">
        <p className="kicker">Nove torneiras</p>
        <h2 className="display" style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)" }}>
          Sapatista, DaLuz e uma convidada.
        </h2>
        <p className="lead">
          Incendiária, Filipina, Maria da Penha — os nomes das cevas são o manifesto no
          copo. Uma torneira fica aberta para quem a casa chama.
        </p>
        <div className="tap-list">
          {TAPS.map((tap) => (
            <article className="tap" key={tap.name}>
              <span>
                {tap.house} · {tap.style}
              </span>
              <b>{tap.name}</b>
              <p>{tap.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
