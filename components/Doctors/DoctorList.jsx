import { useState, useMemo } from "react";
import DoctorCard from "./DoctorCard";
import doctors from "./doctors";

function DoctorList() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const today = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = weekdays[today.getDay()];

  const specialties = useMemo(
    () => ["All", ...new Set(doctors.map((doc) => doc.specialty))],
    [doctors]
  );

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
      const isAvailableToday = doctor.workingDays.includes(todayName);
      const matchesAvailability = !onlyAvailableToday || isAvailableToday;
      const matchesSearchTerm = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSpecialty && matchesAvailability && matchesSearchTerm;
    });
  }, [selectedSpecialty, onlyAvailableToday, searchTerm]);

  return (
    <div className="space-y-8">
      {/* Sticky Category Navigation */}
      <div className="category-bar sticky top-20 bg-white shadow-sm z-10 border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
          {/* Categories */}
          {/* Pills for large screens */}
          <ul className="hidden md:flex category-list gap-4 overflow-x-auto">
            {specialties.map((spec) => (
              <li
                key={spec}
                className={`flex items-center justify-center px-3 py-2 max-h-12 cursor-pointer rounded-lg transition-all text-sm font-medium ${
                  selectedSpecialty === spec
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSpecialty(spec)}
                aria-selected={selectedSpecialty === spec}
              >
                {spec}
              </li>
            ))}
          </ul>

          {/* Dropdown for mobile */}
          <select
            className="block md:hidden w-full p-2 border rounded-lg border-gray-300"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map((spec) => (
              <option key={spec} value={spec}>
                {spec}
              </option>
            ))}
          </select>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for a doctor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 p-2 border rounded-lg border-gray-300"
            aria-label="Search for a doctor"
          />

          {/* Only Available Today Filter */}
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={onlyAvailableToday}
              onChange={(e) => setOnlyAvailableToday(e.target.checked)}
              className="accent-blue-500"
              aria-label="Only available today"
            />
            Only Available Today
          </label>
        </div>
      </div>

      {/* Doctors List */}
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
