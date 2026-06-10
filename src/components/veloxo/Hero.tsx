import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-44">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="pill-badge">
            <span className="dot" />
            For businesses, brands &amp; creators — worldwide
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="font-display mx-auto mt-8 max-w-6xl text-[clamp(2.75rem,8vw,7rem)] uppercase">
            Turn One Video Into <span className="text-veloxo-red">30+ Daily Clips</span> That Flood The Internet Every Single Month
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-base text-white/65 md:text-lg">
            Veloxo deploys 500+ verified clippers globally — flooding TikTok, Instagram Reels and YouTube Shorts simultaneously so your brand dominates short-form without lifting a finger.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/book" className="pill pill-primary">Book Your Strategy Call</Link>
            <a href="#process" className="pill pill-outline">See How It Works</a>
          </div>
        </Reveal>

        <Reveal delay={460}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/50">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-veloxo-red" />
              The #1 Global Clipping Agency
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-veloxo-red" />
              Trusted by Brands Worldwide
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={500}>
        <div className="relative mx-auto mt-20 max-w-5xl px-4 md:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/6u4nxG1SgwM"
                title="Veloxo Agency"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
