import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CredibilitySection from "@/components/home/CredibilitySection";
import ProblemsSection from "@/components/home/ProblemsSection";
import SolutionSection from "@/components/home/SolutionSection";
import WhyDifferentSection from "@/components/home/WhyDifferentSection";
import CompeteSmarterSection from "@/components/home/CompeteSmarterSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ServicesSection from "@/components/home/ServicesSection";
import WorkSection from "@/components/home/WorkSection";
import LaunchPlanSection from "@/components/home/LaunchPlanSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import ContactFormSection from "@/components/home/ContactFormSection";

const Index = () => (
  <>
    <TopBar />
    <Navbar />
    <main>
      <HeroSection4 />
      <CredibilitySection />
      <ProblemsSection />
      <SolutionSection />
      <WhyDifferentSection />
      <CompeteSmarterSection />
      <BeforeAfterSection />
      <ServicesSection />
      <WorkSection />
      <LaunchPlanSection />
      <FAQSection />
      <FinalCTASection />
      <ContactFormSection />
    </main>
    <Footer />
  </>
);

export default Index;
