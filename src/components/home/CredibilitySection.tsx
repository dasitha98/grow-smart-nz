import { siteConfig } from "@/config/siteConfig";
import { Shield, Target, Zap } from "lucide-react";

const CredibilitySection = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Capabilities</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">What We Bring to the Table</h2>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {siteConfig.capabilities.map((cap) => (
          <span key={cap} className="card-elevated rounded-full px-6 py-3 text-sm font-semibold">
            {cap}
          </span>
        ))}
      </div>

      <div className="mt-12 rounded-2xl navy-gradient p-8 md:p-12">
        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-gold">Platforms & Tools We Work With</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          {siteConfig.tools.map((tool) => (
            <div key={tool} className="flex items-center gap-2 rounded-lg border border-navy-foreground/10 bg-navy-foreground/5 px-5 py-2.5">
              <Zap className="h-3.5 w-3.5 text-gold" />
              <span className="text-sm font-semibold text-navy-foreground/80">{tool}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-10">
          <div className="flex items-center gap-3 text-sm font-medium text-navy-foreground/70">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20">
              <Shield className="h-4 w-4 text-gold" />
            </div>
            Transparent reporting
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-navy-foreground/70">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20">
              <Target className="h-4 w-4 text-gold" />
            </div>
            Strategy-first execution
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CredibilitySection;
