import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden bg-black">
      <div className="absolute inset-0 radial-red" />
      <div className="relative mx-auto max-w-5xl px-6 py-36 text-center md:py-52">
        <Reveal>
          <span className="pill-badge"><span className="dot" />The time is now</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mx-auto mt-8 max-w-4xl text-[clamp(3rem,9vw,8rem)] uppercase">
            Ready to <span className="text-veloxo-red">Go Viral?</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-xl text-white/70">
            Your content is already good enough. It just needs to be seen. Let Veloxo put it in front of millions — starting this week.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/book" className="pill pill-primary">Book Your Strategy Call</Link>
            <a href="#about" className="pill pill-outline">Contact Us</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 text-sm md:grid-cols-3 md:items-center">
        <div className="font-display text-2xl tracking-wider">VELOXO</div>
        <div className="text-center text-xs text-white/45">
          © 2026 Veloxo Agency · Clip. Distribute. Dominate.
        </div>
        <nav className="flex flex-wrap justify-end gap-5 text-xs uppercase tracking-[0.14em] text-white/55">
          <a href="#insights" className="hover:text-white">Insights</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#why" className="hover:text-white">Why Us</a>
          <a href="#faq" className="hover:text-white">FAQs</a>
          <a href="#cta" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
