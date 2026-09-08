import { GlassMark } from "./GlassMark";
import { useReveal } from "../hooks/useReveal";

const CARDS = [
  {
    title: "Copo baixo de bojo",
    text: "Nino: não precisa ser complicado. Por isso a casa serve no copo, não na taça com haste.",
  },
  {
    title: "Vela na mesa",
    text: "Velas Índigo em cada mesa. Perfume da casa com nota de oliveira e folha de tomate.",
  },
  {
    title: "Traço local",
    text: "Fachada do Athos. Banheiro da Lara Fuke. Produto gaúcho do pequeno ao copo.",
  },
];

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa</p>
        <h2 className="section-title">Parede vermelha, porta de aço, 871.</h2>
        <p className="section-lead">
          Era mercadinho. Hoje são duas portas de enrolar na Venâncio, recuo de calçada e
          o copo desenhado no vermelho-tijolo.
        </p>
        <div className="casa-grid">
          {CARDS.map((card) => (
            <article className="casa-card" key={card.title}>
              <div className="casa-illus" style={{ color: "#F3EDE3" }}>
                <GlassMark />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
