import { ArrowUpRight } from "lucide-react";
import economy from "@/assets/car-economy.jpg";
import sedan from "@/assets/car-sedan.jpg";
import suv from "@/assets/car-suv.jpg";
import minivan from "@/assets/car-minivan.jpg";

const cars = [
  { name: "City Hatchback", type: "Economy", price: "2,400", img: economy, seats: 4, transmission: "Manual" },
  { name: "Comfort Sedan", type: "Sedan", price: "3,800", img: sedan, seats: 5, transmission: "Automatic" },
  { name: "Family SUV", type: "SUV", price: "5,200", img: suv, seats: 5, transmission: "Automatic" },
  { name: "Spacious Minivan", type: "Minivan", price: "6,500", img: minivan, seats: 7, transmission: "Automatic" },
];

const Fleet = () => {
  return (
    <section id="fleet" className="py-28 md:py-40 bg-background relative overflow-hidden">
      {/* Ambient glow for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,hsl(var(--accent)/0.08),transparent_70%)]" />

      <div className="px-6 md:px-12 relative">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-accent mb-6">
              — The Collection
            </p>
            <h2 className="font-display tracking-display leading-[1.02] text-balance"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              A car for every<br />
              <span className="italic text-foreground/90">kind of journey.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 self-end">
            <p className="text-foreground/70 text-base leading-relaxed font-light max-w-sm">
              Quietly maintained, fairly priced, ready when you are. Pick the
              shape of your trip and we'll have it waiting.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {cars.map((c) => (
            <article key={c.name} className="group">
              <a href="http://localhost:3001/register" className="block">
                {/* Image card with depth */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-card shadow-card ring-1 ring-border/60 mb-6">
                  <img
                    src={c.img}
                    alt={`${c.name} rental`}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-[1.04] transition-spring"
                  />
                  {/* Vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,hsl(0_0%_0%/0.55)_100%)]" />
                  {/* Bottom fade */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-image-fade" />

                  {/* Overlay tag */}
                  <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow-accent" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/80">
                      {c.type}
                    </span>
                  </div>

                  {/* Reserve indicator */}
                  <div className="absolute bottom-5 right-5 h-11 w-11 rounded-full bg-background/30 backdrop-blur-md border border-foreground/15 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-spring">
                    <ArrowUpRight className="h-4 w-4 text-foreground" />
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-end justify-between gap-4 px-1">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl tracking-display">
                      {c.name}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/55 font-light">
                      {c.seats} seats · {c.transmission}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-display text-3xl md:text-4xl tracking-display">
                      ₹{c.price}
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                      per day
                    </p>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
