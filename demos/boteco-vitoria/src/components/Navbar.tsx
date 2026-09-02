import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, SITE } from "../data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname, location.hash]);

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
          <Link to="/" className="nav-logo" aria-label={SITE.name}>
            <img src="/logo.png" alt="" />
            <span className="nav-brand">Boteco Vitória</span>
          </Link>

          <nav className="nav-links" aria-label="Principal">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  isActive && link.href !== "/#destaques" && location.pathname === link.href
                    ? "is-active"
                    : undefined
                }
              >
                {link.label}
              </NavLink>
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
            <a className="nav-maps" href={SITE.maps} target="_blank" rel="noreferrer">
              Como chegar
            </a>
            <Link className="btn btn-primary nav-cta" to="/cardapio">
              Ver cardápio
            </Link>
            <button
              className={`nav-burger ${open ? "is-open" : ""}`}
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
        {NAV_LINKS.map((link) => (
          <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="btn btn-primary" to="/cardapio" onClick={() => setOpen(false)}>
          Ver cardápio
        </Link>
      </div>
    </>
  );
}
