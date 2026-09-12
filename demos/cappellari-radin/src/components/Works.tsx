import { WORKS } from "../data/site.ts";

export function Works() {
  return (
    <section className="section works" id="obras">
      <div className="wrap">
        <p className="kicker">O que sai da oficina</p>
        <h2 className="section-title">Cortado na medida.</h2>
        <p className="section-lead">
          Escadas, mesas, lareiras e áreas molhadas — o mesmo ofício anunciado pela casa:
          aparelhamento de placas e execução em mármore, granito, ardósia e outras pedras.
        </p>
        <div className="work-grid">
          {WORKS.map((work) => (
            <article className="work" key={work.name}>
              <h3>{work.name}</h3>
              <p>{work.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
