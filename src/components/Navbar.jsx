import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <header className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Algo Trading</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white")} to="/">Home</NavLink>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={(dropdownOpen ? "mr-5 text-white" : "mr-5 hover:text-white") + " inline-flex items-center"}
              >
                Analyse
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute bg-gray-800 text-white mt-2 py-2 w-48 rounded-md shadow-lg z-20">
                  <NavLink
                    className={(e) => (e.isActive ? "block px-4 py-2 text-blue-500" : "block px-4 py-2 hover:text-white")}
                    to="/backtesting"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Backtesting
                  </NavLink>
                  <NavLink
                    className={(e) => (e.isActive ? "block px-4 py-2 text-blue-500" : "block px-4 py-2 hover:text-white")}
                    to="/strategy-builder"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Strategy Builder
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white")} to="/about">About Us</NavLink>
          </nav>
          <Link className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" to="/SignUp">
            Login / SignUp
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
