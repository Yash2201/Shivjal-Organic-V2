import { useEffect, useRef } from "react";
import hero from "@/assets/hero-mushrooms.jpg";
import { CountUp } from "./CountUp";
import { Magnetic } from "./Magnetic";

export function Hero() {
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = imgWrapRef.current;
    if (!wrap) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        wrap.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
        wrap.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
        wrap.style.setProperty("--tx", `${(x * 10).toFixed(1)}px`);
        wrap.style.setProperty("--ty", `${(y * 10).toFixed(1)}px`);
      });
    };
    const onLeave = () => {
      wrap.style.setProperty("--rx", `0deg`);
      wrap.style.setProperty("--ry", `0deg`);
      wrap.style.setProperty("--tx", `0px`);
      wrap.style.setProperty("--ty", `0px`);
    };
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  const stats: { k: number; suffix: string; v: string; decimals?: number }[] = [
    { k: 12, suffix: "+", v: "Years Cultivating" },
    { k: 100, suffix: "%", v: "Lab Verified" },
    { k: 27, suffix: "", v: "Countries Served" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div aria-hidden className="aurora" />
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 size-[520px] rounded-full bg-gradient-glow blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 size-[620px] rounded-full bg-gradient-glow blur-3xl opacity-50" />

      {/* floating particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => {
          const size = 3 + (i % 4);
          const left = (i * 7.3) % 100;
          const delay = (i * 0.7) % 8;
          const dur = 9 + (i % 6);
          return (
            <span
              key={i}
              className="particle"
              style={{
                left: `${left}%`,
                bottom: `-20px`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${dur}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent animate-shimmer" />
            Certified Organic · Est. 2014
          </span>
          <h1 className="mt-7 font-serif text-[clamp(1rem,4vw,2rem)] leading-[0.95] tracking-tight text-balance text-primary">
            Nature's Purity,<br />
            <span className="italic text-sheen">Elevated.</span>
          </h1>
          <span aria-hidden className="block mt-6 h-px w-28 bg-gradient-to-r from-accent to-transparent line-grow" />
          <p className="mt-7 max-w-xl text-lg text-foreground/70 leading-relaxed">
            Discover the profound healing power of premium organic mushrooms — cultivated with ancient wisdom and refined through modern precision.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.25}>
              <a href="#products" className="btn-glow group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium shadow-elevated hover:translate-y-[-2px] transition-all">
                Explore Products
                <span className="grid place-items-center size-6 rounded-full bg-primary-foreground/15 group-hover:bg-primary-foreground/25 transition">→</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 backdrop-blur px-7 py-4 text-sm font-medium text-primary hover:bg-card transition">
                Speak to an Expert
              </a>
            </Magnetic>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
            {stats.map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-3xl text-primary">
                  <CountUp to={s.k} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-6 relative">
          <div
            ref={imgWrapRef}
            className="relative aspect-[5/6] w-full max-w-[640px] mx-auto"
            style={{
              transform:
                "perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translate3d(var(--tx,0), var(--ty,0), 0)",
              transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
              transformStyle: "preserve-3d",
            }}
          >
            <div aria-hidden className="absolute inset-8 rounded-[2.5rem] bg-gradient-glow blur-2xl" />
            <div className="relative h-full rounded-[2rem] overflow-hidden shadow-elevated border border-border/60 mask-reveal">
              <img
                src={hero}
                alt="Reishi and Lion's Mane mushrooms in cinematic light"
                width={1536}
                height={1536}
                className="h-full w-full object-cover animate-kenburns"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent" />
            </div>

            {/* floating badges */}
            <div className="absolute -left-4 lg:-left-10 top-12 rounded-2xl bg-card/90 backdrop-blur border border-border shadow-soft px-4 py-3 animate-float" style={{ transform: "translateZ(40px)" }}>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Beta-Glucans</p>
              <p className="font-serif text-2xl text-primary">
                <CountUp to={38.4} decimals={1} suffix="%" />
              </p>
            </div>
            <div className="absolute -right-4 lg:-right-8 bottom-16 rounded-2xl bg-card/90 backdrop-blur border border-border shadow-soft px-4 py-3 animate-float-slow" style={{ transform: "translateZ(60px)" }}>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">USDA · EU · India</p>
              <p className="font-serif text-base text-primary">Certified Organic</p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 rounded-full bg-gradient-forest text-primary-foreground px-5 py-2 text-xs tracking-[0.2em] uppercase shadow-elevated">
              Ancient · Wisdom · Modern · Precision
            </div>
          </div>
        </div>
      </div>

      {/* trust marquee */}
      <div className="relative mt-24 border-y border-border/60 py-6 overflow-hidden">
        <div className="flex w-max gap-16 animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-16 pr-16">
              <span>USDA Organic</span>
              <span>·</span>
              <span>EU Organic</span>
              <span>·</span>
              <span>FSSAI Certified</span>
              <span>·</span>
              <span>ISO 22000</span>
              <span>·</span>
              <span>Vegan & Non-GMO</span>
              <span>·</span>
              <span>Third-Party Tested</span>
              <span>·</span>
              <span>Lab Verified Beta-Glucans</span>
              <span>·</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
