import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

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

  const close = () => setOpen(false);

  return (
    <>
      <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-logo" aria-label={SITE.name}>
            <img src="/logo.jpeg" alt="" />
            <span className="nav-brand">107</span>
          </a>

          <nav className="nav-links" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-end">
            <a
              className="nav-wa"
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a className="btn btn-primary nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Agendar
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
        </div>
      </header>

      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-primary" href={SITE.whatsapp} target="_blank" rel="noreferrer" onClick={close}>
          Agendar no WhatsApp
        </a>
      </div>
    </>
  );
}
