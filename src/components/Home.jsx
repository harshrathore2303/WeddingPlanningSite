import React from 'react'
import imageSrc1 from '../assets/1.jpg';
import imageSrc2 from '../assets/2.jpg';
import imageSrc3 from '../assets/3.jpg';
import imageSrc4 from '../assets/4.jpg';
export default function Home() {
    return (
        <div className="">
          {/* First Section */}
          <section className="bg-[#e3d3d3] p-5 sm:p-10 flex flex-col-reverse items-center sm:flex-row sm:justify-between min-h-fit">
            <div className="sm:w-1/2 flex flex-col sm:items-start">
              <h2 className="md:text-4xl text-lg sm:text-3xl font-semibold text-brown-800 mb-4 grow">
                "Crafting the Perfect Wedding Day with Precision and Elegance"
              </h2>
              <button className="bg-[#8B3B2F] text-white py-2 px-6 mt-4 sm:rounded-full hover:bg-[#6f2e24]">
                Start Crafting Your Big Day
              </button>
            </div>
            <div className="sm:w-1/2">
              <img
                src={imageSrc4}
                alt="Wedding Planning"
                className="sm:mt-8 md:mt-0"
              />
            </div>
          </section>
    
          {/* Second Section */}
          <section className="bg-[#fbf5d1] p-5 sm:p-10 flex flex-col-reverse items-center sm:flex-row sm:justify-between min-h-fit">
            <div className="sm:w-1/2 flex flex-col sm:items-start">
              <h2 className="md:text-4xl text-lg sm:text-3xl font-semibold text-brown-800 mb-4 grow ">
                "Arrange and Plan Your Haldi Function for Perfect Pre-Wedding Ceremonies"
              </h2>
              <button className="bg-[#8B3B2F] text-white py-2 px-6 mt-4 sm:rounded-full hover:bg-[#6f2e24]">
                Get Started with Haldi Planning
              </button>
            </div>
            <div className="sm:w-1/2">
              <img
                src={imageSrc3}
                alt="Haldi Function"
                className="mt-8 md:mt-0"
              />
            </div>
          </section>
          {/* Mehendi Section */}
      <section className="bg-[#ad563b] p-5 sm:p-10 flex flex-col-reverse items-center sm:flex-row sm:justify-between min-h-fit">
        <div className="sm:w-1/2 flex flex-col sm:items-start">
          <h2 className="md:text-4xl text-lg sm:text-3xl font-semibold text-brown-800 mb-4 grow">
            "Celebrate with Mehendi and Craft Beautiful Pre-Wedding Moments"
          </h2>
          <button className="bg-white text-[#B85734] py-2 px-6 mt-4 sm:rounded-full hover:bg-gray-200">
            Begin Your Mehendi Celebration
          </button>
        </div>
        <div className="sm:w-1/2">
          <img
            src={imageSrc1}
            alt="Mehendi Celebration"
            className="mt-8 md:mt-0"
          />
        </div>
      </section>

      {/* Multimedia Section */}
      <section className="bg-[#ecc8a2] p-5 sm:p-10 flex flex-col-reverse items-center sm:flex-row sm:justify-between min-h-fit">
        <div className="sm:w-1/2 flex flex-col sm:items-start">
          <h2 className="md:text-4xl text-lg sm:text-3xl font-semibold text-brown-800 mb-4 grow">
            "Bringing Your Wedding to Life with Professional Photos and Videos"
          </h2>
          <button className="bg-white text-[#B85734] py-2 px-6 mt-4 sm:rounded-full hover:bg-gray-200">
            Book Your Multimedia Creator
          </button>
        </div>
        <div className="sm:w-1/2">
          <img
            src={imageSrc2}
            alt="Photographer"
            className="mt-8 md:mt-0"
          />
        </div>
      </section>
        </div>
      );
}