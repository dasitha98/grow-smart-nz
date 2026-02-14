import { Link } from "react-router-dom";

const FinalCTASection = () => (
  <section className="navy-section section-padding">
    <div className="container-narrow mx-auto text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">
        Ready to Expand Your Client Base With Confidence?
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
        Let's build a system that attracts the right clients, converts them consistently, and scales with your business.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-block rounded-md bg-gold px-8 py-4 text-sm font-bold text-gold-foreground transition-colors hover:bg-gold/90"
      >
        Book Strategy Call
      </Link>
    </div>
  </section>
);

export default FinalCTASection;
