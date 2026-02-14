import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Our Services</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        Everything you need to attract, convert, and retain high-value clients.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((service) => (
          <div key={service.slug} className="group flex flex-col rounded-xl border border-border p-6 transition-shadow hover:shadow-lg">
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
            <div className="mt-4 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">What it solves</p>
              <p className="mt-1 text-sm text-muted-foreground">{service.solves}</p>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">Outcomes</p>
              <p className="mt-1 text-sm text-muted-foreground">{service.outcomes}</p>
            </div>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground transition-colors group-hover:text-gold"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
