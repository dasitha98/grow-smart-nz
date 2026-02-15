import { Globe, Smartphone, Search, Share2, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Web Development",
    outcome: "Conversion-focused websites that win inquiries",
    points: ["Landing pages + CMS", "Performance & SEO-ready"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    outcome: "Apps built to support growth",
    points: ["MVP to launch", "Scalable architecture"],
  },
  {
    icon: Search,
    title: "SEO",
    outcome: "Rank higher and attract intent-driven traffic",
    points: ["Technical SEO", "Content strategy"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    outcome: "Turn attention into clients",
    points: ["Content plan", "Campaign execution"],
  },
  {
    icon: FileText,
    title: "Content Management",
    outcome: "Consistent content that supports growth",
    points: ["Website updates", "Blog/content ops"],
  },
];

const CredibilitySection = () => (
  <section id="services-overview" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="text-center">
        <span className="section-badge">Capabilities</span>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          What We Offer
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Everything you need to attract, convert, and scale — built as one system.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((cap) => (
          <div
            key={cap.title}
            className="card-elevated flex flex-col p-6"
          >
            <div className="gold-icon-box mb-4">
              <cap.icon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="text-lg font-bold text-foreground">{cap.title}</h3>
            <p className="mt-1 text-sm font-medium text-gold">{cap.outcome}</p>
            <ul className="mt-4 space-y-2">
              {cap.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link to="/contact" className="btn-gold text-base">
          Get a Free Audit <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-sm font-bold text-foreground transition-colors hover:text-gold gold-underline underline"
        >
          See Services
        </Link>
      </div>
    </div>
  </section>
);

export default CredibilitySection;
