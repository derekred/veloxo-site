import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const ITEMS = [
  { title: "Transparency", body: "Every view, every clip, every payout is fully visible. Real-time dashboard access on Growth and Elite packages. You always know exactly what you're paying for." },
  { title: "100% Verified Views", body: "No bots, no fake traffic, no inflated numbers. Every qualifying clip undergoes manual review and platform-confirmed view verification before payout." },
  { title: "500+ Elite Verified Clippers", body: "Our global clipper network is vetted, performance-tested and ready to deploy within 24 hours. Quality over volume — always." },
  { title: "We Handle Everything", body: "Strategy, briefs, creator activation, QA moderation and weekly optimization. Your team stays focused on the business. We flood the algorithm." },
];

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="pill-badge"><span className="dot" />#1 Global Clipping Network</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,5.5rem)] uppercase">
              Why <span className="text-veloxo-red">Veloxo?</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-xl text-white/60">
              Join hundreds of brands getting verified views, measurable results and real short-form growth — every month.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="card-dark relative h-full overflow-hidden p-8 pl-10 group">
                <span className="absolute left-0 top-6 bottom-6 w-[3px] bg-veloxo-red opacity-40 transition-opacity group-hover:opacity-100" />
                <div className="text-xs uppercase tracking-[0.16em] text-veloxo-red">0{i + 1}</div>
                <h3 className="font-display mt-4 text-2xl uppercase md:text-3xl">{it.title}</h3>
                <p className="mt-4 text-white/60">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-14 flex flex-col items-center gap-5">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/book" className="pill pill-primary">Book Your Strategy Call</Link>
              <a href="#process" className="pill pill-outline">See How It Works</a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/50">
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-veloxo-red" />Trusted by Brands Worldwide</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-veloxo-red" />100M+ Verified Views Delivered</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
