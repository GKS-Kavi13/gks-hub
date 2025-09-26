// components/Sidebar.jsx
import React from "react";
import { FaCloudSun, FaQuoteLeft, FaClock } from "react-icons/fa";

const Sidebar = ({ onWeatherClick }) => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <nav className="flex flex-col space-y-4">
        <button
          onClick={onWeatherClick}
          className="flex items-center space-x-3 hover:bg-gray-700 px-3 py-2 rounded text-left cursor-pointer"
        >
          <FaCloudSun />
          <span>Weather</span>
        </button>

        <a
          href="#quotes"
          className="flex items-center space-x-3 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
        >
          <FaQuoteLeft />
          <span>Quotes</span>
        </a>

        <a
          href="#clock"
          className="flex items-center space-x-3 hover:bg-gray-700 px-3 py-2 rounded cursor-pointer"
        >
          <FaClock />
          <span>Clock</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
