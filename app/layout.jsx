import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import { useAppointmentsStore } from '../components/Appointments/appointmentsStore'; // adjust if needed

export default function Layout() {
  useEffect(() => {
    useAppointmentsStore.getState().hydrate();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}
