import { ArrowRight } from "lucide-react";
import heroDriver from "@/assets/hero-driver.jpg";

const HERO_VIDEO_SRC =
  "https://framerusercontent.com/assets/IhPFuGAFC6wl5lrrbvT67Xxis.webm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-bleed background video */}
      <div className="absolute inset-0 z-0">
        <video
          src={HERO_VIDEO_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={heroDriver}
          className="w-full h-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        />
        {/* Subtle vignette for legibility — keep dark + cinematic */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 pt-32">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          {/* Title */}
          <div className="md:col-span-7">
            <h1 className="font-display text-foreground tracking-display leading-[1.02] text-balance animate-fade-up"
                style={{ fontSize: "clamp(2.75rem, 7.5vw, 7rem)" }}>
              Drive Beyond Limits<br />
              <span className="italic text-foreground/95">Live Beyond Time</span>
            </h1>
          </div>

          {/* Right copy + CTA */}
          <div className="md:col-span-4 md:col-start-9 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="text-foreground/75 text-base md:text-[17px] leading-relaxed font-light max-w-sm">
              Renting a car should feel as smooth as the ride itself. That's why
              we've simplified everything — from browsing our collection to
              booking in minutes.
            </p>

            <a
              href="http://localhost:3001/register"
              id="book"
              className="group mt-8 inline-flex items-center gap-3 link-underline text-foreground"
            >
              <span className="font-display text-xl md:text-2xl tracking-display">Browse Our Fleet</span>
              <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-smooth" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
