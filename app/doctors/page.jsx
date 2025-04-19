import HeroSection from "../../components/Doctors/HeroSection";
import WhyOurDoctors from "../../components/Doctors/WhyOurDoctors";
import DoctorsList from "../../components/Doctors/DoctorList";
import HowItWorks from "../../components/Doctors/HowItWorks";

function Page() {
  return (
    <div className="w-full">
      <HeroSection />
      <WhyOurDoctors />
      <DoctorsList />
      <HowItWorks />
    </div>
  );  
}

export default Page;
