import { ArrowUpRight } from "lucide-react";
import editorial1 from "@/assets/editorial-1.jpg";

const CTA = () => {
  return (
    <section id="cta" className="relative overflow-hidden bg-background border-t border-border/40">
      <div className="absolute inset-0 z-0">
        <img
          src={editorial1}
          alt="A car parked on an empty road at dusk"
          width={1920}
          height={1200}
          loading="lazy"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 px-6 md:px-12 py-32 md:py-48 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8">
          Start a trip
        </p>
        <h2 className="font-display tracking-display leading-[1.02] text-balance mx-auto max-w-5xl"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)" }}>
          Your next trip starts<br />
          <span className="italic">at the curb.</span>
        </h2>
        <p className="mt-8 mx-auto max-w-md text-foreground/70 font-light text-base md:text-lg">
          Pick a car, pick a date, pick up the keys. It really is that simple.
        </p>

        <a
          href="http://localhost:3001/register"
          className="group mt-12 inline-flex items-center gap-3 link-underline text-foreground"
        >
          <span className="font-display text-2xl md:text-3xl tracking-display">Reserve a car</span>
          <ArrowUpRight className="h-5 w-5 text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-smooth" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
