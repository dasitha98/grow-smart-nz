import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy/85" />
    </div>

    <div className="relative section-padding">
      <div className="container-narrow mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="section-badge mb-6">Digital Marketing & IT Solutions</div>
            <h1 className="text-4xl font-extrabold leading-[1.1] text-navy-foreground sm:text-5xl lg:text-6xl">
              <span className="text-gold">{siteConfig.hero.headlineHighlight}</span>{" "}
              <span>{siteConfig.hero.headline}</span>
            </h1>
            <p className="mt-6 text-lg text-navy-foreground/70 sm:text-xl">{siteConfig.hero.subheadline}</p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-navy border border-navy-foreground/20 bg-navy-foreground text-navy">
                {siteConfig.hero.ctaPrimary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-gold">
                {siteConfig.hero.ctaSecondary}
              </Link>
            </div>

            <p className="mt-8 text-sm font-medium tracking-wide text-navy-foreground/50">
              {siteConfig.hero.trustLine}
            </p>
          </div>

          {/* Our Approach block */}
          <div className="animate-float rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-8 backdrop-blur-sm lg:p-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Our Approach</h2>
            <ul className="mt-8 space-y-6">
              {siteConfig.hero.approach.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/20">
                    <CheckCircle className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-base font-medium text-navy-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
