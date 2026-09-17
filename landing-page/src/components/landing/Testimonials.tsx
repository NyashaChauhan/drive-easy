const reviews = [
  {
    quote: "Booking took less than a minute and the car was spotless. The whole experience just worked — exactly what I needed for a weekend trip.",
    name: "Priya S.",
    role: "Weekend traveler",
  },
  {
    quote: "I rent monthly for work and RevX is the only one that's never thrown a surprise fee my way. Honest pricing wins.",
    name: "Marcus T.",
    role: "Sales consultant",
  },
  {
    quote: "Needed a 7-seater last minute for a family trip. Picked it up in 10 minutes, drove off, no fuss. Will use again.",
    name: "Elena R.",
    role: "Mom of three",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-28 md:py-40 bg-background border-t border-border/40">
      <div className="px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-24">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              From the road
            </p>
            <h2 className="font-display tracking-display leading-[1.02] text-balance"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Words from <span className="italic">our drivers.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {reviews.map((r, i) => (
            <figure key={i} className="flex flex-col">
              <span className="font-display text-6xl text-accent leading-none">"</span>
              <blockquote className="font-display text-2xl md:text-[26px] leading-snug tracking-display text-foreground/95 mt-2 flex-1 text-balance">
                {r.quote}
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-border/50">
                <div className="text-sm text-foreground">{r.name}</div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
