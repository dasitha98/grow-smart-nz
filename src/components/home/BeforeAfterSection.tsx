import { siteConfig } from "@/config/siteConfig";
import { ArrowRight } from "lucide-react";

const BeforeAfterSection = () => (
  <section className="navy-section section-padding">
    <div className="container-narrow mx-auto">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Before & After</h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-sm text-navy-foreground/60">
        Example targets — what transformation looks like for a typical engagement.
      </p>

      <div className="mt-12 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-xl border border-navy-foreground/10 p-8">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-navy-foreground/50">Before</h3>
          <ul className="space-y-4">
            {siteConfig.beforeAfter.before.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-navy-foreground/70">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-destructive" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex">
          <ArrowRight className="h-10 w-10 text-gold" />
        </div>

        <div className="rounded-xl border border-gold/30 bg-gold/5 p-8">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-gold">After</h3>
          <ul className="space-y-4">
            {siteConfig.beforeAfter.after.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-navy-foreground/90">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
