const faqs = [
  {
    name: "Lina Samir",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    question: "How do I book an appointment?",
    answer:
      "Just search for a doctor, pick a time slot, and confirm your appointment. It’s that simple!",
  },
  {
    name: "Youssef Tarek",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    question: "Can I cancel or reschedule?",
    answer:
      "Absolutely! Head to 'My Appointments' and you can reschedule or cancel, as long as it's 24 hours in advance.",
  },
  {
    name: "Aya Mostafa",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    question: "Are all doctors verified?",
    answer:
      "Yes, all doctors go through a thorough verification process, so you can trust the quality of care you’ll receive.",
  },
  {
    name: "Mohamed Adel",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    question: "Do I need to pay to book?",
    answer:
      "No, browsing and booking an appointment is completely free. You only pay for the consultation with the doctor, if applicable.",
  },
  {
    name: "Sara Hassan",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    question: "How do I find the right doctor?",
    answer:
      "You can use filters based on specialty, location, and availability to easily find a doctor that matches your needs.",
  },
  {
    name: "Ahmed Khaled",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    question: "Is the platform secure?",
    answer:
      "Yes, our platform follows the highest security standards to protect your personal data and ensure safe payment processing.",
  },
  {
    name: "Mona El-Sayed",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    question: "Can I share my medical history with doctors?",
    answer:
      "Yes, our platform allows you to securely share your medical history with doctors before the consultation to ensure accurate treatment.",
  },
  {
    name: "Hassan Ali",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    question: "Do doctors offer video consultations?",
    answer:
      "Yes, many of our doctors offer video consultations for your convenience. You can filter by 'Telemedicine' when searching.",
  },
  {
    name: "Rania Youssef",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    question: "Can I book appointments for family members?",
    answer:
      "Yes, you can book appointments for anyone, as long as you have their necessary details and consent.",
  },
  {
    name: "Mohamed Fathi",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    question: "What if I’m not satisfied with my appointment?",
    answer:
      "If you’re not satisfied, you can reach out to customer support, and we'll help you resolve the issue. Your feedback matters!",
  },
  {
    name: "Mariam Saleh",
    avatar: "https://randomuser.me/api/portraits/women/60.jpg",
    question: "Are there any hidden fees?",
    answer:
      "No, we ensure transparent pricing. Any applicable charges will be clearly shown before you finalize your booking.",
  },
  {
    name: "Tamer Magdy",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    question: "How do I get my prescription after a consultation?",
    answer:
      "Your doctor will send your prescription to your registered email or make it available on your profile for download.",
  },
];

function FAQSection() {
  return (
    <section className="py-20 px-6">
      <main className="">
        <header className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold text-blue-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              See what our users are asking. We're here to help you get the answers you need!
            </p>
        </header>
        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <article
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={faq.avatar}
                    alt={faq.name}
                    className="w-12 h-12 rounded-full object-cover mt-1"
                    />
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-semibold text-blue-700">{faq.name}</span>
                      <span className="text-gray-400">· asks</span>
                    </div>
                    <p className="text-lg font-medium text-gray-800">{faq.question}</p>
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default FAQSection;
