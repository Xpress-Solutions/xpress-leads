import { useReveal } from "../hooks/useReveal";

const SHOTS = [
  {
    src: "/fotos/interior-poste.jpg",
    title: "Poste, pomada e terracota",
    text: "A parede em escama que se vê pela vitrine da Prazeres.",
  },
  {
    src: "/fotos/interior-cadeira.jpg",
    title: "Cadeira de couro",
    text: "Toalha, navalha e o encosto que segura a cabeça na barba terapia.",
  },
  {
    src: "/fotos/interior-terracota.jpg",
    title: "Old school, sem cenário de stock",
    text: "Retratos P&B, madeira e o espelho da bancada.",
  },
] as const;

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap reveal" ref={ref}>
        <p className="section-kicker">A casa</p>
        <h2 className="section-title">Marinho na rua. Terracota por dentro.</h2>
        <p className="section-lead">
          Fachada navy, grade amarela, logo no vidro. Dentro: parede laranja com relevo,
          poste clássico, cadeira de couro e o cheiro de toalha quente.
        </p>
        <div className="casa-grid">
          {SHOTS.map((shot) => (
            <article className="casa-card" key={shot.src}>
              <img src={shot.src} alt={shot.title} />
              <div>
                <h3>{shot.title}</h3>
                <p>{shot.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
