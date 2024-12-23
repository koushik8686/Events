import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index_r.css";
import Card from "./Card";

const Section = ({ title, items, color }) => {

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 items per page

  useEffect(() => {
    // Adjust itemsPerPage based on window width
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(2); // Small screens
      } else {
        setItemsPerPage(3); // Larger screens
      }
    };

    updateItemsPerPage(); // Call on component mount
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mb-16">
      <h2
        className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${color} text-center mb-8`}
      >
        {title}
      </h2>

      <div className="flex items-center gap-4">
  {/* Prev Button */}
  <button
    onClick={prevPage}
    disabled={currentPage === 0}
    className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-6 py-2 rounded-full text-white font-bold shadow-md disabled:opacity-50 hover:scale-105 transition duration-300"
  >
    Prev
  </button>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-1 gap-8">
    {visibleItems.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </div>

  {/* Next Button */}
  <button
    onClick={nextPage}
    disabled={currentPage === totalPages - 1}
    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-2 rounded-full text-white font-bold shadow-md disabled:opacity-50 hover:scale-105 transition duration-300"
  >
    Next
  </button>
</div>

    </div>
  );
};

export default Section;