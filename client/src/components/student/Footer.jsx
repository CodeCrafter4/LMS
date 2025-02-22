import React from 'react'
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full ">
          <div className="flex items-center gap-1">
            <img
              className="w-15 h-8 lg:w-8 m-1 cursor-pointer"
              src={assets.logo}
              alt="logo"
            />
            <h1 className="text-white font-bold lg:text-lg ">ABUKITECH</h1>
          </div>
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Empowering innovation with technology. Learn, create, and grow with
            us. Join us in shaping the future of technology."
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5 lg:text-lg ">
            Services
          </h2>
          <ul className="cursor-pointer flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a>Website Dev't</a>
            </li>
            <li>
              <a href="#">Mobile App Dev't</a>
            </li>
            <li className="hidden md:block">
              <a href="#">Data Science</a>
            </li>

            <li>
              <a href="#">Payton</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5 lg:text-lg">
            Contact Us
          </h2>
          <ul className=" cursor-pointer flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li className="hidden md:block">
              <a href="#">Phone: +1 123-456-7890</a>
            </li>
            <li className="hidden md:block">
              <a href="#">Address: Addis Ababa, Ethiopia</a>
            </li>
            <li>
              <a href="#">Telegram: @abukitech33</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60 ">
        Copyright 2025 &copy; Abuki Tech. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer