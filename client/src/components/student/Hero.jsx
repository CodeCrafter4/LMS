import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="flex min-h-[1vh] flex-col items-center justify-center space-y-4 bg-gradient-to-b  px-2 py-12 text-center md:space-y-8 md:px-8 lg:min-h-[10vh] lg:py-20">
      {/* Main Content */}
      <div className="container mx-auto max-w-6xl">
        <div className="relative mb-8 md:mb-10">
          <h1 className="text-2xl font-bold md:hidden text-gray-800 md:text-3xl lg:text-4xl">
            Empower your learning journey
            <span className="block text-red-800 md:mt-2">
              {" "}
              achieve your dreams
            </span>
          </h1>
          <h1 className="hidden md:block text-2xl font-bold text-gray-800 md:text-3xl lg:text-4xl">
            Empower your learning journey and
            <span className="block text-red-800 md:mt-2">
              {" "}
              achieve your dreams
            </span>
          </h1>
        </div>
        <p className="mx-auto hidden max-w-2xl text-base text-gray-500 md:block ">
          We connect you with world-class instructors, engaging content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>

        <p className="mx-auto mb-6 max-w-sm text-sm text-gray-500 md:hidden md:text-sm lg:text-md">
          We are bringing together world-class instructors to help you achieve
          your professional goals.
        </p>

        <div className="mx-auto mt-8 max-w-xl px-4 md:mt-10 md:px-0">
          <SearchBar />
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 md:mt-16 md:gap-8">
          <div className="text-center">
            <div className="text-xl font-bold text-red-800 md:text-2xl lg:text-3xl">
              1K+
            </div>
            <div className="text-xs text-gray-600 md:text-sm lg:text-base">
              Active Students
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-red-800 md:text-2xl lg:text-3xl">
              50+
            </div>
            <div className="text-xs text-gray-600 md:text-sm lg:text-base">
              Video Courses
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-red-800 md:text-2xl lg:text-3xl">
              95%
            </div>
            <div className="text-xs text-gray-600 md:text-sm lg:text-base">
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
