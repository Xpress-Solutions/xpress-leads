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
            {SITE.address.place}
            <br />
            {SITE.address.neighborhood}, {SITE.address.city}
          </p>
        </div>
        <div>
          <strong>No site</strong>
          <p>
            <a href="#jogos">Jogos</a>
            <br />
            <a href="#farroupilha">Farroupilha</a>
            <br />
            <a href="#localizacao">Como chegar</a>
          </p>
        </div>
        <div>
          <strong>Fale com a casa</strong>
          <p>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <br />
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            <br />
            <a href={SITE.maps} target="_blank" rel="noreferrer">
              Google Maps
            </a>
          </p>
        </div>
      </div>
      <div className="wrap foot-copy">
        Demo Xpress · {SITE.name} · Canoas/RS · foto do petisco: Comida di Buteco / Israh Ramos
      </div>
    </footer>
  );
}
