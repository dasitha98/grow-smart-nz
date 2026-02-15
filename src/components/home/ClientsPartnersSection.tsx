import { siteConfig } from "@/config/siteConfig";
import { Shield, Target, BarChart3 } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "Transparent scope" },
  { icon: Target, label: "Clear milestones" },
  { icon: BarChart3, label: "Measurable progress" },
];

const ClientsPartnersSection = () => (
  <section id="partners" className="section-padding bg-muted/20">
    <div className="container-narrow mx-auto">
      {/* Header */}
      <div className="text-center">
        <span className="section-badge">Trust Signals</span>
        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
          Trusted By Clients &amp; Partners
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Building NZ-ready growth systems with clear execution.
        </p>
      </div>

      {/* Premium logo wall */}
      <div className="mt-12 rounded-3xl border border-border bg-background p-8 shadow-md md:p-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {siteConfig.clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center"
            >
              {logo.image ? (
                <a
                  href={logo.link || undefined}
                  target={logo.link ? "_blank" : undefined}
                  rel={logo.link ? "noopener noreferrer" : undefined}
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="h-10 max-w-[120px] object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </a>
              ) : (
                <div className="flex h-14 w-full items-center justify-center rounded-xl border border-border/50 bg-muted/30 px-4 py-3 opacity-60 transition-all duration-300 hover:opacity-100 hover:border-gold/30 hover:shadow-sm">
                  <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground/40">
          Logos displayed with permission.
        </p>
      </div>

      {/* Trust micro-row */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <item.icon className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsPartnersSection;
