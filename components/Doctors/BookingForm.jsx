import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";  
import { useAppointmentsStore } from "../../app/stores/appointmentsStore";

export default function BookingForm({ doctor, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "+20",
    email: "",
    appointmentDate: null,
    appointmentTime: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmedAppointment, setConfirmedAppointment] = useState(null);

  const addAppointment = useAppointmentsStore((state) => state.addAppointment);
  const navigate = useNavigate();

  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();

  const handleChange = (field) => (e) => {
    const value = e?.target?.value ?? e;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    if (!value.startsWith("+20")) value = "+20";
    value = "+20" + value.slice(3).replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({ ...prev, phoneNumber: value }));
  };

  const isWorkingDay = (date) => {
    const dayName = weekdays[date.getDay()];
    return doctor.workingDays.includes(dayName);
  };

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const filteredTimeSlots = doctor.timeSlots.filter((time) => {
    if (!formData.appointmentDate) return false;
  
    const [hourMinute, ampm] = time.split(" ");
    let [hours, minutes] = hourMinute.split(":").map(Number);
    if (ampm === "PM" && hours !== 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;
  
    const selectedDate = new Date(formData.appointmentDate);
    const now = new Date();
  
    const isToday =
      selectedDate.toDateString() === now.toDateString();
  
    const slotDateTime = new Date(selectedDate);
    slotDateTime.setHours(hours, minutes, 0, 0);
  
    return !isToday || slotDateTime > now;
  });  

  const validateForm = () => {
    const { firstName, lastName, phoneNumber, email, appointmentDate, appointmentTime } = formData;
    const nameRegex = /^[A-Za-z]{2,}$/;
    const phoneRegex = /^\+20\d{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRegex.test(firstName)) return "First name must be at least 2 letters, And only letters.";
    if (!nameRegex.test(lastName)) return "Last name must be at least 2 letters, And only letters.";
    if (!emailRegex.test(email)) return "Please enter a valid email address.";
    if (!phoneRegex.test(phoneNumber)) return "Phone number must start with +20 and have 10 digits after.";
    if (!appointmentDate) return "Please select a date.";
    if (!appointmentTime) return "Please select a valid time.";

    const now = new Date();
    if (appointmentDate.setHours(0, 0, 0, 0) < now.setHours(0, 0, 0, 0))
      return "Cannot book an appointment in the past.";

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    setError("");

    await new Promise((res) => setTimeout(res, 600));

    const [hourMinute, ampm] = formData.appointmentTime.split(" ");
    let [hours, minutes] = hourMinute.split(":").map(Number);

    if (ampm === "PM" && hours !== 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;

    const fullDate = new Date(formData.appointmentDate);
    fullDate.setHours(hours, minutes, 0, 0);

    const localDate = fullDate.toLocaleDateString("en-CA");
    const localTime = fullDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const formattedFirstName = formData.firstName.charAt(0).toUpperCase() + formData.firstName.slice(1).toLowerCase().trim();
    const formattedLastName = formData.lastName.charAt(0).toUpperCase() + formData.lastName.slice(1).toLowerCase().trim();

    const formattedEmail = formData.email.trim().toLowerCase();

    const newAppointment = {
      id: Date.now().toString(),
      doctorName: doctor.name,
      specialty: doctor.specialty,
      location: doctor.location,
      patientName: `${formattedFirstName} ${formattedLastName}`,
      email: formattedEmail,
      phoneNumber: formData.phoneNumber,
      dateTime: `${localDate} at ${localTime}`,
      status: "Upcoming",
    };

    addAppointment(newAppointment);
    setConfirmedAppointment(newAppointment);
    setSubmitting(false);
    setShowConfirmation(true);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 backdrop-blur-sm">

      {!showConfirmation && (
        <div className="bg-white p-8 rounded-xl shadow-2xl w-96 relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>
          <h2 className="text-xl font-bold mb-4">
            Book Appointment with <br />
            <span className="text-2xl text-blue-800">{doctor.name}</span>
          </h2>

          {error && <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "First Name", type: "text", field: "firstName" },
              { label: "Last Name", type: "text", field: "lastName" },
              { label: "Phone Number", type: "tel", field: "phoneNumber", onChange: handlePhoneChange },
              { label: "Email", type: "email", field: "email" },
            ].map(({ label, type, field, onChange = handleChange(field) }) => (
              <div key={field}>
                <label className="block text-sm font-medium">{label}</label>
                <input
                  type={type}
                  className="w-full p-2 outline-none border rounded-lg border-gray-300"
                  value={formData[field]}
                  onChange={onChange}
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-medium">Appointment Date</label>
              <DatePicker
                selected={formData.appointmentDate}
                onChange={handleChange("appointmentDate")}
                minDate={today}
                filterDate={isWorkingDay}
                placeholderText="Select a date"
                className="w-full p-2 outline-none border rounded-lg border-gray-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Appointment Time</label>
              <select
                className="w-full p-2 border rounded-lg border-gray-300"
                value={formData.appointmentTime}
                onChange={handleChange("appointmentTime")}
                required
                disabled={!formData.appointmentDate}
              >
                <option value="">Select a time</option>
                {filteredTimeSlots.length ? (
                  filteredTimeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))
                ) : (
                  <option disabled>No available times today, try another day</option>
                )}
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="bg-blue-500 text-white py-2 px-6 rounded-lg mt-4 w-full"
            >
              {submitting ? "Submitting..." : "Book Appointment"}
            </button>
          </form>
        </div>
      )}

      {showConfirmation && confirmedAppointment && (
        <div className="bg-white p-6 rounded-lg text-center shadow-xl w-96">
          <h3 className="text-lg font-semibold mb-2">Appointment Confirmed!</h3>
          <p className="text-blue-700 font-bold text-lg mb-1">{confirmedAppointment.doctorName}</p>
          <p className="text-sm text-gray-700">
            <b>Patient:</b> {confirmedAppointment.patientName}<br />
            <b>Email:</b> {confirmedAppointment.email}<br />
            <b>Phone:</b> {confirmedAppointment.phoneNumber}<br />
            <b>Date & Time:</b> {confirmedAppointment.dateTime}<br />
            <b>Specialty:</b> {confirmedAppointment.specialty}<br />
            <b>Location:</b> {confirmedAppointment.location}
          </p>
          <button
            onClick={() => {
              setShowConfirmation(false);
              onClose?.();
              navigate("/appointments");
            }}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
}
