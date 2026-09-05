import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site";

export function Navbar() {
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 12);
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
      <header className={`nav ${on || open ? "is-on" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" aria-label={SITE.name}>
            <b>Bar e Bar</b>
            <span>Churrascaria</span>
          </a>
          <nav className="nav-links" aria-label="Principal">
            {NAV.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <a className="btn btn-accent nav-cta" href={SITE.reserveHref}>
              Reservar mesa
            </a>
            <button
              className="nav-burger"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              type="button"
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
        <a className="btn btn-accent" href={SITE.reserveHref} onClick={close}>
          Reservar mesa
        </a>
      </div>
    </>
  );
}
