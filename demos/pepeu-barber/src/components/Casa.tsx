import { SITE } from "../data/site.ts";
import { useReveal } from "../hooks/useReveal.ts";

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap casa-grid reveal" ref={ref}>
        <div>
          <p className="kicker">A casa</p>
          <h2 className="section-title">O salão do Pepeu, não um tema.</h2>
          <p>
            Vitor Hugo Rodrigues — o Pepeu — é o nome na faixa da Rua Umbu. Desde 2020 a loja 2
            tem letreiro verde-sálvia, bigode no logo e a frase que o Instagram repete: autenticidade
            e estilo.
          </p>
          <p>
            Dentro: parede creme, recorte verde, sofá de couro, skate na parede (tem shape da casa),
            o leão pop e a camisa do Grêmio. Luz de dia, vitrine, piso de madeira. Barbearia de
            bairro — atende até criança no colo.
          </p>
          <ul className="casa-points">
            <li>Rua Umbu, 715 loja 2 — Vila Ipiranga</li>
            <li>Fundador {SITE.founder} · @pepeuvhr</li>
            <li>Instagram {SITE.instagramHandle}</li>
          </ul>
        </div>
        <figure className="casa-photo">
          <img
            src="/fotos/sala.jpeg"
            alt="Interior da Pepeu Barber: parede verde, skate e cadeira de couro"
          />
          <figcaption>Since 2020 · loja 2</figcaption>
        </figure>
      </div>
    </section>
  );
}
