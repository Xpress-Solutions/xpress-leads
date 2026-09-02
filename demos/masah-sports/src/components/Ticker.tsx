const ITEMS = [
  "Av. Farroupilha, 3833 · Loja 03",
  "Cosmopolitan Urban Mall",
  "Marechal Rondon · Canoas",
  "Comida di Buteco · Farroupilha",
  "Melhor Gastrobar Canoas 2023",
  "Sweet chilli Masah",
  "TVs no salão",
];

export function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
