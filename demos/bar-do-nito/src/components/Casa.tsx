import { useReveal } from "../hooks/useReveal";

const PANELS = [
  {
    title: "Palco no térreo",
    text: "Banquinho, violão e voz. A casa se apresenta como a esquina da música brasileira — e só abre com artista no palco.",
  },
  {
    title: "Mesas na calçada",
    text: "A esquina Lucas × Felipe Neri enche mesmo no frio. Casa pequena: uns 65 lugares. Reserva não é frescura.",
  },
  {
    title: "Todas as artes",
    text: "Além da MPB: teatro (Porto Verão Alegre), saraus, cinema e o acervo permanente de retratos da música.",
  },
];

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O sobrado</p>
          <h2 className="section-title">Dois pisos, um palco.</h2>
          <p className="section-lead">
            Decoração que Waschburger manteve: caricaturas, pinturas, letras nas paredes.
            Luz de lâmpada, não de neon.
          </p>
        </div>
        <div className="casa-grid" style={{ marginTop: 28 }}>
          {PANELS.map((panel) => (
            <article className="casa-panel" key={panel.title}>
              <h3>{panel.title}</h3>
              <p>{panel.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
