import { TICKER } from "@/data/site";

export function Ticker() {
  const loop = [...TICKER, ...TICKER];

  return (
    <div className="overflow-hidden border-y border-[#171411]/8 bg-[#fff8f1] py-4">
      <div className="ticker-track gap-10 pr-10 text-[0.72rem] tracking-[0.32em] text-[#171411]/55 uppercase">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap">
            {item}
            <i className="font-display text-lg not-italic text-[#c4a574]">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
