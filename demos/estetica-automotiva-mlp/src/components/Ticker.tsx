import { TICKER } from "@/data/site";

export function Ticker() {
  const loop = [...TICKER, ...TICKER];

  return (
    <div className="overflow-hidden border-y border-white/8 bg-[#161618] py-3.5">
      <div className="ticker-track gap-10 pr-10 text-[0.7rem] tracking-[0.3em] text-white/55 uppercase">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 whitespace-nowrap">
            {item}
            <i className="not-italic text-[#c4121f]">●</i>
          </span>
        ))}
      </div>
    </div>
  );
}
