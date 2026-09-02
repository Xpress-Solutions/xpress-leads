import { SITE } from "../data/site";

export function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="wrap sobre-grid">
        <div className="sobre-copy">
          <p className="kicker">A casa</p>
          <h2 className="section-title">O nome é a roda. O chão é o 35.</h2>
          <p>
            A Churrascaria Roda de Carreta nasceu em 1º de dezembro de 1986, no primeiro Centro
            de Tradições Gaúchas do mundo. O galpão fica na Avenida Ipiranga, 5300 — entre o 35
            CTG e o Bourbon — e ainda carrega o tropeirismo no nome: a roda da carreta de bois.
          </p>
          <p>
            Salão de madeira para cerca de 500 pessoas, lustres em forma de roda, buffet
            circular no mesmo desenho, mesas pesadas e garçom de pilcha no espeto. Não é
            steakhouse de avenida. É galpão.
          </p>
          <p>
            {SITE.address.nearby}. Quem clica no domínio antigo cai no vazio — esta página
            recoloca a casa no endereço que o Google já conhece.
          </p>
        </div>
        <div className="sobre-photo">
          <img
            src="/fotos/galpao.jpg"
            alt="Fachada de toras da Roda de Carreta com a estátua do gaúcho"
          />
          <div className="sobre-badge">40 anos no 35 CTG</div>
        </div>
      </div>
    </section>
  );
}
