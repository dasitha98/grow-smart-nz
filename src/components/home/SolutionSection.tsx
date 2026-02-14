import { siteConfig } from "@/config/siteConfig";
import { Zap, MousePointerClick, RefreshCcw, TrendingUp } from "lucide-react";

const icons = [Zap, MousePointerClick, RefreshCcw, TrendingUp];

const SolutionSection = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        We Build Intelligent Systems That Deliver Predictable Client Growth.
      </h2>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.pillars.map((pillar, i) => {
          const Icon = icons[i];
          return (
            <div key={pillar.title} className="rounded-xl border border-border p-6 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SolutionSection;
