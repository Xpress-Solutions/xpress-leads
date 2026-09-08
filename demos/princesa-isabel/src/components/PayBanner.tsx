const ITEM = "Só dinheiro e PIX  ·  Sem cartão  ·  Sem reserva  ·  Ordem de chegada  ·  ";

export function PayBanner() {
  return (
    <div className="pay-bar" role="note" aria-label="Formas de pagamento e fila">
      <div className="pay-track">
        <span>{ITEM.repeat(4)}</span>
        <span aria-hidden="true">{ITEM.repeat(4)}</span>
      </div>
    </div>
  );
}
