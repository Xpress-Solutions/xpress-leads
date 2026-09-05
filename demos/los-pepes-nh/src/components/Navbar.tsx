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
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" aria-label={SITE.name}>
            <img src="/logo.jpeg" alt="" width={48} height={48} />
            <span className="nav-brand">Los Pepes</span>
          </a>

          <nav className="nav-links" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-end">
            <a className="btn btn-accent nav-cta" href={SITE.booksy} target="_blank" rel="noreferrer">
              Agendar
            </a>
            <button
              className="nav-burger"
              type="button"
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
              <i />
              <i />
              <i />
            </button>
          </div>
        </div>
      </header>

      <div className={`nav-drawer ${open ? "is-open" : ""}`} id="menu-mobile">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.booksy} target="_blank" rel="noreferrer">
          Agendar horário
        </a>
      </div>
    </>
  );
}
