import { useEffect, useState } from "react";
import { MENU } from "./data/menu";
import { HOURS, HOURS_NOTE, NAV, SITE } from "./data/site";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l5.9-1.1A11 11 0 0 0 21 12a10.9 10.9 0 0 0-.5-8.5ZM12 20.2a9.1 9.1 0 0 1-4.7-1.3l-.3-.2-3.5.7.7-3.4-.2-.3A9.2 9.2 0 1 1 12 20.2Zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.2-.6.1-.7.9-.8 1-.3.2-.6.1a7.5 7.5 0 0 1-2.2-1.4 8.3 8.3 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.5-.6.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.5-.8-2s-.4-.5-.6-.5h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.6.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className={scrolled ? "nav is-scrolled" : "nav"}>
        <div className="nav-inner">
          <a className="nav-logo" href="#inicio">
            Molt Be<span>.</span>
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
            <button
              className="nav-burger"
              aria-label="Abrir menu"
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

      <nav className={open ? "nav-drawer is-open" : "nav-drawer"} aria-label="Mobile">
        {NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
          Reservar no WhatsApp
        </a>
      </nav>

      <div id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            <img
              src="/fotos/fachada.jpg"
              alt=""
              width={1024}
              height={682}
            />
          </div>
          <div className="wrap hero-content">
            <h1>
              Molt Be<em>.</em>
            </h1>
            <p>Casa catalã no jardim da Winge — Tristeza.</p>
            <div className="hero-actions">
              <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btn-ghost" href={`tel:${SITE.phoneTel}`}>
                Ligar {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="strip" aria-label="Informações rápidas">
          <article>
            <strong>Floricultura Winge</strong>
            <span>Na entrada, Rua Mário Totta, 963 — Tristeza</span>
          </article>
          <article>
            <strong>Qua a dom</strong>
            <span>Almoço, happy hour e jantar no jardim</span>
          </article>
          <article>
            <strong>Benvingut</strong>
            <span>Molt bé quer dizer muito bom, em catalão</span>
          </article>
        </section>

        <section className="section" id="petisco">
          <div className="wrap petisco">
            <div className="petisco-copy">
              <p className="kicker">Comida di Buteco 2026</p>
              <h2>A croqueta de alho-poró.</h2>
              <p>
                Alho puerro empanado, o petisco da casa no concurso. Não vive só em matéria de
                terceiro: aqui tem nome, foto e o caminho até a Mario Totta.
              </p>
              <p>
                A casa abre a semana inteira na ficha do buteco — no dia a dia, é o ponto catalão
                da Zona Sul, não só temporada de concurso.
              </p>
              <a className="btn btn-brand" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                Pedir mesa
              </a>
            </div>
            <figure className="petisco-photo">
              <img
                src="/fotos/croqueta.jpg"
                alt="Croqueta de alho puerro do Molt Be — Comida di Buteco 2026"
                width={1021}
                height={682}
              />
              <figcaption>Croqueta de alho puerro. Foto: Israh Ramos / Sabores do Sul</figcaption>
            </figure>
          </div>
        </section>

        <section className="section" id="cardapio">
          <div className="wrap">
            <p className="kicker">La carta</p>
            <h2 className="section-title">Tapas, croquetas, mar i muntanya.</h2>
            <p className="section-lead">
              Cardápio catalão publicado pela casa: pão com tomate, brandada, arroz negro, sangria
              e a croqueta que foi ao concurso. Confirme o do dia no WhatsApp.
            </p>
            <div className="menu-grid">
              {MENU.map((group) => (
                <article className="menu-col" key={group.id}>
                  <h3>{group.title}</h3>
                  <p className="cat">{group.catalan}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <strong>{item.name}</strong>
                        <span>{item.note}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="casa">
          <div className="wrap casa">
            <div className="casa-photos">
              <img
                src="/fotos/interior.jpg"
                alt="Salão do Molt Be com mesas de madeira, plantas e bandeira da Catalunha"
                width={1024}
                height={682}
              />
              <img
                src="/fotos/bandeira-catalunha.jpg"
                alt="Bandeira da Catalunha e arte na parede do Molt Be"
                width={1024}
                height={682}
              />
              <img
                src="/fotos/jardim.jpg"
                alt="Vista do salão para o jardim da Floricultura Winge"
                width={1024}
                height={682}
              />
            </div>
            <div>
              <p className="kicker">A casa</p>
              <h2 className="section-title">Barcelona na entrada da Winge.</h2>
              <p className="section-lead">
                Galpão centenário reformado, 90 lugares entre o interno e o ar livre, bar e rádio
                catalã. Os sócios ligaram a Zona Sul à Catalunha: a Winge não queria muvuca — queria
                o canto dos pássaros. A decoração dos pratos leva planta da floricultura.
              </p>
              <p className="quote">«É como se você estivesse no seu jardim.»</p>
            </div>
          </div>
        </section>

        <section className="section" id="galeria">
          <div className="wrap">
            <p className="kicker">O jardim</p>
            <h2 className="section-title">A casa, de verdade.</h2>
            <p className="section-lead">
              Fachada vermelha, figueira, janelões para as mudas, lâmpadas de vime. Fotos da casa
              (GZH / assessoria) — não é stock.
            </p>
            <div className="gallery">
              <figure>
                <img src="/fotos/janelas.jpg" alt="Fachada vermelha do Molt Be sob a árvore da Winge" />
                <figcaption>A casa sob a figueira da Winge</figcaption>
              </figure>
              <figure>
                <img src="/fotos/bar-externo.jpg" alt="Árvore vista do salão de madeira do Molt Be" />
                <figcaption>Do salão para o jardim</figcaption>
              </figure>
              <figure>
                <img src="/fotos/natureza.jpg" alt="Verde da Floricultura Winge ao redor do restaurante" />
                <figcaption>33 mil m² de área verde</figcaption>
              </figure>
              <figure>
                <img src="/fotos/prato.jpg" alt="Interior do Molt Be com letreiro e arte nas paredes" />
                <figcaption>Letreiro, arte e Stella no salão</figcaption>
              </figure>
              <figure>
                <img src="/fotos/brandada.jpg" alt="Brandada de bacalhau do Molt Be com tostadas" />
                <figcaption>Brandada de Bacalao</figcaption>
              </figure>
              <figure>
                <img src="/fotos/winge.jpg" alt="Área verde da Floricultura Winge" />
                <figcaption>A Winge desde 1886</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="section" id="onde">
          <div className="wrap onde">
            <div>
              <p className="kicker">Onde e quando</p>
              <h2 className="section-title">Mario Totta, 963.</h2>
              <p className="section-lead">
                {SITE.address.complement}. Estacionamento cortesia na floricultura. Take away e
                reserva pelo mesmo WhatsApp.
              </p>
              <div className="hours">
                {HOURS.map((row) => (
                  <div key={row.day}>
                    <span>{row.day}</span>
                    <span>{row.hours}</span>
                  </div>
                ))}
              </div>
              <p className="section-lead">{HOURS_NOTE}</p>
            </div>
            <iframe
              className="map-frame"
              title="Mapa do Molt Be na Floricultura Winge"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section className="final">
          <div className="wrap">
            <div className="final-box">
              <h2>Benvingut. A mesa é no jardim.</h2>
              <p>Chama no WhatsApp — croqueta, sangria e o verde da Winge.</p>
              <div className="final-actions">
                <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp {SITE.phoneDisplay}
                </a>
                <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>
            <strong>Molt Be.</strong>
            <p>
              {SITE.address.full}
              <br />
              {SITE.phoneDisplay} ·{" "}
              <a href={SITE.instagram} target="_blank" rel="noreferrer">
                {SITE.instagramHandle}
              </a>
            </p>
          </div>
          <p>Demo de identidade visual — Xpress · Tristeza, Porto Alegre</p>
        </div>
      </footer>

      <div className="fab">
        <a className="fab-wa" href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
          <WhatsAppIcon />
        </a>
      </div>
    </>
  );
}
