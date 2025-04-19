import React from 'react';

function WhyOurDoctors() {
  return (
    <section className="py-20 bg-[#F3FFFE]">
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Why Choose Our Doctors?
        </h2>
        <p className="text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
          Your health is our top priority. Here's why thousands trust our expert team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex justify-center items-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <feature.icon />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const StethoscopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v5a4 4 0 008 0V4m-4 14v2m6-6a6 6 0 01-12 0"/>
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
      4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
      2.09C13.09 3.81 14.76 3 16.5 3 
      19.58 3 22 5.42 22 8.5c0 3.78-3.4 
      6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const HospitalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21V3h18v18H3zm9-10h6M9 14v-4H5v4h4z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
  </svg>
);

const features = [
  {
    icon: StethoscopeIcon,
    title: "Expert Physicians",
    description: "Board-certified doctors with proven excellence in medical care.",
  },
  {
    icon: HeartIcon,
    title: "Personalized Care",
    description: "Tailored treatment plans focused on your unique health needs.",
  },
  {
    icon: HospitalIcon,
    title: "Modern Facilities",
    description: "Advanced clinics equipped with cutting-edge medical technology.",
  },
  {
    icon: CalendarIcon,
    title: "Flexible Scheduling",
    description: "Choose appointments that fit perfectly into your schedule.",
  },
];

export default WhyOurDoctors;
