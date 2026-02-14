import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection1 from "@/components/home/HeroSection1";
import HeroSection2 from "@/components/home/HeroSection2";
import HeroSection3 from "@/components/home/HeroSection3";
import HeroSection4 from "@/components/home/HeroSection4";
import HeroSection5 from "@/components/home/HeroSection5";

const Index = () => (
  <>
    <TopBar />
    <Navbar />
    <main>
      {/* Hero Variant 1: Glassmorphic split — gradient orbs + approach card */}
      <HeroSection1 />

      <div className="navy-section section-padding text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">Hero Variant 2</span>
      </div>

      {/* Hero Variant 2: Centered stats — clean elevated stat cards */}
      <HeroSection2 />

      <div className="navy-section section-padding text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">Hero Variant 3</span>
      </div>

      {/* Hero Variant 3: Minimal bold type — large headline + pillar cards */}
      <HeroSection3 />

      <div className="navy-section section-padding text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">Hero Variant 4</span>
      </div>

      {/* Hero Variant 4: Split with stacked feature cards */}
      <HeroSection4 />

      <div className="navy-section section-padding text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-gold">Hero Variant 5</span>
      </div>

      {/* Hero Variant 5: Geometric shapes + metric grid */}
      <HeroSection5 />
    </main>
    <Footer />
  </>
);

export default Index;
