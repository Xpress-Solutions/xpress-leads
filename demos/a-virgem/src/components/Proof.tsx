import { SITE } from "../data/site";

export function Proof() {
  return (
    <section className="proof" aria-label="A casa em números">
      <div className="wrap proof-grid">
        <p>
          <b>{SITE.rating}</b>
          <span>no Google</span>
        </p>
        <p>
          <b>2026</b>
          <span>Comida di Buteco</span>
        </p>
        <p>
          <b>Olavo Bilac</b>
          <span>Azenha / Cidade Baixa</span>
        </p>
        <p>
          <b>Desde 2010</b>
          <span>Bar, arte e tattoo</span>
        </p>
      </div>
    </section>
  );
}
