import { siteConfig } from "@/config/siteConfig";

const ClientsPartnersSection = () => (
  <section id="partners" className="section-padding bg-muted/30">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Trusted By</span>
        <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
          Clients & Partners
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Proud to support growing teams across NZ.
        </p>
      </div>

      {/* Marquee logo strip */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-background p-6 md:p-8">
        <div className="relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee items-center gap-12">
            {/* Double the logos for seamless loop */}
            {[...siteConfig.clientLogos, ...siteConfig.clientLogos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex shrink-0 items-center justify-center px-4"
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
                      className="h-10 max-w-[120px] object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </a>
                ) : (
                  <div className="flex h-12 items-center rounded-lg border border-border/50 bg-muted/50 px-6 py-2 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 hover:border-gold/30">
                    <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">{logo.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground/40">
          Logos displayed with permission.
        </p>
      </div>
    </div>
  </section>
);

export default ClientsPartnersSection;
