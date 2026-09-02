import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site";
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
      <header className={`nav ${scrolled || open ? "is-on" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="nav-logo" onClick={close}>
            <span className="nav-mark">G</span>
            {SITE.shortName}
          </a>
          <nav className="nav-links" aria-label="Principal">
            {NAV.map((link) => (
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
            <a className="btn btn-brand nav-cta" href={`tel:${SITE.phoneTel}`}>
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
      <div className={`nav-drawer ${open ? "is-open" : ""}`}>
        {NAV.map((link) => (
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          Orçamento no WhatsApp
        </a>
      </div>
    </>
  );
}
