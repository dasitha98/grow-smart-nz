import { useEffect } from "react";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code2, Server, Wrench, Users } from "lucide-react";
import headshot from "@/assets/portfolio-headshot.jpg";

const projects = [
  {
    title: "Realtime Analytics Platform",
    role: "Lead Full-Stack Engineer",
    result: "Reduced dashboard load time by 68% and scaled to 12M+ events/day for a fintech client.",
    stack: ["React", "Node.js", "Kafka", "PostgreSQL"],
  },
  {
    title: "AI Customer Support Suite",
    role: "Backend Engineer",
    result: "Cut first-response time by 74% and saved the support team ~2,400 hours per quarter.",
    stack: ["Python", "FastAPI", "OpenAI", "Redis"],
  },
  {
    title: "E-commerce Headless Storefront",
    role: "Front-End Engineer",
    result: "Lifted conversion rate by 31% and improved Core Web Vitals to all-green across pages.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Shopify"],
  },
  {
    title: "Logistics Routing Engine",
    role: "Software Engineer",
    result: "Optimized delivery routes saving $1.2M/year in fuel costs across 400+ vehicles.",
    stack: ["Go", "gRPC", "PostGIS", "Docker"],
  },
];

const experience = [
  {
    company: "Northwind Technologies",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    bullets: [
      "Lead a team of 5 engineers building cloud-native B2B SaaS products.",
      "Architected event-driven microservices handling 50M+ monthly requests.",
    ],
  },
  {
    company: "BrightLabs",
    role: "Full-Stack Engineer",
    period: "2019 — 2022",
    bullets: [
      "Shipped 20+ features across web and mobile, growing MAU from 30k to 220k.",
      "Introduced CI/CD pipelines that cut release time from 2 days to 25 minutes.",
    ],
  },
  {
    company: "Pixelforge Studio",
    role: "Junior Web Developer",
    period: "2017 — 2019",
    bullets: [
      "Built responsive marketing sites for 30+ SMB clients across NZ and AU.",
      "Improved average Lighthouse scores from 62 to 95 through perf refactors.",
    ],
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Front-End",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Back-End",
    skills: ["Node.js", "Python / FastAPI", "Go", "PostgreSQL", "Redis", "GraphQL"],
  },
  {
    icon: Wrench,
    title: "Tools & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Vercel"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Team Leadership", "Mentoring", "Clear Communication", "Product Thinking", "Agile Delivery", "Stakeholder Management"],
  },
];

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Software Engineer";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Software engineer portfolio: top projects, work experience, and technical skills across front-end, back-end, tools, and soft skills.";
    if (meta) meta.setAttribute("content", content);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <>
      <TopBar />
      <Navbar />
      <main className="bg-background">
        {/* Intro */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-gold/15 text-gold-foreground hover:bg-gold/20 border-0">Available for new projects</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
                Hi, I'm Alex — a software engineer who ships products people actually use.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I've spent 8+ years building reliable, performant web platforms — from real-time analytics to AI tooling and high-traffic storefronts. I care about clean architecture, fast feedback loops, and outcomes over output.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-navy hover:bg-navy/90 text-white">
                  <a href="mailto:hello@example.com"><Mail className="mr-2 h-4 w-4" />Get in touch</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://github.com" target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />GitHub</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</a>
                </Button>
              </div>
            </div>
            <div className="justify-self-center md:justify-self-end">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold/40 to-navy/20 blur-2xl" aria-hidden />
                <img
                  src={headshot}
                  alt="Portrait of Alex, software engineer"
                  width={320}
                  height={320}
                  className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-xl ring-1 ring-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Selected projects</h2>
              <p className="mt-3 text-muted-foreground">A few recent builds where I owned outcomes end-to-end.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((p) => (
                <Card key={p.title} className="group border-border/60 hover:border-gold/60 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-navy">{p.title}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="mt-1 text-sm font-medium text-gold-foreground">{p.role}</p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{p.result}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span key={s} className="text-xs px-2 py-1 rounded-md bg-navy/5 text-navy/80">{s}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience timeline */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Experience</h2>
              <p className="mt-3 text-muted-foreground">Companies I've helped build and ship with.</p>
            </div>
            <ol className="relative border-l-2 border-border ml-3 space-y-10">
              {experience.map((e) => (
                <li key={e.company} className="pl-8 relative">
                  <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold ring-4 ring-white">
                    <Briefcase className="h-3 w-3 text-navy" />
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-navy">
                      {e.role} <span className="text-muted-foreground font-normal">· {e.company}</span>
                    </h3>
                    <span className="text-sm text-muted-foreground">{e.period}</span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-muted-foreground list-disc list-inside">
                    {e.bullets.map((b) => (<li key={b}>{b}</li>))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">Skills</h2>
              <p className="mt-3 text-muted-foreground">Tools and traits I bring to every team.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillGroups.map((g) => {
                const Icon = g.icon;
                return (
                  <Card key={g.title} className="border-border/60">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-lg font-semibold text-navy">{g.title}</h3>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {g.skills.map((s) => (
                          <li key={s} className="text-sm px-3 py-1.5 rounded-full bg-white border border-border text-navy/80">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;