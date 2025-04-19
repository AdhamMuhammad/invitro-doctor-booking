import Navbar from "../../components/Common/Navbar";
import HeroSection from "../../components/Doctors/HeroSection";
import WhyOurDoctors from "../../components/Doctors/WhyOurDoctors";
import DoctorsList from "../../components/Doctors/DoctorList";
import HowItWorks from "../../components/Doctors/HowItWorks";
import Footer from "../../components/Common/Footer";

function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <WhyOurDoctors />
      <DoctorsList />
      <HowItWorks />
      <Footer />
    </div>
  );  
}

export default Page;
