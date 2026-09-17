import { Award, Crown, Star } from "lucide-react";

const tiers = [
  {
    name: "Bronze",
    range: "0–999 points",
    perks: ["5% discount on every rental"],
    icon: Star,
    color: "text-amber-600",
    accent: "border-amber-600/30",
  },
  {
    name: "Silver",
    range: "1000–4999 points",
    perks: ["10% discount on every rental", "Priority support"],
    icon: Award,
    color: "text-slate-400",
    accent: "border-slate-400/30",
  },
  {
    name: "Gold",
    range: "5000+ points",
    perks: ["20% discount on every rental", "Free upgrades", "Priority support"],
    icon: Crown,
    color: "text-yellow-500",
    accent: "border-yellow-500/30",
  },
];

const LoyaltyRewards = () => {
  return (
    <section id="rewards" className="py-28 md:py-40 bg-background border-t border-border/40">
      <div className="px-6 md:px-12">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="md:col-span-8 lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Loyalty Program
            </p>
            <h2 className="font-display tracking-display leading-[1.02] text-balance"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
              Drive more, <span className="italic">earn more.</span>
            </h2>
            <p className="mt-6 text-foreground/65 max-w-md font-light leading-relaxed text-lg">
              Every rental earns you points. Redeem them for discounts.
            </p>
          </div>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className={`relative p-8 md:p-10 bg-gradient-card border ${tier.accent} transition-smooth hover:border-accent/50 group`}
              >
                {/* Icon */}
                <div className={`mb-8 ${tier.color}`}>
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Tier Name */}
                <h3 className="font-display text-3xl md:text-4xl tracking-display mb-2">
                  {tier.name}
                </h3>

                {/* Points Range */}
                <p className="text-accent text-sm tracking-wide mb-8">
                  {tier.range}
                </p>

                {/* Perks */}
                <ul className="space-y-3">
                  {tier.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80 font-light">
                      <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LoyaltyRewards;
