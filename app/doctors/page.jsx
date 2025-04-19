import Navbar from "../components/Doctors/Navbar";
import HeroSection from "../components/Doctors/HeroSection";
import DoctorList from "../components/Doctors/DoctorList";

function Page() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <DoctorList />
    </div>
  );
}

export default Page;
