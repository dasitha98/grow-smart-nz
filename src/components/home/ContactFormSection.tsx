import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto max-w-2xl">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Get in Touch</h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
          Tell us about your project. We respond within 24 hours.
        </p>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-gold">{siteConfig.phone}</a>
          {" • "}
          <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold">{siteConfig.email}</a>
        </div>

        {submitted ? (
          <div className="mt-10 rounded-xl border border-gold/30 bg-gold/5 p-8 text-center">
            <h3 className="text-lg font-bold">Thank you!</h3>
            <p className="mt-2 text-sm text-muted-foreground">We'll be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input type="text" placeholder="Your Name *" required className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold" />
              <input type="email" placeholder="Email *" required className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <input type="text" placeholder="Company" className="rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold" />
              <select className="rounded-md border border-border bg-background px-4 py-3 text-sm text-muted-foreground outline-none transition-colors focus:border-gold">
                <option value="">Budget Range</option>
                <option>$2,000 – $5,000</option>
                <option>$5,000 – $10,000</option>
                <option>$10,000 – $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your project *" required rows={5} className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold" />

            <button
              type="submit"
              className="w-full rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Send Message
            </button>

            <p className="text-center text-xs text-muted-foreground">
              By submitting, you agree to our{" "}
              <Link to="/privacy" className="underline transition-colors hover:text-gold">Privacy Policy</Link>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactFormSection;
