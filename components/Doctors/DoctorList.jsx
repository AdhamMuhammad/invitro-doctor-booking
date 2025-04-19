import { useState } from "react";
import DoctorCard from "./Doctors/DoctorCard";
import doctors from "./Doctors/doctors";

function DoctorList() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);

  const today = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = weekdays[today.getDay()];

  const specialties = ["All", ...new Set(doctors.map(doc => doc.specialty))];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
    const isAvailableToday = doctor.workingDays.includes(todayName);
    const matchesAvailability = !onlyAvailableToday || isAvailableToday;
    return matchesSpecialty && matchesAvailability;
  });

  return (
    <div className="space-y-8">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <select
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
          className="border border-gray-300 rounded-lg p-2"
        >
          {specialties.map((spec) => (
            <option key={spec} value={spec}>
              {spec}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={onlyAvailableToday}
            onChange={(e) => setOnlyAvailableToday(e.target.checked)}
            className="accent-blue-500"
          />
          Only Available Today
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No doctors found matching your filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorList;
