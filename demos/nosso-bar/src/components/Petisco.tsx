import { SITE } from "../data/site";

export function Petisco() {
  return (
    <section className="section petisco" id="petisco">
      <div className="wrap petisco-grid">
        <figure className="petisco-photo">
          <img
            src="/fotos/pastel-vento.jpg"
            alt="Pastel de Vento do Nosso Bar — Comida di Buteco 2026, foto Israh Ramos"
          />
          <figcaption>Pastel de Vento · Israh Ramos / Sabores do Sul</figcaption>
        </figure>
        <div>
          <p className="stamp">Comida di Buteco 2026</p>
          <p className="section-kicker">O petisco da edição</p>
          <h2 className="section-title">Pastel de vento.</h2>
          <p className="section-lead">
            Quem pesquisa o pastel cai no site do concurso. Aqui o clique fica na
            casa: o petisco, o cardápio da madrugada e o WhatsApp da Bento.
          </p>
          <p className="section-lead" style={{ marginTop: 14 }}>
            A casa já esteve no circuito em 2022 com a parmegiana desconstruída
            (vice) e em 2024 com o sushi hot campeiro. Em 2026 o prato é este.
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir o pastel
            </a>
            <a className="btn btn-ghost" href="#cardapio">
              Ver o cardápio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
