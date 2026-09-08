import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  {
    src: "/fotos/fachada.png",
    alt: "Fachada ocre da Clamar na Avenida da Azenha, letreiro-caixa ao entardecer",
    caption: "1044 · Azenha",
  },
  {
    src: "/fotos/salao.png",
    alt: "Salão com toalhas creme e cadeiras de madeira",
    caption: "O salão",
  },
  {
    src: "/fotos/carnes.png",
    alt: "Picanha e costela no prato branco da casa",
    caption: "O prato",
  },
] as const;

export function Galeria() {
  const ref = useReveal();

  return (
    <section className="section" id="galeria">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">A porta e a mesa</p>
        <h2 className="section-title">Fachada, salão, carne.</h2>
        <p className="section-lead">
          A casa não publica fotos oficiais. Esta vitrine reconstitui o 1044 — avenida,
          toalha creme, prato sem pose.
        </p>
        <div className="galeria-grid">
          {SHOTS.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt} />
              <figcaption>{shot.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
