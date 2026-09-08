import { PETISCO_2026, SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Petisco() {
  const ref = useReveal();

  return (
    <section className="section petisco" id="petisco">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">{PETISCO_2026.edition}</p>
        <h2 className="section-title">O prato da temporada.</h2>
        <p className="section-lead">
          O concurso manda o clique para guia de terceiro. Aqui o Bacalhau do Popeye fica na casa —
          com endereço, horário e o telefone da Floriano.
        </p>

        <div className="petisco-grid">
          <figure className="petisco-photo">
            <img
              src="/fotos/bacalhau-do-popeye.jpg"
              alt="Bacalhau do Popeye com toque de Olívia: lata de espinafre, tigela náutica e chips de batata-doce"
            />
            <figcaption className="petisco-flag">Lata de espinafre · toque de Olívia</figcaption>
          </figure>

          <div className="petisco-copy">
            <h3>{PETISCO_2026.name}</h3>
            <p>{PETISCO_2026.description}</p>
            <div className="petisco-meta">
              <span>{PETISCO_2026.price} no circuito</span>
              <span>Tema 2026: verduras</span>
            </div>
            <a className="btn btn-silver" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Quero o Popeye
            </a>
            <span className="petisco-credit">{PETISCO_2026.photoCredit}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
