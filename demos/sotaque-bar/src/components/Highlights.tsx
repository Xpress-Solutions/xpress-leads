import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  {
    title: "Bolinho Abel Ferreira",
    text: "Pernil e aipim. Mesmo quem não torce pro Palmeiras pede.",
    image: "/fotos/pass.jpg",
    alt: "Pass da cozinha do Sotaque, onde o chef prepara o bolinho",
  },
  {
    title: "Buraco quente",
    text: "Sanduíche de boteco, quente, para comer olhando a avenida.",
    image: "/fotos/balcao.jpg",
    alt: "Balcão de madeira e prateleiras do bar",
  },
  {
    title: "Janelões na calçada",
    text: "A mesa de dentro e a de fora são a mesma conversa.",
    image: "/fotos/pilar.jpg",
    alt: "Janelão da fachada verde com mesa na calçada",
  },
];

export function Highlights() {
  const ref = useReveal();

  return (
    <section className="section destaques" id="destaques">
      <div className="wrap">
        <div className="reveal" ref={ref}>
          <p className="section-kicker">O que pede a mesa</p>
          <h2 className="section-title">Abel Ferreira e buraco quente.</h2>
          <p className="section-lead">
            Receitas simples, preparadas por chef. O bolinho é a estrela; o resto da
            mesa acompanha sem firula.
          </p>
        </div>
        <div className="hi-grid">
          {ITEMS.map((item) => (
            <article className="hi-card" key={item.title}>
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
