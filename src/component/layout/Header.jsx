import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home";

const Header = () => {
  return (
    <>
      <div className="main-header flex justify-between items-center p-3 pl-8 bg-gray-800 text-white sticky top-0 z-50">
        <div className="logo-container">
          <div className="logo text-xl font-bold ">MovieDekho</div>
          <div className="nav-links flex text-sm pl-2 text-blue-300">
            <NavLink to="#">SignUp / </NavLink>
            <NavLink to="#">Sign In</NavLink>
          </div>
        </div>

        <div className="pages-container flex items-center space-x-6">
          <nav className="flex space-x-6 items-center text-lg">
            <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
            <NavLink to="/movie" className={({ isActive }) => isActive ? "active-link" : ""}>Movie</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>

            <div className="search-bar ml-4">
              <input
                type="search"
                placeholder="Search movie..."
                className="px-4 py-1 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
