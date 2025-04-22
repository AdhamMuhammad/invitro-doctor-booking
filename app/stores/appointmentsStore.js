import { create } from "zustand";

export const useAppointmentsStore = create((set, get) => ({
  appointments: [],

  setAppointments: (appointments) => {
    set({ appointments });
    localStorage.setItem("appointments", JSON.stringify(appointments));
  },

  addAppointment: (appointment) => {
    const updated = [...get().appointments, appointment];
    set({ appointments: updated });
    localStorage.setItem("appointments", JSON.stringify(updated));
  },

  editAppointment: (id, newDateTime) => {
    const updated = get().appointments.map((appt) =>
      appt.id === id ? { ...appt, dateTime: newDateTime } : appt
    );
    set({ appointments: updated });
    localStorage.setItem("appointments", JSON.stringify(updated));
  },

  cancelAppointment: (id) => {
    const updated = get().appointments.filter((appt) => appt.id !== id);
    set({ appointments: updated });
    localStorage.setItem("appointments", JSON.stringify(updated));
  },

  hydrate: () => {
    const stored = localStorage.getItem("appointments");
    if (stored) {
      try {
        set({ appointments: JSON.parse(stored) });
      } catch (e) {
        console.error("Failed to parse appointments from localStorage", e);
      }
    }
  },
}));