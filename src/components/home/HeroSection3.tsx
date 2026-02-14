import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";

const features = [
  { icon: Zap, title: "Attract", desc: "Drive qualified traffic" },
  { icon: Users, title: "Capture", desc: "Convert visitors to leads" },
  { icon: TrendingUp, title: "Convert", desc: "Nurture & close deals" },
  { icon: Shield, title: "Scale", desc: "Optimise what works" },
];

const HeroSection3 = () => (
  <section className="relative bg-background">
    <div className="section-padding">
      <div className="container-narrow mx-auto">
        {/* Minimal bold typography hero */}
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-widest text-gold">
            DigitalEdge NZ
          </span>

          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Marketing that{" "}
            <span className="underline decoration-gold decoration-4 underline-offset-8">
              actually
            </span>{" "}
            delivers clients.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted-foreground">
            Strategy-first systems combining marketing expertise and modern
            technology to generate consistent, qualified inquiries for NZ businesses.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold text-base">
              Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-foreground transition-colors hover:text-gold"
            >
              Learn our process →
            </Link>
          </div>
        </div>

        {/* 4 pillar cards in a row */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold/30"
            >
              <span className="absolute right-4 top-4 text-5xl font-extrabold text-muted/40 transition-colors group-hover:text-gold/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection3;
