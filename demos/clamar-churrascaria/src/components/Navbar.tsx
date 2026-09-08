import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "../data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
            {SITE.shortName}
            <small>Azenha · 1044</small>
          </a>
          <nav className="nav-links" aria-label="Seções">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-accent nav-cta" href={`tel:${SITE.phoneTel}`}>
            Ligar
          </a>
          <button
            type="button"
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
      </header>
      <div className={open ? "nav-drawer is-open" : "nav-drawer"}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-accent" href={`tel:${SITE.phoneTel}`} style={{ marginTop: 16, width: "fit-content" }}>
          {SITE.phoneDisplay}
        </a>
      </div>
    </>
  );
}
