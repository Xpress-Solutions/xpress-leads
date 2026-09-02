import { SITE } from "../data/site.ts";

export function About() {
  return (
    <section className="section" id="casa">
      <div className="wrap">
        <p className="kicker">A casa</p>
        <h2 className="display" style={{ fontSize: "clamp(2.4rem, 7vw, 4.6rem)", marginBottom: 16 }}>
          Bar de noite na Cipó.
        </h2>
        <p className="lead">{SITE.identity}</p>
        <p className="lead" style={{ marginTop: 14 }}>
          {SITE.positioning}
        </p>
        <ul className="about-points">
          <li>Zona Norte · Passo D’Areia, não circuito da Cidade Baixa.</li>
          <li>Abre quando a rua escurece — segunda a sábado, das 18h à meia-noite.</li>
          <li>Petisco autoral com nome de marca: a Bruscheta Golden é a página que faltava.</li>
        </ul>
      </div>
    </section>
  );
}
