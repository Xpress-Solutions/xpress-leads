import { STONES } from "../data/site.ts";

export function Stones() {
  return (
    <section className="section stones" id="pedras">
      <div className="wrap">
        <p className="kicker">O catálogo da casa</p>
        <h2 className="section-title">Pedras no pátio.</h2>
        <p className="section-lead">
          Trabalhamos com toda a linha de mármores e granitos nacionais e importados, tear,
          basalto, Caxambu, ardósia e pedras decorativas — o mostruário que quem passa na
          Ipiranga 8621 já conhece.
        </p>
        <div className="stone-grid">
          {STONES.map((stone) => (
            <article className="stone" key={stone.id}>
              <div className={`stone-face ${stone.texture}`} aria-hidden="true" />
              <div className="stone-shade" aria-hidden="true" />
              <small>{stone.tone}</small>
              <h3>{stone.name}</h3>
              <p>{stone.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
