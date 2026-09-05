import { useEffect, useState } from "react";
import { NAV, SITE, WA_DEFAULT } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
      <header className={`nav ${scrolled || open ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" aria-label={SITE.name}>
            {SITE.shortName}
            <span>Lanches · São João</span>
          </a>
          <nav className="nav-links" aria-label="Principal">
            {NAV.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="nav-cta" href={WA_DEFAULT} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
          <button
            className={`nav-burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      {open ? (
        <nav className="nav-drawer" aria-label="Mobile">
          {NAV.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={WA_DEFAULT} target="_blank" rel="noreferrer">
            Pedir no WhatsApp
          </a>
        </nav>
      ) : null}
    </>
  );
}
