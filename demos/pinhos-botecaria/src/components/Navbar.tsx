import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site";

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
            <img src="/logo.svg" alt="" />
            <span className="nav-word">{SITE.wordmark}</span>
          </a>
          <nav className="nav-links" aria-label="Principal">
            {NAV.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <a className="btn btn-accent nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <button
              className="burger"
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
      <div className={`drawer ${open ? "is-open" : ""}`}>
        {NAV.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          Reservar no WhatsApp
        </a>
      </div>
    </>
  );
}
