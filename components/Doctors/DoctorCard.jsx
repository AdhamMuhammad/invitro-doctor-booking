function DoctorCard({ doctor, onBook }) {
  const today = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = weekdays[today.getDay()];

  const isWorkingToday = doctor.workingDays?.includes(todayName) ?? false;

  const parseTimeToMinutes = (timeStr) => {
    if (!timeStr || typeof timeStr !== "string") return null;

    const [time, modifier] = timeStr.trim().split(" ");
    if (!time || !modifier) return null;

    let [hours, minutes] = time.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) return null;

    if (modifier.toUpperCase() === "PM" && hours !== 12) hours += 12;
    if (modifier.toUpperCase() === "AM" && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  const workingStart = parseTimeToMinutes(doctor.workingHours?.start);
  const workingEnd = parseTimeToMinutes(doctor.workingHours?.end);
  const currentMinutes = today.getHours() * 60 + today.getMinutes();

  const isWithinWorkingHours =
    workingStart != null && workingEnd != null
      ? workingStart < workingEnd
        ? currentMinutes >= workingStart && currentMinutes <= workingEnd
        : currentMinutes >= workingStart || currentMinutes <= workingEnd
      : false;

  const isAvailableNow = isWorkingToday && isWithinWorkingHours;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center">
      <img
        src={doctor.image}
        alt={doctor.name}
        loading="lazy"
        className="w-24 h-24 rounded-full object-cover"
      />
      <h2 className="text-lg font-bold mt-4">{doctor.name}</h2>
      <p className="text-gray-500">{doctor.specialty}</p>
      <p className="text-sm text-gray-400">{doctor.location || "Location not available"}</p>

      {doctor.workingHours?.start && doctor.workingHours?.end ? (
        <p className="text-sm text-gray-400 mt-1">
          {doctor.workingHours.start} - {doctor.workingHours.end}
        </p>
      ) : (
        <p className="text-sm text-gray-400 mt-1">Working hours not available</p>
      )}

      <p className="text-sm text-gray-400 mt-1">
        {doctor.workingDays?.join(", ") || "No working days set"}
      </p>

      <div
        className={`mt-2 font-semibold ${
          isAvailableNow ? "text-green-600" : "text-red-500"
        }`}
      >
        {isAvailableNow ? "Available Now" : "Not Available Now"}
      </div>

      <div className="flex items-center mt-2">
        <span className="text-yellow-500">{'★'.repeat(Math.round(doctor.rating))}</span>
        <span className="text-gray-400 ml-1">{doctor.rating}</span>
      </div>

      <button
        onClick={onBook}
        className={"mt-4 w-full py-2 rounded-lg font-medium transition bg-blue-500 hover:bg-blue-600 text-white"}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default DoctorCard;
