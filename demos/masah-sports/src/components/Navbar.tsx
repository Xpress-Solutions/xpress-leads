import { useEffect, useState } from "react";
import { NAV, SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
          <a className="nav-logo" href="#inicio" onClick={() => setOpen(false)}>
            {SITE.shout}
          </a>
          <nav className="nav-links" aria-label="Principal">
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
              Jogos da semana
            </a>
            <button
              className="burger"
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
      <div className={`drawer ${open ? "is-open" : ""}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer" style={{ marginTop: 16, width: "fit-content" }}>
          WhatsApp
        </a>
      </div>
    </>
  );
}
