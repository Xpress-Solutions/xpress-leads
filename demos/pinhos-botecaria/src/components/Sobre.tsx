import { SITE } from "../data/site";

export function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-copy">
          <p className="kicker">A casa</p>
          <h2 className="section-title">Pub de Canoas. Ponto.</h2>
          <p>{SITE.identity}</p>
          <p>
            Carlos Alberto Pinho toca a Botecaria na esquina da Victor Barreto
            com a Leopoldino Castro de Matos. Pilar mostarda, letreiro gótico,
            guitarra na parede e teto de madeira — se tirar o menu do site, ainda
            é esta casa.
          </p>
          <ul className="sobre-points">
            <li>Av. Victor Barreto, 3588 — Centro, Canoas</li>
            <li>Google 4,6 · faixa R$ 40–140</li>
            <li>Comida di Buteco 2026 · Deliciaporo</li>
            <li>Só abre à noite, quarta a sábado</li>
          </ul>
        </div>
        <figure className="sobre-photo">
          <img
            src="/fotos/salao.jpg"
            alt="Carlos Alberto Pinho no salão da Botecaria — tijolo, luz âmbar e a casa em Canoas."
            width={540}
            height={960}
          />
        </figure>
      </div>
    </section>
  );
}
