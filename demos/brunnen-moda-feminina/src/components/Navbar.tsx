"use client";

import { useEffect, useState } from "react";
import { NAV, SITE, type NavHref } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavHref | "#inicio">("#inicio");

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 18);
      setHidden(y > last && y > 140 && !open);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = ["inicio", "colecao", "lookbook", "casa", "onde"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        const hash = `#${visible.target.id}` as NavHref | "#inicio";
        setActive(hash);
      },
      { threshold: [0.25, 0.45], rootMargin: "-18% 0px -45% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled || open
            ? "bg-[#171411]/88 text-[#f4ece3] shadow-[0_18px_50px_rgba(23,20,17,0.18)] backdrop-blur-xl"
            : "bg-transparent text-white"
        }`}
      >
        <div className="page-pad flex h-[4.6rem] items-center justify-between md:h-[5.1rem]">
          <a
            href="#inicio"
            className="font-display text-[1.35rem] tracking-[0.34em] md:text-[1.5rem]"
            onClick={() => setOpen(false)}
          >
            BRUNNEN
          </a>
          <nav className="hidden items-center gap-9 lg:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[0.68rem] tracking-[0.22em] uppercase transition-opacity ${
                  active === item.href ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-[#c4a574] transition-transform duration-500 ${
                    active === item.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-gold rounded-full bg-[#c4a574] px-5 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-[#171411] uppercase"
            >
              WhatsApp
            </a>
          </nav>
          <button
            className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute h-px w-5 bg-current transition ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
            />
            <span className={`absolute h-px w-5 bg-current transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span
              className={`absolute h-px w-5 bg-current transition ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#171411] px-8 pt-28 text-[#f4ece3] transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          {NAV.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-5xl italic leading-none"
              style={{ transitionDelay: `${index * 60}ms` }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-6 text-sm tracking-[0.2em] text-[#c4a574] uppercase"
          >
            {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </>
  );
}
