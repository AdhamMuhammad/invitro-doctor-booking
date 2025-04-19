import { useState, useMemo } from "react";
import DoctorCard from "./DoctorCard";
import doctors from "./doctors";

function DoctorList() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [popupStage, setPopupStage] = useState("none"); // none | booking | confirming
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const today = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = weekdays[today.getDay()];
  const minDate = today.toISOString().split("T")[0];

  const specialties = useMemo(() => ["All", ...new Set(doctors.map((doc) => doc.specialty))], []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
      const isAvailableToday = doctor.workingDays.includes(todayName);
      const matchesAvailability = !onlyAvailableToday || isAvailableToday;
      const matchesSearchTerm = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSpecialty && matchesAvailability && matchesSearchTerm;
    });
  }, [selectedSpecialty, onlyAvailableToday, searchTerm]);

  const handleSubmitAppointment = (e) => {
    e.preventDefault();
    if (!selectedDoctor || !appointmentDate || !appointmentTime || !patientName) {
      alert("Please fill all fields.");
      return;
    }

    const doctorAvailableTimes = selectedDoctor.timeSlots || [];
    if (!doctorAvailableTimes.includes(appointmentTime)) {
      alert("The selected time is outside of the doctor's available time slots.");
      return;
    }

    setPopupStage("confirming");
  };

  const handleCloseConfirmationPopup = () => {
    setPopupStage("none");
  };

  return (
    <div className="space-y-8 relative">
      {/* Category Navigation */}
      <div className="category-bar sticky top-20 bg-white shadow-sm z-10 border-b border-gray-200">
        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 gap-4">
          <ul className="hidden md:flex category-list gap-4 overflow-x-auto">
            {specialties.map((spec) => (
              <li
                key={spec}
                className={`flex items-center justify-center px-3 py-2 max-h-12 cursor-pointer rounded-lg transition-all text-sm font-medium ${
                  selectedSpecialty === spec ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedSpecialty(spec)}
              >
                {spec}
              </li>
            ))}
          </ul>

          <select
            className="block md:hidden w-full p-2 border rounded-lg border-gray-300"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search for a doctor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 p-2 border rounded-lg border-gray-300"
          />

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
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onBook={() => {
              setSelectedDoctor(doctor);
              setPopupStage("booking");
            }} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No doctors found matching your filters.
          </div>
        )}
      </div>

      {/* Booking Popup */}
      {popupStage === "booking" && selectedDoctor && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-96 transform scale-100 transition-all duration-300">
            <h2 className="text-xl font-bold mb-4">Book Appointment with <br /><span className="text-2xl text-blue-800">{selectedDoctor.name}</span></h2>

            <form onSubmit={handleSubmitAppointment}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Patient's Name</label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Appointment Date</label>
                <input
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                  min={minDate}
                  required
                  className="w-full p-2 border rounded-lg border-gray-300"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Appointment Time</label>
                <select
                  value={appointmentTime}
                  onChange={(e) => setAppointmentTime(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg border-gray-300"
                >
                  {selectedDoctor.timeSlots?.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setPopupStage("none")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {popupStage === "confirming" && selectedDoctor && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm transition-all duration-300">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-96 transform scale-100 transition-all duration-300">
            <h2 className="text-xl font-bold mb-4">Appointment Confirmed!</h2>
            <p className="font-bold">Patient: {patientName}</p>
            <p className="font-bold">Doctor: <span className="text-blue-800">{selectedDoctor.name}</span></p>
            <p className="font-bold">Specialty: {selectedDoctor.specialty}</p>
            <p className="font-bold">Date: {appointmentDate}</p>
            <p className="font-bold">Time: {appointmentTime}</p>

            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={handleCloseConfirmationPopup}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorList;
