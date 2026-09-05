import { OFFICIO } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Oficio() {
  const ref = useReveal();

  return (
    <section className="section oficio" id="churrasco">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="kicker">O ofício</p>
          <h2 className="title">Churrasco. Almoço. Mesa marcada.</h2>
          <p className="lead">
            Casa de cidade, não rodízio de avenida. O nome vem duplicado — Bar e Bar — e o
            prato vem da brasa.
          </p>
        </div>
        <div className="oficio-grid">
          {OFFICIO.map((item) => (
            <article className="oficio-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
