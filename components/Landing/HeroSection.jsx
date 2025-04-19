import checkIcon from "../../assets/verified-check.png";
import HeroButton from "./HeroButton";

const features = [
  "Access hundreds of certified doctors across multiple specialties.",
  "Real-time availability and instant appointment booking.",
  "Easy-to-use filters to find the right doctor for your needs.",
  "Fully responsive, accessible design for mobile and desktop users.",
];

function HeroSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between h-screen">

        <div className="max-w-2xl md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
            Find & Book Your Doctor Easily
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Search for trusted healthcare professionals and book appointments with ease.
            Fast, simple, and accessible anywhere.
          </p>
          <HeroButton text={"Browse doctors"}/>
        </div>

        <div className="max-w-xl md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="bg-[#F3FFFE] p-8 rounded-2xl shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Why Choose Our Platform?
            </h2>
            <ul className="space-y-4 text-gray-700">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <img src={checkIcon} alt="" className="w-5 h-5 mr-3 mt-1" />
                  <p>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
