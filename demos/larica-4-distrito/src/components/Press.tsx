import { PRESS } from "../data/menu";

export function Press() {
  return (
    <section className="section press" id="imprensa">
      <div className="wrap">
        <p className="kicker">Quem já sentou</p>
        <h2 className="section-title">O que falaram da casa.</h2>
        <div className="press-grid">
          {PRESS.map((item) => (
            <blockquote className="quote" key={item.outlet}>
              <p>“{item.quote}”</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.outlet}
              </a>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
