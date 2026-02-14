import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "14", unit: "Days", label: "To launch your system" },
  { value: "3x", unit: "", label: "Expected inquiry growth" },
  { value: "100%", unit: "", label: "Transparent reporting" },
];

const HeroSection2 = () => (
  <section className="relative overflow-hidden bg-background">
    {/* Minimal geometric accent */}
    <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-muted/40 to-transparent" />
    <div className="pointer-events-none absolute bottom-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

    <div className="relative section-padding">
      <div className="container-narrow mx-auto text-center">
        <span className="section-badge">NZ Digital Marketing & IT</span>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
          Stop Guessing.{" "}
          <span className="text-gold">Start Growing.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We build strategy-first marketing and technology systems that turn your
          website into a predictable client acquisition machine.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-gold text-base">
            Book Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-foreground/10 px-7 py-3.5 text-sm font-bold text-foreground transition-all hover:border-gold/40 hover:bg-gold/5"
          >
            Get a Free Audit
          </Link>
        </div>

        {/* Stats row */}
        <div className="mx-auto mt-16 grid max-w-3xl gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:border-gold/30"
            >
              <span className="text-3xl font-extrabold text-gold">
                {s.value}
                <span className="ml-1 text-lg font-bold text-foreground">{s.unit}</span>
              </span>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Trust bullets */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          {siteConfig.hero.approach.map((item) => (
            <span key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection2;
