import React from 'react'
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl">
        Expand your knowledge anytime, anywhere.
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Discover new skills anytime, anywhere—learning made limitless.
      </p>
      <div className="flex items  font-medium gap-6 mt-4">
        <button className="px-10 py-3 rounded-md text-white bg-red-800">
          Begin your journey
        </button>
        <button className="flex items-center gap-2">
          Explore details <img src={assets.arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default CallToAction