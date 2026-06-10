import { Reveal } from "./Reveal";

const STEPS = [
  { n: "01", t: "Strategy Call", d: "20 minutes. We learn your brand, your goals and your content. No prep needed — we run the session." },
  { n: "02", t: "Brief & Activation", d: "We build your campaign brief, activate your clipper pool and get everything approved before a single clip goes live." },
  { n: "03", t: "Clip & Distribute", d: "500+ clippers create and post simultaneously across TikTok, Reels and Shorts — flooding the algorithm from hundreds of independent accounts." },
  { n: "04", t: "Optimize & Scale", d: "Weekly reporting, real-time dashboard, continuous hook testing. We double down on what works every single week." },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="pill-badge"><span className="dot" />The Process</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,5.5rem)] uppercase">
              Four Steps <span className="text-veloxo-red">to Viral</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-white/60">
              From your first call to millions of views — here's exactly how Veloxo works.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-veloxo-red/60 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative card-dark p-7 h-full overflow-hidden">
                  <div className="font-display absolute -right-2 -top-4 select-none text-[7rem] leading-none text-veloxo-red/10">
                    {s.n}
                  </div>
                  <div className="relative">
                    <div className="font-mono-label text-veloxo-red">Step {s.n}</div>
                    <h3 className="font-display mt-3 text-2xl uppercase">{s.t}</h3>
                    <p className="mt-4 text-sm text-white/65">{s.d}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-veloxo-red transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
