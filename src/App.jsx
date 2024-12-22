import React from "react";
import { Routes, Route } from "react-router-dom"; // Import routing components
import "./index_r.css"; // Import Tailwind CSS
import Nav from "./Nav";
import Landing from "./Landing";
import SecondPg from "./SecondPg";
import Footer from "./Footer";


// Keep every photo in public/assets folder and replace the placeholder URL with the actual URL in Nav.jsx , Landing.jsx and SecondPg.jsx ,etc

function App() {
  return (
    <div className="relative inset bg-gradient-to-br from-indigo-900 via-purple-800 to-gray-800 text-white overflow-hidden">
      <Nav />
      <Landing />
      <SecondPg /> 
      <Footer/>
    </div>
  );
}

export default App;
