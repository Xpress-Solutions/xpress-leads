import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <img src={SITE.logo} alt="" width={160} height={83} />
          <strong>{SITE.name}</strong>
          <em>{SITE.tagline}</em>
          <p>
            {SITE.address.street}
            <br />
            {SITE.address.neighborhood} — {SITE.address.city}/{SITE.address.state}
          </p>
          <p>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </p>
        </div>
        <div className="foot-links">
          <strong>No site</strong>
          <a href="#agenda">Agenda</a>
          <a href="#feijoada">Feijoada</a>
          <a href="#sobre">A casa</a>
          <a href="#localizacao">Onde estamos</a>
        </div>
        <div className="foot-social">
          <strong>Fale com o sobrado</strong>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp (51) 99717-4066
          </a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            Instagram {SITE.instagramHandle}
          </a>
          <a href={SITE.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={SITE.youtube} target="_blank" rel="noreferrer">
            YouTube · Esquina da Cultura
          </a>
        </div>
      </div>
      <div className="wrap foot-copy">
        Apresentação demonstrativa · {SITE.name} · Auxiliadora, Porto Alegre · desde {SITE.founded}
      </div>
    </footer>
  );
}
