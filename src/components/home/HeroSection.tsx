import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const HeroSection = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {siteConfig.hero.headline}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            {siteConfig.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {siteConfig.hero.ctaPrimary}
            </Link>
            <Link
              to="/contact"
              className="rounded-md border-2 border-gold bg-gold/10 px-6 py-3.5 text-sm font-bold text-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              {siteConfig.hero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-6 text-sm font-medium tracking-wide text-muted-foreground">
            {siteConfig.hero.trustLine}
          </p>
        </div>

        {/* Our Approach block */}
        <div className="rounded-xl border border-border bg-muted/50 p-8 lg:p-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Our Approach</h2>
          <ul className="mt-6 space-y-5">
            {siteConfig.hero.approach.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <span className="text-base font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
