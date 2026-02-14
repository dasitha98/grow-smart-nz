import { siteConfig } from "@/config/siteConfig";
import { CheckCircle } from "lucide-react";

const LaunchPlanSection = () => (
  <section id="launch-plan" className="section-padding">
    <div className="container-narrow mx-auto">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Your 14-Day Launch Plan</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        From audit to launch in two weeks. Here's the roadmap.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.launchPlan.map((step, i) => (
          <div key={i} className="relative rounded-xl border border-border p-6">
            <span className="text-3xl font-extrabold text-gold/30">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-gold">{step.days}</p>
            <h3 className="mt-2 text-base font-bold">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-xl rounded-xl border border-border bg-muted/50 p-8">
        <h3 className="text-base font-bold">What We Need From You</h3>
        <ul className="mt-4 space-y-3">
          {siteConfig.launchChecklist.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default LaunchPlanSection;
