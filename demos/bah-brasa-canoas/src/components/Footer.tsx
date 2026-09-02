import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <strong>{SITE.name}</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
          </p>
        </div>
        <div>
          <strong>No site</strong>
          <p>
            <a href="#bolinho">O bolinho</a>
            <br />
            <a href="#localizacao">Onde estamos</a>
            <br />
            <a href={SITE.maps} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </p>
        </div>
        <div>
          <strong>Circuito</strong>
          <p>
            {SITE.contest.name}
            <br />
            {SITE.contest.dish}
          </p>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · {SITE.address.neighborhood}, {SITE.address.city}.
        WhatsApp público da casa não está listado — o Zap da demo chama o grupo com o endereço.
      </div>
    </footer>
  );
}
