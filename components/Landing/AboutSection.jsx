import React, { useState } from "react";

// About section content
const aboutInfo = [
  {
    title: "Foundation",
    description:
      "Founded on the principles of accessibility, care, and innovation, InVitro Health uses technology to simplify healthcare and make it more efficient.",
    image: "https://images.pexels.com/photos/3182777/pexels-photo-3182777.jpeg",
  },
  {
    title: "Mission",
    description:
      "At InVitro Health, mission is to revolutionize healthcare by leveraging technology and ensuring access to quality care for everyone, everywhere.",
    image: "https://images.pexels.com/photos/4241189/pexels-photo-4241189.jpeg",
  },
  {
    title: "Vision",
    description:
      "Vision is to empower individuals to take control of their health through innovative solutions, bridging the gap between patients and healthcare providers.",
    image: "https://images.pexels.com/photos/3184195/pexels-photo-3184195.jpeg",
  },
];

function AboutSection() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
            About InVitro Health
          </h2>
          <p className="text-lg text-gray-600">
            Learn more about the foundation, mission, and vision behind our work.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-16">

          <div className="w-full md:w-1/4">
            <div className="space-y-6 border-r-2 border-gray-300 h-full pr-6">
              {aboutInfo.map((info, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`cursor-pointer p-4 rounded-lg text-blue-800 border-2 border-transparent hover:border-blue-600 hover:bg-gray-300 transition-all duration-300 ease-in-out ${
                    activeCard === index ? "bg-blue-200" : "bg-gray-100"
                  }`}
                >
                  <h3 className="text-xl font-medium">{info.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex flex-col items-center">
              <div
                className="w-full h-96 bg-cover bg-center rounded-xl mb-6 transform transition-transform duration-200 ease-in-out hover:scale-103"
                style={{
                  backgroundImage: `url(${aboutInfo[activeCard].image})`,
                }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div
                    className="text-2xl text-white font-bold p-8"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                  >
                    <p>{aboutInfo[activeCard].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
