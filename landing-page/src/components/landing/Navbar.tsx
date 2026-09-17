import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#" },
  { label: "Fleet", href: "#fleet" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#cta" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/60 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="px-6 md:px-12 flex h-20 md:h-24 items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="font-display text-2xl md:text-[28px] tracking-display text-foreground">
          RevX<span className="text-accent"> </span><span className="italic">Rentals</span>
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] tracking-wide text-foreground/85 hover:text-foreground transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Login + Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="http://localhost:3001/login"
            className="hidden md:inline-flex h-9 px-5 items-center justify-center text-[13px] font-medium tracking-wide text-foreground border border-accent/80 hover:border-accent hover:bg-accent/10 transition-smooth"
          >
            Login
          </a>

          {/* Hamburger icon */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid place-items-center h-10 w-10 text-foreground/90 hover:text-foreground transition-smooth"
          >
            {open ? <X className="h-5 w-5" /> : (
              <span className="flex flex-col gap-[5px]">
                <span className="block w-6 h-px bg-foreground" />
                <span className="block w-6 h-px bg-foreground" />
              </span>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl animate-fade-in">
          <ul className="px-6 flex flex-col py-6 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-2xl tracking-display text-foreground/90 hover:text-accent border-b border-border/40 transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
