import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Strategy-first approach",
  "Full-funnel marketing system",
  "Transparent, measurable reporting",
  "NZ-ready execution",
];

const HeroSection5 = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Abstract geometric shapes */}
    <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rotate-45 rounded-3xl border border-gold/10" />
    <div className="pointer-events-none absolute -right-10 top-32 h-72 w-72 rotate-45 rounded-3xl border border-gold/5" />
    <div className="pointer-events-none absolute -left-32 bottom-20 h-64 w-64 rounded-full bg-muted/50" />

    <div className="relative section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr]">
          {/* Left */}
          <div>
            <span className="section-badge">DigitalEdge NZ</span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
              From Invisible to{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Irresistible</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full text-gold"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Transform your online presence into a high-converting client
              acquisition system. Marketing strategy and technology, working
              together.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-3.5 w-3.5 text-gold" strokeWidth={3} />
                  </div>
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold text-base">
                Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-foreground/10 px-7 py-3.5 text-sm font-bold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5"
              >
                Free Audit →
              </Link>
            </div>
          </div>

          {/* Right — large metric showcase */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { metric: "14", label: "Day launch plan", sub: "Strategy to live in two weeks" },
              { metric: "3x", label: "Inquiry growth", sub: "Expected within 90 days" },
              { metric: "100%", label: "Transparent", sub: "You own all accounts & data" },
              { metric: "24hr", label: "Response time", sub: "We respond within one day" },
            ].map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-border bg-gradient-to-br from-background to-muted/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/30"
              >
                <span className="text-3xl font-extrabold text-gold">{item.metric}</span>
                <h3 className="mt-2 text-sm font-bold text-foreground">{item.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection5;
