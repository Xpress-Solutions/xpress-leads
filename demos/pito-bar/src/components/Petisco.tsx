import { SITE } from "../data/site.ts";

export function Petisco() {
  return (
    <section className="section petisco" id="petisco">
      <div className="wrap">
        <p className="kicker">Comida di Buteco 2026</p>
        <h2 className="display" style={{ fontSize: "clamp(2.8rem, 8vw, 5rem)" }}>
          tábua campeira
        </h2>
        <p className="lead">
          O petisco do circuito está na Mariante. O clique do concurso precisa cair na casa — não
          numa ficha sem WhatsApp.
        </p>
        <div className="petisco-grid">
          <div className="petisco-photo">
            <img
              src="/fotos/tabua.jpg"
              alt="Tábua Campeira do Pito Bar — pão tostado, linguiça, queijo e ervas. Foto Israh Ramos / Sabores do Sul"
              width={1021}
              height={682}
            />
          </div>
          <div>
            <span className="stamp">Circuito POA · R$ 40 no concurso</span>
            <h3>o prato que o Google já entrega</h3>
            <p>
              Pão tostado, linguiça, queijo derretido e erva — tábua de esquina, não degustação de
              hotel. Foto oficial do circuito 2026 (Israh Ramos).
            </p>
            <p>
              {SITE.pitch}
            </p>
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir mesa no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
