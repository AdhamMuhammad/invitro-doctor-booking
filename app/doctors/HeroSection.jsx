const HeroSection = () => {
  return (
    <section className="relative bg-blue-600 text-white py-32 px-6">
      <div className="absolute inset-0 bg-opacity-30 bg-gradient-to-r from-teal-400 to-blue-800"></div>
      <div className="relative z-10 container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Your Health, Our Priority
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          We provide top-notch medical care tailored to your needs. Explore our services and take the first step toward a healthier life today.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
