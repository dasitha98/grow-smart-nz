import { siteConfig } from "@/config/siteConfig";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="navy-section">
    <div className="container-narrow mx-auto section-padding">
      <div className="grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="text-lg font-heading font-bold">{siteConfig.name}</h3>
          <p className="mt-3 text-sm text-navy-foreground/70">{siteConfig.tagline}</p>
          <p className="mt-2 text-sm text-navy-foreground/70">{siteConfig.address}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Pages</h4>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sm text-navy-foreground/70 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Legal</h4>
          <ul className="mt-4 space-y-2">
            <li><Link to="/privacy" className="text-sm text-navy-foreground/70 transition-colors hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-navy-foreground/70 transition-colors hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="mt-4 space-y-2">
            <li><a href={`tel:${siteConfig.phone}`} className="text-sm text-navy-foreground/70 transition-colors hover:text-gold">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="text-sm text-navy-foreground/70 transition-colors hover:text-gold">{siteConfig.email}</a></li>
          </ul>
          <div className="mt-4 flex gap-4">
            {Object.entries(siteConfig.social).map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noopener noreferrer" className="text-sm capitalize text-navy-foreground/70 transition-colors hover:text-gold">
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-navy-foreground/10 pt-8 text-center text-sm text-navy-foreground/50">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
