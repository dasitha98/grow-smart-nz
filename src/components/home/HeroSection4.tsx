import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";

const HeroSection4 = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Accent line */}
    <div className="absolute rigth-0 top-0 h-1 w-full bg-gradient-to-r from-gold via-gold/60 to-transparent" />

    <div className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left — copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-gold">Now taking clients</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Your Next Client Is <span className="text-gold">Already Searching</span> for You Online
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We make sure they find you — with a strategy-first growth system that combines SEO, paid ads, conversion
              design, and smart automation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold text-base">
                Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground/10 px-6 py-3.5 text-sm font-bold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5"
              >
                <Play className="h-4 w-4 fill-gold text-gold" />
                See How It Works
              </Link>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted-foreground/50">
              {siteConfig.hero.trustLine}
            </p>
          </div>

          {/* Right — stacked feature cards */}
          <div className="space-y-4">
            {[
              {
                num: "01",
                title: "Attract the Right Traffic",
                desc: "SEO, content marketing, and targeted paid campaigns bring qualified visitors to your site.",
              },
              {
                num: "02",
                title: "Convert Visitors to Leads",
                desc: "High-converting landing pages, compelling CTAs, and smart lead capture forms.",
              },
              {
                num: "03",
                title: "Scale What Works",
                desc: "Data-driven optimisation, automated follow-ups, and measurable reporting.",
              },
            ].map((card) => (
              <div
                key={card.num}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-gold/30"
              >
                <span className="shrink-0 text-2xl font-extrabold text-gold">{card.num}</span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{card.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection4;
