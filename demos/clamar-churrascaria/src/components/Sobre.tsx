import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Sobre() {
  const ref = useReveal();

  return (
    <section className="section sobre" id="sobre">
      <div className="wrap sobre-grid reveal" ref={ref}>
        <div className="sobre-copy">
          <p className="kicker">A casa</p>
          <h2 className="section-title">O nome é do Claudemar.</h2>
          <p>
            Clamar vem de {SITE.founder}. Em julho de {SITE.founded} ele abriu a Clamar
            Churrascaria Ltda no {SITE.address.street} — a mesma porta que as listas ainda
            apontam hoje. A Receita registra a fantasia Confraria do Churrasco: mesma
            empresa, mesma calçada.
          </p>
          <p>
            Não é salão de CTG nem churrascaria de shopping. É churrascaria de avenida, no
            corredor mais antigo do comércio de Porto Alegre: prédios baixos, fios, loja ao
            lado de loja. Quem passa na Azenha já viu o letreiro.
          </p>
          <ul className="sobre-points">
            <li>Desde {SITE.founded} no 1044 da Azenha</li>
            <li>À la carte / prato do dia — sem cardápio público de rodízio</li>
            <li>Telefone da casa: {SITE.phoneDisplay}</li>
          </ul>
        </div>
        <div className="sobre-photo">
          <img
            src="/fotos/salao.png"
            alt="Salão da Clamar: toalhas creme, cadeiras de madeira e luz baixa"
          />
          <div className="sobre-badge">Desde 2001 · Av. da Azenha, 1044</div>
        </div>
      </div>
    </section>
  );
}
