import editorial from "@/assets/editorial-2.jpg";

const steps = [
  { num: "01", title: "Find your car", desc: "Filter by type, price or seats. We surface what fits — nothing more." },
  { num: "02", title: "Book in minutes", desc: "Pick dates and pickup spot. Pay only when you confirm." },
  { num: "03", title: "Pick up & drive", desc: "Show up, take the keys, hit the road. No paperwork drama." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-28 md:py-40 bg-background border-t border-border/40">
      <div className="px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-24">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              The Process
            </p>
            <h2 className="font-display tracking-display leading-[1.02] text-balance"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Three steps, <span className="italic">then drive.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-card shadow-card ring-1 ring-border/60">
              <img
                src={editorial}
                alt="Car keys being handed over"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,hsl(0_0%_0%/0.5)_100%)]" />
            </div>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`grid grid-cols-[auto_1fr] gap-10 py-10 ${
                  i !== steps.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="text-xs text-accent tracking-[0.2em]">{s.num}</div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl tracking-display">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-foreground/65 max-w-md font-light leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
