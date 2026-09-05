import { SITE } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <img src="/logo.jpeg" alt="" width={44} height={44} />
          <div>
            <strong>Los Pepes Barbearia</strong>
            <p>
              {SITE.address.street} · {SITE.address.city}
            </p>
          </div>
        </div>
        <p className="footer-note">Marca própria. Agenda da casa — não um app de marketplace.</p>
      </div>
    </footer>
  );
}
