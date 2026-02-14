import { siteConfig } from "@/config/siteConfig";
import { AlertTriangle, XCircle } from "lucide-react";

const ProblemsSection = () => (
  <section className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        Common Growth Problems & Red Flags
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        If any of these sound familiar, you're not alone — and there's a better way forward.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <AlertTriangle className="h-5 w-5 text-gold" />
            Growth Blockers
          </h3>
          <ul className="mt-6 space-y-4">
            {siteConfig.painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold-foreground">{i + 1}</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="flex items-center gap-2 text-lg font-bold">
            <XCircle className="h-5 w-5 text-destructive" />
            Red Flags to Watch For
          </h3>
          <ul className="mt-6 space-y-4">
            {siteConfig.redFlags.map((flag, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/60" />
                {flag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default ProblemsSection;
