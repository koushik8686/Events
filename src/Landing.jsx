import React from "react";
import "./index_r.css";

const Landing = () => {
  return (
    <div className="relative h-screen text-white">
      {/* Background Animations */}
      <div className="absolute inset-0">
        {/* Rotating Technical Gears */}
        <div className="absolute w-40 h-40 bg-transparent border-4 border-indigo-500 rounded-full animate-spin-slow top-20 left-10 hidden lg:block">
        <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
        </div>
        <div className="absolute w-24 h-24 bg-transparent border-4 border-pink-500 rounded-full animate-spin-reverse-slow top-40 right-20 hidden lg:block">
        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
        </div>
        <div className="absolute w-40 h-40 bg-transparent border-4 border-green-400 rounded-full animate-spin-reverse-slow bottom-10 right-72 hidden lg:block">
            <div className="w-4 h-4 bg-green-400 rounded-full"></div>
          </div>

        {/* Gaming Controller */}
        <div className="relative min-h-screen">
          <div className="absolute flex justify-center items-center w-full h-full animate-pulse">
            <img
            src="/assets/pattern.jpg"
            alt="Gaming Controller"
            className="w-96 h-96 top-0 left-48 transform -translate-x-1/2 z-50 relative rounded-full"
            />
         </div>
        </div>
        
        {/* Floating Icons */}
        <div className="absolute hidden md:flex flex-col space-y-4  top-1/2 left-5 animate-float">
          <img
            src="https://via.placeholder.com/40" // Replace with technical icon
            alt="Technical Icon"
            className="w-16 h-16"
          />
          <img
            src="https://via.placeholder.com/40" // Replace with cultural icon
            alt="Cultural Icon"
            className="w-16 h-16"
          />
          <img
            src="https://via.placeholder.com/40" // Replace with gaming icon
            alt="Gaming Icon"
            className="w-16 h-16"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        {/* Title */}
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-pulse">
          Welcome to the Eventverse
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-300">
          Dive into the world of <span className="text-indigo-400">Technology</span>,{" "}
          <span className="text-pink-400">Culture</span>, and{" "}
          <span className="text-green-400">Gaming</span>!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex space-x-4">
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-700 text-white rounded-lg shadow-lg transition-all duration-300">
            Explore Events
          </button>
          <button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded-lg shadow-lg transition-all duration-300">
            Join the Fun
          </button>
        </div>
      </div>


    </div>
  );
};

export default Landing;
