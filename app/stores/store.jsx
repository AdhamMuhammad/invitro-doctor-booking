import { create } from "zustand";

export const useAppointmentsStore = create((set) => ({
  appointments: [],

  setAppointments: (appointments) => set({ appointments }),

  addAppointment: (appointment) =>
    set((state) => ({ appointments: [...state.appointments, appointment] })),

  editAppointment: (id, newDateTime) =>
    set((state) => ({
      appointments: state.appointments.map((appt) =>
        appt.id === id ? { ...appt, dateTime: newDateTime } : appt
      ),
    })),

  cancelAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((appt) => appt.id !== id),
    })),
}));