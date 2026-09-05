import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Praca() {
  const ref = useReveal();

  return (
    <section className="section praca" id="praca">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A praça</p>
        <h2 className="section-title">O quiosque mudou. O ritual ficou.</h2>
        <p className="section-lead">
          O Bar do Zé é o bar que existia no quiosque da praça. Quem conhece ainda puxa a mesa
          pra sombra, escuta os pássaros e toma a gelada no Centro de {SITE.city}.
        </p>
        <ul className="praca-list">
          <li>
            <b>Mesa na calçada</b>
            <span>Coloca a mesa na praça e fica. Tranquilo, de cidade.</span>
          </li>
          <li>
            <b>Sombra das árvores</b>
            <span>Cerveja gelada, pássaro, fim de tarde na Roosevelt.</span>
          </li>
          <li>
            <b>O Zé atende</b>
            <span>Nome do dono na porta. Atendimento pessoal, citado no Google.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
