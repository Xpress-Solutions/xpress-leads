import { useEffect, useState } from "react";
import { SITE } from "../data/site.ts";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#petisco", label: "Bruscheta" },
  { href: "#casa", label: "A casa" },
  { href: "#na-cipo", label: "Na Cipó" },
] as const;

export function Navbar() {
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOn(window.scrollY > 10);
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
      <header className={`nav ${on || open ? "is-on" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" aria-label={SITE.name}>
            <img src="/logo.svg" alt="" />
            <span>Golden Bull</span>
          </a>
          <nav className="nav-links" aria-label="Principal">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-gold nav-cta" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
          <button
            className="nav-burger"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i />
            <i />
            <i />
          </button>
        </div>
      </header>
      <div className={`drawer ${open ? "is-open" : ""}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-gold" href={SITE.maps} target="_blank" rel="noreferrer">
          Como chegar
        </a>
      </div>
    </>
  );
}
