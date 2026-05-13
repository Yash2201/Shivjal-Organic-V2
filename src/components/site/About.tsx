import { useEffect, useRef } from "react";
import farm from "@/assets/about-farm.jpg";
import lab from "@/assets/about-lab.jpg";
import { Reveal } from "./Reveal";

export function About() {
  const farmRef = useRef<HTMLImageElement | null>(null);
  const labRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        [{ el: farmRef.current, rate: -0.08 }, { el: labRef.current, rate: 0.12 }].forEach(({ el, rate }) => {
          if (!el) return;
          const r = el.getBoundingClientRect();
          const center = r.top + r.height / 2 - vh / 2;
          el.style.transform = `translate3d(0, ${(center * rate).toFixed(1)}px, 0) scale(1.05)`;
        });
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section id="about" className="relative py-28 lg:py-40 overflow-hidden">
      <div aria-hidden className="absolute -right-40 top-20 size-[600px] rounded-full bg-gradient-glow blur-3xl opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <Reveal variant="left" className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated border border-border/60 group shine">
            <img ref={farmRef} src={farm} alt="Hand-harvested mushrooms at golden hour" loading="lazy" className="h-full w-full object-cover will-change-transform" />
          </div>
          <div className="absolute -bottom-10 -right-4 lg:-right-16 w-1/2 aspect-[3/4] rounded-[1.5rem] overflow-hidden border-4 border-background shadow-elevated animate-float-slow">
            <img ref={labRef} src={lab} alt="Dual-extraction laboratory" loading="lazy" className="h-full w-full object-cover will-change-transform" />
          </div>
          <div className="absolute -left-3 top-10 hidden md:flex items-center gap-3 rounded-full bg-card/90 backdrop-blur border border-border shadow-soft px-5 py-3">
            <span className="size-2 rounded-full bg-ember ping-ring text-ember" />
            <span className="text-xs uppercase tracking-widest text-primary">Himalayan Foothills</span>
          </div>
        </Reveal>

        <div className="lg:col-span-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-olive">— The Shivjal Story</span>
            <h2 className="mt-5 font-serif text-5xl lg:text-6xl leading-[1.05] text-primary text-balance">
              Where forests, farmers <span className="italic text-sheen">& science</span> meet.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-7 text-lg text-foreground/70 leading-relaxed">
              Born in the cool, mineral-rich foothills of the Himalayas, Shivjal began as a quiet promise — to honor the ancient mycology of our land while building a craft worthy of the world's most discerning shelves.
            </p>
            <p className="mt-5 text-foreground/70 leading-relaxed">
              Every batch is grown on hardwood substrate, harvested by hand, and dual-extracted in our in-house lab. We test for purity, potency, and integrity — three times — before a single jar leaves our facility.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { k: "01", t: "Cultivate", d: "Spore-to-shelf transparency on certified organic farms." },
              { k: "02", t: "Harvest", d: "Hand-picked fruiting bodies at peak bioactive potency." },
              { k: "03", t: "Extract", d: "Dual hot-water and alcohol extraction preserves full spectrum." },
              { k: "04", t: "Verify", d: "Third-party tested for beta-glucans, heavy metals, microbes." },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 100}>
                <div className="border-l border-border pl-5 hover:border-accent transition-colors duration-500">
                  <p className="font-serif text-2xl text-accent">{s.k}</p>
                  <p className="mt-2 text-sm uppercase tracking-widest text-primary">{s.t}</p>
                  <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
