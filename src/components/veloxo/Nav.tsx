import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/veloxo-logo.jpg";

const LINKS = [
  { href: "#insights", label: "Insights" },
  { href: "#process", label: "Process" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQs" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8 transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-xl rounded-full border border-white/10 py-2" : ""
      }`}>
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Veloxo" className="h-9 w-9 rounded-md object-cover" />
          <span className="font-display text-2xl tracking-wider">VELOXO</span>
        </a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1.5 backdrop-blur-md md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Link to="/book" className="pill pill-primary !py-2.5 !px-5 text-sm">
          Book a Call
        </Link>
      </div>
    </header>
  );
}

