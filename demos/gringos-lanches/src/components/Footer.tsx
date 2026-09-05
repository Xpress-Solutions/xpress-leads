import { SITE, WA_DEFAULT } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div>
          <strong>{SITE.name}</strong>
          {SITE.address}
          <br />
          {SITE.phoneDisplay}
        </div>
        <div>
          <a href={SITE.instagram} target="_blank" rel="noreferrer">
            {SITE.instagramHandle}
          </a>
          <br />
          <a href={WA_DEFAULT} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <br />
          <a href={`tel:${SITE.phoneTel}`}>Ligar</a>
        </div>
      </div>
      <div className="wrap credit">
        Tesouro de Molho: foto Israh Ramos / Revista Sabores do Sul. Demo Xpress —
        não é o site oficial da casa.
      </div>
    </footer>
  );
}
