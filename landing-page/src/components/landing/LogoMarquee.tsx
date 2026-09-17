const logos = [
  "TripWise", "RoadMate", "GoFleet", "CityDrive", "AutoPass", "FuelUp", "Voyago", "MileStone",
];

const LogoMarquee = () => {
  return (
    <section className="py-20 md:py-24 border-y border-border/50 overflow-hidden bg-background">
      <div className="px-6 md:px-12 mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-center">
          Trusted by drivers across 40+ cities
        </p>
      </div>
      <div className="relative">
        <div className="flex gap-24 animate-marquee whitespace-nowrap">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-4xl text-foreground/40 hover:text-foreground/90 transition-smooth tracking-display"
            >
              {l}
            </span>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
};

export default LogoMarquee;
