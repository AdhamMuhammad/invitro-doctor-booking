import { useState, useMemo } from "react";
import DoctorCard from "./DoctorCard";
import BookingForm from "./BookingForm"; // Ensure this path is correct
import doctors from "./doctors";

function DoctorList() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastAppointment, setLastAppointment] = useState(null);

  const today = new Date();
  const todayName = today.toLocaleDateString("en-US", { weekday: "long" });

  const specialties = useMemo(() => ["All", ...new Set(doctors.map((d) => d.specialty))], []);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSpecialty = selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;
      const isAvailableToday = doctor.workingDays.includes(todayName);
      const matchesAvailability = !onlyAvailableToday || isAvailableToday;
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSpecialty && matchesAvailability && matchesSearch;
    });
  }, [selectedSpecialty, onlyAvailableToday, searchTerm, todayName]);

  const handleBookConfirm = ({ firstName, lastName, phoneNumber, email, appointmentDate, appointmentTime }) => {
    // Capitalize the first letter and make the rest lowercase for firstName and lastName
    const formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    const newAppointment = {
      id: Date.now(),
      patientName: `${formattedFirstName} ${formattedLastName}`, // Use formatted names
      phoneNumber,
      email,
      doctorName: selectedDoctor.name,
      specialty: selectedDoctor.specialty,
      dateTime: `${appointmentDate} at ${appointmentTime}`,
      location: `${selectedDoctor.location} ` || "Online",
      status: "Upcoming",
    };

    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    localStorage.setItem("appointments", JSON.stringify([...stored, newAppointment]));

    setLastAppointment(newAppointment);
    setSelectedDoctor(null);
    setShowConfirmation(true);
  };

  return (
    <div className="space-y-8 relative">
      {/* Filter Bar */}
      <div className="sticky top-20 bg-white shadow-sm z-10 p-4 flex flex-col md:flex-row gap-4">
        <ul className="hidden md:flex gap-4 overflow-x-auto">
          {specialties.map((spec) => (
            <li
              key={spec}
              className={`px-4 py-2 rounded-lg cursor-pointer max-h-12 ${selectedSpecialty === spec ? "bg-blue-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              onClick={() => setSelectedSpecialty(spec)}
            >
              {spec}
            </li>
          ))}
        </ul>
        <select className="md:hidden p-2 border rounded-lg" value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
          {specialties.map((spec) => (
            <option key={spec}>{spec}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search doctors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-lg flex-1"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={onlyAvailableToday}
            onChange={(e) => setOnlyAvailableToday(e.target.checked)}
            className="accent-blue-500"
          />
          Available Today
        </label>
      </div>

      {/* Doctor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.length ? (
          filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} onBook={() => setSelectedDoctor(doc)} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">
            No doctors found.
          </div>
        )}
      </div>

      {/* Booking Form */}
      {selectedDoctor && (
        <BookingForm doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} onConfirm={handleBookConfirm} />
      )}

      {/* Confirmation Popup */}
      {showConfirmation && lastAppointment && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl w-96">
            <h2 className="text-xl font-bold mb-4 text-center">Appointment Confirmed 🎉</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><b>Patient Name:</b> {lastAppointment.patientName}</p>
              <p><b>Phone Number:</b> {lastAppointment.phoneNumber}</p>
              <p><b>Email:</b> {lastAppointment.email}</p>
              <p><b>Doctor:</b> {lastAppointment.doctorName}</p>
              <p><b>Specialty:</b> {lastAppointment.specialty}</p>
              <p><b>Date/Time:</b> {lastAppointment.dateTime}</p>
              <p><b>Location:</b> {lastAppointment.location}</p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setShowConfirmation(false)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
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
