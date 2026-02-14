import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/config/siteConfig";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WorkDetail = () => {
  const { id } = useParams();
  const work = siteConfig.sampleWork[Number(id)];

  if (!work) {
    return (
      <>
        <TopBar />
        <Navbar />
        <main className="section-padding text-center">
          <p>Project not found.</p>
          <Link to="/work" className="mt-4 inline-block text-sm font-semibold text-gold">← Back to Work</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-3xl">
            <Link to="/work" className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-gold">
              <ArrowLeft className="h-4 w-4" /> Back to Work
            </Link>

            <span className={`mt-6 inline-block rounded-full px-3 py-1 text-xs font-bold ${
              work.label === "Sample" ? "bg-gold/10 text-gold-foreground" : "bg-primary/10 text-foreground"
            }`}>
              {work.label}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">{work.title}</h1>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gold">The Problem</h2>
                <p className="mt-2 text-muted-foreground">{work.problem}</p>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Our Approach</h2>
                <p className="mt-2 text-muted-foreground">{work.approach}</p>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-gold">Expected Outcome</h2>
                <p className="mt-2 text-muted-foreground">{work.outcome}</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-block rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground transition-colors hover:bg-gold/90"
            >
              Discuss Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WorkDetail;
