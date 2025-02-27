import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 md:px-24 w-full">
      <div className="w-full max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/20 pb-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <img className="w-10 h-10" src={assets.logo} alt="logo" />
            <h1 className="text-xl font-bold">ABUKITECH</h1>
          </div>
          <p className="mt-4 text-center md:text-left text-sm text-gray-400">
            Empowering innovation with technology. Learn, create, and grow with
            us. Join us in shaping the future of technology.
          </p>
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-400 items-start">
            <li className="hover:text-white transition ">
              <a href="#">Website Development</a>
            </li>
            <li className="hover:text-white transition">
              <a href="#">Mobile App Development</a>
            </li>

            <li className="hover:text-white transition">
              <a href="#">Python Programming</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center ">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white transition">
              Phone: +1 123-456-7890
            </li>
            <li className="hover:text-white transition">
              Address: Addis Ababa, Ethiopia
            </li>
            
          </ul>
          <div className="flex mt-4 gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-xl"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-6">
        &copy; 2025 Abuki Tech. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
