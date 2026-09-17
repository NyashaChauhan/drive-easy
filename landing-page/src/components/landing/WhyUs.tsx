const features = [
  { num: "01", title: "Honest pricing", desc: "What you see is what you pay. No counter surprises, no upsell theatre." },
  { num: "02", title: "Insurance included", desc: "Basic coverage on every rental, every day. Drive without the math." },
  { num: "03", title: "Free cancellation", desc: "Plans changed? Cancel up to 24 hours before pickup. No penalty." },
  { num: "04", title: "Spotless cars", desc: "Cleaned, sanitized and inspected before every single trip." },
  { num: "05", title: "150+ locations", desc: "Major cities, airports, suburbs. Pickup wherever the day takes you." },
  { num: "06", title: "24/7 support", desc: "Real humans on call. Roadside help is one tap away, any hour." },
];

const WhyUs = () => {
  return (
    <section id="why" className="py-28 md:py-40 bg-background border-t border-border/40">
      <div className="px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 mb-20 md:mb-24">
          <div className="md:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Our Principles
            </p>
            <h2 className="font-display tracking-display leading-[1.02] text-balance"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Built around <span className="italic">drivers.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((f) => (
            <div key={f.num} className="group">
              <div className="text-xs text-accent tracking-[0.2em] mb-6">{f.num}</div>
              <h3 className="font-display text-3xl md:text-[32px] tracking-display">
                {f.title}
              </h3>
              <p className="mt-4 text-foreground/65 text-[15px] font-light leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
