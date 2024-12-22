import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="bg-blue-50 p-6 md:p-8 rounded-md flex flex-col md:flex-row items-center justify-between ">
      {/* Left Section: Text and Form */}
      <div className="w-full md:w-1/2 text-center md:text-left md:ml-[150px]">
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Subscribe now to get useful traveling information
        </h2>
        <div className="mt-4 flex flex-col md:flex-row justify-center md:justify-start items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 mb-4 md:mb-0 rounded-md md:rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 w-full md:w-80"
          />
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-md md:rounded-r-md md:ml-2 w-full md:w-auto">
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          adipisci sunt in, provident facere ipsam?
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center  md:mt-0 md:ml-[-100px]">
        <img
          src="/image/wewe.png" // Replace this with your image URL
          alt="Traveler"
          className="w-[300px] md:w-[600px] h-auto -mb-6 md:-mb-8"
        />
      </div>
    </div>
  );
};

export default SubscriptionForm;
