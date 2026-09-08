import { useReveal } from "../hooks/useReveal";

const SCENES = [
  {
    src: "/scene-calcada.svg",
    title: "Mesa na calçada",
    text: "A sala extra da casa. Sol, concreto, conversa.",
  },
  {
    src: "/scene-cafe.svg",
    title: "Café no balcão",
    text: "Xícara de oficina, não de especialidade.",
  },
  {
    src: "/scene-pf.svg",
    title: "PF do almoço",
    text: "Almoço de bairro na zona norte.",
  },
  {
    src: "/coxinha.svg",
    title: "Coxinha de Buteco",
    text: "O petisco que colocou a garagem no circuito.",
  },
] as const;

export function Gallery() {
  const ref = useReveal();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">Atmosfera</p>
        <h2 className="section-title">O que se vê da rua.</h2>
        <p className="section-lead">
          Ilustrações da casa — garagem, calçada, café e coxinha — sem stock de
          cafeteria genérica.
        </p>
        <div className="gallery-grid">
          {SCENES.map((scene) => (
            <figure className="gallery-card" key={scene.title}>
              <img src={scene.src} alt="" />
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
