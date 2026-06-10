import { Reveal } from "./Reveal";

const STATS = [
  { v: "82%", l: "of all internet traffic is video — Cisco / Statista 2025" },
  { v: "5–15×", l: "more affordable CPM than Meta or Google Ads" },
  { v: "89%", l: "of consumers say video directly influences their purchase decisions" },
  { v: "10×", l: "more distribution accounts vs a single influencer" },
];

const BARS = [
  { label: "Meta Ads", value: "$15–30 CPM", width: 95, winner: false },
  { label: "Google Ads", value: "$5–10 CPM", width: 55, winner: false },
  { label: "Traditional Influencer", value: "$5–50 CPM", width: 80, winner: false },
  { label: "Veloxo Clipping", value: "$0.20 CPM", width: 6, winner: true },
];

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="pill-badge"><span className="dot" />Insights</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,5.5rem)] uppercase">
              Why Clipping <span className="text-veloxo-red">Beats Everything</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              The data is clear. Short-form clipping outperforms every traditional marketing channel on cost, reach, speed and longevity.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {STATS.map((s, i) => (
            <Reveal key={s.v} delay={i * 80}>
              <div className="card-dark relative overflow-hidden p-8 pl-10">
                <span className="absolute left-0 top-6 bottom-6 w-[3px] bg-veloxo-red" />
                <div className="font-display text-5xl md:text-6xl text-white">{s.v}</div>
                <p className="mt-4 text-white/65">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="card-dark mt-12 p-6 md:p-12">
            <div className="mb-8 flex items-baseline justify-between">
              <h3 className="font-display text-2xl md:text-3xl uppercase">Cost Per Thousand Views</h3>
              <span className="font-mono-label text-white/45">Lower is better</span>
            </div>
            <div className="space-y-7">
              {BARS.map((b, i) => (
                <div key={b.label}>
                  <div className="grid grid-cols-[140px_1fr_90px] items-center gap-4 md:grid-cols-[200px_1fr_110px] md:gap-6">
                    <span className={`text-sm ${b.winner ? "font-medium text-white" : "text-white/75"}`}>
                      {b.label}
                    </span>
                    <div className="h-3 w-full rounded-full bg-white/[0.04] overflow-hidden">
                      <div
                        className={`bar-grow h-full rounded-full ${b.winner ? "bg-veloxo-red glow-red" : "bg-[#444444]"}`}
                        style={{ width: `${b.width}%`, animationDelay: `${i * 180}ms` }}
                      />
                    </div>
                    <span className={`text-right text-sm tabular-nums ${b.winner ? "text-white font-medium" : "text-white/70"}`}>
                      {b.value}
                    </span>
                  </div>
                  {b.winner && (
                    <div className="mt-3 grid grid-cols-[140px_1fr_90px] gap-4 md:grid-cols-[200px_1fr_110px] md:gap-6">
                      <span />
                      <div>
                        <span className="inline-flex items-center rounded-full bg-veloxo-red px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-white">
                          MOST AFFORDABLE
                        </span>
                      </div>
                      <span />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-white/50">
              Clips continue generating organic views long after the campaign ends. Paid ads stop the moment you stop spending.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
