import { useEffect, useState } from "react";
import { NAV, DISHES, HOURS, REVIEWS, SITE } from "./data.ts";

function PeakMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 40 L32 14 L48 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M24 40 L32 26 L40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 21 12a10.9 10.9 0 0 0-.5-8.5ZM12 20.2a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.2 9.2 0 1 1 12 20.2Zm5.1-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.3-.4.1-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.5 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={scrolled || open ? "nav is-on" : "nav"}>
        <div className="nav-inner">
          <a className="logo" href="#inicio">
            <PeakMark />
            <b>{SITE.wordmark}</b>
          </a>
          <nav className="nav-links" aria-label="Seções">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-accent nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <button
            className="burger"
            type="button"
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
      <div className={open ? "drawer is-open" : "drawer"}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            <img
              src="/fotos/interior.jpg"
              alt=""
            />
          </div>
          <div className="wrap hero-copy">
            <p className="hero-kicker">{SITE.address.neighborhood} · Porto Alegre</p>
            <h1>
              {SITE.wordmark}
              <span>{SITE.tagline}</span>
            </h1>
            <p className="hero-line">{SITE.line}</p>
            <div className="hero-actions">
              <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon /> WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar {SITE.phoneDisplay}
              </a>
            </div>
            <p className="hero-meta">
              <strong>★ {SITE.rating}</strong> no Google · {SITE.reviewsCount} avaliações ·{" "}
              {SITE.hoursLead}
            </p>
          </div>
        </section>

        <section className="section dish" id="popeyeroll">
          <div className="wrap dish-grid">
            <div className="dish-photo">
              <img src="/fotos/popeyeroll.jpg" alt={DISHES[0].alt} />
            </div>
            <div>
              <p className="kicker">{DISHES[0].kicker}</p>
              <h2 className="display">{DISHES[0].name}</h2>
              <p className="lead">{DISHES[0].text}</p>
              <p className="lead">
                O concurso lista Partenon; alguns guias escrevem Glória. O ponto é o mesmo:{" "}
                {SITE.address.street}.
              </p>
              <div className="hero-actions" style={{ marginTop: 22 }}>
                <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  Pedir mesa
                </a>
                <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section menu" id="cardapio">
          <div className="wrap">
            <p className="kicker">Na mesa</p>
            <h2 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
              Cozinha de bar, prato com nome.
            </h2>
            <p className="lead">{SITE.identity}</p>
            <div className="menu-grid">
              {DISHES.map((dish) => (
                <article className="plate" key={dish.name}>
                  <img src={dish.image} alt={dish.alt} />
                  <div>
                    <p className="kicker">{dish.kicker}</p>
                    <h3>{dish.name}</h3>
                    <p>{dish.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="casa">
          <div className="wrap about-grid">
            <div>
              <p className="kicker">A casa</p>
              <h2 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
                Teto preto, tábua com pico.
              </h2>
              <p>
                O Piko se apresenta no letreiro e no cardápio: dois picos num círculo e o nome
                curto. Por dentro, teto preto, pendente industrial e madeira clara — cozinha à
                noite, não landing de restaurante.
              </p>
              <p>
                No Instagram é {SITE.instagramHandle}. No papel do cardápio, o WhatsApp da casa.
                Quem pesquisa o Popeyeroll e erra o bairro chega no bar errado.
              </p>
              <ul className="points">
                <li>Logo de montanha gravado na tábua e impresso no cardápio</li>
                <li>Comida di Buteco em 2024 (Pãoliça) e 2026 (Popeyeroll)</li>
                <li>Xis, hambúrguer e fritas no que a mesa pede no dia a dia</li>
              </ul>
            </div>
            <div className="about-photo">
              <img
                src="/fotos/cardapio-impresso.jpg"
                alt="Cardápio impresso do Piko: logo de pico, PIKO em caixa-alta, WhatsApp e Instagram"
              />
            </div>
          </div>
        </section>

        <section className="section" id="galeria">
          <div className="wrap">
            <p className="kicker">Fotos da casa</p>
            <h2 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
              A noite na Pedro Boticário.
            </h2>
            <div className="gallery-grid">
              <figure>
                <img src="/fotos/interior.jpg" alt="Interior do Piko: mesas de madeira, teto preto e balcão" />
                <figcaption>A sala — teto preto, madeira clara, balcão de concreto</figcaption>
              </figure>
              <figure>
                <img src="/fotos/xis-noite.jpg" alt="Hambúrguer e fritas do Piko à noite" />
                <figcaption>Xis e hambúrguer na frigideira, luz da noite</figcaption>
              </figure>
              <figure>
                <img src="/fotos/croquetes.jpg" alt="Croquetes do Piko em panela de alumínio" />
                <figcaption>Petisco da casa no alumínio</figcaption>
              </figure>
              <figure>
                <img src="/fotos/paolica.jpg" alt="Pãoliça na tábua com logo PIKO" />
                <figcaption>Pãoliça — a tábua com o PIKO gravado</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section reviews" id="avaliacoes">
          <div className="wrap">
            <p className="kicker">Google</p>
            <p className="score">{SITE.rating}</p>
            <p className="lead">
              {SITE.reviewsCount} avaliações públicas. Casa calma, comida de bar, preço na faixa{" "}
              {SITE.priceRange}.
            </p>
            <div className="rev-grid">
              {REVIEWS.map((review) => (
                <figure className="rev" key={review.name}>
                  <figcaption>
                    <strong>{review.name}</strong> · {review.source}
                  </figcaption>
                  <p>“{review.quote}”</p>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="local">
          <div className="wrap">
            <p className="kicker">O ponto</p>
            <h2 className="display" style={{ fontSize: "clamp(2.6rem, 7vw, 4.6rem)" }}>
              {SITE.address.street}
            </h2>
            <p className="lead">{SITE.address.full}</p>
            <div className="loc-grid">
              <div className="loc-map">
                <iframe
                  title="Mapa do Piko Bar e Cozinha"
                  src={SITE.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="hours">
                <p className="kicker">Horário</p>
                <strong className="display" style={{ fontSize: "2rem" }}>
                  {SITE.hoursLead}
                </strong>
                <ul>
                  {HOURS.map((row) => (
                    <li key={row.day} className={row.night ? "is-night" : undefined}>
                      <span>{row.day}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="hours-note">{SITE.hoursNote}</p>
                <div className="hero-actions" style={{ marginTop: 18 }}>
                  <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
                    Abrir mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <div className="final-box">
              <p className="kicker">A noite é curta</p>
              <h2 className="display">Vem no Piko.</h2>
              <p className="lead" style={{ color: "rgba(243,239,230,0.82)" }}>
                Popeyeroll, xis e o ponto certo entre Partenon e Glória.
              </p>
              <div className="final-actions">
                <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <WhatsAppIcon /> Falar no WhatsApp
                </a>
                <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                  Ligar
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a className="logo" href="#inicio">
                <PeakMark />
                <b>{SITE.wordmark}</b>
              </a>
              <p>
                {SITE.name}
                <br />
                {SITE.address.full}
              </p>
            </div>
            <div>
              <p className="kicker">Contato</p>
              <p>
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp {SITE.phoneDisplay}
                </a>
                <br />
                <a href={SITE.instagram} target="_blank" rel="noreferrer">
                  {SITE.instagramHandle}
                </a>
              </p>
            </div>
            <div>
              <p className="kicker">Aviso</p>
              <p>
                Demo de site para a casa. Horário e cardápio conforme listagens públicas —
                confirme no balcão.
              </p>
            </div>
          </div>
          <p className="foot-copy">Piko Bar e Cozinha · Porto Alegre · demo Xpress</p>
        </div>
      </footer>

      <a
        className="fab"
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp do Piko"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
