import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" aria-label={SITE.name}>
            <small>Lanches</small>
            <strong>Nova Bréscia</strong>
          </a>

          <nav className="nav-links" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-end">
            <a className="btn btn-ghost nav-cta" href={`tel:${SITE.phoneTel}`}>
              Ligar
            </a>
            <button
              className="nav-burger"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className="checker" aria-hidden="true" />

      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`} onClick={() => setOpen(false)}>
          Ligar {SITE.phoneDisplay}
        </a>
      </div>
    </>
  );
}
