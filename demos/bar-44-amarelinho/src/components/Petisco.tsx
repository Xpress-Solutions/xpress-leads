import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Petisco() {
  const ref = useReveal();

  return (
    <section className="section petisco" id="petisco">
      <div className="wrap petisco-grid reveal" ref={ref}>
        <div className="petisco-photo">
          <img
            src="/fotos/charutinhos.jpg"
            alt="Charutinhos Jalapeños do Bar 44 Amarelinho — petisco do Comida di Buteco 2026"
          />
        </div>
        <div className="petisco-copy">
          <p className="section-kicker">Comida di Buteco 2026</p>
          <h2 className="section-title">Charutinhos Jalapeños.</h2>
          <p>
            O petisco da edição na Av. Assis Brasil, 171. Foto de Israh Ramos para o circuito
            Porto Alegre — o amarelo da casa também está no prato: massa dourada, molho vermelho e
            creme de jalapeño.
          </p>
          <p>
            Durante o concurso o petisco saiu a R$ 40. Fora da temporada, pergunta no Zap se ainda
            tem na casa.
          </p>
          <span className="stamp">Participante · POA 2026</span>
          <div className="hero-actions" style={{ marginTop: 20 }}>
            <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Pedir o petisco
            </a>
            <a className="btn btn-ghost" href="#mesa">
              Ver a mesa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
