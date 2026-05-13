import logoWhite from "@/assets/logo-mark.png";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-cream overflow-hidden">
      <div aria-hidden className="absolute -left-40 -top-20 size-[600px] rounded-full bg-gradient-glow blur-3xl opacity-60" />
      <div aria-hidden className="absolute -right-40 -bottom-20 size-[500px] rounded-full bg-gradient-glow blur-3xl opacity-50" />

      <Reveal className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-olive">— Begin the Conversation</span>
        <h2 className="mt-6 font-serif text-5xl lg:text-7xl text-primary leading-[1.02] text-balance">
          A quiet ritual.<br/>
          <span className="italic text-sheen">A profound difference.</span>
        </h2>
        <p className="mt-7 max-w-xl mx-auto text-lg text-foreground/70 leading-relaxed">
          Whether you are formulating, retailing, or simply seeking a more deliberate practice — we'd be honored to hear from you.
        </p>

        <form className="mt-12 max-w-xl mx-auto flex flex-col sm:flex-row gap-3 p-2 rounded-full bg-card border border-border shadow-soft hover:shadow-elevated transition-shadow duration-500 focus-within:shadow-elevated">
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-transparent px-6 py-3 text-sm placeholder:text-muted-foreground focus:outline-none"
          />
          <Magnetic strength={0.3}>
            <button
              type="submit"
              className="btn-glow group rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-elevated"
            >
              Request a Sample <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </button>
          </Magnetic>
        </form>

        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Wholesale · Private Label · Bulk Extracts
        </p>
      </Reveal>

    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoWhite} alt="Shivjal Organic" width={48} height={48} className="size-12 object-contain brightness-0 invert" />
              <span className="font-serif text-2xl">Shivjal Organic</span>
            </div>
            <p className="mt-5 max-w-sm text-sm opacity-70 leading-relaxed">
              Premium functional mushrooms cultivated in the Himalayan foothills. Ancient wisdom, modern precision.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60">Explore</p>
            <ul className="mt-5 space-y-3 text-sm opacity-90">
              <li><a href="#products" className="hover:opacity-70">Products</a></li>
              <li><a href="#about" className="hover:opacity-70">Our Story</a></li>
              <li><a href="#why" className="hover:opacity-70">Why Shivjal</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-60">Contact</p>
            <ul className="mt-5 space-y-3 text-sm opacity-90">
              <li>care@shivjal.organic</li>
              <li>Dehradun, India</li>
              <li>+91 · 80000 · 00000</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-primary-foreground/15 flex flex-wrap justify-between gap-4 text-xs opacity-60">
          <p>© {new Date().getFullYear()} Shivjal Organic. All rights reserved.</p>
          <p className="uppercase tracking-widest">Cultivated with care · Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}
