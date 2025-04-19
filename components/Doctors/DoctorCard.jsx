function DoctorCard({ doctor }) {
  const today = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = weekdays[today.getDay()];

  const isAvailableToday = doctor.workingDays.includes(todayName);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="text-lg font-bold mt-4">{doctor.name}</h2>
      <p className="text-gray-500">{doctor.specialty}</p>
      <p className="text-sm text-gray-400">{doctor.location}</p>
      <p className="text-sm text-gray-400 mt-1">{doctor.workingHours}</p>
      <p className="text-sm text-gray-400 mt-1">{doctor.workingDays.join(", ")}</p>

      <div
        className={`mt-2 font-semibold ${
          isAvailableToday ? "text-green-600" : "text-red-500"
        }`}
      >
        {isAvailableToday ? "Available Today" : "Not Available Today"}
      </div>

      {/* Rating */}
      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{'★'.repeat(Math.floor(doctor.rating))}</span>
        <span className="text-gray-400 ml-1">{doctor.rating}</span>
      </div>

      <button
        disabled={!isAvailableToday}
        className={`mt-4 w-full py-2 rounded-lg font-medium transition 
          ${isAvailableToday ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}
        `}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;
