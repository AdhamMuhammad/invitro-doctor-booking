import { useEffect, useState } from "react";

function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newDateTime, setNewDateTime] = useState("");

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  const handleCancel = (id) => {
    const updatedAppointments = appointments.filter((appt) => appt.id !== id);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const handleEdit = (id, currentDateTime) => {
    try {
      const [datePart, timePart] = currentDateTime.split(" at ");
      const parsedDate = new Date(datePart + " " + timePart);
      const isoDateTime = parsedDate.toISOString().slice(0, 16); // '2025-04-20T15:00'
      setEditingId(id);
      setNewDateTime(isoDateTime);
    } catch {
      alert("Failed to parse appointment date!");
    }
  };

  const handleSaveEdit = (id) => {
    const date = new Date(newDateTime);
    const readableDate = date.toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" });
    const readableTime = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", hour12: false });
    const readableDateTime = `${readableDate} at ${readableTime}`;

    const updatedAppointments = appointments.map((appt) =>
      appt.id === id ? { ...appt, dateTime: readableDateTime } : appt
    );
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    setEditingId(null);
    setNewDateTime("");
  };

  const now = new Date();

  const parseAppointmentDate = (dateTimeString) => {
    if (!dateTimeString.includes(" at ")) return new Date(dateTimeString); // fallback
    const [datePart, timePart] = dateTimeString.split(" at ");
    return new Date(datePart + " " + timePart);
  };

  const currentAppointments = appointments.filter((appt) => {
    try {
      const apptDate = parseAppointmentDate(appt.dateTime);
      return apptDate >= now;
    } catch {
      return false;
    }
  });

  const pastAppointments = appointments.filter((appt) => {
    try {
      const apptDate = parseAppointmentDate(appt.dateTime);
      return apptDate < now;
    } catch {
      return false;
    }
  });

  return (
    <div className="w-full p-8">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">My Appointments</h1>

        {/* Current Appointments */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Current Appointments</h2>

          {currentAppointments.length === 0 ? (
            <p className="text-gray-500 text-center">No current appointments. Book one!</p>
          ) : (
            <div className="space-y-6">
              {currentAppointments.map((appt) => (
                <div
                  key={appt.id}
                  className="border border-gray-300 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{appt.doctorName}</h3>
                    <span className="text-green-500 text-sm font-semibold">{appt.status}</span>
                  </div>

                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Patient:</span> {appt.patientName}</p>
                    <p><span className="font-semibold">Specialty:</span> {appt.specialty}</p>
                    {editingId === appt.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="datetime-local"
                          value={newDateTime}
                          onChange={(e) => setNewDateTime(e.target.value)}
                          className="border p-2 rounded-lg w-full"
                        />
                        <button
                          onClick={() => handleSaveEdit(appt.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-lg text-sm"
                        >
                          Save
                        </button>
                      </div>
                    ) : (
                      <p><span className="font-semibold">Date & Time:</span> {appt.dateTime}</p>
                    )}
                    <p><span className="font-semibold">Location:</span> {appt.location}</p>
                  </div>

                  <div className="flex justify-end gap-4 mt-6">
                    <button
                      onClick={() => handleEdit(appt.id, appt.dateTime)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-4 rounded-lg text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleCancel(appt.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Past Appointments */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Past Appointments</h2>

          {pastAppointments.length === 0 ? (
            <p className="text-gray-500 text-center">No past appointments yet.</p>
          ) : (
            <div className="space-y-6">
              {pastAppointments.map((appt) => (
                <div
                  key={appt.id}
                  className="border border-gray-200 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-600">{appt.doctorName}</h3>
                    <span className="text-gray-400 text-sm font-semibold">{appt.status}</span>
                  </div>

                  <div className="space-y-2 text-gray-600">
                    <p><span className="font-semibold">Patient:</span> {appt.patientName}</p>
                    <p><span className="font-semibold">Specialty:</span> {appt.specialty}</p>
                    <p><span className="font-semibold">Date & Time:</span> {appt.dateTime}</p>
                    <p><span className="font-semibold">Location:</span> {appt.location}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default AppointmentsPage;
