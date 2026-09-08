import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Casarão de 1950, segunda geração.</h2>
          <p>
            Em março de 2025 o Fogão Campeiro — clássico de comida caseira do
            Teresópolis — abriu a primeira filial no Petrópolis. Quem toca o
            salão é Luana Benincá, filha dos fundadores, criada no fogão da
            família.
          </p>
          <p>
            O negócio ocupa todos os cômodos de um casarão de 1950 na Av.
            Lageado. Gabriela Ferreira, na gerência, resume o que o cliente
            fala no buffet: “isso tinha na casa da minha avó” ou “nunca mais
            vi essa comida”.
          </p>
          <ul className="about-points">
            <li>Comida caseira, campeira, com gostinho de feita por mãe e avó.</li>
            <li>Público de empresas no almoço de semana; famílias no sábado.</li>
            <li>Há lugares que servem almoço. Aqui serve lembrança.</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/fachada.jpg"
            alt="Luana Benincá e Gabriela Ferreira na fachada verde e azul do casarão 1265"
          />
          <div className="about-badge">Filial 2025 · Luana Benincá</div>
          <span className="about-house" aria-hidden="true">
            1265
          </span>
        </div>
      </div>
    </section>
  );
}
