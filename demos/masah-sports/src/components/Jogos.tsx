import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const LINES = [
  { when: "Noite de semana", what: "Brasileirão, Libertadores e o jogo que o bairro pede." },
  { when: "Sábado", what: "Salão com TVs. Chopp. Farroupilha se ainda tiver." },
  { when: "Domingo", what: "Almoço curto — 11h30 às 16h. Confirma o placar no Zap." },
];

export function Jogos() {
  const ref = useReveal();
  return (
    <section className="section jogos" id="jogos">
      <div className="wrap reveal" ref={ref}>
        <p className="kicker">Placar da semana</p>
        <h2 className="title">O que passa hoje.</h2>
        <p className="lead">
          Sports bar vive de agenda. O Masah! avisa jogo pelo WhatsApp — o site só aponta o caminho
          até a conversa, sem inventar escalação.
        </p>
        <div className="scoreboard">
          {LINES.map((row) => (
            <div className="score-row" key={row.when}>
              <b>{row.when}</b>
              <span>{row.what}</span>
            </div>
          ))}
        </div>
        <p className="score-note">
          Manda um Zap e pergunta a escalação. Sem site de terceiros no meio.
        </p>
        <div className="hero-actions" style={{ marginTop: 16 }}>
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Pedir os jogos no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
