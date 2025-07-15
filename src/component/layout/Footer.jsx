import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MovieDekho</h2>
          <p className="text-sm">
            Discover latest movies, reviews, and ratings. Your one-stop movie hub built with 💻 and ❤️.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="hover:text-blue-300">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-blue-300">About</NavLink>
            </li>
            <li>
              <NavLink to="/movie" className="hover:text-blue-300">Movies</NavLink>
            </li>
            <li>
              <NavLink to="#" className="hover:text-blue-300">Sign In</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
          <ul className="space-y-2">
            <li><a href="mailto:support@moviedekho.com" className="hover:text-blue-300">Email Us</a></li>
            <li><a href="#" className="hover:text-blue-300" >Instagram</a></li>
            <li><a href="#" className="hover:text-blue-300">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/mayur-tekale-1540a023b"   target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} MovieDekho. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
