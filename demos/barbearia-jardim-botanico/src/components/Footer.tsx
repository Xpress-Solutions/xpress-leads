import { SITE } from "../data/site.ts";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <strong>{SITE.name}</strong>
        <p>
          {SITE.street} · {SITE.neighborhood} · {SITE.city}/{SITE.state}
          <br />
          {SITE.phoneDisplay} · {SITE.hours}
        </p>
        <p className="credits">
          Fotos do jardim: Felisberto (dossel, pórtico, bambu, lago) e Eliezer Pedroso
          (Calliandra), Wikimedia Commons, CC BY 2.0/3.0 — Jardim Botânico de Porto Alegre, o
          nome da casa. Demo Xpress para o lead {SITE.leadId}.
        </p>
      </div>
    </footer>
  );
}
