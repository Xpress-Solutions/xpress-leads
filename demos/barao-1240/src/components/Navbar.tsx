import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      <header className={`nav${scrolled || open ? " is-scrolled" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio">
            <img src="/logo.svg" alt="" />
            <strong>
              Barão 1240
              <span>Cafeteria · Restaurante</span>
            </strong>
          </a>
          <nav className="nav-links" aria-label="Seções">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <button
            type="button"
            className={`nav-burger${open ? " is-open" : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={`nav-drawer${open ? " is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          Pedir no WhatsApp
        </a>
      </div>
    </>
  );
}
