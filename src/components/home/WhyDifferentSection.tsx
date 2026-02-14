import { siteConfig } from "@/config/siteConfig";
import { Check } from "lucide-react";

const WhyDifferentSection = () => (
  <section className="soft-gray-section section-padding">
    <div className="container-narrow mx-auto">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">Why We're Different</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
        We don't do cookie-cutter. Every engagement is built around your goals.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.differentiators.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-background p-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10">
              <Check className="h-4 w-4 text-gold" />
            </div>
            <h3 className="mt-4 text-base font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDifferentSection;
