import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Xis() {
  const ref = useReveal();

  return (
    <section className="section xis" id="xis">
      <div className="wrap xis-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">O xis</p>
          <h2 className="section-title">Feito no capricho. Sem pressa de delivery.</h2>
          <p className="section-lead">
            Quem senta na praça volta falando do xis. Saboroso, montado no capricho — a outra
            atração da casa, do lado da cerveja gelada.
          </p>
          <p className="xis-copy">
            Aqui não tem cardápio de plataforma. Tem o lanche da casa, preço justo (
            {SITE.priceRange} por pessoa) e o Zé atrás do balcão. Se vier pela Roosevelt, pede o
            xis e deixa a mesa na praça.
          </p>
        </div>
        <aside className="xis-board" aria-label="O que pedir">
          <p className="xis-board-kicker">Pra mesa</p>
          <ul>
            <li>
              <strong>Xis da casa</strong>
              <span>Caprichado, do jeito que o review pede</span>
            </li>
            <li>
              <strong>Cerveja gelada</strong>
              <span>Trincando, à sombra das árvores</span>
            </li>
            <li>
              <strong>Mesa na praça</strong>
              <span>Calçada, pássaro, conversa</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
