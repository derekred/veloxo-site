const TAGS = [
  "Smart Analytics", "Viral Hook Strategy", "Multi-Platform Distribution",
  "Performance-Based Payouts", "Real-Time Reporting", "Creator Quality Control",
  "Algorithm Optimization", "Short-Form Editing", "Campaign Brief Building",
  "Wave Deployment Strategy", "Brand Safety Moderation", "Afrobeats & African Markets",
  "Global Clipper Network", "CPM Efficiency",
];

export function Specializations() {
  return (
    <section className="border-y border-white/5 py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <span className="font-mono-label text-white/45">What We're Built On</span>
      </div>
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {TAGS.map((t, i) => (
              <span key={`${k}-${i}`} className="pill-tag">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
