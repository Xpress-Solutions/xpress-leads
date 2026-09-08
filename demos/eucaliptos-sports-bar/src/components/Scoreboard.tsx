import { useReveal } from "../hooks/useReveal";

const CELLS = [
  { value: "5", label: "TVs de jogo" },
  { value: "8", label: "Torneiras" },
  { value: "17h", label: "Abre todo dia" },
  { value: "2019", label: "Desde" },
];

export function Scoreboard() {
  const ref = useReveal();

  return (
    <section className="score" aria-label="Placar da casa">
      <div className="wrap">
        <div className="score-grid reveal" ref={ref}>
          {CELLS.map((cell) => (
            <article className="score-cell" key={cell.label}>
              <b>{cell.value}</b>
              <span>{cell.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
