import React from 'react'
import DisplayComponent from './DisplayComponent';
import imageSrc1 from '../assets/1.jpg';
import imageSrc2 from '../assets/2.jpg';
import imageSrc3 from '../assets/3.jpg';
import imageSrc4 from '../assets/4.jpg';
export default function Home() {
    return (
        <div className="">
          {/* First Section */}
      <DisplayComponent
        headingText="Crafting the Perfect Wedding Day with Precision and Elegance"
        buttonText="Start Crafting Your Big Day"
        imageUrl={imageSrc4}
        buttonStyles="bg-[#8B3B2F] text-white py-2 px-6 mt-4 sm:rounded-full hover:bg-[#6f2e24]"
        backgroundStyles="bg-[#e3d3d3] p-5 sm:p-10 sm:flex-row "
      />

      {/* Second Section */}
      <DisplayComponent
        headingText="Arrange and Plan Your Haldi Function for Perfect Pre-Wedding Ceremonies"
        buttonText="Get Started with Haldi Planning"
        imageUrl={imageSrc3}
        buttonStyles="bg-[#8B3B2F] text-white py-2 px-6 mt-4 sm:rounded-full hover:bg-[#6f2e24]"
        backgroundStyles="bg-[#fbf5d1] p-5 sm:p-10 sm:flex-row-reverse "
      />

      {/* Mehendi Section */}
      <DisplayComponent
        headingText="Celebrate with Mehendi and Craft Beautiful Pre-Wedding Moments"
        buttonText="Begin Your Mehendi Celebration"
        imageUrl={imageSrc1}
        buttonStyles="bg-white text-[#B85734] py-2 px-6 mt-4 sm:rounded-full hover:bg-gray-200"
        backgroundStyles="bg-[#ad563b] p-5 sm:p-10 sm:flex-row "
      />

      {/* Multimedia Section */}
      <DisplayComponent
        headingText="Bringing Your Wedding to Life with Professional Photos and Videos"
        buttonText="Book Your Multimedia Creator"
        imageUrl={imageSrc2}
        buttonStyles="bg-white text-[#B85734] py-2 px-6 mt-4 sm:rounded-full hover:bg-gray-200"
        backgroundStyles="bg-[#ecc8a2] p-5 sm:p-10 sm:flex-row-reverse "
      />
        </div>
      );
}