import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, BarChart3 } from "lucide-react";

const pillars = [
  { icon: Sparkles, label: "Strategy-First", desc: "Custom roadmap before any execution" },
  { icon: Target, label: "Conversion Focus", desc: "Every element designed to convert" },
  { icon: BarChart3, label: "Measurable Growth", desc: "Track real ROI, not vanity metrics" },
];

const HeroSection1 = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Subtle gradient orbs */}
    <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-navy/5 blur-3xl" />

    <div className="relative section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — Copy */}
          <div>
            <span className="section-badge">Digital Marketing & IT Solutions</span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Grow Your Business With{" "}
              <span className="relative">
                <span className="relative z-10 text-foreground">Intelligent</span>
                <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-gold/30 sm:bottom-2 sm:h-4" />
              </span>{" "}
              Marketing Systems
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {siteConfig.hero.subheadline}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold text-base">
                {siteConfig.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-foreground/10 bg-transparent px-7 py-3.5 text-sm font-bold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5"
              >
                {siteConfig.hero.ctaSecondary}
              </Link>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground/60">
              {siteConfig.hero.trustLine}
            </p>
          </div>

          {/* Right — Glassmorphic approach card */}
          <div className="rounded-3xl border border-border bg-gradient-to-br from-muted/60 to-background p-8 shadow-xl backdrop-blur-sm lg:p-10">
            <h2 className="text-xs font-bold uppercase tracking-widest text-gold">Our Approach</h2>
            <div className="mt-8 space-y-6">
              {pillars.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="gold-icon-box shrink-0">
                    <Icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{label}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection1;
