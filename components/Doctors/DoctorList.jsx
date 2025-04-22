import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import DoctorCard from "./DoctorCard";
import BookingForm from "./BookingForm";
import doctors from "./doctors";
import { useAppointmentsStore } from "../../app/stores/store";

function DoctorList() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const navigate = useNavigate();
  const today = new Date();
  const todayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const currentMinutes = today.getHours() * 60 + today.getMinutes();

  const addAppointment = useAppointmentsStore((state) => state.addAppointment);

  const specialties = useMemo(
    () => ["All", ...new Set(doctors.map((d) => d.specialty))],
    []
  );

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesSpecialty =
        selectedSpecialty === "All" || doctor.specialty === selectedSpecialty;

      const isAvailableToday = (() => {
        const worksToday = doctor.workingDays?.includes(todayName);

        const parseTimeToMinutes = (timeStr) => {
          if (!timeStr) return null;
          const [time, modifier] = timeStr.split(" ");
          if (!time || !modifier) return null;

          let [hours, minutes] = time.split(":").map(Number);
          if (modifier.toUpperCase() === "PM" && hours !== 12) hours += 12;
          if (modifier.toUpperCase() === "AM" && hours === 12) hours = 0;

          return hours * 60 + minutes;
        };

        const start = parseTimeToMinutes(doctor.workingHours?.start);
        const end = parseTimeToMinutes(doctor.workingHours?.end);

        let inWorkingHours = false;
        if (start != null && end != null) {
          if (start < end) {
            inWorkingHours = currentMinutes >= start && currentMinutes <= end;
          } else {
            // Handles overnight shift (e.g., 1 PM to 1 AM)
            inWorkingHours = currentMinutes >= start || currentMinutes <= end;
          }
        }

        return worksToday && inWorkingHours;
      })();

      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSpecialty && (!onlyAvailableToday || isAvailableToday) && matchesSearch;
    });
  }, [selectedSpecialty, onlyAvailableToday, searchTerm, todayName, currentMinutes]);

  const handleBookConfirm = ({
    firstName,
    lastName,
    phoneNumber,
    email,
    appointmentDate,
    appointmentTime,
    doctorName,
    specialty,
    location,
  }) => {
    const formattedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    const appointmentDateTime = new Date(`${appointmentDate} ${appointmentTime}`);
    const now = new Date();

    const newAppointment = {
      id: Date.now(),
      patientName: `${formattedFirstName} ${formattedLastName}`,
      phoneNumber,
      email,
      doctorName,
      specialty,
      date: appointmentDate,
      time: appointmentTime,
      location,
      status: appointmentDateTime < now ? "Done" : "Upcoming",
    };

    addAppointment(newAppointment);

  };

  const handleClose = () => {
    setSelectedDoctor(null);
    navigate("/appointments");
  };


  return (
    <div className="space-y-8 relative">
      <div className="sticky top-20 bg-white shadow-sm z-10 p-4 flex flex-col md:flex-row gap-4">
        <ul className="hidden md:flex gap-4 overflow-x-auto">
          {specialties.map((spec) => (
            <li
              key={spec}
              className={`px-4 py-2 rounded-lg cursor-pointer max-h-12 ${
                selectedSpecialty === spec
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedSpecialty(spec)}
            >
              {spec}
            </li>
          ))}
        </ul>

        <select
          className="md:hidden p-2 border rounded-lg"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          {specialties.map((spec) => (
            <option key={spec}>{spec}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search doctors"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 max-h-12 outline-none border border-gray-300 rounded-lg flex-1"
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={onlyAvailableToday}
            onChange={(e) => setOnlyAvailableToday(e.target.checked)}
            className="accent-blue-500"
          />
          Available Now
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.length ? (
          filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} onBook={() => setSelectedDoctor(doc)} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">
            No doctors available.
          </div>
        )}
      </div>

      {selectedDoctor && (
        <BookingForm
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onDone={handleClose}
      />      
      )}
    </div>
  );
}

export default DoctorList;