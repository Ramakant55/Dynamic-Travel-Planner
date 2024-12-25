import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TravelPlanner = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchWeather = async (city) => {
    if (!city) return;
    const apiKey = '467849189330e06844884977e1633447';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    setLoading(true);
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (location) {
      navigate('/hotels', { state: { location } });
    } else {
      alert('Please enter a location to search for hotels.');
    }
  };

  const getActivitySuggestion = () => {
    if (!weather) return '';
    const condition = weather.weather[0].main.toLowerCase();
    const temp = weather.main.temp;

    if (condition.includes('clear') || condition.includes('clouds') && temp > 15 && temp < 30) {
      return 'Outdoor activities are recommended!';
    }
    if (condition.includes('rain') || condition.includes('snow') || temp <= 15 || temp > 35) {
      return 'Indoor activities are better in this weather.';
    }
    return 'Weather conditions are variable; plan accordingly!';
  };

  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  return (
    <div className="bg-cover bg-center text-white">
      <div className="h-72 md:mt-[-175px] mt-[-190px] flex flex-col justify-center items-center text-center bg-opacity-50 bg-black shadow-black shadow-md">
        <h1 className="text-4xl font-bold mb-4 z-50">Journey to Explore {location || 'World'}</h1>
        <p className="text-lg z-50">Discover the beauty of {location || 'your favorite destination'} with us.</p>
      </div>

      <div className="md:max-w-4xl max-w-80 mx-auto p-6 bg-blue-200 shadow-md shadow-black rounded-lg -mt-16 relative text-gray-800">
        <div className="text-center mb-6">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="p-3 border border-gray-300 rounded-md w-full md:max-w-md mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {loading ? (
          <p className="text-center text-lg font-semibold">Fetching weather data...</p>
        ) : weather ? (
          <div className="p-6 bg-blue-100 rounded-md">
            <h2 className="text-2xl font-bold mb-3">Weather in {location}</h2>
            <p className="text-lg">Temperature: <strong>{weather.main.temp} °C</strong></p>
            <p className="text-lg">Condition: <strong>{weather.weather[0].description}</strong></p>
            <p className="text-lg mt-4 font-medium">{getActivitySuggestion()}</p>
          </div>
        ) : (
          <p className="text-center text-gray-600">Enter a location to check the weather.</p>
        )}
      </div>
    </div>
  );
};

export default TravelPlanner;
