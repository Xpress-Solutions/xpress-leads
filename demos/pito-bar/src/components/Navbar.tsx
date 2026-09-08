import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site.ts";
import { WhatsAppIcon } from "./WhatsAppIcon.tsx";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      <header className={scrolled || open ? "nav is-on" : "nav"}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" onClick={() => setOpen(false)}>
            {SITE.wordmark}
            <span>.</span>
          </a>
          <nav className="nav-links" aria-label="Seções">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <a className="nav-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a className="btn btn-accent nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <button
              className="nav-burger"
              type="button"
              aria-expanded={open}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={open ? "nav-drawer is-open" : "nav-drawer"}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          Chamar no WhatsApp
        </a>
      </div>
    </>
  );
}
