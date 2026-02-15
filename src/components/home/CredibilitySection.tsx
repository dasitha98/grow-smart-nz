import { siteConfig } from "@/config/siteConfig";
import { Shield, Target } from "lucide-react";

const CredibilitySection = () => (
  <section className="section-padding bg-background">
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

      <div className="mt-12 flex flex-wrap justify-center gap-10">
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 border border-gold/20">
            <Shield className="h-4 w-4 text-gold" />
          </div>
          Transparent reporting
        </div>
        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 border border-gold/20">
            <Target className="h-4 w-4 text-gold" />
          </div>
          Strategy-first execution
        </div>
      </div>
    </div>
  </section>
);

export default CredibilitySection;
