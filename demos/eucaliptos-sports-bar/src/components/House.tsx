import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function House() {
  const ref = useReveal();

  return (
    <section className="section house" id="casa">
      <div className="wrap house-grid reveal" ref={ref}>
        <div className="house-copy">
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">No ponto do Eucaliptos.</h2>
          <p>
            O Euca fica no Grand Park Eucaliptos, Cerro Largo 300 — onde era o Estádio dos
            Eucaliptos, casa do Inter até 1969 e palco da Copa de 1950. O DNA de jogo não é
            fantasia de decoração: é o chão do bairro.
          </p>
          <p>
            Quatro sócios se revezam no balcão. Três passaram pelo quadro de arbitragem da
            FGF. Clube eles têm; na mesa, o assunto é o jogo — não o lado. Cinco TVs, oito
            torneiras, praça na frente para criança e cachorro.
          </p>
          <ul className="house-points">
            <li>Em frente à Praça Memorial Eucaliptos</li>
            <li>Pet friendly · família no happy hour</li>
            <li>Música ao vivo de vez em quando — olha o Instagram</li>
            <li>Reservas para eventos: {SITE.phoneDisplay}</li>
          </ul>
        </div>
        <div className="house-photo">
          <img
            src="/fotos/balcao.jpg"
            alt="Balcão do Eucaliptos: azulejo preto, chope âmbar e a camiseta da casa"
          />
          <div className="house-badge">Desde 2019 · Menino Deus</div>
        </div>
      </div>
    </section>
  );
}
