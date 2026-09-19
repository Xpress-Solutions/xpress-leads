"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NAV, SITE, type NavHref } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavHref | "#inicio">("#inicio");
  const titleRef = useRef<HTMLSpanElement>(null);
  const mlpRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const mlp = mlpRef.current;
    if (!title || !mlp) return;

    const fitTitleWidth = () => {
      const target = mlp.getBoundingClientRect().width;
      if (target <= 0) return;

      let low = 6;
      let high = 64;
      title.style.letterSpacing = "normal";
      title.style.whiteSpace = "nowrap";
      title.style.display = "block";

      for (let i = 0; i < 24; i++) {
        const mid = (low + high) / 2;
        title.style.fontSize = `${mid}px`;
        const width = title.getBoundingClientRect().width;
        if (width < target) low = mid;
        else high = mid;
      }

      title.style.fontSize = `${high}px`;
    };

    const run = () => {
      fitTitleWidth();
      requestAnimationFrame(fitTitleWidth);
    };

    run();
    void document.fonts.ready.then(run);

    const observer = new ResizeObserver(run);
    observer.observe(mlp);
    window.addEventListener("resize", run);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", run);
    };
  }, []);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      setHidden(y > last && y > 130 && !open);
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
    const ids = ["inicio", "servicos", "galeria", "oficina", "onde"];
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible?.target.id) return;
        setActive(`#${visible.target.id}` as NavHref | "#inicio");
      },
      { threshold: [0.22, 0.42], rootMargin: "-16% 0px -48% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled || open ? "bg-[#0c0c0e]/90 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl" : "bg-transparent"}`}
      >
        <div className="page-pad flex h-[5.1rem] items-center justify-between md:h-[5.9rem]">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 md:gap-3"
            onClick={() => setOpen(false)}
            aria-label="Estética Automotiva MLP"
          >
            <span className="inline-flex flex-col items-start leading-none">
              <span
                ref={titleRef}
                className="block whitespace-nowrap text-white italic"
              >
                Estética Automotiva
              </span>
              <span
                ref={mlpRef}
                className="font-display block text-[2.65rem] leading-[0.8] font-extrabold tracking-[-0.045em] text-[#c4121f] italic md:text-[3.2rem]"
              >
                MLP
              </span>
            </span>
            <img
              src="/fotos/logo-car.png"
              alt=""
              className="h-11 w-auto object-contain md:h-[3.7rem]"
              aria-hidden="true"
            />
          </a>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative text-[0.7rem] tracking-[0.2em] uppercase ${
                  active === item.href ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px w-full origin-left bg-[#c4121f] transition-transform duration-500 ${
                    active === item.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-red rounded-full bg-[#97000e] px-5 py-2.5 text-[0.68rem] font-semibold tracking-[0.16em] text-white uppercase"
            >
              Orçamento
            </a>
          </nav>
          <button
            className="relative flex h-11 w-11 items-center justify-center lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute h-px w-5 bg-white transition ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-px w-5 bg-white transition ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-[#0c0c0e] px-8 pt-28 transition-all duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-5xl font-semibold italic tracking-wide"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="mt-4 text-sm tracking-[0.18em] text-[#c4121f] uppercase">
            {SITE.instagramHandle}
          </a>
        </div>
      </div>
    </>
  );
}
