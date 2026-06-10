import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/veloxo/Nav";
import { Hero } from "@/components/veloxo/Hero";
import { Specializations } from "@/components/veloxo/Specializations";
import { Stats } from "@/components/veloxo/Stats";
import { Insights } from "@/components/veloxo/Insights";
import { Process } from "@/components/veloxo/Process";
import { Comparison } from "@/components/veloxo/Comparison";
import { WhyUs } from "@/components/veloxo/WhyUs";
import { Faq } from "@/components/veloxo/Faq";
import { Cta, Footer } from "@/components/veloxo/Cta";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Specializations />
        <Stats />
        <Insights />
        <Process />
        <Comparison />
        <WhyUs />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
