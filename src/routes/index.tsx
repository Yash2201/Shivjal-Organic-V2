import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Products } from "@/components/site/Products";
import { About } from "@/components/site/About";
import { Why } from "@/components/site/Why";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact, Footer } from "@/components/site/Contact";
import { CursorGlow } from "@/components/site/CursorGlow";
import { MarqueeBand } from "@/components/site/MarqueeBand";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <CursorGlow />
      <Nav />
      <Hero />
      <Products />
      <MarqueeBand words={["Adaptogen", "Nootropic", "Vitality", "Defense", "Antioxidant", "Longevity"]} />
      <About />
      <Why />
      <MarqueeBand reverse words={["Lab Verified", "Hand Harvested", "Dual Extracted", "Single Origin", "Forest Grown"]} />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
