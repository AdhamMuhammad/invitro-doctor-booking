import React from 'react';
import HeroButton from '../Common/HeroButton';

function HowItWorks() {
  const steps = [
    {
      title: "Find Your Doctor",
      description: "Browse top-rated specialists to find the perfect match for your needs.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11z" />
          <path d="M19.5 21c0-3.5-3.5-6.5-7.5-6.5S4.5 17.5 4.5 21" />
        </svg>
      ),
    },
    {
      title: "Choose a Time Slot",
      description: "View real-time availability and pick a time that works for you.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2h-1M5 5H4a2 2 0 00-2 2v11a2 2 0 002 2h1" />
        </svg>
      ),
    },
    {
      title: "Book Instantly",
      description: "Confirm your appointment in just a few clicks — no waiting.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      title: "Get Quality Care",
      description: "Meet your doctor online or in-person and start your journey to better health.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path d="M8 10h.01M12 14h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 9-9 9-9 9 4.03 9 9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 px-6">

        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            How It Works
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Booking an appointment with trusted healthcare professionals has never been easier. Follow these simple steps and get started today.
          </p>
          <div className="mx-auto max-w-200 w-full">
            <HeroButton text="View my appointments" className='w-full lg:w-auto' />
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 bg-[#F3FFFE] rounded-2xl shadow hover:shadow-md transition text-center flex flex-col items-center"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
