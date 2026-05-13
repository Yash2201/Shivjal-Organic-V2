import { Reveal } from "./Reveal";

const features = [
  { t: "100% Organic", d: "Certified across USDA, EU, and India NPOP standards.", icon: "✶" },
  { t: "Lab Tested", d: "Third-party verified beta-glucans and bioactive markers.", icon: "◐" },
  { t: "Chemical Free", d: "No fillers, mycelium-on-grain, or hidden additives.", icon: "○" },
  { t: "Export Quality", d: "Trusted by wellness brands across 27 countries.", icon: "✦" },
  { t: "Sustainable Farming", d: "Closed-loop substrate, solar-powered facility.", icon: "❋" },
  { t: "Wisdom + Science", d: "Ayurvedic tradition meets modern mycology.", icon: "❍" },
];

export function Why() {
  return (
    <section id="why" className="relative py-28 lg:py-40 bg-gradient-forest text-primary-foreground overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent/90">— Why Shivjal</span>
          <h2 className="mt-5 font-serif text-3xl lg:text-4xl leading-[1.05] text-balance">
            Six commitments.<br/>
            <span className="italic opacity-80">One uncompromising standard.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={i * 90} variant="up">
              <div className="group relative h-full rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] backdrop-blur-xl p-8 hover:bg-primary-foreground/[0.08] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/40">
                <div className="flex items-start justify-between">
                  <span className="grid place-items-center size-12 rounded-full bg-gradient-gold text-primary font-serif text-xl shadow-glow transition-transform duration-700 group-hover:rotate-[20deg] group-hover:scale-110">
                    {f.icon}
                  </span>
                  <span className="font-serif text-lg opacity-30">0{i + 1}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-75">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
