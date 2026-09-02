import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site.ts";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " open" : ""}`}>
      <div className="nav-inner">
        <a className="nav-mark" href="#inicio" onClick={() => setOpen(false)}>
          <strong>Cappellari & Radin</strong>
          <span>Marmoraria · Ipiranga</span>
        </a>
        <nav className="nav-links" aria-label="Seções">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Orçamento
          </a>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>
    </header>
  );
}
