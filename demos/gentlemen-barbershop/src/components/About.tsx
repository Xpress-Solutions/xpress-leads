import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa</p>
        <h2 className="section-title">Ardósia, xadrez e madeira.</h2>
        <div className="casa-grid">
          <div className="casa-copy">
            <p>
              Quem entra descreve o lugar: parede azul-ardósia, piso xadrez, bancada de madeira, cadeira
              preta e a geladeira Jack Daniel&apos;s no canto. Não é lobby de hotel — é a estação do
              Tiago na Floresta.
            </p>
            <p>
              Desde 2014 a Gentlemen&apos;s atende só o público masculino. Reviews falam de sonzera,
              café na espera e cerveja gelada. O badge da porta — cartola, bigode, aro bronze — é o
              mesmo do Instagram e do Booksy.
            </p>
            <p className="section-lead">
              Rua Félix da Cunha, 657 · Floresta · Porto Alegre
            </p>
          </div>
          <div className="casa-mosaic" aria-hidden="true">
            <img src="/fotos/interior.jpg" alt="" />
            <img src="/fotos/corte-capa.jpg" alt="" />
            <img src="/fotos/corte-tesoura.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
