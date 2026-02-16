import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ClientsPartnersSection from "@/components/home/ClientsPartnersSection";
import CredibilitySection from "@/components/home/CredibilitySection";
import ProblemsSection from "@/components/home/ProblemsSection";
import PitfallsSection from "@/components/home/PitfallsSection";
import SolutionSection from "@/components/home/SolutionSection";
import WhyDifferentSection from "@/components/home/WhyDifferentSection";
import CompanyOverviewSection from "@/components/home/CompanyOverviewSection";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";

import WorkSection from "@/components/home/WorkSection";
import LaunchPlanSection from "@/components/home/LaunchPlanSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTASection from "@/components/home/FinalCTASection";
import ContactFormSection from "@/components/home/ContactFormSection";
import ScrollDotsNav from "@/components/shared/ScrollDotsNav";

const Index = () => (
  <>
    <TopBar />
    <Navbar />
    <ScrollDotsNav />
    <main>
      <HeroSection />
      <ClientsPartnersSection />
      <CredibilitySection />
      <ProblemsSection />
      <PitfallsSection />
      <SolutionSection />
      <WhyDifferentSection />
      <CompanyOverviewSection />
      <BeforeAfterSection />
      
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
