import create from "zustand";

// Create a Zustand store
const useStore = create((set) => ({
  appointments: [],
  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),
  removeAppointment: (id) =>
    set((state) => ({
      appointments: state.appointments.filter((appt) => appt.id !== id),
    })),
}));

export default useStore;
