import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="px-8 py-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-800">
          InVitro Health
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:items-center md:space-x-10">
          <li>
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/doctors"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Doctors
            </Link>
          </li>
          <li>
            <Link
              to="/appointments"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              My Appointments
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/doctors"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Doctors
              </Link>
            </li>
            <li>
              <Link
                to="/appointments"
                onClick={closeMenu}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                My Appointments
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
