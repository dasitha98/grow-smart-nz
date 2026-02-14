import { siteConfig } from "@/config/siteConfig";
import { Shield, Target } from "lucide-react";

const CredibilitySection = () => (
  <section className="section-padding border-t border-border">
    <div className="container-narrow mx-auto text-center">
      <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">What We Do</h2>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {siteConfig.capabilities.map((cap) => (
          <span key={cap} className="rounded-full border border-border bg-muted/50 px-5 py-2 text-sm font-medium">
            {cap}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Platforms & Tools</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {siteConfig.tools.map((tool) => (
            <span key={tool} className="text-sm font-semibold text-foreground/80">{tool}</span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Shield className="h-4 w-4 text-gold" />
          Transparent reporting
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Target className="h-4 w-4 text-gold" />
          Strategy-first execution
        </div>
      </div>
    </div>
  </section>
);

export default CredibilitySection;
