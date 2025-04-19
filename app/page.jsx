import Navbar from "../components/Common/Navbar";
import HeroSection from "../components/Landing/HeroSection";
import DataDrivenApproach from "../components/Landing/DataDrivenApproach";
import FAQSection from "../components/Landing/FAQSection";
import AwardsSection from "../components/Landing/AwardsSection";
import AboutSection from "../components/Landing/AboutSection";
import QuoteSection from "../components/Landing/QuoteSection";
import TestimonialsSection from "../components/Landing/TestimonialsSection";
import Footer from "../components/Common/Footer";

function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <DataDrivenApproach />
      <FAQSection />
      <AwardsSection />
      <AboutSection />
      <QuoteSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default Page;
