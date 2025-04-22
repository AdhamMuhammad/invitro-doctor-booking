import checkIcon from "../../assets/check.png";
import HeroButton from "../Common/HeroButton";

const dataPoints = [
  {
    title: "10K+ Appointments",
    description: "Successfully booked by patients every month through our platform.",
  },
  {
    title: "100+ Verified Doctors",
    description: "Carefully selected across multiple specialties, ensuring trust and expertise.",
  },
  {
    title: "99% Satisfaction Rate",
    description: "Patients love the ease of booking and the quality of healthcare services.",
  },
];

function DataDrivenSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1400px] bg-[#F3FFFE] shadow-xl px-8 py-12 sm:py-14 md:py-8 mx-auto bg-gradient rounded-2xl mx-auto flex flex-col md:flex-row items-center justify-between">

        <div className="max-w-2xl md:w-1/2 mb-12 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6 leading-tight">
            A Data-Driven Approach to Better Healthcare
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our platform is powered by real data to enhance your healthcare experience.
            We constantly analyze feedback, appointment trends, and doctor performance
            to ensure you get the best possible care.
          </p>
          <HeroButton text={"View my appointments"} isLink isInternal linkUrl="/appointments"/>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {dataPoints.map((point, index) => (
            <div key={index} className="flex items-start">
              <img src={checkIcon} alt="" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-blue-700">{point.title}</h3>
                <p className="text-gray-500 mt-1">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DataDrivenSection;
