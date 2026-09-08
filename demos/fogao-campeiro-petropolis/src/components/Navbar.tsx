import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";

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
      <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="nav-bar">
          <div className="nav-inner">
            <a className="nav-logo" href="#inicio" aria-label={SITE.name}>
              <img src="/logo.svg" alt="" />
              Fogão Campeiro
            </a>
            <nav className="nav-links" aria-label="Principal">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="nav-end">
              <a className="btn btn-primary nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
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
        </div>
        <div className="checker" aria-hidden="true" />
      </header>
      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
      </div>
    </>
  );
}
