import { Reveal } from "./Reveal";

const STATS = [
  { v: "500+", l: "Active Verified Clippers" },
  { v: "100M+", l: "Views Delivered" },
  { v: "$0.20", l: "Effective CPM" },
];

export function Stats() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-3 md:gap-6">
        {STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 120} className="text-center">
            <div className="font-display text-[clamp(4rem,9vw,8rem)] leading-none tracking-tight">
              {s.v}
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.18em] text-white/55">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
