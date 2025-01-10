import React, { useState } from "react";
import "./index_r.css";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <div>
           <nav className="bg-purple-950 text-white shadow-md fixed w-full z-50 flex justify-center items-center">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40" // Replace with actual URL and put photos in public/assets folder
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-lg font-bold">Event Manager</span>
          </div>
  
          {/* Centered Navigation Links */}
          <ul className=" mr-24  md:flex space-x-8 text-sm font-medium">
            <li className="hover:text-blue-500 transition duration-300">
              <a href="/organize">Organize</a>
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              <a href="#participate">Participate</a>
            </li>
          </ul>
  
          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="block  focus:outline-none"
          >
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          </button>
        </div>
  
        {/* Mobile Popup Menu */}
        {menuOpen && (
          <div className="absolute top-14 right-4 bg-gray-800 text-white shadow-lg rounded-lg p-4 w-48">
            <ul className="space-y-3">
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#previous-events">Previous Events</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#upcoming-events">Upcoming Events</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#photos">Photos</a>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      </div>
    );
  };
  
  export default Nav;