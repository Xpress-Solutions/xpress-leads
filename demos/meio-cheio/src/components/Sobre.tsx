import { GlassMark } from "./GlassMark";
import { useReveal } from "../hooks/useReveal";

export function Sobre() {
  const ref = useReveal();

  return (
    <section className="section sobre" id="sobre">
      <div className="wrap sobre-grid reveal" ref={ref}>
        <div className="sobre-copy">
          <p className="section-kicker">Greice e Nino</p>
          <h2 className="section-title">Democratizar o vinho na Capital.</h2>
          <p>
            Greice Chini (Amoliva, Mariana Pimentel) e Nino Backes (cozinheiro) abriram o
            Meio Cheio em 2025 porque o Rio Grande do Sul produz vinho o ano inteiro — e
            ainda trata a bebida como ritual.
          </p>
          <p>
            Aqui o vinho é cotidiano, como a cerveja. Sem serviço de mesa: você retira no
            balcão, senta no recuo da calçada ou na toalha vermelha e pede o segundo copo.
          </p>
          <ul className="sobre-points">
            <li>Vinhos só do Rio Grande do Sul</li>
            <li>Petisco do Nino e azeite da casa à venda</li>
            <li>Reserva pela DM — sem fila de telefone</li>
          </ul>
          <blockquote className="quote">
            <p>“A gente acredita que basta gostar de vinho para beber vinho.”</p>
            <span>Greice Chini · sócia</span>
          </blockquote>
        </div>
        <div className="wall" aria-hidden="true">
          <GlassMark />
          <p className="wall-caption">Parede bipartida da casa: creme em cima, vermelho-tijolo embaixo.</p>
        </div>
      </div>
    </section>
  );
}
