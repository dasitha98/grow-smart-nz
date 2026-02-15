import { siteConfig } from "@/config/siteConfig";

const ClientsPartnersSection = () => (
  <section id="partners" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
          Trusted By
        </span>
        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
          Clients & Partners
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Proud to support growing teams across NZ.
        </p>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-background p-8 md:p-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {siteConfig.clientLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center"
            >
              {logo.link ? (
                <a
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="h-10 max-w-[120px] object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </a>
              ) : (
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-10 max-w-[120px] object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                />
              )}
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground/40">
          Logos displayed with permission.
        </p>
      </div>
    </div>
  </section>
);

export default ClientsPartnersSection;
