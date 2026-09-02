import { MenuBoard } from "../components/MenuBoard";

export function Cardapio() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <p className="section-kicker">Cardápio digital</p>
          <h1 className="section-title">Cardápio do Vitória.</h1>
          <p className="section-lead">
            Produtos e preços conforme o cardápio físico do Boteco Vitória. Porções P1, P2 e P4
            indicam para quantas pessoas serve.
          </p>
          <p className="demo-note">
            Alguns itens de edições diferentes do cardápio foram reunidos aqui. Confirme no salão
            se houver divergência.
          </p>
        </div>
      </section>
      <section className="section menu" style={{ paddingTop: 12 }}>
        <div className="wrap">
          <MenuBoard />
        </div>
      </section>
    </main>
  );
}
