import HeroButton from '../Common/HeroButton';

const HeroSection = () => {
  return (
    <section className="px-6">
      <div className="max-w-[1400px] h-screen mx-auto flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-blue-800">
          Your Health, Our Priority
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-gray-700">
          We provide top-notch medical care tailored to your needs. Explore our services and take the first step toward a healthier life today.
        </p>
        <div className="mx-auto max-w-200 w-full">
          <HeroButton text="Book An Appointment" className='w-full md:w-auto sm:mx-auto' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
