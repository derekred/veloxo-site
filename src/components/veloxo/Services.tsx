import { Reveal } from "./Reveal";
import heroImg from "@/assets/veloxo-cta.jpg";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="pill-badge"><span className="dot" />Our Service</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,5.5rem)] uppercase">
            One Service. <span className="text-veloxo-red">Total Domination.</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-white/70 md:text-xl">
            Most brands create great content and then watch it disappear. Veloxo changes that. We take your existing long-form video and transform it into a relentless daily stream of short-form clips — engineered to stop the scroll, trigger the algorithm and put your brand in front of millions of new people every single month. No extra shoots. No extra team. Just your content, amplified at a scale you've never seen before.
          </p>
        </Reveal>
        <Reveal delay={260}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <span className="pill-tag">Strategy Included</span>
            <span className="pill-tag">Creator Activation Included</span>
            <span className="pill-tag">Weekly Optimization Included</span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="mx-auto mt-20 max-w-7xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img src={heroImg} alt="" loading="lazy" className="h-auto w-full opacity-80" />
            <div className="absolute inset-0 bg-veloxo-red mix-blend-multiply opacity-10" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
