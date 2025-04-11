import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className="text-gray-300 bg-black body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-4 md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0 transition-transform hover:scale-105"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full shadow-md"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl font-semibold tracking-wider">Algo Trading</span>
          </Link>
          <button
            className="md:hidden ml-auto focus:outline-none hover:text-white transition-colors duration-200"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <nav className="hidden md:flex md:mr-auto md:ml-6 md:py-1 md:pl-6 md:border-l md:border-gray-700 flex-wrap items-center text-base justify-center">
            <NavLink
              className={({ isActive }) =>
                isActive 
                  ? "mr-6 text-indigo-400 font-medium transition-colors duration-200" 
                  : "mr-6 hover:text-white transition-colors duration-200"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive 
                  ? "mr-6 text-indigo-400 font-medium transition-colors duration-200" 
                  : "mr-6 hover:text-white transition-colors duration-200"
              }
              to="/backtesting"
            >
              Backtesting
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive 
                  ? "mr-6 text-indigo-400 font-medium transition-colors duration-200" 
                  : "mr-6 hover:text-white transition-colors duration-200"
              }
              to="/discuss"
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive 
                  ? "mr-6 text-indigo-400 font-medium transition-colors duration-200" 
                  : "mr-6 hover:text-white transition-colors duration-200"
              }
              to="/about"
            >
              About Us
            </NavLink>
          </nav>
          <div className="hidden md:flex items-center">
            {!localStorage.getItem("authToken") ? (
              <>
                <Link
                  className="inline-flex mx-2 items-center font-medium bg-transparent border border-indigo-500 text-indigo-400 py-1.5 px-4 focus:outline-none hover:bg-indigo-900 hover:text-white rounded-md transition-colors duration-200"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="inline-flex items-center font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-1.5 px-4 focus:outline-none hover:from-indigo-700 hover:to-purple-700 rounded-md shadow-md transition-all duration-200"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="flex items-center">
                <div className="mr-4 text-right">
                  <p className="font-medium text-indigo-300">
                    {localStorage.getItem("name")}
                  </p>
                  <p className="text-sm text-gray-400">
                    {localStorage.getItem("email")}
                  </p>
                </div>
                <button
                  className="inline-flex items-center font-medium border border-red-400 text-red-400 py-1.5 px-4 focus:outline-none hover:bg-red-900 hover:text-white rounded-md transition-colors duration-200"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar overlay */}
      <div 
        className={`fixed inset-0 bg-black z-50 bg-opacity-75 transition-opacity duration-300 ${
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-gray-900 to-black transform transition-transform duration-300 z-50 shadow-2xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 focus:outline-none hover:text-white transition-colors duration-200"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-6 h-6 text-gray-400"
            viewBox="0 0 24 24"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center p-4 mb-6 border-b border-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-8 h-8 text-white p-1 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-2 text-lg font-semibold text-white">Algo Trading</span>
        </div>

        {!localStorage.getItem("authToken") ? (
          <div className="flex flex-col px-4 mb-6 space-y-2">
            <Link
              className="font-medium bg-transparent border border-indigo-500 text-indigo-400 py-1.5 px-3 text-center focus:outline-none hover:bg-indigo-900 hover:text-white rounded-md transition-colors duration-200"
              to="/login"
              onClick={toggleSidebar}
            >
              Login
            </Link>
            <Link
              className="font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-1.5 px-3 text-center focus:outline-none hover:from-indigo-700 hover:to-purple-700 rounded-md shadow-md transition-all duration-200"
              to="/signup"
              onClick={toggleSidebar}
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="px-4 mb-6">
            <div className="mb-3">
              <p className="font-medium text-indigo-300">
                {localStorage.getItem("name")}
              </p>
              <p className="text-sm text-gray-400">
                {localStorage.getItem("email")}
              </p>
            </div>
            <button
              className="w-full font-medium border border-red-400 text-red-400 py-1.5 px-3 focus:outline-none hover:bg-red-900 hover:text-white rounded-md transition-colors duration-200 text-center"
              onClick={() => {
                handleLogout();
                toggleSidebar();
              }}
            >
              Logout
            </button>
          </div>
        )}

        <nav className="flex flex-col px-4 space-y-4 text-gray-300">
          <NavLink
            className={({ isActive }) =>
              isActive 
                ? "py-2 px-3 bg-gray-800 text-indigo-400 font-medium rounded-md transition-colors duration-200" 
                : "py-2 px-3 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200"
            }
            to="/"
            onClick={toggleSidebar}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive 
                ? "py-2 px-3 bg-gray-800 text-indigo-400 font-medium rounded-md transition-colors duration-200" 
                : "py-2 px-3 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200"
            }
            to="/backtesting"
            onClick={toggleSidebar}
          >
            Backtesting
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive 
                ? "py-2 px-3 bg-gray-800 text-indigo-400 font-medium rounded-md transition-colors duration-200" 
                : "py-2 px-3 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200"
            }
            to="/discuss"
            onClick={toggleSidebar}
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive 
                ? "py-2 px-3 bg-gray-800 text-indigo-400 font-medium rounded-md transition-colors duration-200" 
                : "py-2 px-3 hover:bg-gray-800 hover:text-white rounded-md transition-colors duration-200"
            }
            to="/about"
            onClick={toggleSidebar}
          >
            About Us
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;