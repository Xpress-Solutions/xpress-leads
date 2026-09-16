import { SITE } from "../data/site";

export function Petisco() {
  return (
    <section className="section petisco" id="petisco">
      <div className="wrap petisco-box">
        <div>
          <p className="kicker">Comida di Buteco 2026</p>
          <h2 className="display">Peppa Mafiosa</h2>
          <p className="lead">
            O petisco da edição está nesta casa — não em guia de terceiro. Venha pelo
            concurso, fique pelas torneiras e pela João Alfredo até 2h.
          </p>
          <div className="petisco-meta" style={{ marginTop: 18 }}>
            <span className="chip">Porto Alegre e Canoas</span>
            <span className="chip">Petisco da casa</span>
            <span className="chip">R$ 40 no circuito</span>
          </div>
        </div>
        <div>
          <p>
            A Ninkasi entrou no Comida di Buteco 2026 com o Peppa Mafiosa. O site da casa
            é onde o prato, o endereço e o WhatsApp se encontram — o feed sozinho não
            ranqueia quem pesquisa cerveja na Cidade Baixa.
          </p>
          <div className="hero-actions" style={{ marginTop: 22 }}>
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Quero mesa
            </a>
            <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
