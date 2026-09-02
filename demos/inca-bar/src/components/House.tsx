import { useReveal } from "../hooks/useReveal";

export function House() {
  const ref = useReveal();

  return (
    <section className="section house" id="casa">
      <div className="wrap house-grid reveal" ref={ref}>
        <div className="house-copy">
          <p className="section-kicker">O casarão</p>
          <h2 className="section-title">Uma casa de 300 metros. Não um bar de avenida.</h2>
          <p>
            O Inca nasceu de viagens pela América Latina e mora numa antiga residência da Boa
            Vista: salão na entrada, varanda, pátio com churrasqueira e uma sala com sofá — parede
            petróleo, pompons de lã e o Inti escrito no muro.
          </p>
          <p>
            Atendimento no balcão das torneiras, comanda na recepção, água e milho tostado com o
            pint. Pode levar o cachorro. Se tiver sorte, quem recebe é o Cusco — sócio majoritário
            no coração da casa.
          </p>
          <blockquote className="inti-quote">
            “Inti, o deus Sol, era a divindade protetora da casa real. Seu calor beneficiava a
            terra andina e fazia as plantas crescerem.”
          </blockquote>
        </div>
        <figure className="house-photo">
          <img
            src="/fotos/sala.jpg"
            alt="Sala do Inca: parede azul-petróleo, sofás, mesa de barris e pompons andinos — foto do Facebook da casa / Viajante Cervejeiro"
          />
          <figcaption>A sala do casarão · Viajante Cervejeiro / Facebook do bar</figcaption>
        </figure>
      </div>
    </section>
  );
}
