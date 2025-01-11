import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="flex items-center justify-between py-5 font-medium px-5 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] shadow">
      {/* Navbar logo */}
      <Link to="/" className="text-2xl font-semibold flex items-center gap-3">
        Admin
      </Link>

      {/* Navbar menu for larger screens */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink
          to="/manage-posts"
          className="flex flex-col items-center gap-1"
        >
          <p>Manage Posts</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink
          to="/manage-candidates"
          className="flex flex-col items-center gap-1"
        >
          <p>Manage Candidates</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
        <NavLink
          to="/logout"
          onClick={() => {
            const remove = confirm("Do you want to logout");
            if (remove) {
              sessionStorage.clear();
              window.location.replace("/");
            }
          }}
          className="flex flex-col items-center gap-1"
        >
          <p>Logout</p>
          <hr className="w-2/4 border-none bg-gray-700 h-[1.5px] hidden" />
        </NavLink>
      </ul>

      {/* Navbar menu icon for smaller screens */}
      <button
        aria-label="Open menu"
        onClick={() => setVisible(true)}
        className="sm:hidden"
      >
        <img src="/menu_icon.png" alt="menu icon" className="w-5" />
      </button>

      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-slate-100 z-50 transition-transform duration-300 w-64 transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          aria-label="Close menu"
          onClick={() => setVisible(false)}
          className="p-3 inline-flex gap-3 items-center"
        >
          <img
            src="/dropdown_icon.png"
            alt="back icon"
            className="h-4 rotate-180"
          />
          <span>Back</span>
        </button>

        {/* Sidebar navigation items */}
        <div className="flex flex-col">
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="border p-6 text-center"
          >
            Home
          </NavLink>
          <NavLink
            to="/manage-posts"
            onClick={() => setVisible(false)}
            className="border p-6 text-center"
          >
            Manage Posts
          </NavLink>
          <NavLink
            to="/manage-candidates"
            onClick={() => setVisible(false)}
            className="border p-6 text-center"
          >
            Manage Candidates
          </NavLink>
          <NavLink
            to="/logout"
            onClick={() => {
              setVisible(false);
              const remove = confirm("Do you want to logout");
              if (remove) {
                sessionStorage.clear();
                window.location.replace("/");
              }
            }}
            className="border p-6 text-center"
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
