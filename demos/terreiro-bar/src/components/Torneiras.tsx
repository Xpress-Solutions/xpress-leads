import { SITE } from "../data/site";

export function Torneiras() {
  return (
    <section className="section taps" id="torneiras">
      <div className="wrap">
        <p className="kicker">Cabocla Cervejas</p>
        <h2 className="section-title">Doze torneiras. Uma casa.</h2>
        <p className="section-lead">
          A Cabocla nasce com o Terreiro: rótulos que homenageiam orixás e energias — Dos Ventos,
          Da Noite, Obá, Das Matas. Cerveja com axé, só aqui na Luiz Afonso.
        </p>
        <div className="tap-grid">
          {SITE.taps.map((tap) => (
            <article className="tap" key={tap.name}>
              <b>{tap.name}</b>
              <span>{tap.style}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
