import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, imageSrc, title, location, price, rating, detailPath }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`${detailPath}/${id}`);
  };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="flex items-center text-gray-600 mb-2">
          <span>{location}</span>
        </div>

        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-gray-600">{rating}</span>
        </div>

        <div className="text-gray-900 font-semibold">{price}</div>
        <button
          onClick={handleDetailsClick}
          className="mt-4 w-full bg-base-but text-white py-2 px-4 rounded hover:bg-[#6f2e24]"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Card;
