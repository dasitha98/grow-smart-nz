import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { AlertOctagon, CheckCircle, ArrowRight } from "lucide-react";

const PitfallsSection = () => (
  <section id="pitfalls" className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Protect Your Investment</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Costly Pitfalls to Avoid
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Some setups look great at first — but become expensive bottlenecks as your business grows.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {/* Left — Pitfalls */}
        <div>
          <h3 className="text-lg font-bold">
            What looks good at the start
            <span className="block text-sm font-medium text-muted-foreground mt-1">
              (but becomes expensive later)
            </span>
          </h3>
          <div className="mt-6 space-y-4">
            {siteConfig.pitfalls.map((pitfall, i) => (
              <div key={i} className="card-elevated p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                    <AlertOctagon className="h-4 w-4 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{pitfall.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{pitfall.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Checklist */}
        <div>
          <h3 className="text-lg font-bold">
            How to spot it
            <span className="block text-sm font-medium text-muted-foreground mt-1">
              (quick checklist)
            </span>
          </h3>
          <div className="mt-6 card-elevated p-6">
            <ul className="space-y-4">
              {siteConfig.pitfallChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          Not sure if your current setup can scale? We'll review it.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
          <Link to="/contact" className="btn-gold">
            Request a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href="#launch-plan"
            className="text-sm font-bold text-foreground transition-colors hover:text-gold gold-underline underline"
          >
            See the 14-Day Launch Plan
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PitfallsSection;
