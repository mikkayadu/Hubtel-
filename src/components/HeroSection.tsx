import React from 'react';
import HeroSectionImg from '../assets/Background.svg';
import Location from '../assets/location-img.svg';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#FFFBF2] min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="container max-w-none w-full px-4 md:px-8 lg:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 md:pr-8 lg:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find and pay <br /> for everyday essentials
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              from local retailers, food vendors and service providers
            </p>

            <button className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 mb-4 mx-auto md:mx-0">
              <img src={Location} alt="Location" className="w-5 h-5" />
              <span>Set your location to continue</span>
            </button>

            <div>
              <span className="text-gray-600">or</span>
              <br />
              <a href="/login" className="text-teal-500 hover:text-teal-600 font-medium">
                Login
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end mb-8 md:mb-0 w-full">
            <div className="w-full h-full md:translate-x-24 lg:translate-x-32">
              <img
                src={HeroSectionImg}
                alt="Product Basket"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;