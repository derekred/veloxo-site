import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

const ROWS: { feature: string; veloxo: string; traditional: string }[] = [
  { feature: "Launch Speed", veloxo: "24–48 hours", traditional: "Weeks or months" },
  { feature: "Cost Per 1K Views", veloxo: "$0.20 CPM", traditional: "$15–50 CPM" },
  { feature: "Content Distribution", veloxo: "500+ accounts simultaneously", traditional: "1–5 accounts" },
  { feature: "Organic Appearance", veloxo: "Looks native to the algorithm", traditional: "Marked as paid / sponsored" },
  { feature: "Payment Model", veloxo: "Pay only for verified views", traditional: "Pay upfront, no guarantee" },
  { feature: "Content Longevity", veloxo: "Clips compound for months", traditional: "Stops when budget ends" },
  { feature: "Real-Time Reporting", veloxo: "Live dashboard + weekly calls", traditional: "Monthly PDF summaries" },
  { feature: "Transparent Pricing", veloxo: "Packages listed publicly", traditional: "Hidden until discovery call" },
  { feature: "Scale", veloxo: "Hundreds of creators activated", traditional: "One influencer or one ad set" },
];

export function Comparison() {
  return (
    <section id="services" className="scroll-mt-24 py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <Reveal>
            <span className="pill-badge"><span className="dot" />Head to Head</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-display mt-8 text-[clamp(2.5rem,6vw,5.5rem)] uppercase">
              Veloxo vs <span className="text-veloxo-red">Traditional Marketing</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-white/65">
              Every column tells the same story. Clipping wins on every metric that matters.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-white/10 bg-[#070707]">
            {/* Header */}
            <div className="grid grid-cols-3 text-left text-xs font-mono-label">
              <div className="px-5 py-5 text-white/80 md:px-8">Feature</div>
              <div className="relative bg-veloxo-red px-5 py-5 text-white md:px-8">
                Veloxo Agency
                <span className="pointer-events-none absolute inset-0 shadow-[0_0_40px_-10px_rgba(232,25,44,0.9)]" />
              </div>
              <div className="bg-[#1a1a1a] px-5 py-5 text-white/70 md:px-8">Traditional Marketing</div>
            </div>

            {/* Rows */}
            <div>
              {ROWS.map((r, i) => (
                <div
                  key={r.feature}
                  className={`group grid grid-cols-3 border-t border-[#1A1A1A] text-sm transition-colors ${
                    i % 2 === 1 ? "bg-white/[0.015]" : ""
                  }`}
                >
                  <div className="px-5 py-5 text-white/90 md:px-8 md:py-6">{r.feature}</div>
                  <div className="px-5 py-5 text-white transition-colors group-hover:bg-veloxo-red/10 md:px-8 md:py-6">
                    <span className="inline-flex items-start gap-2">
                      <span aria-hidden className="mt-0.5 text-veloxo-red">✓</span>
                      <span>{r.veloxo}</span>
                    </span>
                  </div>
                  <div className="px-5 py-5 text-[#666666] md:px-8 md:py-6">
                    <span className="inline-flex items-start gap-2">
                      <span aria-hidden className="mt-0.5">✗</span>
                      <span>{r.traditional}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <Link to="/book" className="pill pill-primary">Book Your Strategy Call</Link>
            <p className="text-xs text-white/45">Join hundreds of brands already winning with Veloxo</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
