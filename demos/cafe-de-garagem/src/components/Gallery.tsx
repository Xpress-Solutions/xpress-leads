import { PHOTOS } from "../data/photos";
import { useReveal } from "../hooks/useReveal";

const SCENES = [
  {
    src: PHOTOS.calcada,
    alt: "Mesa na calçada da Ten-Caten: coxinha do circuito, mascote do Comida di Buteco e o letreiro amarelo do Café de Garagem",
    title: "Mesa na calçada",
    text: "A sala extra da casa. Sol, concreto, conversa.",
  },
  {
    src: PHOTOS.cafe,
    alt: "Cafezinho numa mesa branca da calçada, com o portão preto da garagem ao fundo",
    title: "Café no balcão",
    text: "Xícara de oficina, não de especialidade.",
  },
  {
    src: PHOTOS.pf,
    alt: "Prato feito na calçada do Café de Garagem: arroz, feijão, bife, ovo e salada",
    title: "PF do almoço",
    text: "Almoço de bairro na zona norte.",
  },
  {
    src: PHOTOS.coxinha,
    alt: "Coxinha de Buteco no prato com a marca Café de Garagem, foto Israh Ramos",
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
          Fotos da casa — garagem, calçada, café e coxinha — sem stock de
          cafeteria genérica.
        </p>
        <div className="gallery-grid">
          {SCENES.map((scene) => (
            <figure className="gallery-card" key={scene.title}>
              <img src={scene.src} alt={scene.alt} />
              <h3>{scene.title}</h3>
              <p>{scene.text}</p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
