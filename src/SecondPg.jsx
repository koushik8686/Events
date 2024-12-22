import React from "react";
import { useNavigate } from "react-router-dom";
import "./index_r.css";
import Section from "./Section";
import { technicalClubs, nonTechnicalClubs, sportsClubs } from "./data/clubData";

const SecondPg = () => {
    return (
      <div className="relative text-white py-16">
        {/* Background Animations */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Rotating Elements */}
          <div className="absolute w-40 h-40 bg-transparent border-4 border-indigo-500 rounded-full animate-spin-slow top-10 left-10 hidden lg:block">
          <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
          </div>
          <div className="absolute w-24 h-24 bg-transparent border-4 border-pink-500 rounded-full animate-spin-reverse-slow top-40 right-20 hidden lg:block">
            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
          </div>
          <div className="absolute w-40 h-40 bg-transparent border-4 border-indigo-500 rounded-full animate-spin-slow bottom-10 left-20 hidden lg:block">
            <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
          </div>
        </div>
  
        {/* Page Header */}
        <header className="py-8 text-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 animate-pulse">
            Discover Our Clubs & Activities
          </h1>
          <p className="mt-4 text-gray-300">
            Learn more about our technical, non-technical, and sports clubs!
          </p>
        </header>
  
        {/* Content */}
        <div className="px-8 relative z-10">
          <Section
            title="Technical Clubs"
            items={technicalClubs}
            color="from-green-400 to-blue-500"
          />
          <Section
            title="Non-Technical Clubs"
            items={nonTechnicalClubs}
            color="from-purple-400 to-pink-500"
          />
          <Section
            title="Sports"
            items={sportsClubs}
            color="from-yellow-400 to-red-500"
          />
        </div>
      </div>
    );
  };
  
   // Reusing Section and Card components from Card.jsx and Section.jsx . Data from clubData.js is used to populate the sections here and then in section.jsx we use this data to populate the cards
  // Ensure you have the data arrays (technicalClubs, nonTechnicalClubs, sportsClubs) in clubData.js

  export default SecondPg;