interface Props {
  words?: string[];
  reverse?: boolean;
  className?: string;
}

export function MarqueeBand({
  words = ["Reishi", "Lion's Mane", "Cordyceps", "Chaga", "Turkey Tail"],
  reverse = false,
  className = "",
}: Props) {
  const row = (
    <div className="flex items-center gap-12 pr-12 shrink-0">
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="flex items-center gap-12">
          <span className="font-serif italic text-[clamp(1rem,4vw,2rem)] leading-none text-primary/90">
            {w}
          </span>
          <span aria-hidden className="size-3 rounded-full bg-gradient-gold shadow-glow" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative overflow-hidden border-y border-border/60 bg-background py-8 lg:py-12 ${className}`}>
      <div className={`flex w-max whitespace-nowrap ${reverse ? "animate-marquee-rev" : "animate-marquee-slow"}`}>
        {row}
        {row}
      </div>
    </div>
  );
}
