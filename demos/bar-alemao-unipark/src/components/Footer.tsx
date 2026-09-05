import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src="/logo.png" alt={SITE.name} />
          <strong>{SITE.name}</strong>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood}
            <br />
            {SITE.address.city} — {SITE.address.state}
          </p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#cardapio">Cardápio</a>
          <a href="#sinuca">Sinuca</a>
          <a href="#acesso-2">Acesso 2</a>
          <a href="#sobre">Sobre</a>
        </div>
        <div className="foot-social">
          <strong>Fale com a casa</strong>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">
            Facebook · Unipark
          </a>
          <a href={SITE.maps} target="_blank" rel="noreferrer">
            Google Maps
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Demo Xpress · {SITE.name} · não é o Alemão da Floresta. Preços e horários: confirme na
        casa.
      </div>
    </footer>
  );
}
