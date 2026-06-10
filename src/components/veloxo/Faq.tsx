import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const FAQS = [
  { q: "How does this compare to running paid ads?", a: "Paid ads rent attention — the moment you stop spending, distribution stops. Veloxo builds organic surface area across hundreds of native accounts, so the views compound and keep working long after the campaign window." },
  { q: "What happens if I don't have much existing content?", a: "We work with whatever source material you have — even a single hour-long interview, podcast or stream can produce 30+ clips. If needed, our production team can create native source material with you." },
  { q: "Are the views authentic and verified?", a: "100%. Every view comes from real users on TikTok, Instagram Reels and YouTube Shorts, verified through platform-native analytics. No bots, no view-bots, no laundering." },
  { q: "How quickly can my campaign go live?", a: "From signed agreement to first live clips: 24 hours for existing source material. Full multi-market campaigns typically launch within 5–7 business days." },
  { q: "What platforms do you distribute on?", a: "TikTok, Instagram Reels and YouTube Shorts as the core. We can also extend to Snapchat Spotlight, Facebook Reels and emerging platforms when relevant to your audience." },
  { q: "What industries and niches do you work with?", a: "Music, sports, fashion, DTC, fintech, SaaS, podcasts, education, gaming and personal brands. If short-form attention exists in your market, we know how to capture it." },
  { q: "How do I know if Veloxo is the right fit for my brand?", a: "Book a strategy call. We're upfront — if we don't think we can deliver a meaningful lift for your goals, we'll tell you and recommend a better path." },
  { q: "What does pricing look like?", a: "We price per delivered, verified view with monthly minimums. Most partners start between $5k and $50k/month. You only pay for performance — never for promises." },
  { q: "What results can I realistically expect?", a: "Typical campaigns deliver between 2M and 20M verified views per month depending on niche, budget and source content. We forecast a range during your strategy call based on comparable past campaigns." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="pill-badge"><span className="dot" />FAQ's</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,5rem)] uppercase">
              Your Questions, <span className="text-veloxo-red">Answered.</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-xl text-white/60">
              Everything you need to know about how Veloxo works, what to expect and how we scale your campaigns globally.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-6 py-6 text-left transition ${isOpen ? "border-b-0" : ""}`}
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-xl uppercase md:text-2xl ${isOpen ? "text-veloxo-red" : "text-white"}`}>{f.q}</span>
                  <Plus
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45 text-veloxo-red" : "text-white/60"}`}
                  />
                </button>
                <div
                  className="grid overflow-hidden transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0">
                    <p className="pb-6 pr-12 text-white/65">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <Link to="/book" className="pill pill-primary">Book Your Strategy Call</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
