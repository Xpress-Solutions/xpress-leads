import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site.ts";
import { Mark } from "./Mark.tsx";

export function Navbar() {
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${on || open ? "is-on" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" aria-label={SITE.name}>
            <Mark />
            <span>Jardim Botânico</span>
          </a>
          <nav className="nav-links" aria-label="Principal">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <a className="nav-phone" href={`tel:${SITE.phoneTel}`}>
              {SITE.phoneDisplay}
            </a>
            <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Agendar
            </a>
            <button
              className="burger"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <i />
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>
      <div className={`drawer ${open ? "is-open" : ""}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </>
  );
}
