import { MenuBoard } from "../components/MenuBoard";

export function Cardapio() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="section-kicker">Cervejas y tapas</p>
          <h1 className="section-title">O que pede no balcão.</h1>
          <p className="section-lead">
            Tapas, petisco do concurso e o que a casa serve de verdade. A tap list muda na lousa —
            este cardápio não inventa rótulo do dia.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="wrap">
          <MenuBoard />
        </div>
      </section>
    </main>
  );
}
