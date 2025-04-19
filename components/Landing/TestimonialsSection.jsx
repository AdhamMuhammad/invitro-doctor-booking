const Testimonial = ({ text, name, stars, image }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[350px] min-h-[300px] text-start justify-between border-l-2 border-[#07838F80] pl-4 p-4 shadow-md rounded-md bg-white">
      <div className="flex gap-1">
        {[...Array(stars)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
      <p className="text-base text-gray-600 italic">"{text}"</p>
      <div className="flex items-center gap-4 mt-4">
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 object-cover rounded-full"
        />
        <p className="font-bold text-gray-800">{name}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Amazing service! The doctors were incredibly caring and professional. I felt supported throughout the entire process.",
      name: "Sarah Johnson",
      stars: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "I appreciate how easy it was to book appointments and get consultations. Highly recommended!",
      name: "James Lee",
      stars: 4,
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      text: "Top-notch medical team with real compassion for their patients. Couldn't have asked for better care.",
      name: "Emily Davis",
      stars: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-12">Testimonials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              stars={testimonial.stars}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
