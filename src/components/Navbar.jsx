import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

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
      <header className="text-gray-400 bg-black body-font">
        <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center">
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
          <button 
            className="md:hidden ml-auto focus:outline-none" 
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white")} to="/">Home</NavLink>
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white")} to="/backtesting">Backtesting</NavLink>
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white")} to="/about">About Us</NavLink>
            <NavLink className={(e) => (e.isActive ? "mr-5 text-blue-500" : "mr-5 hover:text-white")} to="/discuss">Community</NavLink>
          </nav>
          <div className="hidden md:flex">
            {(!localStorage.getItem("authToken")) ? (
              <>
                <Link className="inline-flex mx-2 items-center font-bold border border-pink-400 py-1 px-3 focus:outline-none hover:bg-pink-800 rounded text-base mt-4 md:mt-0" to="/login">
                  Login
                </Link>
                <Link className="inline-flex items-center font-bold border border-pink-400 py-1 px-3 focus:outline-none hover:bg-pink-800 rounded text-base mt-4 md:mt-0" to="/signup">
                  SignUp
                </Link>
              </>
            ) : (
              <>
                <Link className="inline-flex m-2 items-center border border-pink-400 py-1 px-3 focus:outline-none hover:bg-pink-800 rounded font-bold text-base mt-4 md:mt-0" onClick={handleLogout}>
                  Logout
                </Link>
                <div className="inline-flex p-2 font-bold text-xl text-lime-200">
                  Hey, {localStorage.getItem("name")}
                  <br />
                  {localStorage.getItem("email")}
                </div>
              </>
            )}
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 bg-black z-[100] bg-opacity-75 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed top-0 left-0 h-full w-64 bg-gray-700 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <button 
            className="absolute top-4 right-4 focus:outline-none" 
            onClick={toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          {(!localStorage.getItem("authToken")) ? (
              <div className='flex flex-col p-4 space-y-4 text-base w-28'>
                <Link className="font-bold border border-pink-400 py-1 px-3 focus:outline-none hover:bg-pink-800 rounded" to="/login" onClick={toggleSidebar}>
                  Login
                </Link>
                <Link className="font-bold border border-pink-400 py-1 px-3 focus:outline-none hover:bg-pink-800 rounded" to="/signup" onClick={toggleSidebar}>
                  SignUp
                </Link>
              </div>
            ) : (
              <>
      
               <div className="p-2 font-bold text-lime-200 m-3">
                  Hey, {localStorage.getItem("name")}
                  <br />
                  {localStorage.getItem("email")}
                </div>
                <Link className="font-bold border border-pink-400 py-1 px-3 focus:outline-none hover:bg-pink-800 rounded ml-5" onClick={() => { handleLogout(); toggleSidebar(); }}>
                  Logout
                </Link>
                
              </>
            )}
          <nav className="flex flex-col p-4 space-y-4 text-base">
            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "hover:text-white")} to="/" onClick={toggleSidebar}>Home</NavLink>
            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "hover:text-white")} to="/backtesting" onClick={toggleSidebar}>Backtesting</NavLink>
            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "hover:text-white")} to="/about" onClick={toggleSidebar}>About Us</NavLink>
            <NavLink className={(e) => (e.isActive ? "text-blue-500" : "hover:text-white")} to="/discuss" onClick={toggleSidebar}>Community</NavLink>
           
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
