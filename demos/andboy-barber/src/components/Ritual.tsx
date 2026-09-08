import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const STEPS = [
  { n: "01", title: "Espuma quente", text: "A barba abre. Não é aparada no seco." },
  { n: "02", title: "Toalha e navalhete", text: "O corte clássico — a navalha do Andboy." },
  { n: "03", title: "Relax facial", text: "Massageador no ritual, não como extra de menu." },
  { n: "04", title: "Despertar Ice", text: "Fecha frio. Você sai acordado." },
];

export function Ritual() {
  const ref = useReveal();

  return (
    <section className="section ritual" id="ritual">
      <div className="wrap ritual-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">Assinatura</p>
          <h2 className="section-title">O ritual da navalha.</h2>
          <p className="section-lead">
            No Booksy está escrito: ritual exclusivo Andboy Barber. Toalha quente,
            navalhete, espuma quente, relax e gelo. Trinta minutos. R$ 48.
          </p>
          <a className="btn btn-accent" href={SITE.booksy} target="_blank" rel="noreferrer">
            Reservar barba navalha
          </a>
        </div>
        <ol className="ritual-steps">
          {STEPS.map((step) => (
            <li key={step.n}>
              <span>{step.n}</span>
              <div>
                <b>{step.title}</b>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
