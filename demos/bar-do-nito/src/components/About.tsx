import { useReveal } from "../hooks/useReveal";
import { WallArt } from "./WallArt";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">O sobrado do Nito.</h2>
          <p>
            Em 1992, Nerci Padilha — o Nito — saiu de Santo Ângelo com uma ideia: um bar
            onde coubessem a MPB do rádio e a comida da mãe, Florisbela, a Dona Filhinha. O
            ponto que ficou foi este sobrado na Av. Cel. Lucas de Oliveira, 105.
          </p>
          <p>
            Em 2011 o ator Fernando Waschburger, frequentador, assumiu para não deixar o
            bar preferido acabar. O nome ficou. O palco ficou. Nito segue no banquinho com
            o violão — “se quiser me destruir, é só me tirar o violão e me tirar da noite”.
          </p>
          <ul className="about-points">
            <li>Esquina com a Felipe Neri, uma quadra da 24 de Outubro</li>
            <li>Beth Carvalho, Chico César e o MPB4 já sentaram nesta mesa</li>
            <li>Exposição permanente Ô, Sorte! — Retratos da MPB, de Daniel Marenco</li>
          </ul>
        </div>
        <div className="wall">
          <WallArt />
          <div className="wall-caption">Paredes com caricaturas, letras e o acervo da MPB</div>
        </div>
      </div>
    </section>
  );
}
