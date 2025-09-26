import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import WeatherPopup from "../components/WeatherPopup";

const Home = ({ user, error }) => {
  const [showWeatherPopup, setShowWeatherPopup] = useState(false);
  const isLoggedIn = !!user;

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar only visible when logged in */}
      {isLoggedIn && (
        <Sidebar onWeatherClick={() => setShowWeatherPopup(true)} />
      )}

      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg text-center">
          {/* Error Message */}
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

          {/* Logged In */}
          {isLoggedIn ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                <span>👋</span>
                <span>Welcome, {user.username || "User"}</span>
              </h2>
              <p className="text-gray-600">
                Email: {user.email || "Not provided"}
              </p>
            </>
          ) : (
            // Not Logged In
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                <span>👋</span>
                <span>Welcome!</span>
              </h2>
              <p className="text-sm italic text-gray-700 mb-6">
                Please log in or register
                </p>

              <div className="flex flex-col space-y-4">
                <Link
                to="/login"
                className="w-full bg-gradient-to-r from-green-500 to-blue-300 text-white p-3 rounded-md shadow-md hover:from-green-500 hover:to-blue-200 transition-all duration-300 font-medium"
                >
                Login
                </Link>
                <Link
                  to="/register"
                  className="w-full bg-gray-100 text-gray-800 p-3 rounded-md hover:bg-gray-200 shadow-sm hover:shadow-md transition-all duration-300 font-medium"
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Weather Popup */}
      {showWeatherPopup && (
        <WeatherPopup onClose={() => setShowWeatherPopup(false)} />
      )}
    </div>
  );
};

export default Home;
