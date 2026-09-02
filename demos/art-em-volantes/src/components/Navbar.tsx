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
            <img src="/logo.png" alt="" width={44} height={44} />
            <span className="nav-brand">art em volantes</span>
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
            <a className="nav-call" href={`tel:${SITE.phoneTel}`}>
              Ligar
            </a>
            <a className="btn btn-primary nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Orçamento
            </a>
            <button
              className={`nav-burger ${open ? "is-open" : ""}`}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              type="button"
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
          Pedir orçamento
        </a>
      </div>
    </>
  );
}
