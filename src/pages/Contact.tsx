import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactFormSection from "@/components/home/ContactFormSection";
import FinalCTASection from "@/components/home/FinalCTASection";

const Contact = () => (
  <>
    <TopBar />
    <Navbar />
    <main>
      <ContactFormSection />
      <FinalCTASection />
    </main>
    <Footer />
  </>
);

export default Contact;
