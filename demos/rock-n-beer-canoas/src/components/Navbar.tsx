import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      <header className={scrolled ? "nav is-scrolled" : "nav"}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio">
            <img src="/logo.svg" alt="" />
            {SITE.shortName}
          </a>
          <nav className="nav-links" aria-label="Seções">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <a className="nav-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a className="btn btn-ghost nav-call" href={`tel:${SITE.phoneTel}`}>
              Ligar
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={open ? "nav-drawer is-open" : "nav-drawer"}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </>
  );
}
