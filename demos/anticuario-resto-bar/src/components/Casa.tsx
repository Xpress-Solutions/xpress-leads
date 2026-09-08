import { SITE } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap casa-grid reveal" ref={ref}>
        <div className="casa-copy">
          <p className="section-kicker">La casa</p>
          <h2 className="section-title">Cada peça pendurada tem história.</h2>
          <p>
            O Anticuário abriu em abril de 2002, na Lima e Silva, pelo casal uruguaio{" "}
            {SITE.owners}. O nome não é pose: o salão é um anticuário de verdade —
            telefone de disco, rolhas, vinil, plaquinhas em espanhol, mosaico amarelo e
            preto (Peñarol) com o script da casa e mesas que já foram máquina de costura.
          </p>
          <p>
            Guia da Semana descreve peças argentinas, uruguaias e americanas. Quem senta
            aqui sente o Uruguai sem sair da Cidade Baixa — os donos atendem e ainda
            respondem <em>muchas gracias</em>.
          </p>
          <blockquote className="casa-quote">
            “Quando passou um mês, dois, três de pandemia, falei pra Ana: nós não podemos
            continuar assim. Caíam lágrimas. Cada coisinha pendurada aqui tem uma história
            diferente.”
            <cite>Ricardo Meghdessian · Destemperados / GZH, 2021</cite>
          </blockquote>
        </div>
        <div className="casa-photo">
          <img
            src="/fotos/pecas.jpg"
            alt="Garrafão de rolhas, bandeira do Uruguai e peças de anticuário no salão"
          />
          <div className="casa-badge">Antiguidades de AR, UY e US · Lima e Silva</div>
        </div>
      </div>
    </section>
  );
}
