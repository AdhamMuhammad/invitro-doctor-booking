import React from 'react'

function WhyOurDoctors() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Why Trust Our Doctors?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We carefully select our doctors to provide exceptional healthcare experiences for every patient.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Highly Qualified</h3>
            <p className="text-gray-600 text-sm">All our doctors are board-certified and leaders in their specialties.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
            <p className="text-gray-600 text-sm">We focus on your needs, comfort, and best health outcomes.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🏥</div>
            <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600 text-sm">Access to the latest medical technologies for accurate diagnoses.</p>
          </div>

          <div className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600 text-sm">Choose appointment slots that work for your busy schedule.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyOurDoctors