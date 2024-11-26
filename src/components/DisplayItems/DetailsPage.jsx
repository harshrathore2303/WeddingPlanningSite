import React from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = ({ data, itemType }) => {
  const { id } = useParams(); 
  const item = data.find((item) => item.id === Number(id));

  if (!item) {
    return <div className="text-center text-red-500">{itemType} not found</div>;
  }

  return (
    <div className="p-6 bg-white max-w-4xl mx-auto shadow-lg w-full">
      <div className="flex flex-col items-center">
        <img
          src={item.imageSrc}
          alt={item.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{item.location}</p>
        <p className="text-xl text-primary font-semibold mb-4">{item.price}</p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500">★</span>
          <span>{item.rating}</span>
        </div>
        <div className="flex gap-4">
          <button
            className="bg-[#8B3B2F] text-white py-2 px-4 rounded hover:bg-[#6f2e24]"
            onClick={() => alert(`Contacting ${item.title}`)}
          >
            Contact
          </button>
          <button
            className="bg-[#8B3B2F] text-white py-2 px-4 rounded hover:bg-[#6f2e24]"
            onClick={() => alert(`${item.title} added to your wishlist`)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
