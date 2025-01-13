import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="flex items-center justify-between px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] shadow bg-white">
      {/* Navbar logo */}
      <Link to="/" className="text-3xl font-bold flex items-center gap-3">
        <img
          src="/logo.png"
          className="w-20 sm:w-24 h-auto"
          alt="CluderZone logo"
        />
        <span className="hidden sm:block text-gray-800">CluderZone</span>
      </Link>

      {/* Navbar menu for larger screens */}
      <ul className="hidden sm:flex gap-6 md:gap-8 lg:gap-10 text-gray-700 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive
                ? "text-blue-700 font-semibold"
                : "hover:text-blue-700 transition-colors"
            }`
          }
        >
          <p>Home</p>
          <hr className="w-2/4 border-none bg-blue-700 h-[2px] hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive
                ? "text-blue-700 font-semibold"
                : "hover:text-blue-700 transition-colors"
            }`
          }
        >
          <p>About</p>
          <hr className="w-2/4 border-none bg-blue-700 h-[2px] hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive
                ? "text-blue-700 font-semibold"
                : "hover:text-blue-700 transition-colors"
            }`
          }
        >
          <p>Blogs</p>
          <hr className="w-2/4 border-none bg-blue-700 h-[2px] hidden group-hover:block" />
        </NavLink>
        <NavLink
          to="/registration"
          className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-all shadow-md"
        >
          <p>Registration</p>
        </NavLink>
      </ul>

      {/* Navbar menu icon for smaller screens */}
      <button
        aria-label="Open menu"
        onClick={() => setVisible(true)}
        className="sm:hidden p-2"
      >
        <img src="/menu_icon.png" alt="menu icon" className="w-6" />
      </button>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-slate-100 z-50 shadow-lg transition-transform duration-300 w-64 transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={() => setVisible(false)}
          className="p-4 flex gap-3 items-center text-gray-600 hover:text-gray-900 transition-colors"
        >
          <img
            src="/dropdown_icon.png"
            alt="back icon"
            className="h-5 rotate-180"
          />
          <span>Back</span>
        </button>

        {/* Sidebar navigation items */}
        <div className="flex flex-col text-center mt-4">
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="border-b p-4 text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="border-b p-4 text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
          >
            About
          </NavLink>
          <NavLink
            to="/blogs"
            onClick={() => setVisible(false)}
            className="border-b p-4 text-gray-700 hover:bg-gray-50 hover:text-blue-700 transition-colors"
          >
            Blogs
          </NavLink>
          <NavLink
            to="/registration"
            onClick={() => setVisible(false)}
            className="bg-blue-700 text-white py-2 px-4 rounded-md mx-4 mt-4 shadow-md hover:bg-blue-800 transition-all"
          >
            Registration
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
