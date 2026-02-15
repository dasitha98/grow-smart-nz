import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState<"sample" | "building">("sample");

  const sampleWork = siteConfig.sampleWork.filter((w) => w.label === "Sample");
  const buildingWork = siteConfig.sampleWork.filter((w) => w.label === "Currently Building");

  const items = activeTab === "sample" ? sampleWork : buildingWork;

  return (
    <section className="navy-gradient section-padding text-navy-foreground">
      <div className="container-narrow mx-auto">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Work & Builds</h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-foreground/60">
            A look at what we're building. Real case studies coming soon.
          </p>

          {/* Tab switch */}
          <div className="mx-auto mt-8 inline-flex rounded-full border border-navy-foreground/15 bg-navy-foreground/5 p-1">
            <button
              onClick={() => setActiveTab("sample")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                activeTab === "sample"
                  ? "bg-gold text-gold-foreground"
                  : "text-navy-foreground/60 hover:text-navy-foreground"
              }`}
            >
              Sample Work
            </button>
            <button
              onClick={() => setActiveTab("building")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${
                activeTab === "building"
                  ? "bg-gold text-gold-foreground"
                  : "text-navy-foreground/60 hover:text-navy-foreground"
              }`}
            >
              Currently Building
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((work, i) => (
            <div key={i} className="flex flex-col rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-navy-foreground/10">
              <span className={`inline-block self-start rounded-full px-3.5 py-1 text-xs font-bold ${
                work.label === "Sample"
                  ? "bg-gold/20 text-gold"
                  : "border border-navy-foreground/20 text-navy-foreground/70"
              }`}>
                {work.label}
              </span>
              <h3 className="mt-5 text-lg font-bold">{work.title}</h3>
              <div className="mt-4 flex-1 space-y-3 text-sm text-navy-foreground/60">
                <p><strong className="text-navy-foreground/80">Problem:</strong> {work.problem}</p>
                <p><strong className="text-navy-foreground/80">Approach:</strong> {work.approach}</p>
                <p><strong className="text-navy-foreground/80">Expected:</strong> {work.outcome}</p>
              </div>
              <Link
                to={`/work/${i}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-gold/80"
              >
                View Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/work" className="btn-gold">
            View All Work <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
