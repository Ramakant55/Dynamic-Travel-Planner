import React from "react";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 text-gray-700">

        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            <span className="text-black">TRAVEL</span>
            <span className="text-orange-500">Planner</span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Commodi, enim.</p>
          <div className="flex space-x-4 text-orange-500 text-2xl cursor-pointer">
  <FaYoutube className="transform transition ease duration-300 hover:translate-y-[-4px] " />
  <FaTwitter className=" transform transition ease duration-300 hover:translate-y-[-4px]" />
  <FaFacebook className=" transform transition ease duration-300 hover:translate-y-[-4px]" />
  <FaInstagram className=" transform transition ease duration-300 hover:translate-y-[-4px]" />
</div>

          <p className="text-sm">
            © 2024 <a href="#" className="text-orange-500">Travel Planner</a>. All Rights Reserved
          </p>
        </div>
   <div className="">
          <h3 className="text-gray-800 font-semibold mb-4">Discover</h3>
          <ul className="space-y-2">
  <li>
    <a
      href="#"
      className="hover:text-orange-500 transform transition ease duration-500 hover:translate-x-4"
    >
      Home
    </a>
  </li>
  <li>
    <a
      href="#"
      className="hover:text-orange-500 transform transition ease duration-500 hover:translate-x-2"
    >
      About
    </a>
  </li>
  <li>
    <a
      href="#"
      className="hover:text-orange-500 transform transition ease duration-500 hover:translate-x-2"
    >
      Tours
    </a>
  </li>
</ul>
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Gallery</a></li>
            <li><a href="Login" className="hover:text-orange-500">Login</a></li>
            <li><a href="Signup" className="hover:text-orange-500">Register</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-800 font-semibold mb-4">Contact</h3>
          <p className="flex items-center">
            <FaLocationDot className="text-orange-500 mr-2" /> Address: <input type="text" placeholder="Lorem" />
          </p>
          <p className="flex items-center mt-2">
            <FaEnvelope className="text-orange-500 mr-2" /> Email: <input type="text" placeholder="xyz@mail.com" />
          </p>
          <p className="flex items-center mt-2">
            <FaPhone className="text-orange-500 mr-2" /> Phone: <input type="text" placeholder=" 00022200222" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;