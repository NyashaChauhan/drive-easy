const cols = [
  { title: "Navigate", links: ["Home", "Fleet", "About", "Contact"] },
  { title: "Rentals", links: ["Hatchbacks", "Sedans", "SUVs", "Minivans"] },
  { title: "Support", links: ["Help center", "Insurance", "Roadside", "FAQ"] },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="px-6 md:px-12 pt-24 pb-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <a href="#" className="font-display text-3xl md:text-4xl tracking-display text-foreground">
            RevX<span className="text-accent"> </span><span className="italic">Rentals</span>
          </a>
          <p className="mt-6 text-foreground/65 max-w-sm font-light leading-relaxed">
            Honest, well-kept cars at fair prices. Book in minutes, drive
            without the drama.
          </p>
          <a
            href="mailto:hello@revxrentals.com"
            className="mt-8 inline-block font-display text-2xl md:text-3xl tracking-display link-underline"
          >
            hello@revxrentals.com
          </a>
        </div>

        {cols.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              {c.title}
            </h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-foreground/80 hover:text-accent transition-smooth"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1">
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Social
          </h4>
          <ul className="space-y-3">
            {["Instagram", "Twitter", "LinkedIn"].map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-foreground/80 hover:text-accent transition-smooth">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Massive wordmark */}
      <div className="px-6 md:px-12 pb-8 overflow-hidden">
        <h2 className="font-display tracking-display leading-[0.85] text-foreground/95 select-none"
            style={{ fontSize: "clamp(5rem, 26vw, 26rem)" }}>
          RevX<span className="italic text-accent"> </span><span className="italic">Rentals</span>
        </h2>
      </div>

      <div className="px-6 md:px-12 py-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        <p>© {new Date().getFullYear()} RevX Rentals — All rights reserved</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-foreground transition-smooth">Privacy</a>
          <a href="#" className="hover:text-foreground transition-smooth">Terms</a>
          <a href="#" className="hover:text-foreground transition-smooth">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
