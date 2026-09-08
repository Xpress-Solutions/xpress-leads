import { CASA_POINTS } from "../data/site";
import { useReveal } from "../hooks/useReveal";

export function Casa() {
  const ref = useReveal();

  return (
    <section className="section casa" id="casa">
      <div className="wrap casa-grid reveal" ref={ref}>
        <div>
          <p className="section-kicker">A casa</p>
          <h2 className="section-title">Boteco de almoço no Centro.</h2>
          <p>
            Na Rua Marechal Floriano Peixoto, 387, o Buteco Petiscos — Bar Chopp Petiscos na
            razão social — abre de dia. Quem trabalha no Centro Histórico almoça; quem vem pelo
            concurso senta para o bacalhau.
          </p>
          <p>
            Paulo Roberto cozinha e fica na casa. Em 2017 o bar entrou no Comida di Buteco,
            duplicou o espaço, ficou vice duas vezes e levou Porto Alegre em 2019 com o Atrevido.
            Em 2026 voltou com o Bacalhau do Popeye com toque de Olívia.
          </p>
          <ul className="casa-points">
            {CASA_POINTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="casa-stamp">
          <strong>30 anos na Floriano.</strong>
          <p>
            CNPJ ativo desde 1996. O Blogspot de 2014 não é site — é arquivo. Esta página é a
            vitrine da casa: horário, petisco e o telefone que o Centro já conhece.
          </p>
        </aside>
      </div>
    </section>
  );
}
