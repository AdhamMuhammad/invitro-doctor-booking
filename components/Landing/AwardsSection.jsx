const awards = [
  {
    title: "Best Healthcare Platform 2025",
    description:
      "Awarded for providing the most reliable and accessible healthcare services.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg", // Customer service theme
  },
  {
    title: "Innovation in Telemedicine",
    description:
      "Recognized for pioneering telemedicine solutions for easy online consultations.",
    image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg", // Tech and innovation related
  },
  {
    title: "Customer Satisfaction Excellence",
    description:
      "Awarded for delivering an exceptional user experience and customer support.",
    image: "https://images.pexels.com/photos/3182824/pexels-photo-3182824.jpeg", // Customer support theme
  },
];

function AwardsSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-blue-800 mb-4 tracking-tight">
            Our Prestigious Awards & Recognitions
          </h2>
          <p className="text-lg text-gray-600">
            We are proud of the recognition we've received for our continued dedication to providing the best in healthcare services.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {awards.map((award, index) => (
            <article
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={award.image}
                  alt={award.title}
                  loading="lazy"
                  className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">
                {award.title}
              </h3>
              <p className="text-gray-600 text-center">{award.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
