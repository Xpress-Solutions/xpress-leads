import { SITE } from "@/data/site";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden border-t border-[color:var(--line)] py-24">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[color:var(--accent)]/15 blur-3xl" />
      </div>
      <div className="wrap relative z-10 max-w-3xl text-center">
        <p className="kicker mx-auto">Mesa</p>
        <h2 className="section-title mt-4">
          Já sabe onde vai ser o próximo encontro baixo?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[color:var(--foreground)]/68">
          Reserva pelo WhatsApp ou liga. A porta continua sem placa grande — o número basta.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a className="btn btn-accent" href={SITE.whatsapp} target="_blank" rel="noreferrer">
            Reservar mesa
          </a>
          <a className="btn btn-ghost" href={SITE.maps} target="_blank" rel="noreferrer">
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
