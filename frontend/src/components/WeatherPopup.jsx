// components/WeatherPopup.jsx

import React, { useState } from 'react';
import Search from './Search';
import WeatherCard from './WeatherCard';
import axios from 'axios';

const WeatherPopup = ({ onClose }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = `${API_URL}?q=${city}&units=metric&appid=538765188ac1bed686543c7e42efccad`;
      const weatherdata = await axios.get(response);
      setWeather(weatherdata.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError('City not found');
      } else {
        setError('An error occurred. Please try again.');
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Weather App UI */}
        <div className=" w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 via-green-400 to-green-700
">
        <div className="bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4">Weather App</h1>
          <Search fetchWeather={fetchWeather} />
          {loading && <p className="text-center mt-2">Loading...</p>}
          {error && <p className="text-center mt-2 text-red-500">{error}</p>}
          {weather && <WeatherCard weather={weather} />}
        </div>
</div>
       
      </div>
    </div>
  );
};

export default WeatherPopup;
