import { Navbar } from "./components/Navbar";
import { WhatsAppIcon } from "./components/WhatsAppIcon";
import { MENU, PETISCO } from "./data/menu";
import { GALLERY, HOURS, REVIEWS, SHOWS, SITE } from "./data/site";

export function App() {
  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Navbar />
      <div id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            <img
              src="/fotos/hero.jpg"
              alt=""
            />
          </div>
          <div className="wrap hero-content">
            <h1>
              Rock<span>'n</span> Beer
            </h1>
            <p>{SITE.tagline}</p>
            <div className="hero-actions">
              <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar {SITE.phoneDisplay}
              </a>
            </div>
            <p className="hero-meta">
              Palco · pizza · burger · Sezefredo, Canoas
            </p>
          </div>
        </section>

        <section className="strip" aria-label="Informações rápidas">
          <div className="wrap strip-grid">
            <div>
              <b>Horário</b>
              <span>{SITE.hoursLine}</span>
            </div>
            <div>
              <b>Sezefredo</b>
              <span>Av. Dr. Sezefredo, 266 — Canoas</span>
            </div>
            <div>
              <b>Google</b>
              <span>
                ★ {SITE.rating} · {SITE.reviewsCount} avaliações
              </span>
            </div>
            <div>
              <b>Instagram</b>
              <span>{SITE.instagramHandle}</span>
            </div>
          </div>
        </section>

        <section className="section petisco" id="petisco">
          <div className="wrap">
            <p className="kicker">{PETISCO.contest}</p>
            <h2 className="section-title">O petisco da casa.</h2>
            <p className="section-lead">
              O Rock'n Beer entra no circuito do buteco com o prato que leva o nome de outra cidade
              — e o sabor de pub da Sezefredo.
            </p>
            <div className="petisco-box">
              <div>
                <h3>{PETISCO.name}</h3>
                <p>{PETISCO.blurb}</p>
              </div>
              <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                Pedir no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section menu" id="cardapio">
          <div className="wrap">
            <p className="kicker">Na mesa</p>
            <h2 className="section-title">Pizza, burger, cebolada.</h2>
            <p className="section-lead">
              O que o Google e o Instagram da casa repetem: pizza no forno, burger no prato, cerveja
              na caneca. Delivery também rola.
            </p>
            <div className="menu-grid">
              {MENU.map((item) => (
                <article className="menu-card" key={item.title}>
                  <img src={item.photo} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section agenda" id="agenda">
          <div className="wrap">
            <p className="kicker">Shows</p>
            <h2 className="section-title">A casa acende o palco.</h2>
            <p className="section-lead">
              Terça a sábado a partir das 19h. A banda da noite vive no{" "}
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
              .
            </p>
            <div className="agenda-grid">
              {SHOWS.map((show) => (
                <article className="agenda-card" key={show.day}>
                  <div>
                    <strong>{show.day}</strong>
                    <h3>{show.title}</h3>
                    <p>{show.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="wrap about-grid">
            <div className="about-copy">
              <p className="kicker">A casa</p>
              <h2 className="section-title">Container, guitarra, Sezefredo.</h2>
              <p>{SITE.identity}</p>
              <p>
                Desde {SITE.founded} na avenida: paredes de metal corrugado, cabine vermelha,
                pôsteres de The Doors e AC/DC, pendente preto sobre a madeira. É pub de rock — não
                landing de chope genérico.
              </p>
              <ul className="about-points">
                <li>Música ao vivo e delivery de pizza e burger</li>
                <li>Comida di Buteco — petisco Belo Horizonte</li>
                <li>Aberto terça a sábado, a partir das 19h</li>
              </ul>
            </div>
            <div className="about-photo">
              <img src="/fotos/design.jpg" alt="Paredes de container, pôsteres de rock e palco ao fundo" />
            </div>
          </div>
        </section>

        <section className="section" id="galeria">
          <div className="wrap">
            <p className="kicker">Galeria</p>
            <h2 className="section-title">A atmosfera da casa.</h2>
            <div className="gallery-grid">
              {GALLERY.map((shot) => (
                <figure key={shot.src}>
                  <img src={shot.src} alt={shot.alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section reviews" id="avaliacoes">
          <div className="wrap">
            <p className="kicker">Quem foi</p>
            <h2 className="section-title">Nota de pub que segura a noite.</h2>
            <div className="reviews-score">
              <div className="score-num">{SITE.rating}</div>
              <div>
                <strong>no Google</strong>
                <span className="section-lead" style={{ display: "block" }}>
                  {SITE.reviewsCount} avaliações · {SITE.priceRange}
                </span>
              </div>
            </div>
            <div className="rev-grid">
              {REVIEWS.map((review) => (
                <article className="rev-card" key={review.who}>
                  <strong>{review.score}</strong>
                  <p>“{review.quote}”</p>
                  <span className="kicker">{review.who}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="localizacao">
          <div className="wrap">
            <p className="kicker">Onde</p>
            <h2 className="section-title">Na Sezefredo, Canoas.</h2>
            <p className="section-lead">{SITE.address.full}</p>
            <div className="loc-grid">
              <div className="loc-map">
                <iframe
                  title="Mapa do Rock'n Beer Pub"
                  src={SITE.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="hours">
                <p className="kicker">Horários</p>
                <ul className="hours-list">
                  {HOURS.map((row) => (
                    <li
                      key={row.day}
                      className={row.hours !== "Fechado" ? "is-open-day" : undefined}
                    >
                      <span>{row.day}</span>
                      <span>{row.hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="loc-actions">
                  <a className="btn btn-accent" href={SITE.maps} target="_blank" rel="noreferrer">
                    Como chegar
                  </a>
                  <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <div className="final-box">
              <h2>Sobe no palco da Sezefredo.</h2>
              <p>WhatsApp para mesa, show e o Belo Horizonte.</p>
              <div className="final-actions">
                <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  Chamar no WhatsApp
                </a>
                <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                  Ligar
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <strong>{SITE.name}</strong>
            <p>{SITE.tagline}</p>
            <p>{SITE.address.full}</p>
          </div>
          <div className="foot-links">
            <a href={SITE.instagram} target="_blank" rel="noreferrer">
              {SITE.instagramHandle}
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </div>
          <div className="foot-links">
            <a href="#petisco">Belo Horizonte</a>
            <a href="#agenda">Agenda</a>
            <a href="#localizacao">Como chegar</a>
          </div>
        </div>
        <div className="wrap foot-copy">Demo Xpress · {SITE.name} · Canoas/RS</div>
      </footer>

      <a className="fab" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <WhatsAppIcon />
      </a>
    </>
  );
}
