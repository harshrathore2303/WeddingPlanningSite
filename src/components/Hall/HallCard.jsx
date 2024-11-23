import React from 'react';

const HallCard = ({ imageSrc, title, location, services, price }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <span className="material-icons mr-1 text-sm">place</span>
          <span>{location}</span>
        </div>
        <div className="text-gray-600 mb-2">{services}</div>
        <div className="text-gray-900 font-semibold">{price} per day</div>
        <button className="mt-4 w-full bg-[#8B3B2F] text-white py-2 px-4 rounded hover:bg-[#6f2e24]">
          Contact for More Details
        </button>
      </div>
    </div>
  );
};

export default HallCard;
