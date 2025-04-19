import React from "react";
import checkIcon from "../../assets/verified-check.png";
import quoteIcon from "../../assets/quote.png";

function QuoteSection() {
  return (
    <section className="py-20 px-6">
      <article className="max-w-[1240px] px-8 py-12 sm:py-14 md:py-8 mx-auto rounded-2xl shadow-xl bg-blue-50">
        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3 mb-6">
          <figure className="flex flex-row gap-3">
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
              alt="Dr. Virgil C. Adams"
              loading="lazy"
              className="w-20 h-20 rounded-full object-cover"
              />
            <img
              src={quoteIcon}
              alt="Dr. Virgil C. Adams"
              className="w-8 h-5"
              />
            </figure>
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900">
            Inspirational Words from Dr. Virgil C. Adams <img src={checkIcon} alt="" className="w-4 h-4 inline" />
          </h2>
        </div>

        <p className="text-gray-700 text-base sm:text-base md:text-lg leading-relaxed text-center md:text-left">
          "The greatest wealth is health. To enjoy the fullness of life, we must understand that true health
          encompasses more than the absence of disease. It is about the balance of mind, body, and spirit.
          It is about making choices that nurture our well-being, taking care of ourselves mentally and physically,
          and empowering others to do the same."
        </p>
      </article>
    </section>
  );
}

export default QuoteSection;
