import { useEffect, useState } from "react";
import logoMark from "@/assets/logo-mark.png";

export function Nav() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      setProgress(p);
      setScrolled(h.scrollTop > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-5">
        <div
          className={`flex items-center justify-between rounded-full border border-border/60 px-6 py-3 shadow-soft backdrop-blur-xl transition-all duration-500 ${
            scrolled ? "bg-card/85 shadow-elevated" : "bg-card/60"
          }`}
        >
          <a href="/" className="flex items-center gap-2.5 text-primary group">
            <img
              src={logoMark}
              alt="Shivjal Organic"
              width={36}
              height={36}
              className="size-9 object-contain transition-transform duration-700 group-hover:rotate-[12deg] group-hover:scale-110"
            />
            <span className="font-serif text-xl tracking-tight">
              Shivjal <span className="text-muted-foreground italic">Organic</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
            <a href="#products" className="link-underline hover:text-primary transition-colors">Products</a>
            <a href="#about" className="link-underline hover:text-primary transition-colors">Our Story</a>
            <a href="#why" className="link-underline hover:text-primary transition-colors">Why Shivjal</a>
            <a href="#testimonials" className="link-underline hover:text-primary transition-colors">Voices</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all"
          >
            Speak to an Expert
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
        {/* scroll progress */}
        <div className="mx-6 mt-2 h-[2px] rounded-full bg-border/50 overflow-hidden">
          <div
            className="h-full bg-gradient-gold transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </header>
  );
}
