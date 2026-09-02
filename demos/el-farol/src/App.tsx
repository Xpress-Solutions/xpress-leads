import { useEffect, useState } from "react";
import { GALLERY, HOURS, MENU, NAV, SITE } from "./data/site";

function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 21.5 4.6l-.1-.1ZM12 20.2a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-3.5.7.7-3.4-.2-.4A9.2 9.2 0 1 1 12 20.2Zm5-6.8c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1s-.7.9-.9 1.1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.3c0-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3a2.1 2.1 0 0 0-.7 1.6 3.7 3.7 0 0 0 .8 2c.1.1 1.4 2.2 3.5 3 2 .9 2 .6 2.4.6.4 0 1.2-.5 1.4-1s.2-.9.1-1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function LanternMark() {
  return (
    <svg className="nav-mark" viewBox="0 0 36 36" aria-hidden="true">
      <rect width="36" height="36" rx="4" fill="#173328" />
      <path d="M16.2 6h3.6v2.2h-3.6z" fill="#E6B84A" />
      <path d="M12.4 9.4h11.2l1.2 3.2H11.2z" fill="#E6B84A" />
      <path d="M12.2 13.2h11.6v10.2c0 1.4-2.6 2.4-5.8 2.4s-5.8-1-5.8-2.4z" fill="#E6B84A" />
      <path d="M14.4 14.6h2.2v7.2h-2.2zm5 0h2.2v7.2H19.4z" fill="#0A110E" opacity="0.35" />
      <path d="M17.2 26.2h1.6V30h-1.6z" fill="#E6B84A" />
      <ellipse cx="18" cy="31.2" rx="3.4" ry="1.1" fill="#E6B84A" />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
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
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className={`nav ${scrolled || open ? "is-on" : ""}`}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio" aria-label={SITE.name} onClick={close}>
            <LanternMark />
            <span className="nav-word">
              {SITE.name}
              <small>Porteño</small>
            </span>
          </a>
          <nav className="nav-links" aria-label="Principal">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="nav-end">
            <a className="btn btn-accent nav-cta" href={SITE.whatsapp} target="_blank" rel="noreferrer">
              Reservar
            </a>
            <button
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
        </div>
      </header>

      <div className={`drawer ${open ? "is-open" : ""}`}>
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer" onClick={close}>
          WhatsApp
        </a>
      </div>

      <div id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            <img
              src="/fotos/hero.jpg"
              alt=""
            />
          </div>
          <div className="wrap hero-content">
            <p className="hero-kicker">Rio Branco · Porto Alegre</p>
            <h1>{SITE.headline}</h1>
            <p className="hero-porte">Porteño</p>
            <p>{SITE.line}</p>
            <div className="hero-actions">
              <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
        <div className="arg-stripe" aria-hidden="true" />

        <section className="strip" aria-label="Informações rápidas">
          <div className="wrap strip-grid">
            <div>
              <b>{SITE.hours.split(" · ")[0]}</b>
              <span>Segunda fechado</span>
            </div>
            <div>
              <b>{SITE.address.street}</b>
              <span>{SITE.address.neighborhood}</span>
            </div>
            <div>
              <b>Milonga de quinta</b>
              <span>Tango no Caminito da Mariante</span>
            </div>
            <div>
              <b>Desde {SITE.founded}</b>
              <span>{SITE.owner}</span>
            </div>
          </div>
        </section>

        <section className="section casa" id="casa">
          <div className="wrap casa-grid">
            <div className="casa-copy">
              <p className="kicker">A casa</p>
              <h2 className="section-title">Ponto da comunidade platina.</h2>
              <p>
                Alfredo Navarro abriu o El Farol em 2009 para ter, em Porto Alegre, o lugar que
                sentia falta: um encontro argentino de verdade. Empanada, milanesa, entrecot,
                fernet com Coca e a milonga de quinta — típica do Caminito — são a casa, não um
                tema de cardápio.
              </p>
              <p>
                Os gaúchos se reconhecem no mate, no futebol e no assado. Por isso a Mariante 855
                virou reduto também de uruguaios, colombianos e de quem só quer um copo de fernet
                na garrafa cortada.
              </p>
              <ul className="casa-points">
                <li>Quinze anos na Mariante, sem site oficial até esta página.</li>
                <li>Comida di Buteco 2026: Sanduíche Del 10.</li>
                <li>Luz baixa, bandeiras, tango na parede — boteco porteño, não restaurante de pose.</li>
              </ul>
            </div>
            <div className="casa-photo">
              <img
                src="/fotos/interior.jpg"
                alt="Salão do El Farol com mural de tango, casas do Caminito e toalhas xadrez"
              />
              <div className="casa-badge">Luz de farol, parede de tango, mesa de bodegón.</div>
            </div>
          </div>
        </section>

        <section className="section menu" id="cardapio">
          <div className="wrap">
            <p className="kicker">Cardápio</p>
            <h2 className="section-title">O que a casa manda.</h2>
            <p className="section-lead">
              Empanadas de massa caseira, milanesa, entrecot e o fernet que já estava no balcão
              antes da moda. Preço do dia no salão — aqui vai o que é da casa.
            </p>
            <div className="menu-grid">
              {MENU.map((item) => (
                <article className="dish" key={item.name}>
                  <img src={item.photo} alt={item.name} />
                  <div className="dish-body">
                    <span className="dish-tag">{item.tag}</span>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="milonga" id="milonga">
          <div className="milonga-bg" aria-hidden="true">
            <img src="/fotos/caminito.jpg" alt="" />
          </div>
          <div className="wrap">
            <p className="kicker">Toda quinta</p>
            <h2 className="section-title">A milonga do Caminito.</h2>
            <p className="section-lead">
              Casais das escolas da cidade, valsa e tango à meia-luz. Alfredo trouxe o Ocho
              Adelante para a Mariante há mais de uma década — e a quinta ficou sendo a noite do
              Farol. Nas outras, o tango segue nas caixas e no fernet.
            </p>
            <div className="hero-actions" style={{ marginTop: 22 }}>
              <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                Reservar a quinta
              </a>
              <a className="btn btn-ghost" href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="galeria">
          <div className="wrap">
            <p className="kicker">Galeria</p>
            <h2 className="section-title">A casa, sem stock.</h2>
            <div className="gallery-grid">
              {GALLERY.map((shot) => (
                <figure key={shot.src}>
                  <img src={shot.src} alt={shot.alt} />
                </figure>
              ))}
            </div>
            <p className="gallery-note">
              Fotos da casa: Evandro Oliveira / Jornal do Comércio (2024), Sabina Fuhr / Sabores do
              Sul, Israh Ramos / Comida di Buteco.
            </p>
          </div>
        </section>

        <section className="section local" id="onde">
          <div className="wrap">
            <p className="kicker">Onde</p>
            <h2 className="section-title">Mariante, 855.</h2>
            <p className="section-lead">{SITE.address.full}</p>
            <div className="loc-grid">
              <div className="loc-map">
                <iframe
                  title="Mapa do El Farol na Rua Mariante"
                  src={SITE.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="hours">
                <p className="kicker">Horários</p>
                <strong style={{ fontFamily: "var(--display)", fontSize: "2rem" }}>
                  {SITE.hours.split(" · ")[0]}
                </strong>
                <ul className="hours-list">
                  {HOURS.map((row) => (
                    <li key={row.day} className={row.day === "Quinta" ? "is-qui" : undefined}>
                      <span>{row.day}</span>
                      <span>{row.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="hours-note">{SITE.hoursNote}</p>
                <div className="loc-actions">
                  <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    WhatsApp
                  </a>
                  <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
                    Como chegar
                  </a>
                  <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                    Ligar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <div className="final-box">
              <p className="kicker">Reserva</p>
              <h2>O farol está aceso.</h2>
              <p className="section-lead">
                Mesa, milonga ou só o fernet na garrafa cortada. Manda no WhatsApp — a casa
                atende.
              </p>
              <div className="final-actions">
                <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <WhatsAppIcon size={18} /> Pedir mesa
                </a>
                <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="wrap foot-grid">
          <div>
            <LanternMark />
            <p className="nav-word" style={{ marginTop: 10 }}>
              {SITE.fullName}
              <small>Desde {SITE.founded} · Rio Branco</small>
            </p>
            <p className="section-lead" style={{ marginTop: 12 }}>
              {SITE.identity}
            </p>
          </div>
          <div>
            <p className="kicker">Contato</p>
            <p>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              <br />
              <a href={`tel:${SITE.landlineTel}`}>{SITE.landlineDisplay}</a>
              <br />
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
              <br />
              {SITE.address.full}
            </p>
          </div>
        </div>
        <div className="wrap foot-copy">
          Demo Xpress para o lead El Farol. Cores e fotos da casa — não é um tema genérico.
        </div>
      </footer>

      <a className="fab" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon size={28} />
      </a>
    </>
  );
}
