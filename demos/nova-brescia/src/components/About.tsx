import { useReveal } from "../hooks/useReveal";

export function About() {
  const ref = useReveal();

  return (
    <section className="section about" id="sobre">
      <div className="wrap about-grid reveal" ref={ref}>
        <div className="about-copy">
          <p className="section-kicker">A esquina</p>
          <h2 className="section-title">Saiu de Nova Bréscia. Ficou na São Pedro.</h2>
          <p>
            Em 1987 Sérgio Sbardelotto deixou a cidade de Nova Bréscia — terra dos churrasqueiros —
            e abriu a lancheria na esquina da Av. São Pedro com a Av. Ceará. No começo: uma chapa
            no mesmo cômodo do salão, quatro banquinhos e seis mesas.
          </p>
          <p>
            Em 1991 entrou o conterrâneo Gilmar da Silva, o Pity. Hoje as duas chapas ainda são
            deles. Letícia, filha do Sérgio, virou sócia em 2022. Uma família que trabalha para
            outras famílias.
          </p>
          <p>
            A enchente de 2024 deixou um metro de água por 25 dias. Cliente ajudou a limpar. Teve
            até adiantamento de xis. A casa reabriu na mesma esquina.
          </p>
          <ul className="about-points">
            <li>Xis de 1 kg — o Califórnia já marcou 1,3 kg</li>
            <li>Até 400 lanches nos dias fortes</li>
            <li>Mesmos fornecedores de pão, queijo e carne há 30 anos</li>
            <li>Sem tele-entrega: a fila de 40 minutos é de quem veio</li>
          </ul>
        </div>
        <div className="about-photo">
          <img
            src="/fotos/xis-prato.jpg"
            alt="Xis da Nova Bréscia cortado, com queijo derretido e batata frita"
          />
          <div className="about-badge">Desde 1987 · a mesma esquina</div>
        </div>
      </div>
    </section>
  );
}
