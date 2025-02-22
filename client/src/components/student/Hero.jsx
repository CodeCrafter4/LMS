import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-fullmd:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-red-100/70">
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl ma-auto">
        Shape your future with courses
        <span className="text-red-800 "> to fit your goals.</span>
        <img
          src={assets.sketch}
          alt="sketch"
          className="md:block hidden absolute -bottom-7 right-0"
        />
      </h1>

      <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">
        We connect you with world-class instructors, engaging content, and a
        supportive community to help you achieve your personal and professional
        goals."{" "}
      </p>
      {/* display only on mobile devices */}
      <p className=" md:hidden text-gray-500 max-w-sm mx-auto">
        we are bringing together the world-class instructor to help you achive
        your proffesional goals.
      </p>
      <SearchBar />
    </div>
  );
};

export default Hero;
