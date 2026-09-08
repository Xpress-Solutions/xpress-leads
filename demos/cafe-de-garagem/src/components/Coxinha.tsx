import { PHOTOS } from "../data/photos";
import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Coxinha() {
  const ref = useReveal();

  return (
    <section className="section coxinha" id="coxinha">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Comida di Buteco 2026</p>
        <h2 className="section-title">A coxinha da garagem.</h2>
        <p className="section-lead">
          No circuito Porto Alegre e Canoas, o Café de Garagem entra com a Coxinha
          de Buteco. Tema da edição: verduras. Petisco a R$ 40 — preço do concurso,
          não invenção de cardápio.
        </p>

        <div className="coxinha-grid">
          <div className="coxinha-art">
            <img
              src={PHOTOS.coxinha}
              alt="Coxinha de Buteco do Café de Garagem — prato oficial do Comida di Buteco 2026, foto Israh Ramos"
            />
          </div>
          <div className="coxinha-copy">
            <h3>Coxinha de Buteco</h3>
            <p>
              Foto oficial da temporada: Israh Ramos, na Revista Sabores do Sul.
              A casa é pequena; a coxinha é o motivo de quem vem de fora da zona
              norte achar a Ten-Caten.
            </p>
            <div className="coxinha-price">R$ 40</div>
            <p className="coxinha-note">
              Circuito 10/04 a 03/05/2026 · confirme se ainda está no balcão
            </p>
            <div className="hero-actions" style={{ marginTop: 18 }}>
              <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                Pedir no WhatsApp
              </a>
              <a className="btn btn-ghost" href="#localizacao">
                Como chegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
