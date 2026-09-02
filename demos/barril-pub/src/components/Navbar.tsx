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

  return (
    <>
      <header className={`nav ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-logo" aria-label={SITE.name}>
            <img src="/logo.svg" alt="" />
            <span className="nav-brand">Barril Pub</span>
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
            <a className="btn btn-ghost nav-call" href={`tel:${SITE.phoneTel}`}>
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

      <nav className={`nav-drawer ${open ? "is-open" : ""}`} aria-label="Menu móvel">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </nav>
    </>
  );
}
