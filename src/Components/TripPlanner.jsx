import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TravelPlanner = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 



  // Fetch weather data dynamically based on location
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

  // Fetch weather when location changes
  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  const handleSearch = () => {
    if (location) {
      navigate('/hotels', { state: { location } }); 
    } else {
      alert('Please enter a location to search for hotels.');
    }
  };

  return (
    <div>
      
    <div
      className=" bg-cover bg-center text-white">
    
      {/* Hero Section */}
      <div className="h-72 md:mt-[-175px] mt-[-190px] flex flex-col justify-center items-center text-center bg-opacity-50 bg-black shadow-black shadow-md">
        <h1 className="text-4xl font-bold mb-4 z-50">
          Journey to Explore {location || 'World'}
        </h1>
        <p className="text-lg z-50">
          Discover the beauty of {location || 'your favorite destination'} with us.
        </p>
      </div>

      {/* Input & Weather Section */}
      <div className="md:max-w-4xl max-w-80 mx-auto p-6 bg-blue-200 shadow-md shadow-black rounded-lg -mt-16 relative text-gray-800">
        {/* Location Input */}
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

    <div className="w-full h-96 -mt-32">

    <div className="md:text-center text-white md:flex md:flex-col justify-center items-center mt-40 md:px-4">
      <div className="bg-blue-200 text-gray-700 p-4 rounded-lg shadow-md shadow-black w-full md:max-w-4xl max-w-80 mx-auto md:flex justify-between items-center">
        <div className="flex flex-1 flex-col px-2">
          <label className="text-sm font-medium">Location</label>
          <input
            type="text"
            placeholder="Location"
            value={location}
            className="border border-gray-300 rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-1 flex-col px-2">
          <label className="text-sm font-medium">Check In</label>
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 w-full focus:outline-none"
          />
        </div>
        <div className="flex flex-1 flex-col px-2">
          <label className="text-sm font-medium">Check Out</label>
          <input
            type="date"
            className="border border-gray-300 w-full rounded-md p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-1 flex-col px-2">
          <label className="text-sm font-medium">Guest</label>
          <select className="border border-gray-300 rounded-md p-2 focus:outline-none">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>

        

        <button className="bg-red-500  transform transition ease duration-300 hover:translate-y-[-4px] hover:bg-red-600 text-white px-4 py-2 mt-5 md:ml-0 ml-2 rounded-md font-medium" 
         onClick={handleSearch} >
          Search
        </button>
      </div>
    </div>

   
    <div className="relative z-10 py-12 px-8 md:px-16 md:flex justify-between">
      <div className="text-center flex-1">
        <div className="text-red-500 text-5xl mb-4">🌴</div>
        <h3 className="font-semibold text-lg mb-2">Discover the possibilities</h3>
        <p className="text-gray-500 text-sm">
          Nearly half a million attractions, hotels & more. Find joy!
        </p>
      </div>

      <div className="text-center flex-1">
        <div className="text-green-500 text-5xl mb-4 md:mt-0 mt-5">💰</div>
        <h3 className="font-semibold text-lg mb-2">Enjoy deals & delights</h3>
        <p className="text-gray-500 text-sm">
          Quality activities. Great prices. Save more, travel free.
        </p>
      </div>

      <div className="text-center flex-1">
        <div className="text-blue-500 text-5xl mb-4  md:mt-0 mt-5">🌍</div>
        <h3 className="font-semibold text-lg mb-2">Exploring made easy</h3>
        <p className="text-gray-500 text-sm">
          Book last minute, skip lines, and cancel free.
        </p>
      </div>

      <div className="text-center flex-1">
        <div className="text-orange-500 text-5xl mb-4  md:mt-0 mt-5">⭐</div>
        <h3 className="font-semibold text-lg mb-2">Travel you can trust</h3>
        <p className="text-gray-500 text-sm">
          Reliable reviews & support at every step.
        </p>
      </div>
    </div>
  </div>

    </div>
  );
};

export default TravelPlanner;
