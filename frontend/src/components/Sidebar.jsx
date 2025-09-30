import React from "react";
import { FaCloudSun, FaQuoteLeft, FaClock, FaTimes } from "react-icons/fa";

const Sidebar = ({ onWeatherClick, onClose }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 text-gray-700 p-4 z-50">
      {/* Close Button */}
      <div className="flex justify-end mb-4">
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 text-xl cursor-pointer">
          <FaTimes />
        </button>
      </div>

      <h1 className="text-2xl font-bold mb-6 border-b border-gray-400 pb-2">Dashboard</h1>

      <nav className="flex flex-col space-y-4 text-base font-medium">
        <button
          onClick={onWeatherClick}
          className="flex items-center space-x-3 hover:bg-gray-100 px-3 py-2 rounded text-left cursor-pointer"
        >
          <FaCloudSun />
          <span>Weather</span>
        </button>

        <a
          href="#quotes"
          className="flex items-center space-x-3 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
        >
          <FaQuoteLeft />
          <span>Quotes</span>
        </a>

        <a
          href="#clock"
          className="flex items-center space-x-3 hover:bg-gray-100 px-3 py-2 rounded cursor-pointer"
        >
          <FaClock />
          <span>Clock</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
