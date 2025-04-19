import { useState } from "react";

export default function BookingForm({ doctor, onClose, onConfirm }) {
  const today = new Date();
  const minDate = today.toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+20");
  const [email, setEmail] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Validation function
  const validateForm = () => {
    const nameRegex = /^[A-Za-z]{2,}$/;
    if (!nameRegex.test(firstName)) return "First name must be at least 2 letters.";
    if (!nameRegex.test(lastName)) return "Last name must be at least 2 letters.";
    if (!email.endsWith("@gmail.com")) return "Email must end with @gmail.com.";
    const phoneRegex = /^\+20\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) return "Phone number must start with +20 and contain exactly 10 digits after.";
    if (!doctor.timeSlots.includes(appointmentTime)) return "Selected time slot is unavailable.";
    const selectedDateTime = new Date(`${appointmentDate}T${appointmentTime}`);
    if (selectedDateTime < new Date()) return "Cannot book an appointment in the past.";
    if (!firstName || !lastName || !phoneNumber || !email || !appointmentDate || !appointmentTime) return "Please fill all fields.";
    return ""; // No error
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    onConfirm({
      firstName,
      lastName,
      phoneNumber,
      email,
      appointmentDate,
      appointmentTime,
      doctorName: doctor.name,
      specialty: doctor.specialty,
      location: doctor.location || "Online",
    });

    setSubmitting(false);
    onClose();
  };

  // Handle phone input to force +20 prefix
  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!value.startsWith("+20")) value = "+20";
    value = "+20" + value.slice(3).replace(/\D/g, "").slice(0, 10);
    setPhoneNumber(value);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">
          Book Appointment with <br />
          <span className="text-2xl text-blue-800">{doctor.name}</span>
        </h2>

        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg border-gray-300"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-lg border-gray-300"
              value={phoneNumber}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Appointment Date</label>
            <input
              type="date"
              min={minDate}
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full p-2 border rounded-lg border-gray-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Appointment Time</label>
            <select
              className="w-full p-2 border rounded-lg border-gray-300"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
              disabled={!appointmentDate} // Disable if no date is selected
            >
              <option value="">Select a time</option>
              {doctor.timeSlots.length ? (
                doctor.timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))
              ) : (
                <option disabled>No available times</option>
              )}
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 w-full"
            >
              {submitting ? "Submitting..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
