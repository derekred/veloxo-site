import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/veloxo/Reveal";
import { Footer } from "@/components/veloxo/Cta";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Veloxo Agency" },
      { name: "description", content: "Book your free 30-minute strategy call with Veloxo. Discover how short-form clipping can scale your brand globally." },
      { property: "og:title", content: "Book a Strategy Call — Veloxo Agency" },
      { property: "og:description", content: "Book your free 30-minute strategy call with Veloxo." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );

    if (!existing) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if ((window as any).Calendly && widgetRef.current) {
          (window as any).Calendly.initInlineWidget({
            url: "https://calendly.com/veloxotech1-1/30min",
            parentElement: widgetRef.current,
            prefill: {},
            utm: {},
          });
        }
      };
      document.body.appendChild(script);
    } else if ((window as any).Calendly && widgetRef.current) {
      (window as any).Calendly.initInlineWidget({
        url: "https://calendly.com/veloxotech1-1/30min",
        parentElement: widgetRef.current,
        prefill: {},
        utm: {},
      });
    }

    return () => {
      const widget = document.querySelector(".calendly-inline-widget");
      if (widget) widget.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Minimal nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-wider">VELOXO</span>
          </Link>
          <Link
            to="/"
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-28 md:pt-36">
        <div className="mx-auto max-w-4xl px-6 pb-20">
          <Reveal>
            <div className="text-center">
              <span className="pill-badge">
                <span className="dot" />
                Free 30-Minute Call
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display mt-8 text-center text-[clamp(2.5rem,7vw,5.5rem)] uppercase">
              Book Your <span className="text-veloxo-red">Strategy Call</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-xl text-center text-white/60">
              No commitment, no pressure. We learn your brand, your goals and your content — then show you exactly how Veloxo can scale it.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#070707]">
              <div
                ref={widgetRef}
                className="calendly-inline-widget"
                style={{ minWidth: "320px", height: "700px" }}
                data-url="https://calendly.com/veloxotech1-1/30min"
              />
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-white/50">
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-veloxo-red" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-veloxo-red" />
                100% confidential
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-veloxo-red" />
                Cancel or reschedule anytime
              </span>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </div>
  );
}
