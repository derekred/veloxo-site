import { Reveal } from "./Reveal";
import t1 from "@/assets/clay.png.asset.json";

const TEAM = [
  {
    name: "Clayton Ndobela",
    title: "Founder",
    bio: "Clayton built Veloxo from the ground up with one vision — to make large-scale content distribution accessible to every brand on earth. He leads global strategy, client growth and the systems that keep Veloxo ahead of the market.",
    quote: "The brands that win aren't creating more content. They're distributing smarter.",
    img: t1.url,
  },
];

export function Team() {
  return (
    <section id="about" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <span className="pill-badge"><span className="dot" />Our Team</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,5.5rem)] uppercase">
            The Minds Behind <span className="text-veloxo-red">The System</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-2xl text-white/60">
            Veloxo is built by creators and operators who live inside the content economy — giving brands, artists and businesses the tools to own attention at global scale.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 max-w-7xl space-y-32 px-6 md:space-y-44">
        {TEAM.map((m, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={m.name}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <Reveal>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.title} at Veloxo`}
                    width={1280}
                    height={1600}
                    loading="lazy"
                    className="h-auto w-full"
                  />
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-veloxo-red">{m.title}</div>
                  <h3 className="font-display mt-3 text-5xl uppercase md:text-6xl">{m.name}</h3>
                  <p className="mt-6 text-white/65">{m.bio}</p>
                  <blockquote className="serif-italic mt-10 border-l-2 border-veloxo-red pl-6 text-2xl leading-snug text-white md:text-3xl">
                    "{m.quote}"
                  </blockquote>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
