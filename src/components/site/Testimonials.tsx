import { Reveal } from "./Reveal";

const quotes = [
  { q: "Shivjal sets a benchmark we hadn't seen in the functional mushroom space. The purity is real.", a: "Dr. Anaya Mehra", r: "Integrative Physician, Mumbai" },
  { q: "Every batch arrives lab-papered, beautifully packaged, and consistent. They're our quiet edge.", a: "Lukas Brandt", r: "Founder, Nordhavn Apothecary" },
  { q: "The Lion's Mane is the cleanest extract we've sourced in eight years of formulation.", a: "Mira Okafor", r: "Head Formulator, BotanicaLab" },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 lg:py-40 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-olive">— Voices</span>
            <h2 className="mt-5 font-serif text-5xl lg:text-6xl text-primary leading-[1.05] text-balance">
              Trusted by the world's <span className="italic text-sheen">most careful</span> hands.
            </h2>
          </Reveal>
          <Reveal delay={150} variant="fade">
            <p className="max-w-sm text-foreground/65">From integrative clinics in Mumbai to apothecaries in Copenhagen.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 140} variant="up">
              <figure
                className={`relative h-full rounded-3xl bg-card border border-border/70 p-9 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-500 ${
                  i === 1 ? "md:translate-y-8 bg-gradient-forest text-primary-foreground border-transparent" : ""
                }`}
              >
                <span className={`font-serif text-7xl leading-none ${i === 1 ? "text-accent" : "text-olive/40"}`}>"</span>
                <blockquote className={`-mt-4 text-lg leading-relaxed ${i === 1 ? "text-primary-foreground" : "text-foreground/80"}`}>
                  {q.q}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-current/10">
                  <p className={`font-serif text-lg ${i === 1 ? "" : "text-primary"}`}>{q.a}</p>
                  <p className={`mt-1 text-xs uppercase tracking-widest ${i === 1 ? "opacity-75" : "text-muted-foreground"}`}>{q.r}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
