import reishi from "@/assets/reishi.jpg";
import lionsMane from "@/assets/lions-mane.jpg";
import cordyceps from "@/assets/cordyceps.jpg";
import turkeyTail from "@/assets/turkey-tail.jpg";
import chaga from "@/assets/chaga.jpg";
import { Reveal } from "./Reveal";

const products = [
  { name: "Reishi", category: "Adaptogen", benefit: "Calm & Immunity", desc: "The mushroom of immortality. A revered tonic for stress, sleep, and longevity.", img: reishi },
  { name: "Lion's Mane", category: "Nootropic", benefit: "Focus & Clarity", desc: "Cultivates neural growth, supporting memory, focus, and mental performance.", img: lionsMane },
  { name: "Cordyceps", category: "Vitality", benefit: "Energy & Stamina", desc: "Ancient fuel for endurance — oxygen utilization, stamina, and athletic recovery.", img: cordyceps },
  { name: "Turkey Tail", category: "Defense", benefit: "Gut & Immunity", desc: "A polysaccharide powerhouse that nourishes the gut and fortifies immune defense.", img: turkeyTail },
  { name: "Chaga", category: "Antioxidant", benefit: "Cellular Renewal", desc: "Forest-grown reservoir of antioxidants for resilience and inner radiance.", img: chaga },
];

export function Products() {
  return (
    <section id="products" className="relative py-28 lg:py-40 bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-olive">— The Collection</span>
            <h2 className="mt-5 font-serif text-4xl lg:text-5xl text-primary leading-[1.05] text-balance">
              Five mushrooms.<br/>
              <span className="italic text-sheen">A thousand years of wisdom.</span>
            </h2>
          </Reveal>
          <Reveal delay={150} variant="fade">
            <p className="max-w-md text-foreground/70 leading-relaxed">
              Each fruiting body is hand-harvested at peak potency, then dual-extracted to preserve the full spectrum of bioactive compounds.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 110}
              className={i === 0 ? "lg:col-span-2" : ""}
            >
              <article
                className="group relative h-full rounded-[1.75rem] overflow-hidden bg-card border border-border/70 shadow-soft hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-500"
              >
                <div className={`shine relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/5]"} bg-beige`}>
                  <img
                    src={p.img}
                    alt={`${p.name} mushroom`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-card/85 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-widest text-primary">
                    <span className="size-1 rounded-full bg-accent animate-shimmer" /> {p.category}
                  </span>
                </div>
                <div className="p-7 lg:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-3xl text-primary">{p.name}</h3>
                    <span className="text-xs uppercase tracking-widest text-olive">{p.benefit}</span>
                  </div>
                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.desc}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm text-primary border-b border-primary/30 pb-1 hover:border-primary transition">
                    Discover {p.name} <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
