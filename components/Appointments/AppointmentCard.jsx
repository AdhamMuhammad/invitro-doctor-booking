import DatePicker from 'react-datepicker';
 
export default function AppointmentCard({
  appointment,
  past,
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
  const isEditing = editingId === appointment.id;
 
  const formatTo12Hour = (hour, minute) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    let adjustedHour = hour % 12;
    adjustedHour = adjustedHour ? adjustedHour : 12;
    return `${adjustedHour}:${minute.toString().padStart(2, '0')} ${period}`;
  };
 
  const parseTimeSlot = (slot) => {
    if (typeof slot !== 'string' || !slot.includes(':')) {
      return null;
    }
    const match = slot.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) {
      return null;
    }
    const [, hourStr, minuteStr, period] = match;
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
    if (isNaN(hour) || isNaN(minute) || hour < 0 || hour > 12 || minute >= 60) {
      return null;
    }
    let adjustedHour = hour;
    if (period.toUpperCase() === 'PM' && hour !== 12) adjustedHour += 12;
    if (period.toUpperCase() === 'AM' && hour === 12) adjustedHour = 0;
    return { hour: adjustedHour, minute };
  };
 
  const availableTimes = (editingDoctorSlots || []).filter((slot) => {
    if (!editDate) return !!parseTimeSlot(slot);
  
    const now = new Date();
    const parsed = parseTimeSlot(slot);
    if (!parsed) return false;
  
    const { hour, minute } = parsed;
  
    const dateSlot = new Date(editDate);
    dateSlot.setHours(hour);
    dateSlot.setMinutes(minute);
    dateSlot.setSeconds(0);
    dateSlot.setMilliseconds(0);
  
    const isSameDay =
      dateSlot.getFullYear() === now.getFullYear() &&
      dateSlot.getMonth() === now.getMonth() &&
      dateSlot.getDate() === now.getDate();
  
    return isSameDay ? dateSlot > now : true;
  });  
 
  const formattedAvailableTimes = availableTimes
    .map((slot) => {
      const parsed = parseTimeSlot(slot);
      if (!parsed) return null;
      return formatTo12Hour(parsed.hour, parsed.minute);
    })
    .filter(Boolean);
 
  const isWorkingDay = (date) => {
    if (!editingDoctorDaysOff) return true;
    // Adjust date to Africa/Cairo
    const cairoDate = new Date(date.getTime() - date.getTimezoneOffset() * 60 * 1000 + 3 * 60 * 60 * 1000);
    const dayName = cairoDate.toLocaleString('en-US', { weekday: 'long' });
    const isValid = !editingDoctorDaysOff.includes(dayName);
    return isValid;
  };

  const formatDateTime12Hour = (dateTimeStr) => {
    if (!dateTimeStr) return '';
  
    const dateObj = new Date(dateTimeStr);
    if (isNaN(dateObj.getTime())) {
      return dateTimeStr;
    }
  
    const date = dateObj.toLocaleDateString('en-CA');
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const formattedTime = formatTo12Hour(hours, minutes);
  
    return `${date} at ${formattedTime}`;
  };    
 
  return (
    <div
      className={`border p-6 rounded-2xl shadow-sm hover:shadow-md transition-all ${
        past ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-xl font-bold ${past ? 'text-gray-600' : ''}`}>{appointment.doctorName}</h3>
        <span className={`text-sm font-semibold ${past ? 'text-gray-400' : 'text-gray-500'}`}>{past ? 'Past' : appointment.status}</span>
      </div>
 
      <div className={`space-y-2 ${past ? 'text-gray-600' : 'text-gray-700'}`}>
        <p>
          <span className="font-semibold">Patient:</span> {appointment.patientName}
        </p>
        <p>
          <span className="font-semibold">Specialty:</span> {appointment.specialty}
        </p>
 
        {isEditing ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm font-medium">Appointment Date</label>
              <DatePicker
                selected={editDate ? new Date(editDate) : null}
                onChange={(date) => {
                  setEditDate(date ? date.toISOString().split('T')[0] : '');
                  setEditTime('');
                }}
                minDate={new Date()}
                filterDate={isWorkingDay}
                placeholderText="Select a date"
                className="w-full p-2 border rounded-lg border-gray-300"
                dateFormat="yyyy-MM-dd"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Appointment Time</label>
              <select
                value={editTime}
                onChange={(e) => setEditTime(e.target.value)}
                className="w-full p-2 border rounded-lg border-gray-300"
                disabled={!editDate}
                required
              >
                <option value="">Select Time</option>
                {formattedAvailableTimes.length > 0 ? (
                  formattedAvailableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    No available times
                  </option>
                )}
              </select>
            </div>
            {formattedAvailableTimes.length === 0 && <p className="text-sm text-red-500 mt-1">No available times for this date. Try another date.</p>}
          </div>
        ) : (
          <p>
            <span className="font-semibold">Date & Time:</span> {formatDateTime12Hour(appointment.dateTime)}
          </p>
        )}
      </div>
 
      <div className="mt-4 flex justify-between items-center">
        {isEditing ? (
          <>
            <button className="text-sm text-blue-500" onClick={() => onSaveEdit(appointment.id)}>
              Save
            </button>
            <button className="text-sm text-red-500" onClick={onCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          !past && (
            <div className="flex space-x-4">
              <button className="text-sm text-blue-500" onClick={() => onEdit(appointment.id, appointment.dateTime, appointment.doctorName)}>
                Edit
              </button>
              <button className="text-sm text-red-500" onClick={() => onCancel(appointment.id)}>
                Cancel Appointment
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}