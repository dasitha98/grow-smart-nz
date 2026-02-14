import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight, Badge } from "lucide-react";

const WorkSection = () => (
  <section className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Work & Builds</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        A look at what we're building. Real case studies coming soon.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.sampleWork.map((work, i) => (
          <div key={i} className="flex flex-col rounded-xl border border-border bg-background p-6">
            <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-bold ${
              work.label === "Sample" ? "bg-gold/10 text-gold-foreground" : "bg-primary/10 text-foreground"
            }`}>
              {work.label}
            </span>
            <h3 className="mt-4 text-lg font-bold">{work.title}</h3>
            <div className="mt-3 flex-1 space-y-3 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Problem:</strong> {work.problem}</p>
              <p><strong className="text-foreground">Approach:</strong> {work.approach}</p>
              <p><strong className="text-foreground">Expected Outcome:</strong> {work.outcome}</p>
            </div>
            <Link
              to={`/work/${i}`}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors hover:text-gold"
            >
              View Details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-gold">
          View All Work <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default WorkSection;
