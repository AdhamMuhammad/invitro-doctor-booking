import React, { useState, useMemo, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import doctors from "../../components/Doctors/doctors";
import { useAppointmentsStore } from "../../app/stores/appointmentsStore";
import AppointmentCard from "../../components/Appointments/AppointmentCard";

function AppointmentsPage() {
  const { hydrate, appointments, editAppointment, cancelAppointment } = useAppointmentsStore();
  const [editingId, setEditingId] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editingDoctorSlots, setEditingDoctorSlots] = useState([]);
  const [editingDoctorDaysOff, setEditingDoctorDaysOff] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [now, setNow] = useState(new Date()); // 🆕 add "now" state

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  // 🆕 Auto-refresh "now" every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000); // 60,000ms = 1 minute
    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  const parseDateTime = (dateTimeStr) => {
    if (!dateTimeStr || !dateTimeStr.includes(" at ")) return new Date(dateTimeStr);
    const [date, time] = dateTimeStr.split(" at ");
    return new Date(`${date} ${time}`);
  };

  const handleEdit = (id, dateTime, doctorName) => {
    try {
      const date = parseDateTime(dateTime);
      setEditingId(id);
      setEditDate(date.toISOString().split("T")[0]);
      setEditTime(date.toTimeString().slice(0, 5));

      const doctor = doctors.find((d) => d.name === doctorName);
      if (doctor) {
        setEditingDoctorSlots(doctor.timeSlots || []);
        setEditingDoctorDaysOff(
          ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].filter(
            (day) => !doctor.workingDays.includes(day)
          )
        );
      } else {
        setEditingDoctorSlots([]);
        setEditingDoctorDaysOff([]);
      }
    } catch {
      setErrorMessage("Failed to parse appointment date!");
    }
  };

  const handleSaveEdit = (id) => {
    if (!editDate || !editTime || editTime === "Select Time") {
      setErrorMessage("Please choose both date and time.");
      return;
    }

    const [timePart, period] = editTime.split(" ");
    if (!timePart || !period) {
      setErrorMessage("Invalid time format selected.");
      return;
    }

    let [hour, minute] = timePart.split(":").map(Number);
    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    const combined = new Date(`${editDate}T${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:00`);

    if (isNaN(combined.getTime())) {
      setErrorMessage("Please choose a valid date or time.");
      return;
    }

    const formattedDate = combined.toLocaleDateString("en-EG", {
      timeZone: "Africa/Cairo",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formattedTime = combined.toLocaleTimeString("en-EG", {
      timeZone: "Africa/Cairo",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    editAppointment(id, `${formattedDate} at ${formattedTime}`);
    setEditingId(null);
    setEditDate("");
    setEditTime("");
    setErrorMessage("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditDate("");
    setEditTime("");
    setErrorMessage("");
  };

  const filterAppointments = (past = false) =>
    (appointments || []).filter((appt) => {
      try {
        const apptDate = parseDateTime(appt.dateTime);
        return past ? apptDate < now : apptDate >= now; // 🆕 use "now" state
      } catch {
        return false;
      }
    });

  const currentAppointments = useMemo(() => filterAppointments(false), [appointments, now]);
  const pastAppointments = useMemo(() => filterAppointments(true), [appointments, now]);

  return (
    <div className="w-full p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">My Appointments</h1>

        {errorMessage && (
          <div className="mb-4 p-2 text-red-500 text-center">{errorMessage}</div>
        )}

        <AppointmentSection
          title="Current Appointments"
          appointments={currentAppointments}
          emptyMessage="No current appointments. Book one!"
          onEdit={handleEdit}
          onCancel={cancelAppointment}
          onSaveEdit={handleSaveEdit}
          onCancelEdit={handleCancelEdit}
          editingId={editingId}
          editDate={editDate}
          setEditDate={setEditDate}
          editTime={editTime}
          setEditTime={setEditTime}
          editingDoctorSlots={editingDoctorSlots}
          editingDoctorDaysOff={editingDoctorDaysOff}
        />

        <AppointmentSection
          title="Past Appointments"
          appointments={pastAppointments}
          emptyMessage="No past appointments yet."
          past
        />
      </section>
    </div>
  );
}

function AppointmentSection({
  title,
  appointments,
  emptyMessage,
  past = false,
  onEdit,
  onCancel,
  onSaveEdit,
  onCancelEdit,
  editingId,
  editDate,
  setEditDate,
  editTime,
  setEditTime,
  editingDoctorSlots,
  editingDoctorDaysOff,
}) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center">{emptyMessage}</p>
      ) : (
        <div className="space-y-6">
          {appointments.map((appt) => (
            <AppointmentCard
              key={appt.id}
              appointment={appt}
              past={past}
              onEdit={onEdit}
              onCancel={onCancel}
              onSaveEdit={onSaveEdit}
              onCancelEdit={onCancelEdit}
              editingId={editingId}
              editDate={editDate}
              setEditDate={setEditDate}
              editTime={editTime}
              setEditTime={setEditTime}
              editingDoctorSlots={editingDoctorSlots}
              editingDoctorDaysOff={editingDoctorDaysOff}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AppointmentsPage;
